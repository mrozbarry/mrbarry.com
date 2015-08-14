require('./styles/index.sass')
request = require('superagent')

ProjectItem = require('./item.coffee')

{ ul, li } = React.DOM

module.exports = React.createFactory React.createClass
  displayName: 'Components:Project:Index'

  getInitialState: ->
    repositories: []

  initializeRepository: (repo) ->
    @setState repositories: repositories

  componentDidMount: ->
    request
      .get('/repos/mrozbarry.json')
      .end (err, res) =>
        console.debug err, res
        @setState repositories: res.body

  render: ->
    bem = new Bemmer(block: 'project-list')

    ul
      className: bem.classes(),

      @state.repositories.map (repo) ->
        li
          key: repo.id
          className: bem.with(element: 'item'),

          ProjectItem project: repo

