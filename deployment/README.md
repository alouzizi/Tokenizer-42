# Token Deployment Guide

This document provides step-by-step instructions for deploying the 42Token to the Moonbase Alpha testnet.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setting Up Hardhat Project](#setting-up-hardhat-project)
- [Creating the Smart Contract](#creating-the-smart-contract)
- [Compiling the Contract](#compiling-the-contract)
- [Deploying the Contract](#deploying-the-contract)
- [Verifying Deployment](#verifying-deployment)
- [Adding Token to MetaMask](#adding-token-to-metamask)

## Prerequisites

Before getting started, ensure you have the following:

- **MetaMask** installed and connected to Moonbase Alpha testnet
  - [Download MetaMask](https://metamask.io/download/)
  - [Configure for Moonbase Alpha](https://docs.moonbeam.network/builders/get-started/networks/moonbase/#connect-metamask)

- **Test tokens** for transaction fees 
  - You can get free DEV tokens once every 24 hours from the [Moonbase Alpha Faucet](https://faucet.moonbeam.network/)

- **Moonbase Alpha RPC endpoint**
  - Available from [Endpoint Providers](https://docs.moonbeam.network/builders/get-started/endpoints/)

## Setting Up Hardhat Project

1. Create a directory for your project:
   ```bash
   mkdir code && cd code
   ```

2. Initialize the project:
   ```bash
   npm init -y
   ```

3. Install Hardhat:
   ```bash
   npm install --save-dev hardhat
   ```

4. Create a Hardhat project:
   ```bash
   npx hardhat init
   ```
   - Select "Create a JavaScript project" when prompted
   - Accept the default settings for project root and .gitignore

5. Install additional dependencies:
   ```bash
   npm install --save-dev @nomicfoundation/hardhat-toolbox @openzeppelin/contracts dotenv
   ```

6. Configure Hardhat for Moonbase Alpha:
   
   a. Create a `.env` file in your project root:
   ```bash
   touch .env
   ```
   
   b. Add your private key to the `.env` file (never commit this file to git):
   ```
   PRIVATE_KEY=your_private_key_here_without_0x_prefix
   ```
   
   c. Update your `hardhat.config.ts` with the Moonbase Alpha network configuration:
   ```typescript

    networks: {
       moonbaseAlpha: {
         url: 'https://rpc.api.moonbase.moonbeam.network',
         chainId: 1287,
         accounts: [`0x${process.env.PRIVATE_KEY}`]
       }
    }

   ```

## Creating the Smart Contract

1. Create a contracts directory (if not already created):
   ```bash
   mkdir -p contracts
   ```

2. Create your token contract file:
   ```bash
   touch contracts/Token42.sol
   ```

3. Add your contract code to the file using your preferred text editor.
   - The contract should implement the ERC20 standard using OpenZeppelin libraries
   - Ensure your token name includes "42" as required by the project specifications

## Compiling the Contract

Compile your smart contract using the Hardhat compile task:

```bash
npx hardhat compile
```

After compilation, an `artifacts` directory will be created containing:
- The bytecode of your contract
- The ABI (Application Binary Interface)
- Other contract metadata as JSON files

## Deploying the Contract

1. Create a deployment script in the `ignition/modules` folder

2. If using Hardhat Ignition, deploy with:
   ```bash
   npx hardhat ignition deploy ./ignition/modules/Deploy.ts --network moonbaseAlpha
   ```

3. **Important**: Save the contract address displayed in the terminal after successful deployment

## Verifying Deployment

1. Open the [Moonbase Explorer](https://moonbase.moonscan.io/)

2. Search for your contract address to verify that it was deployed successfully

3. You should see details about your token contract, including:
   - Contract creation transaction
   - Token name, symbol, and decimals
   - Total supply
   - Transfer events (if any)

## Adding Token to MetaMask

1. Open the MetaMask extension

2. Ensure you're connected to the Moonbase Alpha network

3. Click "Import tokens" at the bottom of the assets list

4. Enter your token contract address
   - The token symbol and decimals should load automatically

5. Click "Add Custom Token" to complete the process

Congratulations! Your token is now live on the Moonbase Alpha testnet and visible in your MetaMask wallet.