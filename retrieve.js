const ethers = require('ethers');
const provider = require('./provider');
const fs = require('fs');

const bankBPrivateKey = fs.readFileSync('bankB.wallet').toString();
const wallet = new ethers.Wallet(bankBPrivateKey, provider);

const abi = JSON.parse(fs.readFileSync('contract.abi'));
var contract = new ethers.Contract(process.argv[2], abi, wallet);

var retrievePromise = contract.getScore(process.argv[3]);

retrievePromise.then(function(score) {
    console.log(`Credit Score: ${score.toString()}`);
});
