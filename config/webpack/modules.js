const { SRC_PATH } = require('./meta.paths.js')

module.exports = {
  loaders: [
    {
      test: /\.js$/,
      include: SRC_PATH,
      loader: 'babel'
    },
    {
      test: /\.json$/,
      include: SRC_PATH,
      loader: 'json'
    }
  ]
}

