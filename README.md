# 42Token - ERC20 Token Project

![Ethereum Logo](https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp)

## Project Overview
This repository contains the implementation of a custom ERC20 token on the Ethereum blockchain, created as part of the Tokenizer project. The token name includes "42" as per the project requirements.

## Technology Choices & Rationale

### 🔷 ERC20 Standard on Ethereum
I chose the ERC20 standard on Ethereum for the following reasons:

- **Enhanced Security**: ERC20 tokens benefit from Ethereum's robust security model with over 400,000 validators for block verification, significantly more than alternative networks like BSC.

- **Wide Compatibility**: Due to Ethereum's popularity, ERC20 tokens are compatible with a vast range of wallets, exchanges, and DeFi platforms.

- **Developer Resources**: The Ethereum ecosystem offers extensive documentation, libraries, and tools that simplify token development and deployment.

### 🛠️ Development Environment

- **Hardhat**: Selected as the development framework because it:
  - Simplifies contract deployment
  - Provides robust testing and debugging capabilities for Solidity code
  - Offers a local development environment without requiring interaction with live networks
  - Supports network configuration for various testnets and mainnets

### 🌙 Testnet

- **Moonbase Alpha**: Chosen as the testnet because it:
  - Provides full compatibility with Ethereum
  - Offers easy access to test tokens through its faucet
  - Features faster transaction times than Ethereum testnets
  - Has lower gas fees for testing

### 🦊 Wallet Solution

- **MetaMask**:
  - Available as both browser extension (Chrome, Firefox, Safari) and mobile app (iOS, Android)
  - Native support for all ERC20 tokens
  - User-friendly interface for token management
  - Widespread adoption ensures compatibility with most DApps

### 📚 Smart Contract Security

- **OpenZeppelin**:
  - Industry-standard, open-source library
  - Provides audited, secure implementations of ERC20 token standards
  - Reduces security vulnerabilities through battle-tested code
  - Simplifies implementation of common token features (minting, burning, pausing)

## Repository Structure

```
.
├── README.md            # This file
├── code/                # Smart contract code and development files
├── deployment/          # Deployment instructions and scripts
└── documentation/       # Project documentation
```

## Getting Started

Please refer to the deployment directory for instructions on how to deploy the token to the Moonbase Alpha testnet.