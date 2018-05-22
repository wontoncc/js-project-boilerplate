const webpack = require('webpack')
const common = require('./webpack.common.config')

module.exports = {
  mode: 'production',
  entry: common.entry,
  module: { rules: [common.rule.css({ minimize: true }), common.rule.babel()] },
  plugins: [common.plugins.css(), common.plugins.html()]
}
