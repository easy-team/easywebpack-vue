'use strict';
const WebpackClientBaseBuilder = require('./base');
class ClientBuilder extends WebpackClientBaseBuilder {
  constructor(config) {
    super(config);
    this.setEnv('dev');
    this.setDevMode(9001)
  }
}
module.exports = new ClientBuilder().create();
