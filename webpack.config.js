const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './client');
const APP_DIR = path.resolve(__dirname, './client');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;