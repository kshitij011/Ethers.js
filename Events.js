const {ethers, JsonRpcProvider} = require("ethers");

const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/fb12722ef117437ebe0a0dcd6e06dd9a`);

const contractAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";   // DAI stable coin

const ABI = [
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const contract = new ethers.Contract(contractAddress, ABI, provider);

const main = async() => {
    // accessing events
    const latestBlock = await provider.getBlockNumber();    //returns the latest block
    const events = await contract.queryFilter("Transfer", latestBlock - 10, latestBlock);
    console.log(events);

    //getting block info
    const blockInfo = await provider.getBlock(latestBlock);
    console.log(blockInfo);
}

main();