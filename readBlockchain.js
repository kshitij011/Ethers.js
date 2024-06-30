const {ethers, JsonRpcProvider} = require("ethers");

// communicate with blockchain.
const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/fb12722ef117437ebe0a0dcd6e06dd9a`);

async function getBlock(){
    const block = await provider.getBlockNumber();
    console.log("Current Block Number:", block);

    const balance = await provider.getBalance("0x33D0e2b5105a3267326b18B599bd57e6349F57b6");
    console.log("Account balance: ", balance);
}

getBlock();