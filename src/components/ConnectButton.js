import React from 'react'
import { ethers } from "ethers";

export default function ConnectButton() {

    const connectToMetamask = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        console.log("Account:", await signer.getAddress())
    }

	return (
		<button onClick={connectToMetamask}>
			Connect Wallet
		</button>
	)
}