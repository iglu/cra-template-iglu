const { useBabelRc, override, addWebpackPlugin, addBabelPlugin } = require('customize-cra')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = override(
  useBabelRc(),
  isDev && addBabelPlugin('react-refresh/babel'),
  isDev && addWebpackPlugin(new ReactRefreshPlugin({ disableRefreshCheck: true })),
)
