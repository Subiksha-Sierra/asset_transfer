const hre = require("hardhat");

async function main() {
    const TransferSepoliaETH = await hre.ethers.getContractFactory("TransferSepoliaETH");
    const transferSepoliaETH = await TransferSepoliaETH.deploy();
    
    await transferSepoliaETH.deployed();
    
    console.log("TransferSepoliaETH deployed to:", transferSepoliaETH.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
