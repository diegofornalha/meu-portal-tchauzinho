require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/_bEj1iL2DfptrO0R2jsDrHAhZPKRP5eU",
      accounts: ["8e87f7e6c6717a22064bb73acb6651e68b946c24ebda2e5f8352e35148305249"],
    },
  },
};