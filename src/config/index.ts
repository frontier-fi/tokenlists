import { Network, Configs } from '../types'
import arbitrum from './arbitrum'
import hyperevm from './hyperevm'
import avalanche from './avalanche'
import base from './base'
import gnosis from './gnosis'
import ethereum from './ethereum'
import optimism from './optimism'
import polygon from './polygon'
import sepolia from './sepolia'
import plasma from './plasma'
import monad from './monad'

const config: Configs = {
  [Network.Arbitrum]: arbitrum,
  [Network.Avalanche]: avalanche,
  [Network.Base]: base,
  [Network.Gnosis]: gnosis,
  [Network.Ethereum]: ethereum,
  [Network.Optimism]: optimism,
  [Network.Polygon]: polygon,
  [Network.Sepolia]: sepolia,
  [Network.HyperEVM]: hyperevm,
  [Network.Plasma]: plasma,
  [Network.Monad]: monad,
}

export default config
