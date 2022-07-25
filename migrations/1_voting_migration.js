const Migrations = artifacts.require("Ballot");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
