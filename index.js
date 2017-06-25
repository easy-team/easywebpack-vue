'use strict';
const EasyWebpack = require('easywebpack');
exports.EasyWebpack = EasyWebpack;
Object.assign(exports, EasyWebpack);
exports.WebpackClientBuilder = require('./lib/client');
exports.WebpackServerBuilder = require('./lib/server');

