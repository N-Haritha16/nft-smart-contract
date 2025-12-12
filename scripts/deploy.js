// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying with:", deployer.address);

  const NftCollection = await ethers.getContractFactory("NftCollection");
  const contract = await NftCollection.deploy(
    "NftCollection",
    "NFTC",
    "ipfs://base-uri/",
    deployer.address
  );

  await contract.waitForDeployment();
  console.log("NftCollection deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
