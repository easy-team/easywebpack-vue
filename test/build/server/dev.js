const WebpackServerBuilder = require('../../../lib/server');
const WebpackBaseBuilder = require('../base');
class ServerDevBuilder extends WebpackBaseBuilder(WebpackServerBuilder) {
  constructor(config) {
    super(config);
    this.setEggWebpackPublicPath();
  }
}
module.exports = new ServerDevBuilder().create();
