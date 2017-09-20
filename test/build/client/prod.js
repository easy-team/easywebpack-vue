'use strict';
const WebpackWebBaseBuilder = require('./base');
class ClientBuilder extends WebpackWebBaseBuilder {
  constructor(config) {
    super(config);
    this.setEnv('prod');
  }
}

module.exports = new ClientBuilder().create();
