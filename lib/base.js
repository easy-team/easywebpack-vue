'use strict';
const EasyWebpack = require('easywebpack');
const defaultWebpackConfig = require('./config');
const merge = EasyWebpack.merge;
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(defaultWebpackConfig, config));
    this.setExtensions('.vue');
    this.setStyleLoaderName('vue-style-loader');
    this.addLoader(/\.vue$/, 'vue-loader', () => ({
      options: EasyWebpack.Loader.getStyleLoaderOption(this.getStyleConfig())
    }));
    this.addLoader(/\.html$/, 'vue-html-loader');
  }
};
module.exports = WebpackBaseBuilder;
