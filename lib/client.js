'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');

class WebpackClientBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setAlias('vue', 'vue/dist/vue.common.js');
  }
}
module.exports = WebpackClientBuilder;
