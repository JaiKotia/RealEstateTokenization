import Web3 from 'web3';

let web3;

if(typeof window!=='undefined' && typeof window.web3!=='undefined')
{
	web3 = new Web3(window.web3.currentProvider);
}

else
{
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/7d3df12713b0411c8663e21e8d5d5c1c'
		);

	web3 = new Web3(provider);
}

export default web3;