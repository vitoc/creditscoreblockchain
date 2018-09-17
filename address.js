const ethers = require('ethers');
const blockchain = require('./blockchain');
const fs = require('fs');

const personPrivateKey = fs.readFileSync(process.argv[2]).toString();
const wallet = new ethers.Wallet(personPrivateKey, blockchain.provider);

console.log(`Wallet address: ${wallet.address}`);