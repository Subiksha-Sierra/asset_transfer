require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const API_URL = "https://volta-rpc.energyweb.org/"; 
const PRIVATE_KEY = "a0a26868110efaf995685c04aa5cbdc2a762b5e882a1e196e898759b21df59e9"; 

module.exports = {
  solidity: "0.8.0",  // Specify the Solidity version
  networks: {
    volta: {
      url: API_URL || "https://volta-rpc.energyweb.org/",
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
