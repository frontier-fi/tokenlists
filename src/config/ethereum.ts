import { drpcRpc } from './drpc'

export default {
  name: 'ethereum',
  rpc: drpcRpc('ethereum') ?? 'https://mainnet.gateway.tenderly.co',
  coingecko: {
    platformId: 'ethereum',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
