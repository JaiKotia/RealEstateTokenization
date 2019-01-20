var express = require("express");
var app = express();
var ejs = require("ejs");
var bodyParser = require("body-parser");
var web3 = require('web3');
var MetaMaskConnector = require('node-metamask');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static('public'));


app.get("/", function(req, res){

    const connector = new MetaMaskConnector({
    port: 3333, // this is the default port
    onConnect() { console.log('MetaMask client connected') }, // Function to run when MetaMask is connected (optional)
    });

    connector.start().then(() => {
  // Now go to http://localhost:3333 in your MetaMask enabled web browser.
    const web3 = new Web3(connector.getProvider());
  // Use web3 as you would normally do. Sign transactions in the browser.
});

    //isInstalled();
    //isLocked();
    
});

function isInstalled() {
   if (typeof web3 !== 'undefined'){
      console.log('MetaMask is installed')
   } 
   else{
      console.log('MetaMask is not installed')
   }
}

function isLocked() {
   web3.eth.getAccounts(function(err, accounts){
      if (err != null) {
         console.log(err)
      }
      else if (accounts.length === 0) {
         console.log('MetaMask is locked')
      }
      else {
         console.log('MetaMask is unlocked')
      }
   });
}

/***
app.get("/all_time_team", function(req,res){
    res.render("all_time_team", {players: players});
});

app.post("/all_time_team", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newPlayer = {name: name, image: image};
    players.push(newPlayer);
    res.render("all_time_team", {players: players});
});
***/

app.listen(3005, () => console.log('Server listening on port 3005!'));
