import React from "react"

const ImpericalCollection = (props) => {
  const items = props.items.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <ol className="imperical-collection">
      {items.map(renderItem)}
    </ol>
  )
}

const renderItem = (item, idx) => {
  return (
    <li key={idx} className="imperical-collection__item">
      <div className="imperical-collection__item-name">{item.name}</div>
      <Points amount={item.amount} />
    </li>
  )
}

const Points = (props) => {
  const notches =
    Array
      .from(" ".repeat(10).split(""))
      .map((_, idx) => {
        return idx < props.amount
      })

  const color = colorScale(props.amount / 10)

  console.log("Points", props, color)

  return (
    <ol className="imperical-collection__points">
      {notches.map((notch, idx) => {
        const opacity = !notch ? 0.2 : undefined

        return (
          <li key={idx} className="imperical-collection__points-notch">
            <i
              className="fa fa-thumbs-o-up"
              style={{
                opacity: opacity,
                color: color
              }}
              />
          </li>
        )
      })}
    </ol>
  )
}

const colorScale = (ratio) => {
  const highHex = "4BB543"
  const lowHex = "D41E25"

  const lowRgb = hexToRgb(lowHex)
  const highRgb = hexToRgb(highHex)

  return "#" + [0, 1, 2].map((rgbIndex) => {
    const component = Math.ceil(highRgb[rgbIndex] * ratio + lowRgb[rgbIndex] * (1 - ratio))
    return numberToPaddedHex(component)
  }).join("")
}

const hexToRgb = (hex) => {
  return [0, 1, 2].map((index) => {
    const firstIndex = index * 2
    const secondIndex = firstIndex + 2

    const hexPart = hex.substr(firstIndex, secondIndex)

    return parseInt(hexPart, 16)
  })
}

const numberToPaddedHex = (number) => {
  const hex = number.toString(16)
  return hex.length == 1 ? `0${hex}` : hex.substring(0, 2)
}

export default ImpericalCollection
