import { drpcRpc } from './drpc'

export default {
  name: 'plasma',
  rpc: drpcRpc('plasma'),
  coingecko: {
    platformId: 'plasma',
  },
  trustWalletNetwork: 'plasma',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
