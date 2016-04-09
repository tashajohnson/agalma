module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
