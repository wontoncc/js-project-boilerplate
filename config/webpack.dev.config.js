const proxy = require('koa-proxy')

const webpack = require('webpack')
const common = require('./webpack.common.config')

module.exports = {
  mode: 'development',
  entry: common.entry,
  module: { rules: [common.rule.css({}), common.rule.babel()] },
  plugins: [common.plugins.html()]

  // serve: {
  //   add: (app, middleware) => {
  //     middleware.webpack()
  //     middleware.content()

  //     app.use(
  //       proxy({
  //         host: '',
  //         match: /.*/
  //       })
  //     )
  //   }
  // }
}
