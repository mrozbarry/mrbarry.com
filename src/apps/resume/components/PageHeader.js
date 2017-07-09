import React from "react"


const PageHeader = (props) => {
  return (
    <div className="page-header">
      <div
        className="head-shot"
        style={{ backgroundImage: `url(${props.headshot})`}}
        />

      <div className="name">
        <div className="heading">{props.firstName}</div>
        <div className="heading">{props.lastName}</div>
      </div>
      <div className="sub-heading">{props.title}</div>

      <hr className="thick-separator" />
    </div>
  )
}


export default PageHeader
