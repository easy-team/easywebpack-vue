'use strict';
const path = require('path').posix;
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setExtensions('.vue');
    this.setResolveLoader({ modules: [path.resolve(__dirname, '../node_modules')] });
    this.configLoader = this.merge(this.configLoader, require('../config/loader'));
  }
};
module.exports = WebpackBaseBuilder;
