const ethers = require('ethers');
require('dotenv').config();

async function main() {

  const url = process.env.TEXT_ALCHEMY_GOERLI_URL;

  let artifacts = await hre.artifacts.readArtifact("Faucet");

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.TEST_PRIVATE_KEY_APPEX;

  let wallet = new ethers.Wallet(privateKey, provider);

  //create instance of faucet factory

  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let faucet = await factory.deploy();

  console.log("Faucet address: ", faucet.address);

  await faucet.deployed();
}

main().then(()=>process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1)
});
