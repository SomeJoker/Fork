require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: process.env.RPC,
        blockNumber: 14390000
      },
      accounts:[
      {
        privateKey:process.env.ACCOUNT1_PK,
        balance:'100000000000000000000000'
      }
      ],
      chainId:1
    }
  },
  solidity: "0.8.9",

};