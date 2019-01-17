const ethers = require('ethers');
const provider = require('./provider');
const fs = require('fs');
const InputDataDecoder = require('ethereum-input-data-decoder');

const bankAPrivateKey = fs.readFileSync('bankA.wallet').toString();
const wallet = new ethers.Wallet(bankAPrivateKey, provider);

const abi = JSON.parse(fs.readFileSync('contract.abi'));
const decoder = new InputDataDecoder(abi);

var contract = new ethers.Contract(process.argv[2], abi, wallet);

var sendPromise = contract.addBank(process.argv[3]);

sendPromise.then(function(transaction) {
    console.log(`Transaction Details: ${JSON.stringify(transaction)}`);
    decoder.decodeData(transaction.data);
});

