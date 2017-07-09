require("./styles/index.styl")

import React from "react"
import SocialButton from "components/SocialButton"
import Tile from "components/Tile"

import _ from "lodash"

const jsonFile = require("data/content.json")


class App extends React.Component {
  constructor (props) {
    super(props)

    const tiles = jsonFile

    this.state = {
      tiles: this.orderTiles(tiles)
    }
  }

  orderTiles (tiles) {
    return tiles.sort((a, b) => {
      return (new Date(b.createdAt)) - (new Date(a.createdAt))
    })
  }

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
  }

  renderTiles () {
    return this.state.tiles.map((tile) => {
      return <Tile key={tile.id} tile={tile} />
    })
  }
}

export default App
