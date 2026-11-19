import { drpcRpc } from './drpc'

export default {
  name: 'sepolia',
  rpc: drpcRpc('sepolia') ?? 'https://sepolia.gateway.tenderly.co',
  coingecko: {
    platformId: 'sepolia',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
}
