const express = require('express');
const app = express();
const Abi = require('./NftSimContract/NftSim');
const Web3 = require('web3');
const web3 = new Web3("https://rinkeby.infura.io/v3/9d3ffeb0fcc446aab36e9264a1176d1a");

// respond with "hello world" when a GET request is made to the homepage
app.get('/mint', (req, res) => {
  const contractAddress = "0xFcECFe8a10724eF61B2Df1F0E50D1e576F1432c8";
  const nftContract = new web3.eth.Contract(Abi.abi, contractAddress);
  const query = nftContract.methods.mint("0xCD68f6E337d2072C83d5C0063d5BFBc378D8B6BB", "0x380634886650");
  const encodedABI = query.encodeABI();
  const key = "0x21a2c840f705dc08eec43465d8e6a9017202e7bf59d840c38a65791bc6cda63c";
  web3.eth.accounts.signTransaction(
    {
      data: encodedABI,
      from: "0xCD68f6E337d2072C83d5C0063d5BFBc378D8B6BB",
      gas: 2000000,
      to: contractAddress,
    },
    key,
    false,
  ).then(signedTx => {
    return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  }).then(result => {
    console.log(result);
    res.send('done');
  });
});

app.get('/ownerOf', (req, res) => {
  const contractAddress = "0xFcECFe8a10724eF61B2Df1F0E50D1e576F1432c8";
  const nftContract = new web3.eth.Contract(Abi.abi, contractAddress);
  nftContract.methods.ownerOf("0x380634886650").call((err, response) => {
    console.log(err);
    console.log(response);
    res.send("done");
  })
  
});

app.get('/create', (req, res) => {
  const account = web3.eth.accounts.create();
  res.send(account);
});

app.get('/balance', (req, res) => {
  web3.eth.getBalance("0xC23AaDf0906c011cBc346e24Ed553b4979925247").then(response => {
    res.send(response);
  });
});
  // @ts-ignore: property exists
  

app.listen(4000,function() { console.log('started') });
