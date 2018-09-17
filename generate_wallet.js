const ethers = require('ethers');
const Wallet = ethers.Wallet;
const fs = require('fs');

var walletA = Wallet.createRandom();
var aStream = fs.createWriteStream('./bankA.wallet');
aStream.write(walletA.privateKey);
aStream.end();

var walletB = Wallet.createRandom();
var bStream = fs.createWriteStream('./bankB.wallet');
bStream.write(walletB.privateKey);
bStream.end();

var walletP = Wallet.createRandom();
var pStream = fs.createWriteStream('./personA.wallet');
pStream.write(walletP.privateKey);
pStream.end();