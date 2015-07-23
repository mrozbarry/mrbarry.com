var webpack = require("webpack");

module.exports = {
  entry: {
    fontAwesome: "font-awesome-webpack!./font-awesome.config.js",
    index: "./scripts/index.coffee"
  },
  output: {
    path: "./public",
    publicPath: '/',
    filename: "[name].entry.js"
  },

  module: {
    loaders: [
      { test: /\.sass$/, loader: "style-loader!css-loader!sass?indentedSyntax" },
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".coffee", ".sass"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      "_": "lodash",
      "React": "react/addons",
      // "RouterMini": "react-mini-router",
      "moment": "moment-timezone",
      "Bemmer": "bemmer-node/bemmer-class",
      "Github": "github-api",
    }),
    new webpack.EnvironmentPlugin([
      'GITHUB_TOKEN', 'WEBSITE_TITLE', 'WEBSITE_SUBTITLE', 'GRAVATAR_EMAIL'
    ])
  ],
  devServer: {
    port: 8080,
    contentBase: './public',
    historyApiFallback: {
      index: '/index.html',
      rewrites:[
        {from: /\/compitition/, to: '/index.html'}
      ]
    }
  }
};
