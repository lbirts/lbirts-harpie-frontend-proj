# Harpie Frontend Engineer Personal Project

# TASK: Create a button that interacts with the Ethereum blockchain
We'll be making a React button component that interacts with an Ethereum smart contract.

This project will test concepts that may be slightly or completely foreign to you. This readme 
provides resources to ensure that you're able to learn as you complete the project. An example
of the end project is provided at the bottom of the readme.

## INSTRUCTIONS:
* fork `facebook/create-react-app` inside this repo, or another repo of your choosing
* install MetaMask using this link: https://metamask.io/download/
* navigate to the "Goerli Testnet": ![network-switching](./readme-images/network-switching.png)
* create a component called ConnectButton that opens up MetaMask and allows users to connect their wallet to your page
* create a component called ContractButton that calls the `approve` method on smart contract address `...` on behalf of the connected wallet
    * The first parameter should be your wallet address, and the second parameter should be 0.
    * https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-approve-address-uint256-
    * 
    


* `npm i`
* run using the command `npm run start`
* create your own QuickNode account and source mempool data from there, the free plan should be fine
* for your personal security, I'd advise putting your quicknode URL in a gitignored `.env` file

## SPECS: 
* log your insights every 10 seconds (in any method of your choosing; console.log is fine)
* data should be sourced from the Ethereum Mainnet
* algorithmic efficiency will be tested (i.e. minimize your number of quadratic functions, etc.)
    * that said, we understand that the time limit is tight, so we will be lenient on this category
* code readability will be tested
* you will be paid $59/hour for up to 8 hours, please make sure to log your time on a document

## HINTS:
* not every transaction will have a large `data` field... some may just contain "0x"
* not every transaction has the `maxPriorityFeePerGas` or `maxFeePerGas` field
* send an email if you get stuck

## LINKS:
* QuickNode: https://quicknode.com
* ethers.js transactions spec: https://docs.ethers.io/v5/api/utils/transactions/
* decoding Ethereum transaction call data: https://towardsdatascience.com/decoding-ethereum-smart-contract-data-eed513a65f76

Good luck!