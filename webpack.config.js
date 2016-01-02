// setup from http://matthewlehner.net/using-webpack-with-phoenix-and-elixir/

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./web/static/js/app.js", "./web/static/css/app.css"],
  output: {
    path: "./priv/static/",
    filename: "js/app.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css")
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    alias: {
      phoenix_html:
        __dirname + "/deps/phoenix_html/web/static/js/phoenix_html.js",
      phoenix:
        __dirname + "./deps/phoenix/web/static/js/phoenix.js"
    }
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./web/static/assets" }])
  ]
};
