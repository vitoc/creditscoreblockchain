const provider = require('./provider');
var ethers = require('ethers');
const fs = require('fs');
const ownerPrivateKey = fs.readFileSync(process.argv[2]).toString();
const wallet = new ethers.Wallet(ownerPrivateKey, provider);

const bytecodeFile = 'contract.bytecode'; //Default 
const abiFile = 'contract.abi'; //Default 

if (process.argv[3]) {
    bytecodeFile = process.argv[3];
}

if (process.argv[4]) {
    abiFile = process.argv[4];
}

const bytecode = fs.readFileSync(bytecodeFile).toString();
const abi = JSON.parse(fs.readFileSync(abiFile));

var deployTransaction = ethers.Contract.getDeployTransaction('0x'+bytecode, abi);

var sendPromise = wallet.sendTransaction(deployTransaction);

sendPromise.then(function(transaction) {

    var contractAddress = ethers.utils.getContractAddress(transaction);
    console.log(`Contract Address: ${contractAddress}`);

});
