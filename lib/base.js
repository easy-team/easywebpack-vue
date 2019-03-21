'use strict';
const path = require('path');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setExtensions('.vue');
    this.setResolveLoader({ modules: [path.join(__dirname, '../node_modules')] });
    this.mergeLoader(require('../config/loader'));
    this.mergePlugin(require('../config/plugin'));
    this.setBabelrc(path.resolve(__dirname, '../config/.babelrc'));
  }

  prepareEntry(entries) {
    return super.prepareEntry(entries, { loader: 'vue-entry-loader', match: '.vue' });
  }
};
module.exports = WebpackBaseBuilder;
