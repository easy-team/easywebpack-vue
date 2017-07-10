'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');

class WebpackClientBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(baseDir) {
    super(baseDir);
    this.setAlias('vue', 'vue/dist/vue.common.js', false);
  }
}
module.exports = WebpackClientBuilder;
