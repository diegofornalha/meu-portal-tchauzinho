require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/fcaPobgIvvojSO8k-L-5htzwJLw8Uxuy",
      accounts: ["8e87f7e6c6717a22064bb73acb6651e68b946c24ebda2e5f8352e35148305249"],
    },
  },
};