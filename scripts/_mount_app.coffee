
ProjectList = require('./main/components/projects/list')

github = new Github(
  token: process.env.GITHUB_TOKEN, auth: 'oauth'
)

React.render(
  ProjectList(
    github: github
    githubUser: github.getUser()
    # website:
    #   title: process.env.WEBSITE_TITLE
    #   subtitle: process.env.WEBSITE_SUBTITLE
    #   gravatar: process.env.GRAVATAR
  )
  document.getElementById('projects')
)

