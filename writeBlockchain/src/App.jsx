import { useEffect } from 'react';
import './App.css'
import {ethers} from 'ethers';

function App() {

  const contractAddress = `0x82fd984d214F5F6766EE95f49AC73F629A9B90E0`;

  useEffect(()=>{
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

    const writeContract = async() => {
      // const provider = new ethers.providers.web3Provider(window.ethereum); //v5
      const provider = new ethers.BrowserProvider(window.ethereum);   //v6

      // let signer = null;
      // let provider;
      // if (window.ethereum == null) {
      //     console.log("MetaMask not installed; using read-only defaults")
      //     provider = ethers.getDefaultProvider()
      // } else {
      //     provider = new ethers.BrowserProvider(window.ethereum);
      //     signer = await provider.getSigner();
      // }

      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      // await contract.setValue(2);

      // sending eth to contract
      // await contract.sendEthContract({value: ethers.parseEther("0.1")});

      //receiving or sending ETH from contract to wallet address
      await contract.sendEthUser("0x33D0e2b5105a3267326b18B599bd57e6349F57b6", {value: ethers.parseEther("0.1"),});   // also need to specify the value which is to be sent
    }
    writeContract();
  }, []);

  return <div className="App"></div>
}

export default App
