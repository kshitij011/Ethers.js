// Tut by dapp university
const {ethers} = require("ethers");

const InfuraId = `https://mainnet.infura.io/v3/fb12722ef117437ebe0a0dcd6e06dd9a`;

const provider = new ethers.JsonRpcProvider(InfuraId);

// only specifiying functions that we need to interact instead of array format abi
const ERC20Abi = [
    "function name() view returns(string)",
    "function symbol() view returns(string)",
    "function totalSupply() view returns(uint)",
    "function balanceOf(address) view returns(uint)"
]

const contractAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";

const contract = new ethers.Contract(contractAddress, ERC20Abi, provider);

const main = async() => {
    const name = await contract.name();
    console.log("Name: ", name);

    const balanceOf = await contract.balanceOf('0x6c6Bc977E13Df9b0de53b251522280BB72383700');
    console.log("Balance: ", balanceOf);
    console.log("Formatted balance: ", ethers.formatEther(balanceOf));
}

main();