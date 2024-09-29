const hre = require("hardhat");
const fs = require("fs");


async function main() {
  
  const NFT = await hre.ethers.getContractFactory("myNfts");
  const nft = await NFT.deploy();
  await nft.deployed();

  console.log("NFT contract deployed to the address: ", nft.address);

  // export the addresses to metadata/contractAddress.js 
  fs.writeFileSync(
    "metadata/contractAddress.js",
    `
    export const nftAddress = "${nft.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
