var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry: {
		main: './js/main.js',
		vue: './js/vue.js'
			// vue: 'vue'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			excludeChunks: ['vue'],
			inject: 'body'
		})
	],
	devServer: {
		contentBase: "./", //本地服务器所加载的页面所在的目录
		// colors: true, //终端中输出结果为彩色
		historyApiFallback: true, //不跳转
		hot: true,
		hotOnly: true,
		inline: true //实时刷新
	}

}