const {ethers} = require("ethers");

const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/fb12722ef117437ebe0a0dcd6e06dd9a`);

const account1 = "0x8C937303351Bc71fe685aC90878E57E7D68cfe12"; // sender
const account2 = "0x33D0e2b5105a3267326b18B599bd57e6349F57b6"; //  receipient

const privateKey1 = "";

const contractAddress = "0x82fd984d214F5F6766EE95f49AC73F629A9B90E0";

const ABI = [
    "function contratBalance() public view returns (uint)",
    "function sendEthUser(address _user) public payable"
]
const contract = new ethers.Contract(contractAddress, ABI, provider);

const wallet = new ethers.Wallet(privateKey1, provider);

const main = async() =>{

    // Before balance
    const contractBalance = await contract.contratBalance();
    console.log("Before contract balance: ", ethers.formatEther(contractBalance));
    const beforeReceiverBal = await provider.getBalance(account1);
    console.log("Receiver balance before: ", ethers.formatEther(beforeReceiverBal));

    // Connecting contract to wallet
    const contractWithWallet = contract.connect(wallet);
    contractWithWallet.sendEthUser(account2, {value: ethers.parseEther("0.025")})

    //After balance
    const contractBalanceAfter = await contract.contratBalance();
    console.log("After contract balance: ", ethers.formatEther(contractBalanceAfter));
    const afterReceiverBal = await provider.getBalance(account1);
    console.log("Receiver balance after: ", ethers.formatEther(afterReceiverBal));


    // // Balance before transfer
    // const beforeSenderBal = await provider.getBalance(account1);
    // const beforeReceiverBal = await provider.getBalance(account2);
    // console.log("Sender balance before: ", ethers.formatEther(beforeSenderBal));
    // console.log("Receiver balance before: ", ethers.formatEther(beforeReceiverBal));

    // const tx = await wallet.sendTransaction({
    //     to: account2,
    //     value: ethers.parseEther("0.02")
    // })
    // await tx.wait();
    // console.log(tx);

    // // Balance after transaction
    // const afterSenderBal = await provider.getBalance(account1);
    // const afterReceiverBal = await provider.getBalance(account2);
    // console.log("Sender balance after: ", ethers.formatEther(afterSenderBal));
    // console.log("Receiver balance after: ", ethers.formatEther(afterReceiverBal));
}

main();