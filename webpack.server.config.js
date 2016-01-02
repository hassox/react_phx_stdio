module.exports = {
  entry: {
    component: "./web/static/js/components/main.js",
  },
  output: {
    path: "./priv/server/js",
    filename: "component.js",
    library: "myComponent",
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    }],
  },
  resolve: {
    alias: {
      phoenix_html:
        __dirname + "/deps/phoenix_html/web/static/js/phoenix_html.js",
      phoenix:
        __dirname + "./deps/phoenix/web/static/js/phoenix.js"
    }
  }
};
