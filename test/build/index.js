'use strict';
const VueWebpack = require('../../index');
const clientConfig = require('./client');
const serverConfig = require('./server');
const BUILD_ENV = process.env.BUILD_ENV;
const buildConfig = [];
if (BUILD_ENV === 'client') {
  buildConfig.push(clientConfig);
} else if (BUILD_ENV === 'server') {
  buildConfig.push(serverConfig);
} else {
  Array.prototype.push.apply(buildConfig, [clientConfig, serverConfig]);
}

if (process.env.NODE_SERVER) {
  VueWebpack.server(buildConfig);
} else {
  VueWebpack.build(buildConfig);
}

