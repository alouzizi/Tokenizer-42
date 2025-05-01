# Jmale42 Token Documentation

## Overview

Jmale42 is an ERC20 token implemented on the Ethereum blockchain and deployed to the Moonbase Alpha testnet. This documentation provides essential information about the token and how to interact with it.

## Token Specifications

- **Name**: Jmale42
- **Symbol**: JML42
- **Decimals**: 18
- **Total Supply**: 70,000,000 JML42
- **Contract Address**: [0x58a5C5f409E32a702E6710FA3bF88961e6fAfa64]
- **Network**: Moonbase Alpha (Moonbeam Testnet)
- **Standard**: ERC20

### Key Functions

- `transfer(address to, uint256 amount)`: Transfer tokens to another address
- `approve(address spender, uint256 amount)`: Approve another address to spend tokens on your behalf
- `transferFrom(address from, address to, uint256 amount)`: Transfer tokens on behalf of another address
- `balanceOf(address account)`: Check the token balance of an address
- `allowance(address owner, address spender)`: Check how many tokens a spender is allowed to use

### Token Metadata

- **Name**: Retrieve with `name()`.
- **Symbol**: Retrieve with `symbol()`.
- **Decimals**: Check with `decimals()`.
- **Total Supply**: Get with `totalSupply()`.

## Features

- **Standard ERC20 Functions**: Transfer, approve, and check balances
- **Security**: Built with OpenZeppelin's secure implementation
- **Supply Cap**: Maximum token supply is limited to 70,000,000 tokens

## How to Use

### Adding to MetaMask

1. Open MetaMask and connect to Moonbase Alpha network
2. Click "Import tokens" 
3. Enter the contract address
4. Click "Add Custom Token"

### Sending Tokens

1. Open your wallet
2. Select Jmale42 from your tokens
3. Click "Send"
4. Enter the recipient's address and amount
5. Confirm the transaction

### Receiving Tokens

Share your wallet address with the sender to receive tokens.

## Troubleshooting

- Ensure you have enough DEV tokens for gas fees
- Verify you're connected to Moonbase Alpha network
- Check that you have sufficient Jmale42 tokens for transfers
