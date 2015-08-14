
Header = require('../components/header/index')
ProjectList = require('../components/projects/index')

{div, h2} = React.DOM

module.exports = React.createFactory React.createClass
  displayName: 'Views:Index'

  render: ->
    div {},
      Header {}

      h2 {}, 'Coming Soon...'

      ProjectList {}
