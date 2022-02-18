const express = require('express');
const app = express();
const Abi = require('./NftSimContract/NftSim');
const Web3 = require('web3');
const web3 = new Web3("https://rinkeby.infura.io/v3/9d3ffeb0fcc446aab36e9264a1176d1a");

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  const contractAddress = "0xFcECFe8a10724eF61B2Df1F0E50D1e576F1432c8";
  const nftContract = new web3.eth.Contract(Abi.abi, contractAddress);
  var batch = new web3.BatchRequest();
  nftContract.methods.balanceOf("0xCD68f6E337d2072C83d5C0063d5BFBc378D8B6BB").call((err, response) => {
    console.log(err);
    console.log(response);
    res.send('done');
  });
  
  
});

app.listen(4000,function() { console.log('started') });
