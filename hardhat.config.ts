import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@shardlabs/starknet-hardhat-plugin'

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  starknet: {
    venv: 'active',
    network: 'alphaGoerli',
    wallets: {
      OpenZeppelin: {
        accountName: 'OpenZeppelin',
        modulePath: 'starkware.starknet.wallets.open_zeppelin.OpenZeppelinAccount',
        accountPath: '~/.starknet_accounts',
      },
    },
  },
  paths: {
    cairoPaths: ['./contracts/src']
  }
};

export default config;
