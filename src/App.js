/* eslint-disable */
import './App.css';
import { ethers } from "ethers";
import { useState } from 'react';
const Web3 = require('web3')

function App() {
  // const [provider, setProvider] = useState(new ethers.providers.Web3Provider(window.ethereum));
  const [message, setMessage] = useState('NA');
  const [to, setTo] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [messageHash, setMessageHash] = useState('NA');

  const changeMessageHash = () => {
    var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
    setMessageHash(web3.utils.soliditySha3(to, tokenId));
  }

  return (
    <div className="App">
      <form>
        <label>
          address to
          <input type="text" value={to} onChange={(event) => { setTo(event.target.value) }} />
        </label>

        <label>
          tokenId
          <input type="text" value={tokenId} onChange={(event) => { setTokenId(event.target.value) }} />
        </label>

      </form>
      <button onClick={changeMessageHash}>Hash</button>
      <p>Hash:{messageHash}</p>


      <button onClick={async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const signedMessage = await signer.signMessage(ethers.utils.arrayify(MessageHash))
        setMessage(signedMessage)
      }
      }>Sign NFT Issue</button>

      <p>Signature: {message}</p>
    </div >
  );
}

export default App;
