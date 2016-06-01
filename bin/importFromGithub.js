const path = require('path')
const Github = require('github-api')
const Firebase = require('firebase')
const secrets = require('../config/secrets/github')

const firebase = Firebase.initializeApp({
  databaseURL: 'https://mrbarry-website.firebaseio.com',
  serviceAccount: path.join(__dirname, '..', 'config', 'secrets', 'mrbarry-website-e4aa08bbf0bd.json')
})

var gh = new Github({ token: secrets.token })
var ghUser = gh.getUser(secrets.user)

ghUser.repos(function (err, repos) {
  if (err) {
    console.log('Error, unable to get repositories:')
    console.log(err)
    return
  }

  const projectsRef = firebase.database().ref().child('projects')
  const myRepos = repos.filter((repo) => repo.owner.login === secrets.user)

  importNextProject(myRepos, projectsRef)
})

function importNextProject (unprocessedRepositories, projectsRef) {
  const repository = unprocessedRepositories[0]
  if (!repository) {
    process.exit(0)
  }

  const key = `-${repository.id}`
  const projectRef = projectsRef.child(key)

  projectRef.once('value', function (snapshot) {
    const prevProject = snapshot ? snapshot.val() : undefined
    projectRef
      .update(repositoryToProject(repository, prevProject))
      .then(function () {
        importNextProject(unprocessedRepositories.slice(1), projectsRef)
      })
  })
}

function repositoryToProject (repo, prevProject) {
  const base = prevProject || { visible: false, promoted: false }

  const verb = prevProject ? 'Updating' : 'Importing'
  console.log(`${verb} project`, repo.full_name)

  return Object.assign({}, base, {
    id: repo.name,
    language: repo.language,
    description: repo.description,
    lastUpdate: repo.updated_at,
    url: repo.url
  })
}
