'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');
class WebpackServerBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackServerBuilder) {
  constructor(config) {
    super(config);
    this.setAlias('vue', 'vue/dist/vue.runtime.common.js');
  }
}
module.exports = WebpackServerBuilder;
