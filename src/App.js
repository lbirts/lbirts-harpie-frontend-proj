import './App.css';
import ConnectButton from './components/ConnectButton';
import ContractButton from './components/ContractButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConnectButton/>
        <ContractButton/>
      </header>
    </div>
  );
}

export default App;
