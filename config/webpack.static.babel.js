import entries from './webpack/entries.js'
import output from './webpack/output.js'
import modules from './webpack/modules.js'
import resolve from './webpack/resolve.js'

export default {
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
