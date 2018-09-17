# Decentralized Trust with Ethereum (Credit Score Scenario)

This is a readable blockchain application that is based on a minimalist credit score sharing scenario. It shows how information can be shared between participants of a blockchain.

It is part of the [Decentralized Trust example scenario on Azure Architecture Center][architecture].

Besides the smart contract, this repository provides all of the code required to compile, deploy and communicate with the smart contract on the blockchain. It can be used as a starting point for your decentralized trust project. The compilation, deployment and various other components can also be used as boilerplate and tools within your own project.

Ethers.js[ethers] is used throughout this application because I like it more than the more common Web3.js. 

Going through this README and the various referred portions of files within this repository, you will get an understanding of smart contracts and how it works within a blockchain to enable trusted exchange and sharing of information.

## Requirement

You will need to have an Ethereum blockchain.

You can create a private blockchain on Azure to follow this guide. Please refer to the [Decentralized Trust example scenario on Azure Architecture Center][architecture] for more information. 

To run the code within this guide, you'll need Node.js and NPM.

## Installation

Just clone this repository, then run `npm install`:

```console
$ git clone https://github.com/vitoc/creditscoreblockchain.git
$ cd creditscoreblockchain
$ npm install
```

## JSON-RPC endpoint

The first thing to obtain and setup is the JSON-RPC endpoint. This is the mean by which we access the blockchain's API.

If you'd followed the [example on Azure architecture center][architecture], this information is in the e-mail that's sent to you upon successful deployment:

<img src="https://github.com/vitoc/creditscoreblockchain/blob/master/media/mail.png" width="500" />

Place this endpoint within a `constants.js` file that you'll need to create within the directory where this repository is cloned:

```js
const constants = {
    JSON_RPC_ENDPOINT: 'http://ethzgpjre-dns-reg1.southeastasia.cloudapp.azure.com:8540'
}
```
>  Do note that `constants.js` is not in the cloned repository, you'll need to create one for this purpose. 

## Chain ID

This is to ensure we're dealing with the right chain! 

If you'd followed the [example on Azure architecture center][architecture], this is the `Network ID` that you had specified while creating the private blockchain via.

Place this in the `constants.js` file as well:

```js
const constants = {
    JSON_RPC_ENDPOINT: 'http://ethzgpjre-dns-reg1.southeastasia.cloudapp.azure.com:8540',
    CHAIN_ID: 10101010// <== YOUR CHAIN ID HERE
}
```

## Compiling

The ABI and bytecode necessary to deploy the smart contract to your Ethereum blockchain is included in this repository. Also included  is a tool that you can use to quickly (re)-compile the contract again when you make any changes, etc. This is how to use it:

```console
$ node compile.js contract.sol :contractName
```

For the scenario, to re-compile, do:

```console
$ node compile.js CreditScore.sol :CreditScore
```

## Wallets

For convenience, this application reads the keys of 3 required wallets from 3 files:

* bankA.wallet
* bankB.wallet
* personA.wallet

For testing purposes, you can generate the above wallet by running:

```console
$ node generate_wallet.js
```

Of course, you can create these private keys yourself with the tools that you prefer too.

## Thank you

If you like this, do consider following me on [Twitter][twitter].

[architecture]: https://docs.microsoft.com/en-us/azure/architecture/example-scenario/apps/decentralized-trust
[ethers]: https://github.com/ethers-io/ethers.js/
[twitter]: https://twitter.com/vitoc/