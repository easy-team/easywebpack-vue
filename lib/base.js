'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(baseDir) {
    super(baseDir);
    this.setExtensions('.vue');
    this.setStyleLoaderName('vue-style-loader');
    this.addLoader(/\.vue$/, 'vue-loader', () => ({
      options: EasyWebpack.Loader.getStyleLoaderOption(this.getStyleConfig())
    }));
    this.addLoader(/\.html$/, 'vue-html-loader');
  }
};
module.exports = WebpackBaseBuilder;
