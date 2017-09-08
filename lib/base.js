'use strict';
const path = require('path');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setExtensions('.vue');
    this.setResolveLoader({ modules: [path.join(__dirname, '../node_modules')] });
    this.mergeLoader(require('../config/loader'));
  }
};
module.exports = WebpackBaseBuilder;
