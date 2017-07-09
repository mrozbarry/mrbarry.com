require("./styles/index.styl")

import React from "react"

import PageHeader from "./components/PageHeader.js"
import Summary from "./components/Summary.js"
import PageFooter from "./components/PageFooter.js"
import ImpericalCollection from "./components/ImpericalCollection.js"
import WorkExperience from "./components/WorkExperience.js"

const remoteData = {
  initial: () => {
    return { state: "initial", data: null }
  },

  loading: () => {
    return { state: "loading", data: null }
  },

  ok: (data) => {
    const formatted =
      data
      .split(/\n\n/g)
      .map((text) => text.replace(/\n/g, " "))

    return { state: "ok", data: formatted }
  },

  err: (reason) => {
    return { state: "err", data: reason }
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      summary: remoteData.initial()
    }
  }

  componentDidMount () {
    this.setState({
      summary: remoteData.loading()
    }, this.summaryGet)
  }

  summaryGet () {
    fetch(this.props.resume.biography.summary.url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.text()
        } else {
          let err = new Error(response.statusText)
          err.response = response
          throw err
        }
      })
      .then((text) => this.summaryOk(text))
      .catch((ex) => this.summaryErr(ex))
  }

  summaryOk (summary) {
    this.setState({
      summary: remoteData.ok(summary)
    })
  }

  summaryErr (exception) {
    this.setState({
      summary: remoteData.err(exception)
    })
  }

  render () {
    const { biography, contact } = this.props.resume
    return (
      <div className="page">
        <div className="sidebar">
          <PageHeader
            firstName={biography.firstName}
            lastName={biography.lastName}
            title={biography.title}
            headshot={biography.headshot.url}
            />

          <Summary summary={this.state.summary} />

          <PageFooter
            location={contact.location}
            phone={contact.phone}
            email={contact.email}
            website={contact.website}
            />
        </div>
        <div className="content">
          <section>
            <div className="section-header">
              <div className="sub-heading section">Languages</div>
            </div>

            <ImpericalCollection items={this.props.resume.languages} />
          </section>

          <section>
            <div className="section-header">
              <div className="sub-heading section">Tools</div>
            </div>

            <ImpericalCollection items={this.props.resume.tools} />
          </section>

          <section>
            <div className="sub-heading section">Skills</div>

            <ImpericalCollection items={this.props.resume.skills} />
          </section>

          <section>
            <div className="sub-heading section">Work Experience</div>

            <WorkExperience jobs={this.props.resume.workExperience} />
          </section>

        </div>
      </div>
    )
  }
}

export default App
