import React from "react"

const ImpericalCollection = (props) => {
  return (
    <ol className="imperical-collection">
      {props.items.map(renderItem)}
    </ol>
  )
}

const renderItem = (item, idx) => {
  return (
    <li key={idx} className="imperical-collection__item">
      <div className="imperical-collection__item-name">{item.name}</div>
      <Points amount={item.amount} filled="thumbs-o-up" empty="thumbs-up" />
    </li>
  )
}

const Points = (props) => {
  const notches =
    Array
      .from(" ".repeat(10).split(""))
      .map((_, idx) => {
        return idx < props.amount ? props.filled : props.empty
      })

  return (
    <ol className="imperical-collection__points">
      {notches.map((notch, idx) => {
        const opacity = notch == props.empty ? 0.3 : undefined
        return (
          <li key={idx} className="imperical-collection__points-notch">
            <i className={["fa", `fa-${notch}`].join(" ")} style={{ opacity: opacity }} />
          </li>
        )
      })}
    </ol>
  )
}

export default ImpericalCollection
