'use strict';
const path = require('path');
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setExtensions('.vue');
    this.setOption({ resolveLoader: { modules: [path.join(__dirname, '../node_modules')] } });
    this.setStyleLoaderName('vue-style-loader');
    this.addLoader(/\.vue$/, 'vue-loader', () => ({
      options: EasyWebpack.Loader.getStyleLoaderOption(this.getStyleConfig())
    }));
    this.addLoader(/\.html$/, 'vue-html-loader');
  }
};
module.exports = WebpackBaseBuilder;
