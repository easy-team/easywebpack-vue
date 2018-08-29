'use strict';
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

class VueSSRDynamicChunkPlugin {
  constructor(opts) {
    this.opts = Object.assign({ }, { chunk: true }, opts);
  }

  apply(compiler) {
    compiler.hooks.emit.tap('VueSSRDynamicChunkPlugin', (compilation, callback) => {
      const buildPath = compilation.options.output.path;
      compilation.chunks.forEach(chunk => {
        if (!this.opts.chunk) {
          return;
        }

        const asyncChunks = chunk.getAllAsyncChunks();

        if (asyncChunks.size < 1) {
          return;
        }

        asyncChunks.forEach(asyncChunk => {
          asyncChunk.files.forEach(filename => {
            const filepath = path.join(buildPath, 'node_modules', filename);
            
            if (!fs.existsSync(filepath)) {
              mkdirp.sync(path.dirname(filepath));
            }
            
            const source = compilation.assets[filename].source();
            fs.writeFileSync(filepath, source, 'utf8');
          });
        })
      });
      callback && callback();
    });
  }
}

module.exports = VueSSRDynamicChunkPlugin;
