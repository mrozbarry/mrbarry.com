require('../../../../assets/styles/main/components/header.sass')
Gravatar = require('gravatar')

{h1, img, small} = React.DOM

module.exports = React.createFactory React.createClass
  displayName: 'Header'

  render: ->
    bem = new Bemmer(block: 'header')

    gravatarUrl = Gravatar.url('alex.barry@gmail.com', {
      s: '80'
      r: 'g'
      d: 'retro'
    }, true)

    h1 className: bem.classes(),
      img
        src: gravatarUrl
        className: bem.with(element: 'gravatar')
      'Alex Barry'

      small className: bem.with(element: 'subtitle'),
        'Software Developer'
