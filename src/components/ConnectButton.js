import React from 'react'

export default function ConnectButton({ provider, setSigner }) {

    const connectToMetamask = async() => {
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        setSigner(signer)
    }

	return (
		<button onClick={connectToMetamask}>
			Connect Wallet
		</button>
	)
}