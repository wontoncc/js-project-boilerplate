const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rule = {
  css(option) {
    return {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: { importLoaders: 1, url: false, ...option }
          },
          'postcss-loader'
        ]
      })
    }
  },
  image() {
    return {
      test: /\.(png|jpg)$/,
      loader: 'url-loader'
    }
  },
  babel() {
    return {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-transform-async-to-generator',
            '@babel/plugin-proposal-object-rest-spread'
          ]
        }
      }
    }
  }
}
exports.rule = rule

const plugins = {
  css: path => new ExtractTextPlugin(path || 'style.css'),
  html: config =>
    new HtmlWebpackPlugin(
      config || { title: 'Project Starter for Javascript', template: 'public/index.html' }
    )
}
exports.plugins = plugins

exports.entry = {
  main: ['./src/index.js', './src/style/style.css']
}
