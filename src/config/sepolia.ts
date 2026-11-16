import { drpcRpc } from './drpc'

export default {
  name: 'sepolia',
  rpc: drpcRpc('sepolia') ?? 'https://ethereum-sepolia-rpc.publicnode.com',
  coingecko: {
    platformId: 'sepolia',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
}
