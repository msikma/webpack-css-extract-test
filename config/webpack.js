var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var inlineCSS = {
  // If this section is active, CSS is in the JS.
  // The test image is included only once, without duplication.
  test: /\.scss$/,
  loader: 'style!css!sass?outputStyle=expanded'
};
var extractCSS = {
  // If this section is active, CSS is in a separate file.
  // The test image is included multiple times.
  test  : /\.scss$/,
  loader: ExtractTextPlugin.extract(
    'style-loader', 'css-loader!sass-loader?outputStyle=expanded'
  )
};
var styleSettings = global['styleType'] === 'inline' ? inlineCSS : extractCSS;

module.exports = {
  entry: './app/test.js',
  output: {
    path: __dirname + '/../output/',
    filename: '[name].bundle.js',
    publicPath: './output/'
  },
  module: {
    loaders: [
      styleSettings,
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
