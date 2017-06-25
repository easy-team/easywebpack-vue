'use strict';
const WebpackClientBuilder = require('../../../lib/client');
const WebpackBaseBuilder = require('../base');
class ClientDevBuilder extends WebpackBaseBuilder(WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setDevTool(false);
    this.setCssExtract(false);
    this.setHtml(true);
  }
}
module.exports = new ClientDevBuilder().create();
