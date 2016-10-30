import React from "react"

const SocialButton = function (props) {
  const { url, source, width } = props

  return (
    <a className="tiles__item white" href={url}>
      <div className="spacer" />
      <img src={source} alt="social icon" style={{ width: width, height: "auto", alignSelf: "center" }} />
      <div className="spacer" />
    </a>
  )
}

export default SocialButton
