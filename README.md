1. I build DApp using Hardhat is a js package so I need to `npm init --y`
2. Install hardhat library: `npm install --save-dev hardhat`
3. Create hardhat project: `npx hardhat`
4. Writing smart contract 
5. Compile contract: `npx hardhat compile`
6. Install library: `npm install @nomicfoundation/hardhat-toolbox`
7. Create secrets.json for metamask account 
8. I use OpengGSN version stable 2.2.5: https://docs-v2.opengsn.org/networks/addresses.html
___
### Deploy Counter
Deploy and verify the contract. This step has been donw with Binance chain test network so you may reuse the contracts. If you choose to deploy your own contract, you need to setup the network in [hardhat.config.js](./hardhat.config.js), and then setup the deployed address in [address.js](./scripts/address.js).

```bash
npx hardhat run scripts/deploy.js --network testnet
```
___
### Test
The test simple creates a new gasless user on the fly, and use the gasless user to increment the counter.

```bash
npx hardhat test --network testnet
```

Results:
```bash
  Test 
    ✔ Compare init address with init current holder (280ms)
    ✔ Capture Flag from gasless user (36989ms)


  2 passing (41s)
```
___
If got some errors:
1.   Error: Not a paymaster contract: CONNECTION ERROR: Couldn't connect to node https://endpoints.omniatech.io/v1/bsc/testnet/public.
2.  Error: Failed to relay call. Results:
Relaying errors (1):
https://gr.uprotel.com/gsn1 => CONNECTION ERROR: Couldn't connect to node https://endpoints.omniatech.io/v1/bsc/testnet/public.
3. Error: Timeout of 40000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (C:\Users\trinh.mai_ecotruck\Desktop\hardhat\CaptureTheFlag_DApp\test\CaptureFlagTest.js)


```bash
npx hardhat run scripts/deploy.js --network testnet
Get new contract address and add to file need address of smartcontract (test)
npx hardhat test --network testnet
```
