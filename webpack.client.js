const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


const config = {

  // Inform webpack bundle is for node.js not browser
  // target: 'node',

  // Tell webpack the root file of our server
  // express server
  // normally called index.js, but client is used for clarity
  entry: './src/client/client.js',

  // Tell webpack where to put the generated output file
  output: {
    filename: 'client-bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config);
