require('./styles/item.sass')

{div, h3, span, a, i} = React.DOM

module.exports = React.createFactory React.createClass
  displayName: 'Components:Project:Item'

  render: ->
    { project } = @props

    bem = new Bemmer(block: 'project')

    div
      className: bem.classes(),

      div className: bem.with(element: 'name'),
        h3 className: bem.with(element: 'name-header'), project.name
        span className: bem.with(element: 'name-description'),
          project.description

      # div className: bem.with(element: 'actions'),
      #   # a
      #   #   className: bem.with(element: 'actions-link')
      #   #   href: '#',
      #   #
      #   #   i className: 'fa fa-file-text-o', ' Readme'
      #
      #   a
      #     className: bem.with(element: 'actions-link')
      #     href: project.html_url,
      #
      #     i className: 'fa fa-code-fork', ' Code'
      #
      #   # a
      #   #   className: bem.with(
      #   #     element: 'actions-link'
      #   #     modifiers: {
      #   #       disabled: true
      #   #     }
      #   #   )
      #   #   href: '#',
      #   #
      #   #   i className: 'fa fa-plug', ' Demo'



