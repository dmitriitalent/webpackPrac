import path from 'path';
import webpack from 'webpack';
import { VueLoaderPlugin } from "vue-loader";
import HtmlWebpackPlugin from "html-webpack-plugin";
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
	mode: 'development',
	entry: './src/index.ts',

	devServer: {
		static: './dist'
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.vue'],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({template: "./public/index.html"})
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
};

export default config;