const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'ng2-markdown': './src/ng2-markdown',
    'ng2-markdown.module': './src/ng2-markdown.module'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 'es2015', 'angular2' ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    "@angular/core": '@angular/core',
    "@angular/common/http": '@angular/common/http'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    libraryTarget: 'umd'
  }
};
