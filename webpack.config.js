var path = require('path');
var webpack = require('webpack');
var PATHS = {
  public: path.join(__dirname, 'public')
}


module.exports = {
  entry: './main.js',
  output: {
  //  path: __dirname,
    path: PATHS.public,
    filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
