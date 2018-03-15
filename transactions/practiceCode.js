var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//console.log(web3.eth.accounts);

//to find account 1
//console.log(web3.eth.accounts[0]);

//To find balance
//console.log(web3.eth.getBalance(web3.eth.accounts[0]));

//Balance in ether
//console.log(web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0])).toNumber());

//Simplification
var acct1 = web3.eth.accounts[0];
var acct2 = web3.eth.accounts[1];

var balance = (acct) => {return web3.fromWei(web3.eth.getBalance(acct)).toNumber()};

//Setting up a transaction
hash = web3.eth.sendTransaction({from: acct1, to: acct2, value: web3.toWei(1, "ether"), gasLimit: 21000, gasPrice: 20000000000});
console.log(hash);
