const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './source/app/app-loader.js'),
  output: {
    path: path.resolve(__dirname, './public/webpack'),
    filename: 'bundle.js'
  },
  stats: {
    assets: true,
    assetsSort: 'field',
    colors: true,
    modules: false,
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
          },
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: true,
    }),
  ]
}