'use strict';
const EasyWebpack = require('@easy-team/easywebpack');
const WebpackBaseBuilder = require('./base');
class WebpackServerBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackServerBuilder) {
  constructor(config) {
    super(config);
    this.setDefine({ 'process.env.VUE_ENV': '"server"' });
    this.setAlias('vue', 'vue/dist/vue.runtime.common.js', false);
    this.setStyleLoader('vue-style-loader');
  }
}
module.exports = WebpackServerBuilder;
