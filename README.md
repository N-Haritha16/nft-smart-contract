NFT Smart Contract (ERC‑721)

ERC‑721 NFT smart contract implemented with Hardhat, fully tested and runnable inside a Docker container.

Project structure

contracts/ – Solidity NFT smart contract implementation.​
test/ – Hardhat test suite covering core ERC‑721 behavior (minting, transfers, approvals, reverts).​
scripts/ – Optional deployment or helper scripts.​
hardhat.config.js – Hardhat network and compiler configuration.​
Dockerfile – Container image that installs dependencies, compiles contracts, and runs tests.​

Prerequisites (local, no Docker)

Node.js 18+ and npm installed.​

Install dependencies:

npm install

Compile contracts:

npx hardhat compile

Run tests:

npx hardhat test

Running tests in Docker

The repository includes a Dockerfile that builds an isolated environment and executes the full Hardhat test suite.

Build image

docker build -t nft-contract .

This installs Node dependencies and runs npx hardhat compile inside the image.​

Run tests inside container

docker run nft-contract

This executes npx hardhat test as the container’s default command; all tests must pass with no additional arguments.​

GitHub Actions (no local Docker needed)

A GitHub Actions workflow at .github/workflows/docker-image.yml automatically builds the Docker image and runs the tests on every push or pull request to main.​

On each run it executes:

docker build -t nft-contract .

docker run nft-contract

Check the Actions tab in the repository to see logs and confirm that the container builds and all tests pass.​
