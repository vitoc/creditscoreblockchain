const ethers = require('ethers');
const blockchain = require('./blockchain');
const fs = require('fs');

const bankAPrivateKey = fs.readFileSync('bankA.wallet').toString();
const wallet = new ethers.Wallet(bankAPrivateKey, blockchain.provider);

const abi = JSON.parse(fs.readFileSync('contract.abi'));
var contract = new ethers.Contract(process.argv[2], abi, wallet);

var sendPromise = contract.addBank(process.argv[3]);

sendPromise.then(function(transaction) {
    console.log(`Transaction Details: ${JSON.stringify(transaction)}`);
});
