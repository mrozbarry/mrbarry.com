
ProjectItem = require('./item.coffee')

{ ul, li } = React.DOM

module.exports = React.createFactory React.createClass
  displayName: 'ProjectList'

  getInitialState: ->
    repositories: []

  componentWillMount: ->
    @props.githubUser.repos (err, repositories) =>
      if err
        console.error 'Could not get github information', err

      else
        _.each repositories, @initializeRepository

  initializeRepository: (repo) ->
    repoOptions =
      name: repo.name
      user: repo.owner.login

    repository = new Github.Repository(repoOptions)

    repository.contents 'master', 'showoff.json', (err, showoff) =>
      { repositories } = @state
      if err
        repositories.push repo

      else
        contents = atob(showoff.content)

        console.debug showoff
        console.log atob(showoff.content)

        repoIdx = _.indexOf repositories, id: repo.id
        if repoIdx >= 0
          repositories[repoIdx].showoff = JSON.parse(contents)

        else
          r = repo
          r.showoff = JSON.parse(contents)
          repositories.push r

      @setState repositories: repositories

  render: ->
    bem = new Bemmer(block: 'project-list')

    console.debug 'Projects.Lists', @state

    ul
      className: bem.classes(),

      @state.repositories.map (repo) ->
        li
          key: repo.id
          className: bem.with(element: 'item'),

          ProjectItem project: repo

