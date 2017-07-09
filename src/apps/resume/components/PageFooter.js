import React from "react"


const PageFooter = (props) => {
  const phone = props.phone.replace(/[^\d]/g, "")

  const query = encodeURI(props.location)

  return (
    <div className="page-footer">
      <hr className="thick-separator" />

      <a href={`https://maps.google.com?q=${query}`} target="_blank" rel="noopener">{props.location}</a>
      <a href={`tel:1${phone}`}>{props.phone}</a>
      <a href={`mailto:${props.email}`}>{props.email}</a>
      <a href={props.website}>{props.website}</a>
    </div>
  )
}

export default PageFooter
