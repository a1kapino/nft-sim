const SimNft = artifacts.require("sim-nft");

module.exports = function (deployer) {
  deployer.deploy(SimNft);
};