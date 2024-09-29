const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  
  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress =
    "https://sepolia.infura.io/v3/9ae2cdcf9b054557b0e0274f51ee81db";

  // connect to the Ethereum network Sepolia
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
 
  const signer = new ethers.Wallet(privateKey, provider);

  // The address of the deployed contract 
  const contractAddress = "0x02bC843f1212F03088FC64F5ac9DBe4fcD14fCA0";

  const OneNFT = await ethers.getContractFactory("myNfts", signer);
  const contract = await OneNFT.attach(contractAddress);

  // Call the mint function to mint 5 tokens
  await contract.mint(5);

  console.log("Successfully minted '5' tokens.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 
