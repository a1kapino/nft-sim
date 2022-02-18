import './App.css';
import Web3 from 'web3';
import { Abi } from './NftSimContract/NftSim';

function App() {
  const mintPhoneNumber = async () => {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const contractAddress = "0xFcECFe8a10724eF61B2Df1F0E50D1e576F1432c8";
    const nftContract = web3.eth.Contract(Abi.abi, contractAddress);
    await nftContract.methods
      .mint("0xCD68f6E337d2072C83d5C0063d5BFBc378D8B6BB", 380634886650)
      .call();
  };
  return (
    <div className="App">
      <button onClick={mintPhoneNumber}>Mint</button>
    </div>
  );
}

export default App;
