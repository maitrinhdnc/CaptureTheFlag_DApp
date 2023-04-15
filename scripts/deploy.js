// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// Address without gasless: "0x6cc4082870a75265Ff6326cF5209A5aDbe56e280"
async function main() {
  const CaptureFlag = await hre.ethers.getContractFactory("CaptureTheFlag");
  const captureFlag = await CaptureFlag.deploy();

  await captureFlag.deployed();

  console.log(
    `CaptureFlag deployed to ${captureFlag.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
