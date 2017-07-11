'use strict';
const WebpackClientBuilder = require('../../../lib/client');
const WebpackBaseBuilder = require('../base');
class ClientProdBuilder extends WebpackBaseBuilder(WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setCssExtract(true);
    this.setCommonsChunk('vendor');
  }
}
const config = new ClientProdBuilder().create();
console.log(config.module.rules[0].options.loaders);
console.log(config.plugins);
module.exports = new ClientProdBuilder().create();
