var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
        // exclude: /node_modules/,
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.json$/,
      loader: "json-loader"
    }]
  },
  // postcss: [
  //   require('autoprefixer')
  // ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
    })
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}