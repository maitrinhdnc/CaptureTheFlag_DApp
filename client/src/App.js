import './App.css';
import CaptureFlag from "./artifacts/contracts/CaptureTheFlag.sol/CaptureTheFlag.json"
import { ethers } from "ethers"
const captureAddress = '0x6cc4082870a75265Ff6326cF5209A5aDbe56e280'

function App() {
  async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts'})
  }
  async function captureFlagUI(){
    if (typeof window.ethereum !== 'undefined'){
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer =  provider.getSigner();
      const contract = new ethers.Contract(captureAddress, CaptureFlag.abi, signer)
      const transaction = await contract.captureTheFlag();
      await transaction.wait()
    }
  }
      
  return (
    <div className="App">
    <button
    onClick = {captureFlagUI}
    className='custom-button'>Capture The Flag</button>
  </div>
  );
}

export default App;