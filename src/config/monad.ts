import { drpcRpc } from './drpc'

export default {
  name: 'monad',
  rpc: drpcRpc('monad'),
  coingecko: {
    platformId: 'monad',
  },
  trustWalletNetwork: 'monad',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
