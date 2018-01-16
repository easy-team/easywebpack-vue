'use strict';
exports.vue = {
  test: /\.vue$/,
  exclude: /node_modules/,
  use() {
    return [
      {
        loader: 'vue-loader',
        options: this.createFrameworkLoader('vue-style-loader')
      }
    ];
  }
};

exports.vuehtml = {
  test: /\.html$/,
  use: ['vue-html-loader']
};

exports.typescript = {
  enable: false,
  options: {
    appendTsSuffixTo: [/\.vue$/]
  }
};

