const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
  output: {
    filename: '[name].min.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: true
        }
      })
    ]
  }
});
