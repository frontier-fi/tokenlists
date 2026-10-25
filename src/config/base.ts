import { drpcRpc } from './drpc'

export default {
  name: 'base',
  rpc: drpcRpc('base'),
  coingecko: {
    platformId: 'base',
  },
  trustWalletNetwork: 'base',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
