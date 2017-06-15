'use strict';
const WebpackServerBuilder = require('../../../lib/server');
const WebpackBaseBuilder = require('../base');
class ServerDevBuilder extends WebpackBaseBuilder(WebpackServerBuilder) {
}
module.exports = new ServerDevBuilder().create();
