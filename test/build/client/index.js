'use strict';
const webpackConfig = process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev');
module.exports = webpackConfig;
