const { SRC_PATH } = require("./meta.paths")

module.exports = {
  loaders: [
    {
      test: /\.js$/,
      include: SRC_PATH,
      loader: "babel-loader"
    },
    {
      test: /\.json$/,
      include: SRC_PATH,
      loader: "json-loader"
    },
    {
      test: /\.styl/,
      include: SRC_PATH,
      loader: "style-loader!css-loader!stylus-loader"
    }
  ]
}

