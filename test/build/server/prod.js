'use strict';
const WebpackServerBuilder = require('../../../lib/server');
const WebpackBaseBuilder = require('../base');
class ServerProdBuilder extends WebpackBaseBuilder(WebpackServerBuilder) {
}
console.log(new ServerProdBuilder().create().output);
module.exports = new ServerProdBuilder().create();
