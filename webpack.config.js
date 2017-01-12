module.exports = {
  entry: './src/fetch-script.js',
  target: 'node',
  output: {
    path: './build',
    filename: 'fetch-script.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}
