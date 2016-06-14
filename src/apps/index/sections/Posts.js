import React from 'react'
import Section from '../components/Section'

import moment from 'moment'

export default React.createClass({
  getInitialState () {
    return {
      modalStyles: null,
      displayPosts: 'recent',
      recent: {
        count: 10
      },
      date: {
        month: moment().format('M'),
        year: moment().format('YYYY')
      }
    }
  },

  openModal () {
    this.setState({
      modalStyles: {
        display: 'block',
        opacity: 1,
        transform: 'scaleX(1)',
        top: '10%',
        zIndex: 999999999
      }
    })
  },

  closeModal () {
    this.setState({
      modalStyles: null
    })
  },

  handleDisplayPostsChanged (e) {
    console.log(e.currentTarget.value)
  },

  render () {
    return (
      <Section title='Blog Posts' icon='speaker_notes'>
        <h2>
          Recent Posts
          &nbsp;
          <a
            href='#'
            className='material-icons'
            style={{ fontSize: '0.6em' }}
            onClick={(e) => { e.preventDefault(); this.openModal() }}
          >
            settings
          </a>
        </h2>
        {this.renderConfigModal()}
      </Section>
    )
  },

  renderConfigModal () {
    const { modalStyles, displayPosts } = this.state

    return (
      <div className='modal open' style={modalStyles}>
        <div className='modal-content'>
          <div>
            <h4>Blog Posts</h4>
          </div>

          Show me...
          <p>
            <input
              type='radio'
              name='blogDisplay'
              value='recent'
              id='recent'
              checked={displayPosts === 'recent'}
              onChange={this.handleDisplayPostsChanged}
              />
            <label for='recent' className='black-text'>
              the last
              &nbsp;
              <input
                type='number'
                defaultValue={10}
                style={{ display: 'inline', width: '75px', textAlign: 'center' }}
              />
              posts.
            </label>
          </p>
          <p>
            <input
              type='radio'
              name='test'
              value='date'
              id='date'
              checked={displayPosts === 'date'}
              onChange={this.handleDisplayPostsChanged}
              />
            <label for='date' className='black-text'>
              posts from&nbsp;
              <select style={{ display: 'inline', width: '120px' }} defaultValue={moment().format('YYYY')}>
                <option value='2016'>2016</option>
                <option value='2015'>2015</option>
              </select>
              <select style={{ display: 'inline', width: '120px' }} defaultValue={moment().format('M')}>
                <option value='1'>Janurary</option>
                <option value='2'>Feburary</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
              </select>
            </label>
          </p>
        </div>
        <div className='modal-footer'>
          <a
            className='modal-action modal-close btn-flat'
            onClick={(e) => { e.preventDefault(); this.closeModal() }}
          >
            OK
          </a>
        </div>
      </div>
    )
  }
})
