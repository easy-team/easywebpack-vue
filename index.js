'use strict';
const EasyWebpack = require('easywebpack');
exports.EasyWebpack = EasyWebpack;
Object.assign(exports, EasyWebpack);
exports.WebpackClientBuilder = require('./lib/client');
exports.WebpackServerBuilder = require('./lib/server');

exports.getWebpackConfig = config => {
  return EasyWebpack.WebpackBuilder.getWebpackConfig(config, [exports.WebpackClientBuilder, exports.WebpackServerBuilder]);
};

