'use strict';
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

class VueSSRDynamicChunkPlugin {
  constructor(opts) {
    this.opts = Object.assign({ }, { chunk: true }, opts);
  }

  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      const buildPath = compilation.options.output.path;
      compilation.chunks.forEach(chunk => {
        if (this.opts.chunk && chunk.name === null) {
          chunk.files.forEach(filename => {
            const filepath = path.join(buildPath, 'node_modules', filename);
            const source = compilation.assets[filename].source();
            mkdirp.sync(path.dirname(filepath));
            fs.writeFileSync(filepath, source, 'utf8');
          });
        }
      });
      callback();
    });
  }
}

module.exports = VueSSRDynamicChunkPlugin;
