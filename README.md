Project Boilerplate
==========

A Javascript project boilerplate featuring Webpack + Babel + PostCSS.

## Usage

Commands below assumes package manager `yarn` to be used.

Fire up a dev server with `webpack-serve`:

    yarn serve

Build with webpack, transforming `.js` file with Babel, minifying `.css` by default:

    yarn build

More commands can be found in `package.json`.

### Folder Structure 

    + config
    |--  webpack.common.config.js
    |--  webpack.dev.config.js
    |--  webpack.prod.config.js
    + public
    |--  index.html
    + server
    |    ...
    + src
    |--  index.js
    |    ...
    |--+ style
       |--  postcss.config.js
       |--  style.css

## Configuration

### Webpack

 locates in `config/`, splited into three modules serving different purposes. You can add more plugins (or modified configuration for existed one) in `webpack.common.config.js`.

### Babel

configurated in plugin configuration for Webpack (in `webpack.common.config.js`).

### PostCSS

PostCSS configuration located in `src/style/postcss.config.js`. Plugins enabled is configurated in this file.