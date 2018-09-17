let constants = require('./constants');
var ethers = require('ethers');
var providers = ethers.providers;

 const provider = new providers.JsonRpcProvider(constants.JSON_RPC_ENDPOINT, { 
    chainId: constants.CHAIN_ID 
});

module.exports = provider;