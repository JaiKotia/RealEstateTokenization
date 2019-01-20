import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
		JSON.parse(CampaignFactory.interface),
		'0xc614cee9f6ca79B0698322Bae2c7890D394b3c1A'
	);

export default instance;