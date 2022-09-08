import React from 'react'
import { ethers } from 'ethers'

export default function ContractButton({ signer }) {
    const ABI = ['function approve(address _spender, uint256 _value) public returns (bool success)']
    const CONTACT_ADDRESS = '0xBA62BCfcAaFc6622853cca2BE6Ac7d845BC0f2Dc'
   
    const signContract = async() => {
        const currentAddress = signer.getAddress()
        try{
            const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer)
            const tx = await contract.approve(currentAddress, 0, { gasPrice: 0 })
            await tx.wait()
        }catch(err){
            console.log(err)
        }
    }

	return (
		<button onClick={signContract}>
			Sign Contract
		</button>
	)
}