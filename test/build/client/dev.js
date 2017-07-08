'use strict';
const WebpackClientBuilder = require('../../../lib/client');
const WebpackBaseBuilder = require('../base');
class ClientDevBuilder extends WebpackBaseBuilder(WebpackClientBuilder) {
  constructor(baseDir) {
    super(baseDir);
    this.setDevTool(false);
    this.setCssExtract(false);
  }
}
module.exports = new ClientDevBuilder().create();
