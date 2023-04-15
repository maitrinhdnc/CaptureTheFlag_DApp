require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const {mnemonic} = require("./secrets.json")


module.exports = {
  solidity: "0.8.18",
  networks: {
    testnet: {
      url: `https://endpoints.omniatech.io/v1/bsc/testnet/public`,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    }
  }
};
