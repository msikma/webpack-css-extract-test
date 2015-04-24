var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './app/test.js',
  output: {
    path: __dirname + '/../output/',
    filename: '[name].bundle.js',
    publicPath: './output/'
  },
  module: {
    loaders: [
      // Comment out the following section and uncomment the one after that
      // to test CSS-in-JS rather than CSS in a separate file.
      {
        test  : /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader!sass-loader?outputStyle=expanded'
        )
      },
      /*
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded'
      },
      */
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
    },
    extensions: ['', '.js'],
    root: [
      path.resolve('./app')
    ]
  },
  bail: true,
  cache: false,
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  profile: true,
  progress: true
};
