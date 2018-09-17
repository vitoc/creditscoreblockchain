const ethers = require('ethers');
const blockchain = require('./blockchain');
const fs = require('fs');

const personPrivateKey = fs.readFileSync('personA.wallet').toString();
const wallet = new ethers.Wallet(personPrivateKey, blockchain.provider);

const abi = JSON.parse(fs.readFileSync('contract.abi'));
var contract = new ethers.Contract(process.argv[2], abi, wallet);

var sendPromise = contract.updateScore(process.argv[3], process.argv[4]);

sendPromise.then(function(transaction) {
    console.log(`Transaction Details: ${JSON.stringify(transaction)}`);
});
