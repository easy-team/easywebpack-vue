# easywebpack-vue

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/easywebpack-vue.svg?style=flat-square
[npm-url]: https://npmjs.org/package/easywebpack-vue
[travis-image]: https://img.shields.io/travis/hubcarl/easywebpack-vue.svg?style=flat-square
[travis-url]: https://travis-ci.org/hubcarl/easywebpack-vue
[codecov-image]: https://img.shields.io/codecov/c/github/hubcarl/easywebpack-vue.svg?style=flat-square
[codecov-url]: https://codecov.io/github/hubcarl/easywebpack-vue?branch=master
[david-image]: https://img.shields.io/david/hubcarl/easywebpack-vue.svg?style=flat-square
[david-url]: https://david-dm.org/hubcarl/easywebpack-vue
[snyk-image]: https://snyk.io/test/npm/easywebpack-vue/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/easywebpack-vue
[download-image]: https://img.shields.io/npm/dm/easywebpack-vue.svg?style=flat-square
[download-url]: https://npmjs.org/package/easywebpack-vue

egg webpack building solution for vue

## Install

```bash
$ npm i easywebpack-vue --save-dev
```

## Usage [easywebpack-vue-project](http://hubcarl.github.io/easywebpack/vue/easywebpack-vue-project)


### webpack common config `base.js`

```js
'use strict';
const path = require('path');
const VueWebpack = require('easywebpack-vue');
const merge = VueWebpack.merge;
const baseDir = path.join(__dirname, '../../../');
const webpackConfig = {
  baseDir,
  entry: {
    include: 'app/web/page',
    exclude: ['app/web/page/test']
  },
  html: {
   include: ['app/web/page/html'],
   exclude: [],
   template: 'app/web/view/layout.html',
   buildDir: 'html',
  },
  commonsChunk: ['vendor'],
};
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setEntry('vendor', ['vue']);
    this.setAlias('asset', 'app/web/asset');
    this.setAlias('component', 'app/web/component');
    this.setAlias('framework', 'app/web/framework');
    this.setAlias('store', 'app/web/store');
    this.setAlias('app', 'app/web/framework/vue/app.js');
    this.setStyleLoaderOption({
      sass: {
        options: {
          includePaths: [path.join(this.config.baseDir, 'app/web/asset/style')],
        }
      }
    });
  }
};
module.exports = WebpackBaseBuilder;
```

### webpack browser config `client.js`

```js
'use strict';
const VueWebpack = require('easywebpack-vue');
const WebpackClientBuilder = VueWebpack.WebpackClientBuilder;
const WebpackBaseBuilder = require('../base');
class ClientBuilder extends WebpackBaseBuilder(WebpackClientBuilder) {
}
module.exports = new ClientBuilder().create();
```

### webpack node ssr config `server.js`

```js
'use strict';
const VueWebpack = require('easywebpack-vue');
const WebpackServerBuilder = VueWebpack.WebpackServerBuilder;
const WebpackBaseBuilder = require('../base');
class ServerBuilder extends WebpackBaseBuilder(WebpackServerBuilder) {
}
module.exports = new ServerBuilder().create();
```

### command run entry file `build.js`

```js
const VueWebpack = require('easywebpack-vue');
const clientConfig = require('./client');
const serverConfig = require('./server');
const config = [clientConfig, serverConfig]

if (process.env.NODE_SERVER) {
  // development mode: webpack building and start webpack hot server
  VueWebpack.server(config);
} else {
  // build file to disk
  VueWebpack.build(config);
}
```

### commmand run

```js
{
    "scripts": {
        "build": "cross-env NODE_ENV=production node test/build",
        "start" : "cross-env NODE_SERVER=true NODE_ENV=development node test/build"
     }   
}
```

```bash

npm start

```


## Example

![webpack-vue-compile](https://github.com/hubcarl/easywebpack-vue/blob/master/doc/images/webpack-vue-compile.png)

![webpack-vue-debug](https://github.com/hubcarl/easywebpack-vue/blob/master/doc/images/webpack-vue-debug.png)

see [vue server side render example](test/web) and [vue webpack build config](test/build)  for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/hubcarl/easywebpack-vue).

## License

[MIT](LICENSE)
