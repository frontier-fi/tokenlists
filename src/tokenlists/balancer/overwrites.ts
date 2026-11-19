/* eslint-disable max-len */
import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.Ethereum]: {
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': {
      name: 'Wrapped Ether',
      extensions: {
        coingeckoId: 'weth',
      },
    },
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': {
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0xdAC17F958D2ee523a2206206994597C13D831ec7': {
      extensions: {
        coingeckoId: 'tether',
      },
    },
    '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0': {
      extensions: {
        coingeckoId: 'wrapped-steth',
      },
    },
    '0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f': {
      extensions: {
        coingeckoId: 'gho',
      },
    },
    '0x6c3ea9036406852006290770BEdFcAbA0e23A0e8': {
      extensions: {
        coingeckoId: 'paypal-usd',
      },
    },
    '0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD': {
      extensions: {
        coingeckoId: 'ripple-usd',
      },
    },
    '0xC139190F447e929f090Edeb554D95AbB8b18aC1C': {
      extensions: {
        coingeckoId: 'usdtb',
      },
    },
    '0xe343167631d89B6Ffc58B88d6b7fB0228795491D': {
      extensions: {
        coingeckoId: 'global-dollar',
      },
    },
    '0x48f9e38f3070AD8945DFEae3FA70987722E3D89c': {
      extensions: {
        coingeckoId: 'infinifi-usd',
      },
    },
    '0x6440f144b7e50D6a8439336510312d2F54beB01D': {
      extensions: {
        coingeckoId: 'liquity-bold-2',
      },
    },
    '0xcCcc62962d17b8914c62D74FfB843d73B2a3cccC': {
      extensions: {
        coingeckoId: 'cap-usd',
      },
    },
    '0x4f8e5DE400DE08B164E7421B3EE387f461beCD1A': {
      extensions: {
        coingeckoId: 'usdd',
      },
    },
    '0xFa2B947eEc368f42195f24F36d2aF29f7c24CeC2': {
      extensions: {
        coingeckoId: 'falcon-finance',
      },
    },
    '0x865377367054516e17014CcdED1e7d814EDC9ce4': {
      extensions: {
        coingeckoId: 'dola-usd',
      },
    },
    '0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68': {
      extensions: {
        coingeckoId: 'inverse-finance',
      },
    },
    '0xdC035D45d973E3EC169d2276DDab16f1e407384F': {
      extensions: {
        coingeckoId: 'usds',
      },
    },
    '0xB58E61C3098d85632Df34EecfB899A1Ed80921cB': {
      extensions: {
        coingeckoId: 'frankencoin',
      },
    },
    '0xB1c2Db5d6cA03FCe73dBd304d320bF76C55Ae1B1': {
      extensions: {
        coingeckoId: 'tangent-usg',
      },
    },
    '0x6aD038cA6C04e885630851278ca0a856Ad9a66Cc': {
      extensions: {
        coingeckoId: 'hastra-wrapped-ylds',
      },
    },
    '0x6B175474E89094C44Da98b954EedeAC495271d0F': {
      extensions: {
        coingeckoId: 'dai',
      },
    },
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf': {
      extensions: {
        coingeckoId: 'coinbase-wrapped-btc',
      },
    },
    '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704': {
      extensions: {
        coingeckoId: 'coinbase-wrapped-staked-eth',
      },
    },
    '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee': {
      extensions: {
        coingeckoId: 'wrapped-eeth',
      },
    },
    '0xae78736Cd615f374D3085123A210448E74Fc6393': {
      extensions: {
        coingeckoId: 'rocket-pool-eth',
      },
    },
    '0xbf5495Efe5DB9ce00f80364C8B423567e58d2110': {
      extensions: {
        coingeckoId: 'renzo-restaked-eth',
      },
    },
    '0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38': {
      extensions: {
        coingeckoId: 'stakewise-v3-oseth',
      },
    },
    '0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8': {
      extensions: {
        coingeckoId: 'treehouse-eth',
      },
    },
    '0xA35b1B31Ce002FBF2058D22F30f95D405200A15b': {
      extensions: {
        coingeckoId: 'stader-ethx',
      },
    },
    '0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7': {
      extensions: {
        coingeckoId: 'kelp-dao-restaked-eth',
      },
    },
    '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3': {
      extensions: {
        coingeckoId: 'ethena-usde',
      },
    },
    '0x9D39A5DE30e57443BfF2A8307A4256c8797A3497': {
      extensions: {
        coingeckoId: 'ethena-staked-usde',
      },
    },
    '0x66a1E37c9b0eAddca17d3662D6c05F4DECf3e110': {
      extensions: {
        coingeckoId: 'resolv-usr',
      },
    },
    '0x83F20F44975D03b1b09e64809B757c47f942BEeA': {
      extensions: {
        coingeckoId: 'savings-dai',
      },
    },
    '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9': {
      logoURI:
        'https://assets.coingecko.com/coins/images/12645/standard/aave-token-round.png?1720472354',
      extensions: {
        coingeckoId: 'aave',
      },
    },
    '0x514910771AF9Ca656af840dff83E8264EcF986CA': {
      extensions: {
        coingeckoId: 'chainlink',
      },
    },
    '0x58D97B57BB95320F9a05dC918Aef65434969c2B2': {
      extensions: {
        coingeckoId: 'morpho',
      },
    },
    '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32': {
      extensions: {
        coingeckoId: 'lido-dao',
      },
    },
    '0x0bfc9d54Fc184518A81162F8fB99c2eACa081202': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xD4fa2D31b7968E448877f69A96DE69f5de8cD23E': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x7Bc3485026Ac48b6cf9BaF0A377477Fff5703Af8': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x0FE906e030a44eF24CA8c7dC7B7c53A6C4F00ce9': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x775F661b0bD1739349b9A2A3EF60be277c5d2D29': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xb51EDdDD8c47856D81C8681EA71404Cec93E92c6': {
      decimals: 6,
      symbol: 'Aave Core pyUSD',
      name: 'Aave Core pyUSD',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x6A1792a91C08e9f0bFe7a990871B786643237f0F': {
      decimals: 18,
      symbol: 'aRLUSD',
      extensions: {
        coingeckoId: null,
      },
    },
    '0xC71Ea051a5F82c67ADcF634c36FFE6334793D24C': {
      decimals: 18,
      symbol: 'Aave Prime GHO',
      name: 'Aave Prime GHO',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x2FE4dC166ADbc0B39EdB47F4324F00A7374daBF7': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xE1753F2e00940cC31213dd92013cF019DFE4ca1d': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x2DF6DfbD281F127a3690c87E4572076778a9EDa5': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x531E90a2376902DE8915789Fcc1075e3B0c153E7': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x5eC44a70F309854fe04d495cFE1B5dA63DD1cc73': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x58C14a5E061c9bC6926c5b853445290F296C2F7B': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xAC2435E3C25e8246870D33ce0a26988A46d5DB68': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x7204B7Dbf9412567835633B6F00C3Edc3a8D6330': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x1e6ffa4e9F63d10B8820A3ab52566Af881Dab53c': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x097FFEDb80d4b2Ca6105a07a4D90eB739C45A666': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x4Ef53d2cAa51C447fdFEEedee8F07FD1962C9ee6': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xBb50A5341368751024ddf33385BA8cf61fE65FF9': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xc582F04d8a82795aa2Ff9c8bb4c1c889fe7b754e': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xe108fbc04852B5df72f9E44d7C29F47e7A993aDd': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x8c106EEDAd96553e64287A5A6839c3Cc78afA3D0': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x870F0BF29A25A40E7CC087cD5C53e70C11F2C8A8': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x8399C8Fc273bD165C346Af74A02e65f10e4FD78F': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x2411802D8BEA09be0aF8fD8D08314a63e706b29C': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/38032/large/fwsteth.png?1716322853',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x90551c1795392094FE6D29B758EcCD233cFAa260': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/38033/large/fWETH.png?1716322882',
      extensions: {
        coingeckoId: null,
      },
    },
    '0xDBDC1Ef57537E34680B898E1FEBD3D68c7389bCB': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x9F4330700a36B29952869fac9b33f45EEdd8A3d8': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/56069/large/BOLD_logo.png?1748265087',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x88887bE419578051FF9F4eb6C858A951921D8888': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xC5d6A7B61d18AfA11435a889557b068BB9f29930': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xc8CF6D7991f15525488b2A83Df53468D682Ba4B0': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xb45ad160634c528Cc3D2926d9807104FA3157305': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x08d23468A467d2bb86FaE0e32F247A26C7E2e994': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/53505/large/sINVx512.png?1736535779',
      extensions: {
        coingeckoId: null,
      },
    },
    '0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/52721/large/sUSDS_Coin.png?1734086971',
      extensions: {
        coingeckoId: null,
      },
    },
    '0xE5F130253fF137f9917C0107659A4c5262abf6b0': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xF17D6f98A5C6EAA99d149079984119e0A4EF6900': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x19ebb35279A16207Ec4ba82799CC64715065F7F6': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/71002/large/Frame_427319702.png?1765093510',
      extensions: {
        coingeckoId: null,
      },
    },
  },
  [Network.HyperEVM]: {
    '0x5555555555555555555555555555555555555555': {
      extensions: {
        coingeckoId: 'wrapped-hype',
      },
    },
    '0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb': {
      extensions: {
        coingeckoId: 'usdt0',
      },
    },
    '0xBe6727B535545C67d5cAa73dEa54865B92CF7907': {
      extensions: {
        coingeckoId: 'unit-ethereum',
      },
    },
    '0x02c6a2fA58cC01A18B8D9E00eA48d65E4dF26c70': {
      extensions: {
        coingeckoId: 'felix-feusd',
      },
    },
    '0x0a3d8466F5dE586FA5F6DE117301e2f90bCC5c48': {
      extensions: {
        coingeckoId: 'resolv-rlp',
      },
    },
    '0xBE65F0F410A72BeC163dC65d46c83699e957D588': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0x9B3a8f7CEC208e247d97dEE13313690977e24459': {
      name: 'Staked USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/sUSDp.svg',
    },
  },
  [Network.Polygon]: {
    '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
    '0x1D607Faa0A51518a7728580C238d912747e71F7a': {
      name: 'Data Economy Index',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x33d63Ba1E57E54779F7dDAeaA7109349344cf5F1/logo.png',
    },
    '0x282d8efCe846A88B159800bd4130ad77443Fa1A1': {
      name: 'Ocean Protocol',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x967da4048cD07aB37855c090aAF366e4ce1b9F48/logo.png',
    },
    '0x2934b36ca9A4B31E633C5BE670C8C8b28b6aA015': {
      name: 'THX Network',
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/refactor-for-multichain/assets/0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015.png',
    },
    '0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65': {
      name: 'Gemini Dollar',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd/logo.png',
    },
    '0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8': {
      name: 'Gnosis',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png',
    },
    '0x263534a4Fe3cb249dF46810718B7B612a30ebbff': {
      name: 'Perpetual Protocol',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xbC396689893D065F41bc2C6EcbeE5e0085233447/logo.png',
    },
    '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b': {
      name: 'Avalanche',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/2563ac9dc5369d8e3255cde663cf7f08e3c58914/blockchains/avalanchec/info/logo.png',
    },
    '0x3066818837c5e6eD6601bd5a91B0762877A6B731': {
      name: 'UMA Protocol',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png',
    },
    '0x87ff96aba480f1813aF5c780387d8De7cf7D8261': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png',
    },
    '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619': {
      name: 'Wrapped Ether',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    '0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4': {
      name: 'Solana',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/2563ac9dc5369d8e3255cde663cf7f08e3c58914/blockchains/solana/info/logo.png',
    },
    '0xE7804D91dfCDE7F776c90043E03eAa6Df87E6395': {
      name: 'DFX Token',
      logoURI:
        'https://raw.githubusercontent.com/dfx-finance/assets/add-dfx-logov3/blockchains/ethereum/assets/0x888888435FDe8e7d4c54cAb67f206e4199454c60/logo.png',
    },
    '0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0': {
      name: 'Meta',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2/logo.png',
    },
    '0xfBd8A3b908e764dBcD51e27992464B4432A1132b': {
      name: 'Index',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0954906da0Bf32d5479e25f46056d22f08464cab/logo.png',
    },
    '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D/logo.png',
    },
    '0xDB7Cb471dd0b49b29CAB4a1C14d070f27216a0Ab': {
      name: 'Bankless DAO',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198/logo.png',
    },
    '0xbD7A5Cf51d22930B8B3Df6d834F9BCEf90EE7c4f': {
      name: 'Ethereum Name Service',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72/logo.png',
    },
    '0xdb95f9188479575F3F718a245EcA1B3BF74567EC': {
      name: 'Gitcoin',
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0xde30da39c46104798bb5aa3fe8b9e0e1f348163f.png',
    },
    '0xEC38621e72D86775a89C7422746de1f52bbA5320': {
      symbol: 'DUSD',
      name: 'DUSD',
    },
    '0xc04296aa4534f5a3bab2d948705bc89317b2f1ed': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Ethereum USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x2dca80061632f3f87c9ca28364d1d0c30cd79a19': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x31f5ac91804a4c0b54c0243789df5208993235a1': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x87a1fdc4c726c459f597282be639a045062c0e46': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x109b890060ae0249c1e67BF85931C1a087A0A5A3': {
      name: 'Swiss Green Gold ETP',
      symbol: 'AUCO2',
      decimals: 18,
    },
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270': {
      symbol: 'wPOL',
      name: 'Wrapped Polygon Ecosystem Token',
    },
    '0x0000000000000000000000000000000000001010': {
      symbol: 'POL',
      name: 'Polygon Ecosystem Token',
    },
    '0x87A1fdc4C726c459f597282be639a045062c0E46': {
      symbol: 'waUSDT',
    },
    '0x2dCa80061632f3F87c9cA28364d1d0c30cD79a19': {
      symbol: 'waUSDCn',
    },
    '0xc63529297dE076eB15fcbE873AE9136E446cFbB9': {
      extensions: {
        coingeckoId: 'gyroscope',
      },
    },
    '0x1250304F66404cd153fA39388DDCDAec7E0f1707': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
  },
  [Network.Arbitrum]: {
    '0xfc675adfdd721064ba923d07a8a238a9e52d8ace': {
      extensions: {
        coingeckoId: 'parifi',
      },
    },
    '0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
    '0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png',
    },
    '0x23A941036Ae778Ac51Ab04CEa08Ed6e2FE103614': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc944E90C64B2c07662A292be6244BDf05Cda44a7/logo.png',
    },
    '0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879': {
      name: 'Maker',
      symbol: 'MKR',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    },
    '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
    '0x354A6dA3fcde098F8389cad84b0182725c6C91dE': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png',
    },
    '0x8038F3C971414FD1FC220bA727F2D4A0fC98cb65': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xca1207647Ff814039530D7d35df0e1Dd2e91Fa84/logo.png',
    },
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    '0x82e3A8F066a6989666b031d916c43672085b1582': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png',
    },
    '0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png',
    },
    '0xa684cd057951541187f288294a1e1C2646aA2d24': {
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/refactor-for-multichain/assets/0xa684cd057951541187f288294a1e1c2646aa2d24.png',
    },
    '0xA970AF1a584579B618be4d69aD6F73459D112F95': {
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png',
    },
    '0xB965029343D55189c25a7f3e0c9394DC0F5D41b1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x86772b1409b61c639EaAc9Ba0AcfBb6E238e5F83/logo.png',
    },
    '0xC3Ae0333F0F34aa734D5493276223d95B8F9Cb37': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa1d65E8fB6e87b60FECCBc582F7f97804B725521/logo.png',
    },
    '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png',
    },
    '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    },
    '0xef888bcA6AB6B1d26dbeC977C455388ecd794794': {
      logoURI:
        'https://assets.coingecko.com/coins/images/12900/large/Rari_Logo_Transparent.png?1613978014',
    },
    '0xf4D48Ce3ee1Ac3651998971541bAdbb9A14D7234': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2ba592F78dB6436527729929AAf6c908497cB200/logo.png',
    },
    '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    },
    '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
    },
    '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8': {
      symbol: 'USDC.e',
      name: 'Bridged USDC',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    '0xaf88d065e77c8cC2239327C5EDb3A432268e5831': {
      symbol: 'USDC',
      name: 'USDC Coin',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    '0x3a301e7917689b8e8a19498b8a28fc912583490c': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Ethereum USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x7cfadfd5645b50be87d546f42699d863648251ad': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0xbde67e089886ec0e615d6f054bc6f746189a3d56': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x8b5541b773dd781852940490b0c3dc1a8cdb6a87': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0xb165a74407fe1e519d6bcbdec1ed3202b35a4140': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0xD8724322f44E5c58D7A815F542036fb17DbbF839': {
      logoURI:
        'https://assets.coingecko.com/coins/images/29734/standard/woeth-200x200.png?1714796686',
    },
    '0xca5d8f8a8d49439357d3cf46ca2e720702f132b8': {
      extensions: {
        coingeckId: 'gyroscope-gyd',
      },
    },
    '0xD9FBA68D89178e3538e708939332c79efC540179': {
      symbol: 'waGHO',
    },
    '0x89AEc2023f89E26Dbb7eaa7a98fe3996f9d112A8': {
      symbol: 'waFRAX',
    },
    '0x7CFaDFD5645B50bE87d546f42699d863648251ad': {
      symbol: 'waUSDCn',
    },
    '0xb165a74407fE1e519d6bCbDeC1Ed3202B35a4140': {
      symbol: 'waUSDT',
    },
    '0xcF6C2bb97a8978321C9e207afE8A2037fa9be45C': {
      extensions: {
        coingeckoId: 'dinero-apxeth',
      },
    },
    '0xc63529297dE076eB15fcbE873AE9136E446cFbB9': {
      extensions: {
        coingeckoId: 'gyroscope',
      },
    },
    '0x76A9A0062ec6712b99B4f63bD2b4270185759dd5': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0x6eaf19b2fc24552925db245f9ff613157a7dbb4c': {
      extensions: {
        coingeckoId: 'staked-stream-usd',
      },
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6eaf19b2fc24552925db245f9ff613157a7dbb4c_42161.png',
    },
    '0x03569cc076654f82679c4ba2124d64774781b01d': {
      extensions: {
        coingeckoId: 'liquity-bold',
      },
    },
  },
  [Network.Optimism]: {
    '0xe05A08226c49b636ACf99c40Da8DC6aF83CE5bB3': {
      logoURI:
        'https://www.ankr.com/_next/static/images/ethereum-ankreth-logo-794cb04ee270a7cb5c8559924aa5211d.png',
    },
    '0x97513e975a7fA9072c72C92d8000B0dB90b163c5': {
      symbol: 'multiBeets',
      name: 'multiBeets',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x9f281eb58fd98ad98ede0fc4c553ad4d73e7ca2c': {
      decimals: 6,
      symbol: 'AaveUSDCe',
      name: 'Static Aave Ethereum USDC.e',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x4dd03dfd36548c840b563745e3fbec320f37ba7e': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x035c93db04e5aaea54e6cd0261c492a3e0638b37': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x7F5c764cBc14f9669B88837ca1490cCa17c31607': { symbol: 'USDC.e' },
    '0x39FdE572a18448F8139b7788099F0a0740f51205': {
      name: 'OATH',
      symbol: 'OATHv1',
    },
    '0xb4Bc46bc6cB217B59ea8F4530BaE26Bf69F677f0': { name: 'Beethoven X' },
    '0xc96f4F893286137aC17e07Ae7F217fFca5db3AB6': {
      logoURI:
        'https://assets.coingecko.com/coins/images/29116/large/20230223_224134.jpg?1677224110',
    },
    '0x00e1724885473B63bCE08a9f0a52F35b0979e35A': {
      name: 'OATH',
      symbol: 'OATHv2',
    },
    '0x3e9cBFfd270AE67aBB09D28988e7e785498c7373': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x3e9cBFfd270AE67aBB09D28988e7e785498c7373.png',
    },
    '0xc83c23DBA4a008d7Df46cd50Ad144ae856b6B1Be': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xc83c23DBA4a008d7Df46cd50Ad144ae856b6B1Be.png',
    },
    '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d': {
      name: 'Qi Dao',
      symbol: 'QI (old)',
      logoURI:
        'https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969',
    },
    '0x0c5b4c92c948691EEBf185C17eeB9c230DC019E9': {
      name: 'Pickle Finance',
      logoURI:
        'https://assets.coingecko.com/coins/images/12435/large/0M4W6Yr6_400x400.jpg?1643006080',
    },
    '0x1509706a6c66CA549ff0cB464de88231DDBe213B': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1509706a6c66CA549ff0cB464de88231DDBe213B.png',
    },
    '0xb45ad160634c528cc3d2926d9807104fa3157305': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x2218a117083f5B482B0bB821d27056Ba9c04b1D3': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x83f20f44975d03b1b09e64809b757c47f942beea.png',
    },
    '0x5A7fACB970D094B6C7FF1df0eA68D99E6e73CBFF': {
      logoURI: 'https://etherscan.io/token/images/etherfiweeth_32.png',
      extensions: {
        coingeckId: 'wrapped-eeth',
      },
    },
    '0x5A7a183B6B44Dc4EC2E3d2eF43F98C5152b1d76d': {
      logoURI:
        'https://optimistic.etherscan.io/token/images/inceptionlrtv2_32.png',
      extensions: {
        coingeckId: 'genesislrt-restaked-eth',
      },
    },
    '0xd08C3F25862077056cb1b710937576Af899a4959': {
      logoURI: 'https://optimistic.etherscan.io/token/images/insteth_32.png',
      extensions: {
        coingeckId: 'inception-restaked-steth',
      },
    },
    '0x676f784d19c7f1ac6c6beaeaac78b02a73427852': {
      name: 'Optimism Prime',
      symbol: 'OPP',
      logoURI: 'https://gitlab.com/optimism-prime/logos/-/raw/main/OPP.png',
    },
    '0xc70134c6858f3fe09d051f05dcdda215ace5c153': {
      name: 'OPP Impermax Borrowable OPP-ETH Vault',
      symbol: 'imxB (OPP-ETH)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-ETH.png',
    },
    '0x1d61313ce48Fa3C60DF3a4B567378B954fE6f9A6': {
      name: 'OPP Impermax Borrowable OPP-opxVELO Vault',
      symbol: 'imxB (OPP-opxVELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-opxVELO.png',
    },
    '0x035c93db04E5aAea54E6cd0261C492a3e0638b37': {
      symbol: 'waUSDT',
    },
    '0x4DD03dfD36548C840B563745e3FBeC320F37BA7e': {
      symbol: 'waUSDCn',
    },
    '0x9e0b29619dbb2fa7914efa8f3a9302ab9f5025af': {
      name: 'ETH Impermax Borrowable ETH-VELO Vault',
      symbol: 'imxB (ETH on ETH-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-ETH-VELO-ETH.png',
    },
    '0xdf413da4bc8e01e5a2d8699e2f8b73fbc011c0bc': {
      name: 'VELO Impermax Borrowable ETH-VELO Vault',
      symbol: 'imxB (VELO on ETH-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-ETH-VELO-VELO.png',
    },
    '0x0fac6bbfc6d56e1b7abeb58fd437017603ed731f': {
      name: 'OP Impermax Borrowable OP-VELO Vault',
      symbol: 'imxB (OP on OP-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OP-VELO-OP.png',
    },
    '0xd2ae97aad2e0be8a8c583c703d3ad777471c0464': {
      name: 'VELO Impermax Borrowable OP-VELO Vault',
      symbol: 'imxB (VELO on OP-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OP-VELO-VELO.png',
    },
    '0xbdc2ad83ba9f27cd97b58bd05908cb6939f8d789': {
      name: 'USDC Impermax Borrowable USDC-VELO Vault',
      symbol: 'imxB (USDC on USDC-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-USDC-VELO-USDC.png',
    },
    '0x1f157e15cfaee06b6f8f646e3f4ad1cc7c1739bc': {
      name: 'VELO Impermax Borrowable USDC-VELO Vault',
      symbol: 'imxB (VELO on USDC-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-USDC-VELO-VELO.png',
    },
    '0x298B9B95708152ff6968aafd889c6586e9169f1D': {
      logoURI:
        'https://optimistic.etherscan.io/token/images/Synthetix_sBTC_32.png',
    },
    '0xFBc4198702E81aE77c06D58f81b629BDf36f0a71': {
      logoURI:
        'https://optimistic.etherscan.io/token/images/synthetixeuro_32.png',
    },
    '0x41B334E9F2C0ED1f30fD7c351874a6071C53a78E': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xd4fa2d31b7968e448877f69a96de69f5de8cd23e.png',
    },
    '0x927CfF131fD5B43FC992D071929b2c095d6E4b70': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x7bc3485026ac48b6cf9baf0a377477fff5703af8.png',
    },
    '0x464b808c2C7E04b07e860fDF7a91870620246148': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x0bfc9d54fc184518a81162f8fb99c2eaca081202.png',
    },
    '0x3ec3849c33291a9ef4c5db86de593eb4a37fde45': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/sfrxETH.png',
      extensions: {
        coingeckoId: 'staked-frax-ether',
      },
    },
    '0x484c2d6e3cdd945a8b2df735e079178c1036578c': {
      name: 'Staked Frax Ether - Deprecated Frax Ferry',
    },
    '0x5bff88ca1442c2496f7e475e9e7786383bc070c0': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/sfrxusd.png',
      extensions: {
        coingeckoId: 'staked-frax-usd',
      },
    },
    '0x8e6a81b9d541A0CeA090818B62C4B2DE7f2A2Cf7': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/rETH-aave-boosted.png',
    },
    '0xbaF95bB30CDab3d5b7a11B67EDeF5631bD62be86': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/wstETH-aave-boosted.png',
    },
    '0x64445f0aecc51e94ad52d8ac56b7190e764e561a': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/FRAX.png',
      extensions: {
        coingeckoId: 'frax-share',
      },
    },
    '0x90337e484B1Cb02132fc150d3Afa262147348545': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
  },
  [Network.Gnosis]: {
    '0x7eF541E2a22058048904fE5744f9c7E4C57AF717': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
    '0x0aa1e96d2a46ec6beb2923de1e61addf5f5f1dce': {
      symbol: 'REG',
      name: 'Realt Ecosystem Governance',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x_regtoken.png',
    },
    '0xf0E7eC247b918311afa054E0AEdb99d74c31b809': {
      symbol: 'waUSDCn',
    },
    '0xfdA94F056346d2320d4B5E468D6Ad099b2277746': {
      logoURI:
        'https://assets.coingecko.com/coins/images/15044/large/stakewise200.png?1619520721',
    },
    '0xc63529297dE076eB15fcbE873AE9136E446cFbB9': {
      extensions: {
        coingeckoId: 'gyroscope',
      },
    },
    '0x9eE1963f05553eF838604Dd39403be21ceF26AA4': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73': {
      extensions: {
        coingeckoId: 'gho',
      },
    },
  },
  [Network.Base]: {
    '0x4200000000000000000000000000000000000006': {
      extensions: {
        coingeckoId: 'weth',
      },
    },
    '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913': {
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA': {
      extensions: {
        coingeckoId: 'bridged-usd-coin-base',
      },
    },
    '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42': {
      extensions: {
        coingeckoId: 'euro-coin',
      },
    },
    '0x6Bb7a212910682DCFdbd5BCBb3e28FB4E8da10Ee': {
      extensions: {
        coingeckoId: 'gho',
      },
    },
    '0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9': {
      extensions: {
        coingeckoId: 'resolv-usr',
      },
    },
    '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf': {
      extensions: {
        coingeckoId: 'coinbase-wrapped-btc',
      },
    },
    '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22': {
      extensions: {
        coingeckoId: 'coinbase-wrapped-staked-eth',
      },
    },
    '0xcb585250f852C6c6bf90434AB21A00f02833a4af': {
      extensions: {
        coingeckoId: 'coinbase-wrapped-xrp',
      },
    },
    '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452': {
      extensions: {
        coingeckoId: 'wrapped-steth',
      },
    },
    '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A': {
      extensions: {
        coingeckoId: 'wrapped-eeth',
      },
    },
    '0x2416092f143378750bb29b79eD961ab195CcEea5': {
      extensions: {
        coingeckoId: 'renzo-restaked-eth',
      },
    },
    '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb': {
      extensions: {
        coingeckoId: 'dai',
      },
    },
    '0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c': {
      extensions: {
        coingeckoId: 'rocket-pool-eth',
      },
    },
    '0xd09ACb80C1E8f2291862c4978A008791c9167003': {
      extensions: {
        coingeckoId: 'treehouse-eth',
      },
    },
    '0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf': {
      extensions: {
        coingeckoId: 'venice-token',
      },
    },
    '0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee': {
      extensions: {
        coingeckoId: 'aero',
      },
    },
    '0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b': {
      extensions: {
        coingeckoId: 'virtual-protocol',
      },
    },
    '0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842': {
      extensions: {
        coingeckoId: 'morpho',
      },
    },
    '0x63706e401c06ac8513145b7687A14804d17f814b': {
      extensions: {
        coingeckoId: 'aave',
      },
    },
    '0x88Fb150BDc53A65fe94Dea0c9BA0a6dAf8C6e196': {
      extensions: {
        coingeckoId: 'chainlink',
      },
    },
    '0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82': {
      extensions: {
        coingeckoId: 'solana',
      },
    },
    '0xb2000000000000000000008bC8786B856E61707C': {
      extensions: {
        coingeckoId: 'meta-coinbase-tokenized-stock',
      },
    },
    '0xb20000000000000000000078ee7ce2fE4908108C': {
      extensions: {
        coingeckoId: 'nvidia-coinbase-tokenized-stock',
      },
    },
    '0xb2000000000000000000002D0BA3164cc74f58B7': {
      extensions: {
        coingeckoId: 'alphabet-coinbase-tokenized-stock',
      },
    },
    '0xb200000000000000000000d9192b6B456483C2E8': {
      extensions: {
        coingeckoId: 'amazon-coinbase-tokenized-stock',
      },
    },
    '0xB200000000000000000000Ab99cFa739E253872B': {
      extensions: {
        coingeckoId: 'microsoft-coinbase-tokenized-stock',
      },
    },
    '0xb2000000000000000000001e800a7f5189430cD0': {
      extensions: {
        coingeckoId: 'tesla-coinbase-tokenized-stocks',
      },
    },
    '0xb200000000000000000000C2e324d24d7eEcd1fb': {
      extensions: {
        coingeckoId: 'apple-coinbase-tokenized-stock',
      },
    },
    '0xe298b938631f750DD409fB18227C4a23dCdaab9b': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xC768c589647798a6EE01A91FdE98EF2ed046DBD6': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x74D4D1D440c9679b1013999Bd91507eAa2fff651': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x729F75Aff28c726e32403e80cef2aFb518CFbfa7': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x88b1Cd4b430D95b406E382C3cDBaE54697a0286E': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xFA2A03b6f4A65fB1Af64f7d935fDBf78693df9aF': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x5e8B674127B321DC344c078e58BBACc3f3008962': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x0830820D1A9aa1554364752d6D8F55C836871B74': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x6acD0a165fD70A84b6b50d955ff3628700bAAf4b': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xF8F10f39116716e89498c1c5E94137ADa11b2BC7': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x616a4E1db48e22028f6bbf20444Cd3b8e3273738': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x7BfA7C4f149E7415b73bdeDfe609237e29CBF34A': {
      logoURI:
        'https://raw.githubusercontent.com/frontier-fi/tokenlists/main/src/assets/images/tokens/0xa5269a8e31b93ff27b887b56720a25f844db0529.png',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e': {
      logoURI:
        'https://raw.githubusercontent.com/frontier-fi/tokenlists/main/src/assets/images/tokens/0xa5269a8e31b93ff27b887b56720a25f844db0529.png',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x5A32099837D89E3a794a44fb131CBbAD41f87a8C': {
      logoURI:
        'https://raw.githubusercontent.com/frontier-fi/tokenlists/main/src/assets/images/tokens/0x39dd7790e75c6f663731f7e1fdc0f35007d3879b.png',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x9272D6153133175175Bc276512B2336BE3931CE9': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x589A7339C6d0c8777E7429F57f2f95c069c37288': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x98eFe85735F253a0ed0Be8e2915ff39f9e4AfF0F': {
      extensions: {
        coingeckoId: null,
      },
    },
  },
  [Network.Sepolia]: {
    '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14': {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      extensions: {
        coingeckoId: 'weth',
      },
    },
    '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9': {
      name: 'Wrapped Ether (0x7b79)',
      symbol: 'WETH (0x7b79)',
      extensions: {
        coingeckoId: 'weth',
      },
    },
    '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238': {
      name: 'USD Coin',
      symbol: 'USDC',
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0x779877A7B0D9E8603169DdbD7836e478b4624789': {
      name: 'ChainLink Token',
      symbol: 'LINK',
      extensions: {
        coingeckoId: 'chainlink',
      },
    },
    '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8': {
      name: 'USDC (Aave)',
      symbol: 'USDC (Aave)',
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357': {
      name: 'DAI (Aave)',
      symbol: 'DAI (Aave)',
      extensions: {
        coingeckoId: 'dai',
      },
    },
    '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0': {
      name: 'USDT',
      symbol: 'USDT',
      extensions: {
        coingeckoId: 'tether',
      },
    },
    '0x29f2D40B0605204364af54EC677bD022dA425d03': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0x6d906e526a4e2Ca02097BA9d0caA3c382F52278E': {
      extensions: {
        coingeckoId: 'stasis-eurs',
      },
    },
    '0x88541670E55cC00bEEFD87eB59EDd1b7C511AC9a': {
      extensions: {
        coingeckoId: 'aave',
      },
    },
    '0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5': {
      name: 'LINK (Aave)',
      symbol: 'LINK (Aave)',
      extensions: {
        coingeckoId: 'chainlink',
      },
    },
    '0x8A88124522dbBF1E56352ba3DE1d9F78C143751e': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/32847/large/usdc_%281%29.png?1699619355',
      extensions: {
        coingeckoId: null,
      },
    },
    '0xDE46e43F46ff74A23a65EBb0580cbe3dFE684a17': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/32886/large/dai.png?1699769446',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x978206fAe13faF5a8d293FB614326B237684B750': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/32884/large/USDT.PNG?1699768611',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x131a121bda71ED810bCAf2aC9079214925e59C18': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/32883/large/wbtc.png?1699719908',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x72B49a461900e11632C95dfa563e7173438D4e3E': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/32913/large/eurs.png?1699824583',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x56771cEF0cb422e125564CcCC98BB05fdc718E77': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/32887/large/aave.png?1699773604',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x8227a989709a757f25dF251C3C3e71CA38627836': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/32888/large/link.png?1699773900',
      extensions: {
        coingeckoId: null,
      },
    },
    '0xB77EB1A70A96fDAAeB31DB1b42F2b8b5846b2613': {
      name: 'DAI (Faucet)',
      symbol: 'DAI (Faucet)',
      extensions: {
        coingeckoId: 'dai',
      },
    },
  },
  [Network.Avalanche]: {
    '0xc8E7fB72B53D08C4f95b93b390ed3f132d03f2D5': {
      decimals: 18,
      symbol: 'SQRCAT',
      name: 'SQRCAT',
      logoURI:
        'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xc8E7fB72B53D08C4f95b93b390ed3f132d03f2D5/logo.png',
    },
    '0xA3D68b74bF0528fdD07263c60d6488749044914b': {
      extensions: {
        coingeckoId: 'wrapped-eeth',
      },
    },
    '0x9eE1963f05553eF838604Dd39403be21ceF26AA4': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0x9d92c21205383651610f90722131655a5b8ed3e0': {
      name: 'Staked USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/sUSDp.svg',
    },
    '0x94f9bb5c972285728dcee7eaece48bec2ff341ce': {
      extensions: {
        coingeckoId: 'staked-stream-usd',
      },
    },
    '0x6eaf19b2fc24552925db245f9ff613157a7dbb4c': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6eaf19b2fc24552925db245f9ff613157a7dbb4c_43114.png',
    },
    '0x1F0570a081FeE0e4dF6eAC470f9d2D53CDEDa1c5': {
      symbol: 'Gami-USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xffe8b2295cef70290819a8193834cc7900bcef5f.png',
    },
  },
  [Network.Monad]: {
    '0x01bff41798a0bcf287b996046ca68b395dbc1071': {
      extensions: {
        coingeckoId: 'tether-gold-tokens',
      },
    },
    '0x0555e30da8f98308edb960aa94c0db47230d2b9c': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0x0d9d741fe423cd5419e4bcb6cb2ffa87afa93ba4': {
      extensions: {
        coingeckoId: 'avant-usd',
      },
    },
    '0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2': {
      extensions: {
        coingeckoId: 'ethena-staked-usde',
      },
    },
    '0x484be0540ad49f351eaa04eeb35df0f937d4e73f': {
      extensions: {
        coingeckoId: 'staked-yuzu-usd',
      },
    },
    '0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34': {
      extensions: {
        coingeckoId: 'ethena-usde',
      },
    },
    '0x9648db94f1e6b19e7d755585542981f97dc806c6': {
      extensions: {
        coingeckoId: 'avant-staked-usd',
      },
    },
    '0xab6e5a0c3799d020c790d34f7b2c02639e238af7': {
      extensions: {
        coingeckoId: 'syrupusdc',
      },
    },
    '0xc50f2e735edd9dcd8ccd41ecfe9894e679e3195f': {
      extensions: {
        coingeckoId: 'rocket-pool-eth',
      },
    },
    '0xd18b7ec58cdf4876f6afebd3ed1730e4ce10414b': {
      extensions: {
        coingeckoId: 'coinbase-wrapped-btc',
      },
    },
  },
  [Network.Plasma]: {
    '0x6eAf19b2FC24552925dB245F9Ff613157a7dbb4C': {
      extensions: { coingeckoId: 'staked-stream-usd' },
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6eaf19b2fc24552925db245f9ff613157a7dbb4c_9745.png',
    },
    '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34': {
      extensions: { coingeckoId: 'ethena-usde' },
    },
    '0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2': {
      extensions: { coingeckoId: 'ethena-staked-usde' },
    },
    '0xA3D68b74bF0528fdD07263c60d6488749044914b': {
      extensions: { coingeckoId: 'wrapped-eeth' },
    },
    '0x9895D81bB462A195b4922ED7De0e3ACD007c32CB': {
      extensions: { coingeckoId: 'weth' },
    },
    '0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb': {
      extensions: { coingeckoId: 'usdt0' },
    },
    '0x0A1a1A107E45b7Ced86833863f482BC5f4ed82EF': {
      extensions: { coingeckoId: 'usdai' },
    },
    '0x6100E367285b01F48D07953803A2d8dCA5D19873': {
      extensions: { coingeckoId: 'plasma' },
    },
    '0x0B2b2B2076d95dda7817e785989fE353fe955ef9': {
      extensions: { coingeckoId: 'susdai' },
    },
    '0xe561FE05C39075312Aa9Bc6af79DdaE981461359': {
      extensions: { coingeckoId: 'wrapped-rseth' },
    },
    '0x29AD7fE4516909b9e498B5a65339e54791293234': {
      extensions: { coingeckoId: 'metronome-synth-usd' },
    },
    '0xA29420057F3e3B9512D4786df135Da1674BD74D4': {
      extensions: { coingeckoId: 'avant-staked-usd' },
    },
  },
}
