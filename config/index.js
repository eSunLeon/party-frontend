'use strict'
// Template version: 1.2.6

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/dj': {
        target: 'http://47.112.120.119',
        changeOrigin: true,
        pathRewrite: {
          '^/dj': '/dj'
        }
      }
    },

    // Various Dev Server settings
    host: '192.168.1.103', // can be overwritten by process.env.HOST
    port: 9527, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    useEslint: true,

    showEslintErrorsInOverlay: false,

    devtool: '#cheap-source-map',

    cacheBusting: true,

    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',

    // you can set by youself according to actual condition
    assetsPublicPath: './',

    productionSourceMap: false,
    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  }
}
