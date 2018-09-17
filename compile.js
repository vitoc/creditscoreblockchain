/**
 * Usage example:
 *  node compile.js contract.sol :contractName
 */

const fs = require('fs');
const solc = require('solc');

const contractSource = fs.readFileSync(process.argv[2]);
const compiled = solc.compile(contractSource.toString(), 1);

const abi = compiled.contracts[process.argv[3]].interface;
var astream = fs.createWriteStream('./contract.abi');
astream.write(abi);
astream.end();

const bytecode = compiled.contracts[process.argv[3]].bytecode;
var bstream = fs.createWriteStream('./contract.bytecode');
bstream.write(bytecode);
bstream.end();