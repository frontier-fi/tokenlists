import { drpcRpc } from './drpc'

export default {
  name: 'hyperevm',
  rpc: drpcRpc('hyperliquid'),
  coingecko: {
    platformId: 'hyperevm',
  },
  trustWalletNetwork: 'hyperliquid',
  addresses: {
    multicaller: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
}
