const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NftCollection", function () {
  async function deployFixture() {
    const [admin, user] = await ethers.getSigners();
    const Factory = await ethers.getContractFactory("NftCollection");
    const contract = await Factory.deploy(
      "NftCollection",
      "NFTC",
      "ipfs://base-uri/",
      admin.address
    );
    await contract.waitForDeployment();
    return { contract, admin, user };
  }

  it("initializes name, symbol, totalMinted", async () => {
    const { contract } = await deployFixture();
    expect(await contract.name()).to.equal("NftCollection");
    expect(await contract.symbol()).to.equal("NFTC");
    expect(await contract.totalMinted()).to.equal(0);
  });

  it("allows minter to mint", async () => {
    const { contract, admin, user } = await deployFixture();
    await expect(contract.connect(admin).mint(user.address))
      .to.emit(contract, "Transfer")
      .withArgs(ethers.ZeroAddress, user.address, 1n);

    expect(await contract.totalMinted()).to.equal(1);
    expect(await contract.ownerOf(1n)).to.equal(user.address);
  });

  it("blocks non‑minter from minting", async () => {
    const { contract, user } = await deployFixture();
    await expect(contract.connect(user).mint(user.address)).to.be.reverted;
  });
});
