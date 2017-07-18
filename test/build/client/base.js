'use strict';
const path = require('path');
const WebpackClientBuilder = require('../../../lib/client');
const WebpackClientBaseBuilder = require('../base');
class WebpackBuilder extends WebpackClientBaseBuilder(WebpackClientBuilder) {
  constructor(config) {
    super(config);
  }
}
module.exports = WebpackBuilder;