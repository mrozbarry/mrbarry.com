require("./styles/index.styl")

import React from "react"

import PageHeading from "./components/PageHeading.js"
import ImpericalCollection from "./components/ImpericalCollection.js"

const App = (props) => {
  return (
    <div className="page">
      <div className="page-sidebar">
        <PageHeading />
      </div>
      <div className="page-content">
        <section>
          <div className="section-header">
            <div className="sub-heading">Tools</div>
          </div>

          <ImpericalCollection items={[{name: "Elm", amount: 8}, {name: "Javascript", amount: 9}, {name: "NodeJS", amount: 7}, {name: "Ruby", amount: 7}, {name: "Qt5", amount: 4}, {name: "C", amount: 6}, {name: "SDL2", amount: 8}, {name: "Firebase", amount: 9}, {name: "Vim", amount: 5}, {name: "React", amount: 8}]} />
        </section>

        <section>
          <div className="sub-heading">Skills</div>

          <ImpericalCollection items={[{name: "Functional", amount: 7}, {name: "Front-End", amount: 8}, {name: "Back-End", amount: 7}, {name: "Dev-Ops", amount: 4}, {name: "Linux", amount:7}]} />
        </section>

        <section>
          <div className="sub-heading">Work Experience</div>
        </section>

      </div>
    </div>
  )
}

export default App

