const {ethers, JsonRpcProvider, formatEther} = require("ethers");
const provider = new JsonRpcProvider(`https://sepolia.infura.io/v3/fb12722ef117437ebe0a0dcd6e06dd9a`);

const contractAddress = `0x82fd984d214F5F6766EE95f49AC73F629A9B90E0`;
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contratBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

async function contractInteraction(){
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    const contractName = await contract.name();
    console.log("Contract name: ", contractName);

    const num = await contract.getValue();
    console.log("Number value: ", num);

    const contractBalance = await contract.contratBalance();
    console.log("Contract balance: ", contractBalance);

    const userBalance = await contract.accountBalance("0x33D0e2b5105a3267326b18B599bd57e6349F57b6");
    console.log("User Balance: ", userBalance);

    const balanceETH = formatEther(userBalance);
    console.log("User Balance in ETH: ", balanceETH);
}

contractInteraction();