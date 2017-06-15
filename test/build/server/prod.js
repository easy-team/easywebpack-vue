'use strict';
const WebpackServerBuilder = require('../../../lib/server');
const WebpackBaseBuilder = require('../base');
class ServerProdBuilder extends WebpackBaseBuilder(WebpackServerBuilder) {
}
module.exports = new ServerProdBuilder().create();
