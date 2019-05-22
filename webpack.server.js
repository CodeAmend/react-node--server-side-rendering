const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {

  // Inform webpack bundle is for node.js not browser
  target: 'node',

  // Tell webpack the root file of our server
  // express server
  entry: './src/index.js',

  // Tell webpack where to put the generated output file
  output: {
    filename: 'server-bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
