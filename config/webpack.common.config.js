const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const rule = {
  css(option) {
    return {
      test: /\.css$/,
      use: [
        option.production ? MiniCssExtractPlugin.loader : 'style-loader',
        { loader: 'css-loader', options: { minimize: option.production } },
        'postcss-loader'
      ]
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
  css: option =>
    new MiniCssExtractPlugin(
      option || {
        filename: 'style.css',
        chunkFilename: '[id].[hash].css'
      }
    ),
  html: option =>
    new HtmlWebpackPlugin({
      title: 'Project Starter for Javascript',
      template: 'public/index.html',
      ...option
    })
}
exports.plugins = plugins

exports.optimization = {
  css: option => new OptimizeCSSAssetsPlugin(option)
}

exports.entry = {
  main: ['./src/index.js', './src/style/style.css']
}
