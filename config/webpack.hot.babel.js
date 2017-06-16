const { PUBLIC_PATH, SRC_PATH } = require("./webpack/meta.paths")

const entries = require('./webpack/entries.js')
const output = require('./webpack/output.js')
const modules = require('./webpack/modules.js')
const resolve = require('./webpack/resolve.js')

const path = require('path')
const Webpack = require('webpack')

module.exports = {
  devtool: "cheap-module-eval-source-map",

  entry: entries,
  output: output,
  resolve: resolve,
  module: {
    loaders: modules.loaders
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    contentBase: PUBLIC_PATH,
    inline: true,
    publicPath: "/",
    hot: true
  }
}
