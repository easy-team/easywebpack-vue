'use strict';

exports.framework = 'vue';

exports.entry = {
  include: 'test/web/page',
  exclude: ['test/web/page/test']
};

exports.alias = {
  asset: 'test/web/asset',
  app: 'test/web/framework/vue/app.js',
  component: 'test/web/component',
  framework: 'test/web/framework',
  store: 'test/web/store'
};

exports.options = {};

exports.loaders = {
  eslint: {
    options: {
      fix: true
    }
  },
  babel: {
    options: {
      presets: ['env'],
      plugins: [
        'add-module-exports'
      ],
      comments: false
    }
  },
  options: {}
};

exports.plugins = {};
