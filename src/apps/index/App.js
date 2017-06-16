require("styles/index.styl")

import React from "react"
import SocialButton from "components/SocialButton"
import Tile from "components/Tile"

import _ from "lodash"

const jsonFile = require("data/content.json")


const App = React.createClass({
  getInitialState (props) {
    const tiles = jsonFile
    const order = ["date", "desc"]

    return {
      tiles: this.orderTiles(tiles, order),
      order: order
    }
  },

  orderTiles (tiles, order) {
    return _.orderBy(tiles, [order[0]], [order[1]])
  },

  setOrder (ordering) {
    this.setState({
      tiles: this.orderTiles(this.state.tiles, order),
      order: order
    })
  },

  render () {
    return (
      <div>
        <div className="tiles">
          <SocialButton source="/assets/images/linkedin.png" width={268} url="https://www.linkedin.com/in/alex-barry-4b033227?" />
          <SocialButton source="/assets/images/github.png" width={300} url="https://www.github.com/mrozbarry" />
          <SocialButton source="/assets/images/stackoverflow.png" width={158} url="http://stackoverflow.com/users/661764/ozbarry" />
          <SocialButton source="/assets/images/twitter.png" width={150} url="https://twitter.com/MrBeardbarry" />
        </div>
        <div className="tiles">
          {this.renderTiles()}
        </div>
      </div>
    )
  },

  renderSortables () {
    ["source", "authors", "title", "createdAt"]
  },

  renderTiles () {
    const { tiles } = this.state

    return tiles.map((tile) => {
      return <Tile key={tile.id} tile={tile} />
    })
  }
})

export default App
