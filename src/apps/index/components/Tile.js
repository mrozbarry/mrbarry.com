import React from "react"

import moment from "moment"

const Tile = function (props) {
  const { type, title, source, authors, createdAt, target } = props.tile

  const day = moment(createdAt).format("DD")
  const month = moment(createdAt).format("MM")
  const year = moment(createdAt).format("YYYY")

  return (
    <a className="tiles__item push-down white" href={target}>
      <div className="tiles__item-header">
        <span className="tiles__item-icon">{type} via {source}</span>
        <div className="spacer"></div>
        <span className="tiles__item-date">
          <span className="day">{day}</span>
          <span className="month">{month}</span>
          <span className="year">{year}</span>
        </span>
      </div>

      <div className="spacer" />

      <div className="tiles__item-content">
        <h2 className="tiles__item-title">{title}</h2>
        <span className="tiles__item-description">{renderAuthors(authors)}</span>
      </div>

      <div className="spacer" />
    </a>
  )
}

const renderAuthors = (authors) => {
  if (!authors) {
    return null
  }

  return authors.map((author) => {
    return author
  })
}


export default Tile
