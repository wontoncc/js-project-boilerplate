const webpack = require('webpack')
const common = require('./webpack.common.config')

module.exports = {
  mode: 'development',
  entry: common.entry,
  module: { rules: [common.rule.css({})] },
  plugins: [common.plugins.html()]
}
