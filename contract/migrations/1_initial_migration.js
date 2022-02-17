const NftSim = artifacts.require("../contracts/NftSim");

module.exports = function (deployer) {
  deployer.deploy(NftSim);
};