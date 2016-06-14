import React from 'react'
import Section from './components/Section'
import Counter from './components/Counter'
import * as firebase from 'firebase'

import Posts from './sections/Posts'
import AboutMe from './sections/AboutMe'

import _ from 'lodash'

// import dummyData from '../../tests/fixtures'

const collectionToArray = function (collection) {
  return _.map(collection, function (item, key) {
    return Object.assign({}, item, { _id: key })
  })
}

const App = React.createClass({
  getInitialState (props) {
    return {
      projects: [],
      statistics: []
    }
  },

  componentDidMount () {
    const fire = this.connectToFirebase()
    const database = fire.database().ref()
    this.loadProjects(database)
    this.loadStatistics(database)
  },

  connectToFirebase () {
    var config = {
      apiKey: 'AIzaSyDI5eUnph4q_iIL6iE1gPU4Huy0GU2Fo8Q',
      authDomain: 'mrbarry-website.firebaseapp.com',
      databaseURL: 'https://mrbarry-website.firebaseio.com',
      storageBucket: 'mrbarry-website.appspot.com'
    }
    return firebase.initializeApp(config)
  },

  loadProjects (database) {
    // this.setState({ projects: collectionToArray(dummyData.projects) })
    database.child('projects').on('value', (projectsSnapshot) => {
      this.setState({
        projects: collectionToArray(projectsSnapshot.val())
      })
    })
  },

  loadStatistics (database) {
    // this.setState({ statistics: collectionToArray(dummyData.statistics) })
    database.child('statistics').on('value', (statisticSnapshot) => {
      this.setState({
        statistics: collectionToArray(statisticSnapshot.val())
      })
    })
  },

  render () {
    return (
      <div>
        <Posts />
        <AboutMe />
        <Section title='Statistics' icon='pie_chart'>
          {this.renderStatistics()}
        </Section>
        <Section title='Projects' icon='folder_shared'>
          {this.renderProjects()}
          {this.renderHiddenProjects()}
        </Section>
        <Section title='Work Experience' icon='group_work'>
          TODO
        </Section>
      </div>
    )
  },

  renderStatistics () {
    const { statistics } = this.state

    return statistics.map(function (statistic) {
      const { _id, count, description, startedAt } = statistic
      return (
        <Counter key={_id} count={count} description={description} since={startedAt} />
      )
    })
  },

  renderProjects () {
    const { projects } = this.state

    const visibleProjects = projects.filter(function (project) {
      return project.visible === true
    })

    return visibleProjects.map(function (project) {
      return (
        <div key={project.id} style={{ display: 'inline-block', height: '75px', maxWidth: '300px', overflow: 'hidden', margin: '5px 10px', border: '1px black solid', padding: '5px' }}>
          <div><strong>{project.id}</strong> ({project.language})</div>
          <p style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '290px', overflow: 'hidden' }}>{project.description}</p>
        </div>
      )
    })
  },

  renderHiddenProjects () {
    const { projects } = this.state

    const hiddenProjects = projects.filter(function (project) {
      return !project.visible
    })

    return (
      <div>
        {hiddenProjects.length} hidden projects
      </div>
    )
  }
})

export default App
