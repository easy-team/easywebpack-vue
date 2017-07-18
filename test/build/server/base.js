'use strict';
const WebpackServerBuilder = require('../../../lib/server');
const WebpackServerBaseBuilder = require('../base');
class WebpackBuilder extends WebpackServerBaseBuilder(WebpackServerBuilder) {
  constructor(config) {
    super(config);
    this.setEntry({
      include: ['test/web/page']
    });
  }
}
module.exports = WebpackBuilder;