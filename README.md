1. I build DApp using Hardhat is a js package so I need to `npm init --y`
2. Install hardhat library: `npm install --save-dev hardhat`
3. Create hardhat project: `npx hardhat`
4. Writing smart contract 
5. Compile contract: `npx hardhat compile`
6. Install library: `npm install @nomicfoundation/hardhat-toolbox`
7. Create secrets.json for metamask account 
8. 
___
### Enviroment Params
Prepare the following params in `.env`:
* `ADMIN_KEY`: private key of an account with testnet ether. Use this account to deploy `Counter` and interact with `RelayHub` (deposit for `PayMaster`).
* `ETHERSCAN_TOKEN`: required if you want to deploy and verify your own `Counter`.
* `INFURA_URL`: create a free Infura account and get a testnet URL.
___
### Deploy Counter
Deploy and verify the contract. This step has been donw with Binance chain test network so you may reuse the contracts. If you choose to deploy your own contract, you need to setup the network in [hardhat.config.js](./hardhat.config.js), and then setup the deployed address in [address.js](./scripts/address.js).

```bash
npx hardhat run scripts/deploy.js --network testnet
```
