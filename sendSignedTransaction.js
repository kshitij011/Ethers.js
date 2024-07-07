const {ethers} = require("ethers");

const provider = new JsonRpcProvider(`https://sepolia.infura.io/v3/fb12722ef117437ebe0a0dcd6e06dd9a`);

const account1 = "" // sender
const account2 = "" //  receipient

const privateKey1 = ""

const wallet = ethers.Wallet(privateKey1, provider)

const main = async() =>{


    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.parseEther("0.1")
    })

    await tx.wait()
    console.log(tx);
}