import { PUBLIC_PATH, SRC_PATH } from "./webpack/meta.paths"
import entries from "./webpack/entries"
import output from "./webpack/output"
import modules from "./webpack/modules"
import resolve from "./webpack/resolve"

const Webpack = require("webpack")

module.exports = {
  devtool: "cheap-module-eval-source-map",

  entry: entries,
  output: output,
  resolve: resolve,

  module: {
    loaders: modules.loaders,
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin()
  ],

  devServer: {
    contentBase: PUBLIC_PATH,
    inline: true,
    progress: true,
    publicPath: "/"
  }
}
