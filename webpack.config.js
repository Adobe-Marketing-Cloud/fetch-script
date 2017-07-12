const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
    filename: 'index.min.js',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'umd'
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: [path.join(__dirname, 'src')],
				use: [{
					loader: 'babel-loader'
				}],
			}
		]
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
		  filename: '[file].map'
    })
	],
	devServer: {
		hot: true,
		inline: true,
		stats: 'errors-only',
  }
};
