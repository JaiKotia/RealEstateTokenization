var PokeBall = artifacts.require("./PokeBall.sol");

module.exports = function(deployer) {
  deployer.deploy(PokeBall);
};