'use strict';
const EasyWebpack = require('@easy-team/easywebpack');
const WebpackBaseBuilder = require('./base');
class WebpackClientBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setAlias('vue', 'vue/dist/vue.common.js', false);
  }
}
module.exports = WebpackClientBuilder;
