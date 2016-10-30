import { SRC_PATH } from "./meta.paths"

export default {
  loaders: [
    {
      test: /\.js$/,
      include: SRC_PATH,
      loader: "babel"
    },
    {
      test: /\.json$/,
      include: SRC_PATH,
      loader: "json"
    },
    {
      test: /\.styl/,
      include: SRC_PATH,
      loader: "style!css!stylus"
    }
  ]
}

