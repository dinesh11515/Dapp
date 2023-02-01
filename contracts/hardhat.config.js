require("@nomicfoundation/hardhat-toolbox");
require("hardhat-secure-accounts");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
    },
    shardeum: {
      url: "https://liberty20.shardeum.org",
    },
  },
  etherscan: {
    apiKey: "USK8S3HV5D9GMWA14TF9WKI4KRBW4Z27C7",
  },
};
