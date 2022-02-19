import './popup.css';
import { ethers } from 'ethers';

(function() {
  function onLoad() {
    const onStartClick = async () => {
      const mnemonicInput = document.getElementById('mnemonicTextArea');
      const challengeInput = document.getElementById('challengeTextArea');
      var addressDiv = document.getElementById('address');
      var signedChallengeDiv = document.getElementById('signedChallenge');
      const wallet = ethers.Wallet.fromMnemonic(mnemonicInput.value);
      addressDiv.innerHTML = wallet.address;
      const signedMessage = await wallet.signMessage(challengeInput.value);
      signedChallengeDiv.innerHTML = signedMessage;
    }
    var startButton = document.getElementById('startButton');
    startButton.addEventListener("click", onStartClick);
  }

  document.addEventListener('DOMContentLoaded', onLoad);

})();
