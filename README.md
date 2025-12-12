# NFT Smart Contract

## How to run locally (without Docker)

- Install dependencies: `npm install`
- Compile: `npx hardhat compile`
- Run tests: `npx hardhat test`

## How to run with Docker

- Build image: `docker build -t nft-contract .`
- Run tests in container: `docker run nft-contract`

## Contract

- Main contract: `contracts/NftCollection.sol`
- Standard: ERC-721 compatible
- Example features:
  - Role-based minting (MINTER_ROLE, admin)
  - Base URI stored on-chain
  - `totalMinted()` to track supply
  - Access control via OpenZeppelin `AccessControl`
