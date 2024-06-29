const {ethers, JsonRpcProvider} = require("ethers");

// communicate with blockchain.
const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/fb12722ef117437ebe0a0dcd6e06dd9a`);

async function getBlock(){
    const block = await provider.getBlockNumber();
    console.log("Current Block Number:", block);
}

getBlock();