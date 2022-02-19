import './popup.css';
import { ethers } from 'ethers';

(function() {
  function onLoad() {
    const onStartClick = async () => {
      const textArea = document.getElementById('mnemonicTextArea');
      var output = document.getElementById('output');
      const hdNode = ethers.utils.HDNode.fromMnemonic(textArea.value);
      
      const provider = new ethers.providers.EtherscanProvider("rinkeby");
      const balance = await provider.getBalance(hdNode.address);
      // output.innerHTML = balance;
      output.innerHTML = hdNode.address;
    }
    var startButton = document.getElementById('startButton');
    startButton.addEventListener("click", onStartClick);
  }

  document.addEventListener('DOMContentLoaded', onLoad);

})();
