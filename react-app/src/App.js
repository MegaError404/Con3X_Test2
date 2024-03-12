import React, { useState } from 'react'; 
import './App.css';
import {JsonRpcProvider, Contract} from "ethers";

function App() {

  const contractAddress = "contracts/Messanger.sol";
  const provider = new JsonRpcProvider();
  const contractABI = [
    {
      constant: false,
      inputs: [{ name: 'message', type: 'string' }],
      name: 'setMessage',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
  },
  {
      constant: true,
      inputs: [],
      name: 'getMessage',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
  }
  ];

  const contract = new Contract(contractAddress, contractABI, provider);

  const [_Message, setMessage] = useState('');

  const handleSaveMessage = () => {
    const _message = document.getElementById('Message_txt').value;
    contract.setMessage(_message);
  };

  const handleGetMessage = () => {
    setMessage(contract.getMessage());
  };

  return (

    <div className="App">

      <header className="App-header">

        <div>
          <p>

          </p>
        </div>

      </header>

      <body className='App-body'>

        <div>
          <label> Enter Message Text: </label>
          <input type='text' id='Message_txt'></input>
        </div>

        <div className='Normal-div-space'>
          <button onClick={handleSaveMessage}>Save Message</button>
          <button onClick={handleGetMessage}>Get Message</button>
        </div>

        <div className='Normal-div-space'>
          <p> Message: {_Message} </p>
        </div>

      </body>

    </div>

  );
}

export default App;
