const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/myNfts.sol/myNfts.json");

const tokenAddress = "0x02bC843f1212F03088FC64F5ac9DBe4fcD14fCA0"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x54eF9b9ee68e3C496EC68ab54aeC626f602ba7D7"; 

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
