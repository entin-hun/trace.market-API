import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "v0.8.20", // replace if necessary
  networks: {
    'gnosis-chiado-testnet': {
      url: 'https://rpc.chiadochain.net'
    },
  },
  etherscan: {
    apiKey: {
      'gnosis-chiado-testnet': 'empty'
    },
    customChains: [
      {
        network: "gnosis-chiado-testnet",
        chainId: 10200,
        urls: {
          apiURL: "https://gnosis-chiado.blockscout.com/api",
          browserURL: "https://gnosis-chiado.blockscout.com"
        }
      }
    ]
  }
};