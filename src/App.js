import './App.css'
import { ethers } from 'ethers'
import React, { useState } from 'react'
import ConnectButton from './components/ConnectButton'
import ContractButton from './components/ContractButton'

function App() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const [signer, setSigner] = useState(provider.getSigner())

  window.ethereum.on('accountsChanged', () => {
    setSigner(provider.getSigner())
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <ConnectButton provider={provider} setSigner={setSigner} />
        <ContractButton signer={signer} />
      </header>
    </div>
  )
}

export default App
