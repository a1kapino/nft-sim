import './App.css';
import Web3 from 'web3';
import { Abi } from './NftSimContract/NftSim';

function App() {
 
  return (
    <div className="App">
      <div>You need to sign this message with your private key</div>
      <div>randomText</div>
      <div style="height: 50px"></div>
      <div>Your ethereum address:</div>
      <input type="text" />
      <div>Signed message:</div>
      <texarea></texarea>
      <button >Mint</button>
    </div>
  );
}

export default App;
