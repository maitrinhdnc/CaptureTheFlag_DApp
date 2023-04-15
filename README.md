1. I build DApp using Hardhat (a js package) so I need to `npm init --y`
2. Install hardhat library: `npm install --save-dev hardhat`
3. Create hardhat project: `npx hardhat`
4. Writing smart contract - 
Can test on Remix Ethe IDE: https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js
5. Compile contract: `npx hardhat compile`
6. Install library: `npm install @nomicfoundation/hardhat-toolbox` for deploy
7. Create secrets.json for metamask account 
8. 
___
### Deploy Contract
Deploy and verify the contract. This step has been donw with Binance chain test network so you may reuse the contracts. If you choose to deploy your own contract, you need to setup the network in [hardhat.config.js](./hardhat.config.js), and then setup the deployed address in [address.js](./scripts/address.js).

```bash
npx hardhat run scripts/deploy.js --network testnet
```
