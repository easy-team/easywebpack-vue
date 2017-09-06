'use strict';
const path = require('path').posix;
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setExtensions('.vue');
    this.setResolveLoader({ modules: [path.resolve(__dirname, '../node_modules')] });
    this.mergeLoader(require('../config/loader'));
  }
};
module.exports = WebpackBaseBuilder;
