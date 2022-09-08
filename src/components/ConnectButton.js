import React from 'react'

export default function ConnectButton({ provider, setSigner }) {

    const connectToMetamask = async() => {
        await provider.send('eth_requestAccounts', [])
        setSigner(provider.getSigner())
    }

	return (
		<button onClick={connectToMetamask}>
			Connect Wallet
		</button>
	)
}