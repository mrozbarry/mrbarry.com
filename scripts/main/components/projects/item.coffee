require('../../../../assets/styles/main/components/project.sass')

{div, h3, h5, a, i} = React.DOM

module.exports = React.createFactory React.createClass
  displayName: 'ProjectItem'

  render: ->
    { project } = @props

    bem = new Bemmer(block: 'project')

    div
      className: bem.classes(),

      div className: bem.with(element: 'name'),
        h3 className: bem.with(element: 'name-header'), project.name
        h5 className: bem.with(element: 'name-description'), project.description

      div className: bem.with(element: 'actions'),
        # a
        #   className: bem.with(element: 'actions-link')
        #   href: '#',
        #
        #   i className: 'fa fa-file-text-o', ' Readme'

        a
          className: bem.with(element: 'actions-link')
          href: project.html_url,

          i className: 'fa fa-code-fork', ' Code'

        # a
        #   className: bem.with(
        #     element: 'actions-link'
        #     modifiers: {
        #       disabled: true
        #     }
        #   )
        #   href: '#',
        #
        #   i className: 'fa fa-plug', ' Demo'



