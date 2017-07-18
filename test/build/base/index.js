'use strict';
const path = require('path');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setEntry({
      include: 'test/web/page'
    });
    this.setAlias('asset', 'test/web/asset');
    this.setAlias('app', 'test/web/framework/vue/app');
    this.setAlias('component', 'test/web/component');
    this.setAlias('framework', 'test/web/framework');
    this.setAlias('store', 'test/web/store');
    this.addEntry('vendor', ['vue']);
  }
};
module.exports = WebpackBaseBuilder;
