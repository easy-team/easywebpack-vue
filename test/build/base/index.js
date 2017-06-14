const path = require('path');
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const baseDir = path.join(__dirname, '../../../');
const webpackConfig = {
  baseDir,
  build: {
    entry: path.join(baseDir, 'test/web/page')
  }
};
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setEntry('vendor', ['vue']);
    this.setAlias('asset', path.join(this.config.baseDir, 'test/web/asset'));
    this.setAlias('app', path.join(this.config.baseDir, 'test/web/framework/vue/app'));
    this.setAlias('component', path.join(this.config.baseDir, 'test/web/component'));
    this.setAlias('framework', path.join(this.config.baseDir, 'test/web/framework'));
    this.setAlias('store', path.join(this.config.baseDir, 'test/web/store'));
  }
};
module.exports = WebpackBaseBuilder;