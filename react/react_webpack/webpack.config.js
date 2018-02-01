var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel-loader'] , exclude: /node_modules/},
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules",
                // loaders:  'css-loader',
                // options:{
                //   modules:true,
                // },
                // exclude: /node_modules/,
            },
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}