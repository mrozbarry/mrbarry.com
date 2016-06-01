const Webpack = require('webpack')
const { PUBLIC_PATH, SRC_PATH } = require('./webpack/meta.paths.js')
const entries = require('./webpack/entries.js')
const output = require('./webpack/output.js')
const modules = require('./webpack/modules.js')
const resolve = require('./webpack/resolve.js')

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: entries,
  output: output,
  resolve: resolve,

  module: {
    loaders: modules.loaders,

    preLoaders: [{
      test: /\.js$/,
      include: SRC_PATH,
      loader: 'standard'
    }]
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  standard: {
    parser: 'babel-eslint'
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin()
  ],

  devServer: {
    contentBase: PUBLIC_PATH,
    inline: true,
    progress: true,
    publicPath: '/'
  }
}
