import React from 'react'

const Section = function (props) {
  const gutterStyle = {
    margin: '0 auto',
    width: '1024px'
  }

  const contentStyle = Object.assign({}, gutterStyle, { clear: 'both' })

  return (
    <section style={{ marginBottom: '100px' }}>
      <header style={{ backgroundColor: '#1d1d1d', color: '#e2e2e2', padding: '20px 0' }}>
        <h1 style={gutterStyle}>{renderIcon(props.icon)} {props.title}</h1>
      </header>
      <div style={contentStyle}>
        {props.children}
      </div>
    </section>
  )
}

const renderIcon = function (icon) {
  if (!icon) {
    return (
      <span />
    )
  }

  return (
    <i className='material-icons' style={{ fontSize: '0.8em', color: '#1199FF' }}>
      {icon}
    </i>
  )
}

export default Section
