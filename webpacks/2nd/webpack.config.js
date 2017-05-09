var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		main: './app/index.js',
		vendors: 'moment'
	},
	output: {
		filename: 'js/[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			// use: [ 'style-loader', 'css-loader' ]
			use: ExtractTextPlugin.extract({
				use: 'css-loader'
			})
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor', // Specify the common bundle's name.
			minChunks: function(module) {
				// this assumes your vendor imports exist in the node_modules directory
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		//CommonChunksPlugin will now extract all the common modules from vendor and main bundles
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
		}),
		new htmlWebpackPlugin({
			filename: 'index.[chunkhash].html',
			template: 'index.html',
			inject: 'body', //true | 'head' | 'body' | false
			title: 'hhhhhhh title from webpack qqq ',
			minify: {
				removeComments: true,
				collapseWhitespace: false
			}
		})
	]
}