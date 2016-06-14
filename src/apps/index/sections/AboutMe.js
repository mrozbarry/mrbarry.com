import React from 'react'
import Section from '../components/Section'

import moment from 'moment'

const styles = {
  clearfix: {
    clear: 'both'
  },

  pullRight: {
    float: 'right',
    marginLeft: '7px',
    marginBottom: '7px',
    padding: '7px',
    border: '1px black solid'
  },

  pullLeft: {
    float: 'left',
    marginRight: '7px',
    marginBottom: '7px',
    padding: '7px',
    border: '1px black solid'
  }
}

export default React.createClass({
  getInitialState () {
    return {
      age: this.myAge(),
      hobbyYears: this.myHobbyYears(),
      professionalYears: this.myProfessionalYears(),
      anniversary: this.myAnniversaryCount()
    }
  },

  myAge () {
    return moment().diff([1988, 10, 13], 'years')
  },

  myHobbyYears () {
    return moment().diff([2000, 6, 1], 'years', true).toFixed(1)
  },

  myProfessionalYears () {
    return moment().diff([2009, 11, 1], 'years', true).toFixed(1)
  },

  myAnniversaryCount () {
    return moment().diff([2011, 8, 7], 'years', true).toFixed(1)
  },

  componentDidMount () {
    this.yearUpdater = setInterval(() => {
      this.setState(this.getInitialState())
    }, 1000)
  },

  componentWillUnmount () {
    clearInterval(this.yearUpdater)
  },

  render () {
    const { age, hobbyYears, professionalYears, anniversary } = this.state

    return (
      <Section title='About Me' icon='fingerprint'>
        <div style={styles.clearfix}>
          <img
            style={styles.pullLeft}
            src={require('file!assets/images/me.jpg')}
            width={250 / 1.5}
            height={240 / 1.5}
            />
          <p>
            Yup, that is me.

            My name is Alex, but you can call me Mr. Barry...or Alex, I don't know.

            &nbsp;<i>It's cool, be cool *breathing*</i>.
          </p>

          <p>
            I'm a {age}-year old dude who likes to program cool things.

            I started programming {hobbyYears} years ago on a Commodore 64 using <span>basica</span>.

            Those were the good old days; loud keyboards, various shades of green, <code>GOTO</code> statements, and hard restarting to load games.

            Well, <span>basica</span> led to <span>qbasic</span>, which led to <span>C</span> and <span>HTML</span>, which led to <span>PHP</span>, which brought me to the word of web development.

            PHP and I have a love-hate relationship, but we had some good times.

            Like all naive programmers who just learn a server-side web language, I went on to create many website frameworks, and made many many mistakes.

            That's all to say that I know what bad code is, how it is written, and the hardships of maintaining it.
          </p>

          <p>
            When I started my first professional gig {professionalYears} years ago, I started Ruby on Rails.

            Since then, I have picked up CodeIgniter, NodeJS, Wordpress, and ReactJS to name the highlights.
          </p>

          <p>
            Wow, how boring could I be, amirite?
          </p>
        </div>
        <div style={styles.clearfix}>
          <img
            style={styles.pullRight}
            src={require('file!assets/images/us.jpg')}
            width={250 / 1.5}
            height={240 / 1.5}
            />
          <p>
            Oh wait, wait!

            Sorry ladies, this beard of a man is taken by a great woman!

            This is my wife Erinn, and she's really smart!

            When we're not going on long walks on the beach, she is studying hard towards a double major in <span title='Research Specialist'>Psychology<sup style={{ color: 'red' }}>*</sup></span> and Philosophy.

            And by degree, I mean maybe her PhD in clinical Psychology, or a Masters of Applied Science in Pyschology, she hasn't fully decided yet.
          </p>

          <p>
            We've been married for {anniversary} years, and it's been a great adventure.

            She doesn't understand half of the things I say when I'm explaining my code, but then again, it feels like she's hitting me on the head with a brick when she discusses theories of self and identity.

            I'm just all like 'Wtf does this even mean?'
          </p>
        </div>

        <div style={styles.clearfix}>
          <img
            style={styles.pullLeft}
            src={require('file!assets/images/harley.jpg')}
            width={250 / 1.5}
            height={240 / 1.5}
            />
          <p>
            And a dog...we also have a dog.

            Harley is a retired service dog, and is now my wife's companion dog.

            Even though he is Erinn's dog, I think we both know he prefers to snuggle up by my feet while I'm working at my desk.

            He's a great dog, and he completes our family.

            Sure, there might be kids in the future, but for now, we just need a cute, smart, and snuggly dog, and Harley fulfills that for us perfectly.
          </p>
        </div>
      </Section>
    )
  }
})
