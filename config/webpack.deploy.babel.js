const entries = require('./webpack/entries.js')
const output = require('./webpack/output.js')
const modules = require('./webpack/modules.js')
const resolve = require('./webpack/resolve.js')

const path = require('path')
const Webpack = require('webpack')

const deployOutput = Object.assign({}, output, {
  path: path.resolve(__dirname, "..", "deploy")
})

module.exports = {
  devtool: 'source-map',

  entry: entries,
  output: deployOutput,
  resolve: resolve,
  module: modules,

  stats: {
    colors: true,
    reasons: true
  }
}
