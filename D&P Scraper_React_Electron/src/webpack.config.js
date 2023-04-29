const webpack = require("webpack");

module.exports = {
    entry: '../public/electron.js',
    module: {
        rules: require('./webpack.rules'),
      },
      node: {
        fs: 'empty'
      },
    plugins: [
        new webpack.ExternalsPlugin('commonjs', ['electron'])
    ]
}