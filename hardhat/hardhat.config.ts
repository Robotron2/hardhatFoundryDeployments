import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"

const { SEPOLIA_API_KEY, ARC_URL, LISK_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env

const config: HardhatUserConfig = {
	solidity: "0.8.28",
	networks: {
		sepolia: {
			url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_API_KEY}`,
			accounts: [PRIVATE_KEY!],
		},
		arc: {
			url: `${ARC_URL}`,
			accounts: [PRIVATE_KEY!],
		},
		lisk: {
			url: `${LISK_URL}`,
			accounts: [PRIVATE_KEY!],
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY!,
	},
	sourcify: {
		enabled: true,
	},
}

export default config
