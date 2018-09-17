const ethers = require('ethers');
const provider = require('./provider');
const fs = require('fs');

const personPrivateKey = fs.readFileSync(process.argv[2]).toString();
const wallet = new ethers.Wallet(personPrivateKey, provider);

console.log(`Wallet address: ${wallet.address}`);