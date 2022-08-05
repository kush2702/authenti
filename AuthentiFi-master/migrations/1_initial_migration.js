const Authentifi = artifacts.require("./authentifi.sol");

module.exports = function (deployer) {
  deployer.deploy(Authentifi);
};
