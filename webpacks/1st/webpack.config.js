var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer')
var webpack = require('webpack')
var path = require('path')

module.exports = {
	// entry: './app/main.js',
	entry: {
		main: './app/main.js',
		// vendors: 'moment',
		// greeter: './app/greet.js'
		apps: ['./app/greet.js', './app/click.js']
	},
	devtool: 'eval-source-map',
	// output: {
	// 	path: __dirname,
	// 	filename: "bundle.js"
	// },
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			// exclude: path.resolve(__dirname, 'node_modules'),
			use: ['style-loader', 'css-loader?impotLoaders=1', 'postcss-loader']
				// use: ExtractTextPlugin.extract({
				// 	use: 'css-loader'
				// })
		}, {
			test: /\.json$/,
			// exclude: path.resolve(__dirname, 'node_modules'),
			loader: "json-loader"
		}]
	},

	devServer: {
		contentBase: "./dist", //本地服务器所加载的页面所在的目录
		//colors: true, //终端中输出结果为彩色
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	},
	plugins: [
			new ExtractTextPlugin('style.css'),
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'vendor', // Specify the common bundle's name.
			// 	minChunks: function(module) {
			// 		// this assumes your vendor imports exist in the node_modules directory
			// 		return module.context && module.context.indexOf('node_modules') !== -1;
			// 	}
			// }),
			//CommonChunksPlugin will now extract all the common modules from vendor and main bundles
			new webpack.optimize.CommonsChunkPlugin({
				name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
			}),
			new htmlWebpackPlugin({
				filename: 'index.html',
				template: './public/index.html',
				inject: 'body'
			}),
			new htmlWebpackPlugin({
				filename: 'a.html',
				template: './public/index.html',
				title: 'this is a html',
				inject: 'body',
				excludeChunks: ['apps']
			}),
			new htmlWebpackPlugin({
				filename: 'b.html',
				template: './public/index.html',
				title: 'this is b html',
				inject: 'body',
				chunks: ['apps']
			}), new webpack.LoaderOptionsPlugin({
				options: {
					postcss: [
						autoprefixer(),
					]
				}
			})
		]
		// ,
		// postcss: [
		// 	require('autoprefixer')() //调用autoprefixer插件
		// ]
};