var webpack = require('webpack');
var path = require('path');
var settings = require('./settings');

module.exports = {
  context: path.resolve(settings.theme, settings.build.js),
  entry: "./main",
  output: {
      path: path.resolve(settings.theme, settings.build.js, settings.build.dist),
      filename: 'main.js'
  },
  externals: {
    jquery: 'jQuery'
  }
}