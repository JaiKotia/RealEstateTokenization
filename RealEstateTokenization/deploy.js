const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');


const provider = new HDWalletProvider(
		'pledge riot corn swim van mix account inch mail swift obtain raven',
		'https://rinkeby.infura.io/v3/7d3df12713b0411c8663e21e8d5d5c1c'
	);

const web3 = new Web3(provider);


const deploy = async() => {

		const accounts = await web3.eth.getAccounts();
		console.log('Attempting to deploy from account ', accounts[0]);

		const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
					.deploy({ data: '0x' + compiledFactory.bytecode })
					.send({ gas: '1000000', from: accounts[0] });


		console.log('Contract deployed to ', result.options.address);

};

deploy();