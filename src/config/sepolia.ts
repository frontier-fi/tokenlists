export default {
  name: 'sepolia',
  rpc: process.env.SEPOLIA_RPC_ENDPOINT,
  coingecko: {
    platformId: 'sepolia',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
}
