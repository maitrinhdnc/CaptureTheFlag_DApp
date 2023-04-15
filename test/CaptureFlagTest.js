const { expect } = require("chai");
const {RelayProvider} = require('@opengsn/provider');
const captureAddress = '0xC3349d88A8113bCa49CeC89D558AA66C90e34D12'
const CaptureFlag = require('../artifacts/contracts/CaptureTheFlag.sol/CaptureTheFlag.json');
const Web3 = require('web3');

describe("Test", function () {
  let web3;

  before (async function captureFlagUI(){

      web3 = new Web3('https://endpoints.omniatech.io/v1/bsc/testnet/public');

      const paymasterAddress = '0x01a5a06C5Ba6E5f8FC9CB060492fae1b3d03c69d';

      const config = {
        paymasterAddress,
        loggerConfiguration: {
          logLevel: 'error'
        }
      }

      const gsnProvider = RelayProvider.newProvider(
        {
          provider: web3.currentProvider, 
          config
        }
      )
      await gsnProvider.init()
      web3.setProvider(gsnProvider);

      user = gsnProvider.newAccount();
      contract = new web3.eth.Contract(CaptureFlag.abi, captureAddress, {
        from: user.address,
        gasPrice: 0
      });
  });
  it('Compare init address with init current holder', async function () {
    const initHolder = await contract.methods.currentHolder().call();
    const initAddress = '0x0000000000000000000000000000000000000000'
    expect(initHolder).to.equal(initAddress);
  });
  it('Capture Flag from gasless user', async function () {

    await contract.methods.captureTheFlag().send({gas: 100000});

    const currentHolder = await contract.methods.currentHolder().call();

    // check lastCaller
    expect(currentHolder).to.equal(user.address);
  });

});
