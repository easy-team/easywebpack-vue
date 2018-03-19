'use strict';
exports.vue = {
  test: /\.vue$/,
  exclude: /node_modules/,
  use() {
    const options = this.createFrameworkLoader('vue-style-loader');
    options.transformToRequire = { img: ['url', 'src'] };
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

