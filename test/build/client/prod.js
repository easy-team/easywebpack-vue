const WebpackClientBuilder = require('../../../lib/client');
const WebpackBaseBuilder = require('../base');
class ClientProdBuilder extends WebpackBaseBuilder(WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setCssExtract(true);
  }
}
module.exports = new ClientProdBuilder().create();
