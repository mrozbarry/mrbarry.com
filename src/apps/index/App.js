import React, { Component } from 'react'
import Section from './components/Section'

import _ from 'lodash'

const dummyData = require('../../tests/data/seed.json')

const collectionToArray  = function (collection) {
  return _.map(collection, function (item, key) {
    return Object.assign({}, item, { _id: key })
  })
}


class App extends Component {
  constructor (props) {
    super(props)

    this.state = this.initialState(props)
  }

  initialState (props) {
    return {
      projects: [],
      statistics: []
    }
  }

  componentDidMount () {
    this.loadProjects()
    this.loadStatistics()
  }

  loadProjects () {
    this.setState({ projects: collectionToArray(dummyData.projects) })
  }

  loadStatistics () {
    this.setState({ statistics: collectionToArray(dummyData.statistics) })
  }

  render () {
    return (
      <div>
        <Section title='About Me' icon='fingerprint'>
          <p style={{ clear: 'both' }}>
            <img src='http://placehold.it/128x128' style={{ float: 'right', marginLeft: '15px' }} />
            Here is where I'm going to write some things about myself and maybe it will be useful for people to read.  I might want to discuss hobbies, my family, overviews of my work, and so on.
          </p>
          <p style={{ clear: 'both' }}>
            <img src='http://placehold.it/128x128' style={{ float: 'left', marginRight: '15px' }} />
            Here is where I'm going to write some things about myself and maybe it will be useful for people to read.  I might want to discuss hobbies, my family, overviews of my work, and so on.
          </p>
        </Section>
        <Section title='Statistics' icon='pie_chart'></Section>
        <Section title='Projects' icon='folder_shared'></Section>
        <Section title='Work Experience' icon='group_work'></Section>
      </div>
    )
  }
}

export default App
