'use strict';
const EasyWebpack = require('easywebpack');
const webpack = EasyWebpack.webpack;
const WebpackBaseBuilder = require('./base');
class WebpackServerBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackServerBuilder) {
  constructor(baseDir) {
    super(baseDir);
    this.setAlias('vue', 'vue/dist/vue.runtime.common.js', false);
    this.addPlugin(webpack.DefinePlugin, { 'process.env.VUE_ENV': '"server"' });
  }
}
module.exports = WebpackServerBuilder;
