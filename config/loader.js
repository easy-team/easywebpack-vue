'use strict';
exports.vue = {
  test: /\.vue$/,
  exclude: /node_modules/,
  use() {
    const options = this.createFrameworkLoader('vue-style-loader');
    options.transformToRequire = { img: ['url', 'src'] };

    // https://github.com/TypeStrong/ts-loader/pull/782
    // vue-loader 14 版本中，需在 options 重复配置 ts-loader，升级 15 以后可移除
    if (this.loaders.typescript.enable) {
      options.loaders = options.loaders || {};
      this.loaders.typescript.use.forEach(loader => {
        const label = this.utils.getLoaderLabel(loader);
        options.loaders[label] = loader;
      });
    }

    return [
      {
        loader: 'vue-loader',
        options
      }
    ];
  }
};

exports.vuehtml = {
  test: /\.html$/,
  use: ['vue-html-loader']
};

exports.typescript = {
  enable: false
};

