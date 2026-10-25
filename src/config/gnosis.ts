import { drpcRpc } from './drpc'

export default {
  name: 'gnosis',
  rpc: drpcRpc('gnosis'),
  coingecko: {
    platformId: 'xdai',
  },
  trustWalletNetwork: 'xdai',
  addresses: {
    multicaller: '0xbb6fab6b627947dae0a75808250d8b2652952cb5',
  },
}
