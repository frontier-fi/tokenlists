import { drpcRpc } from './drpc'

export default {
  name: 'xlayer',
  rpc: drpcRpc('xlayer'),
  coingecko: {
    platformId: 'xlayer',
  },
  trustWalletNetwork: 'xlayer',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
