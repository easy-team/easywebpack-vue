'use strict';
const WebpackWebBaseBuilder = require('./base');
class ClientBuilder extends WebpackWebBaseBuilder {
  constructor(config) {
    super(config);
  }
}

module.exports = new ClientBuilder().create();
