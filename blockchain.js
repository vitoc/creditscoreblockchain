let constants = require('./constants');
var ethers = require('ethers');
var providers = ethers.providers;

exports.provider = new providers.JsonRpcProvider(constants.JSON_RPC_ENDPOINT,{ 
    chainId: constants.CHAIN_ID 
});
