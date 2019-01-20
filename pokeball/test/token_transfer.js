const TransferPokeBall = artifacts.require('./TransferPokeBall.sol');  
const PokeBall = artifacts.require('./PokeBall.sol');  
  
const BigNumber = web3.BigNumber;  
  
const should = require('chai')  
 .use(require('chai-as-promised'))  
 .use(require('chai-bignumber')(BigNumber))  
 .should();  
  
let sender, pokeball;  
  
contract('token_management', async (accounts) => {  
  
	 let accountA, accountB, accountC, accountD;  
	  
	 [accountA, accountB, accountC, accountD ] = accounts;  
	  
	 beforeEach(async () => {  
	  sender = await TransferPokeBall.new();  
	  pokeball = await PokeBall.new();  
	  
	  await sender.addNewToken('PKB', pokeball.address);  
	 });


 	it("should be able to transfer sender token to another wallet", async() => { 
 		// When transfering  token, multiple by
 		//figure of decimal to get exact token e.g
 		//to send 5 BEAR = 5e5, where 5 is the decimal places 
 		let amount = new BigNumber(50);  
  
  		//Account a approve contract to spend on behalf
		await pokeball.approve(sender.address, amount,{from: accountA});  
  
 		await sender.transferTokens('PKB',accountB, amount,{from: accountA});  
  
  		let balance = ((await pokeball.balanceOf(accountB)).toString());  
  
  		balance.should.equal(amount.toString())  
	});
});
