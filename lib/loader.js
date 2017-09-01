'use strict';
exports.vue = {
  test: /\.vue$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'vue-loader',
      options: {
        preLoaders: {
          less: 'less-loader',
          scss: 'sass-loader',
          sass: 'sass-loader?indentedSyntax',
          stylus: 'stylus-loader'
        },
        loaders: {
          css: ['vue-style-loader', 'css-loader', 'postcss-loader'],
          scss: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          sass: ['vue-style-loader', 'css-loader', 'postcss-loader', {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }],
          less: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
          stylus: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
        }
      }
    }
  ]
};

exports.vuehtml = {
  test: /\.html$/,
  use: ['vue-html-loader']
};

