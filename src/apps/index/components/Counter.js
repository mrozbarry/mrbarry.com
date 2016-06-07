import React from 'react'
import moment from 'moment'

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
    width: '200px',
    height: '200px',
    border: '4px black solid',
    margin: '10px 23px',
    backgroundColor: '#fff',
    textAlign: 'center',
    overflow: 'hidden'
  },

  header: {
    fontWeight: '900'
  },

  description: {
    color: '#4e4e4e',
    padding: '0 5px'
  },

  since: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    fontSize: '0.7em',
    color: '#8e8e8e'
  }
}

const Counter = function (props) {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{props.count}</h2>
      <p style={styles.description}>{props.description}</p>
      <small style={styles.since}>Since {moment(props.since).format('MMMM Do, YYYY')}</small>
    </div>
  )
}

export default Counter
