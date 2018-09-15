This is a minimal example of how information can be shared between participants of a blockchain.

It is part of the [Decentralized Trust example scenario on Azure Architecture Center][architecture].

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

## RPC endpoint

The first thing to obtain and setup is the RPC endpoint. 

If you'd followed the [example on Azure architecture center][architecture], this information is in the e-mail that's sent to you upon successful deployment.

Place this endpoint within a `constants.js` file that you'll need to create within the directory where this repository is cloned:

```js
export const RPC_ENDPOINT = 'YOUR_RPC_ENDPOINT_HERE';
```
>  Do note that `constants.js` is not in the cloned repository, you'll need to create one for this purpose. 

[architecture]: https://docs.microsoft.com/en-us/azure/architecture/example-scenario/apps/decentralized-trust