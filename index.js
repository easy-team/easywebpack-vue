'use strict';
const EasyWebpack = require('easywebpack');
exports.EasyWebpack = EasyWebpack;
exports.WebpackClientBuilder = require('./lib/client');
exports.WebpackServerBuilder = require('./lib/server');
exports.webpack = exports.EasyWebpack.webpack;
exports.merge = exports.EasyWebpack.merge;
exports.build = (config, callback) => {
  new EasyWebpack.WebpackTool(config).build(callback);
};
exports.server = config => {
  new EasyWebpack.WebpackTool(config).server();
};
