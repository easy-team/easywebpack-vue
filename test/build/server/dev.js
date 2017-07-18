'use strict';
const WebpackServerBaseBuilder = require('./base');
class WebpackBuilder extends WebpackServerBaseBuilder{
  constructor(config) {
    super(config);
    this.setEnv('dev');
  }
}
module.exports = new WebpackBuilder().create();
