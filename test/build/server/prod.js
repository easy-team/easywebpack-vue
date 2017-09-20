'use strict';
const WebpackServerBaseBuilder = require('./base');
class WebpackBuilder extends WebpackServerBaseBuilder {
  constructor(config) {
    super(config);
    this.setEnv('prod');
  }
}

module.exports = new WebpackBuilder().create();
