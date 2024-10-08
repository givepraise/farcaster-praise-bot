export const NETWORK_IDS = {
    MAIN_NET: 1,
    ROPSTEN: 3,
    SEPOLIA: 11155111,
    XDAI: 100,
    POLYGON: 137,
    OPTIMISTIC: 10,
    OPTIMISM_SEPOLIA: 11155420,
    BSC: 56,
    CELO: 42220,
    CELO_ALFAJORES: 44787,
    ETC: 61,
    MORDOR_ETC_TESTNET: 63,

    ARBITRUM_MAINNET: 42161,
    ARBITRUM_SEPOLIA: 421614,

    BASE_MAINNET: 8453,
    BASE_SEPOLIA: 84532,

    ZKEVM_MAINNET: 1101,
    ZKEVM_CARDONA: 2442,

    STELLAR_MAINNET: 1500,

    // https://docs.particle.network/developers/other-services/node-service/solana-api
    SOLANA_MAINNET: 101,
    SOLANA_TESTNET: 102,
    SOLANA_DEVNET: 103,
};

export const NETWORK_NAMES = {
    BSC: 'bsc',
    XDAI: 'xdaichain',
    MAINNET: 'mainnet',
    ROPSTEN: 'ropsten',
    SEPOLIA: 'sepolia',
    POLYGON: 'polygon-mainnet',
    OPTIMISTIC: 'optimistic-mainnet',
    OPTIMISM_SEPOLIA: 'optimism-sepolia-testnet',
    CELO: 'Celo',
    CELO_ALFAJORES: 'Celo Alfajores',
    ETC: 'Ethereum Classic',
    MORDOR_ETC_TESTNET: 'Ethereum Classic Testnet',
    ARBITRUM_MAINNET: 'Arbitrum Mainnet',
    ARBITRUM_SEPOLIA: 'Arbitrum Sepolia',
    BASE_MAINNET: 'Base Mainnet',
    BASE_SEPOLIA: 'Base Sepolia',

    ZKEVM_CARDONA: 'ZKEVM Cardona',
    ZKEVM_MAINNET: 'ZKEVM Mainnet',

    STELLAR_MAINNET: 'Stellar Mainnet',
};

export const baseAttestationScan = {
    8453: 'https://base.easscan.org/attestation/view/',
    84532: 'https://base-sepolia.easscan.org/attestation/view/',
}