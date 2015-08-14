var Webpack = require('webpack'),
    path = require('path'),
    buildPath = path.resolve(__dirname, 'public', 'build'),
    mainPath = path.resolve(__dirname, 'scripts', 'main.js')

module.exports = {
  devtool: 'source-map',
  entry: [
    "font-awesome-webpack!./font-awesome.config.js",
    mainPath
  ],
  output: {
    path: buildPath,
    filename: "bundle.js"
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
    new Webpack.ProvidePlugin({
      "_": "lodash",
      "React": "react/addons",
      "RouterMini": "react-mini-router",
      "Bemmer": "bemmer-node/bemmer-class",
      "Github": "github-api",
    }),
  ]
};
