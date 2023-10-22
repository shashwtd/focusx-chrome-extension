const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	entry: {
        popup: path.resolve('src/popup/popup.tsx'),
        login: path.resolve('src/popup/login.tsx'),
		background: path.resolve('src/background/background.ts'),
		blocker: path.resolve('src/contentScripts/blocker.tsx')
    },
	module: {
		rules: [
			{
				use: 'ts-loader',
				test: /\.tsx?$/,
				exclude: /node_modules/,
			},
			{
				use: ['style-loader', 'css-loader', {
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							ident: 'postcss',
							plugins: [
								tailwindcss,
								autoprefixer,
							],
						},
					},
				}],
				test: /\.css?$/i,
			},
			{
				use: 'asset/resource',
				type: 'asset/resource',
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
			}
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: path.resolve('src/static/'), to: path.resolve('dist') },
			],
		}),
		...getHtmlPlugins(['popup', 'login']),
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	output: {
		filename: '[name].js',
		publicPath: '',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
};

function getHtmlPlugins(chunks) {
	return chunks.map(chunk => new HtmlPlugin({
		title: 'FocusX',
		filename: `${chunk}.html`,
		chunks: [chunk],
	}));
}