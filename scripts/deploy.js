const hre = require("hardhat");
// Address with gasless accept all: "0xC3349d88A8113bCa49CeC89D558AA66C90e34D12"

async function main() {
  const CaptureFlag = await hre.ethers.getContractFactory("CaptureTheFlag");

  const forwarder = '0xeB230bF62267E94e657b5cbE74bdcea78EB3a5AB'
  
  const captureFlag = await CaptureFlag.deploy(forwarder);

  await captureFlag.deployed();

  console.log(
    `CaptureTheFlag with gasless deployed to ${captureFlag.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
