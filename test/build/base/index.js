'use strict';
const path = require('path');
const baseDir = path.join(__dirname, '../../../');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor() {
    super(baseDir);
    this.setEntry('test/web/page');
    this.setBuildPath('public');
    this.setPublicPath('/public/');
    this.setAlias('asset', path.join(baseDir, 'test/web/asset'));
    this.setAlias('app', path.join(baseDir, 'test/web/framework/vue/app'));
    this.setAlias('component', path.join(baseDir, 'test/web/component'));
    this.setAlias('framework', path.join(baseDir, 'test/web/framework'));
    this.setAlias('store', path.join(baseDir, 'test/web/store'));
    this.addEntry('vendor', ['vue']);
    this.setCommonsChunk('vendor');
  }
};
module.exports = WebpackBaseBuilder;
