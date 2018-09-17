# Decentralized Trust with Ethereum (Credit Score Scenario)

This is a readable Ethereum DApp written in Solidity (and Node.js) that is based on a minimalist credit score sharing scenario. It shows how information can be shared between participants of a blockchain.

It is part of the [Decentralized Trust example scenario on Azure Architecture Center][architecture].

Besides the smart contract, this repository provides all of the code required to compile, deploy and communicate with the smart contract on the blockchain. It can be used as a starting point for your decentralized trust project. The compilation, deployment and various other components can also be used as boilerplate and tools within your own project.

[Ethers.js][ethers] is used throughout this application because I like it more than the more common Web3.js. 

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

## Deploying the contract to the blockchain

With that, we can now deploy the contract to the blockchain:

```console
$ node deploy_contract.js bankA.wallet
```

Here, we use bank A's wallet to create the transaction for deployment so it is the owner of the contract. Once done, the contract's address will be shown to you. Note this down!

## Getting addresses of banks and persons

There's a nifty tool in this repository that'll show an bank or a person's address on the blockchain when given the private key of the entity:

```console
$ node address.js bankB.wallet
Wallet address: 0xa8F782D3dAAAAA1F1452aA9e9628cD9YYYYYAa63
```

You'll need the addresses that are printed to screen for various reasons in subsequent calls to the blockchain.

## Allowing other banks to update credit scores

There is a safety check within the contract to allow only enrolled banks to update scores (we certainly don't want people updating their own scores!). 

Currently, bank A is the only entity that's allowed to update credit scores. To allow more bank B to do this as well:

```console
$ node enroll.js [YOUR CONTRACT'S ADDRESS] [BANK B'S ADDRESS]
```

## Updating the credit score of a person

Here's where we finally update a credit score of a person:

```console
node score.js [YOUR CONTRACT'S ADDRESS] [PERSON A'S ADDRESS] 80
```

You can replace 80 with any score you want. A transaction will be created to store the person's latest credit score within the blockchain. 

## Retrieving the score

If you dig into the code of the command below, you'll see that a wallet is required to view records on the blockchain:

```console
$ node score.js [YOUR CONTRACT'S ADDRESS] [PERSON A'S ADDRESS] [ANY POSITIVE INTEGER INDICATING THE SCORE]
$ node retrieve [YOUR CONTRACT'S ADDRESS] [PERSON A'S ADDRESS]
Credit Score: 80
```

## That's it!

The aim here is to give you an end-to-end walkthrough from creating a contract up to the point where the contract can be used to store and share information based on decentralized trust on the blockchain. Have a look at the code within the commands above to see how [Ethers.js][ethers] is used with Node.js to achieve the functionalities of the DApp.

## Thank you

If you like this, do consider following me on [Twitter][twitter].

[architecture]: https://docs.microsoft.com/en-us/azure/architecture/example-scenario/apps/decentralized-trust
[ethers]: https://github.com/ethers-io/ethers.js/
[twitter]: https://twitter.com/vitoc/