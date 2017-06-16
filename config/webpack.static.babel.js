const entries = require('./webpack/entries.js')
const output = require('./webpack/output.js')
const modules = require('./webpack/modules.js')
const resolve = require('./webpack/resolve.js')

module.exports = {
  devtool: 'source-map',

  entry: entries,
  output: output,
  resolve: resolve,
  module: modules,

  stats: {
    colors: true,
    reasons: true
  }
}
