import React from "react"

const Summary = (props) => {
  switch(props.summary.state) {
    case "loading":
      return (
        <i className="fa fa-circle-o-notch fa-spinner" />
      )

    case "ok":
      return (
        <div className="text-content">
          {props.summary.data.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
        </div>
      )

    case "err":
      return (
        <div className="text-content">
          <strong>
            Unable to load my summary :(
          </strong>
          <div>
            Well, either your network has gone down, or I've made a grave mistake.
          </div>
        </div>
      )

    default:
      return <div />
  }
}

export default Summary
