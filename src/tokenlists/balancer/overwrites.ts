/* eslint-disable max-len */
import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.Ethereum]: {
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': {
      name: 'Wrapped Ether',
    },
    '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8': {
      name: 'Curve.fi Y Pool Token',
      symbol: 'yCRV',
      decimals: 18,
    },
    '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359': {
      name: 'Sai Stablecoin v1.0',
      symbol: 'SAI',
      decimals: 18,
    },
    '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A': {
      name: 'DigixDAO DGD Token',
      symbol: 'DGD',
      decimals: 9,
    },
    '0x960b236A07cf122663c4303350609A66A7B288C0': {
      name: 'Aragon v1',
      symbol: 'ANT (old)',
      decimals: 18,
    },
    '0x0Ba45A8b5d5575935B8158a88C631E9F9C95a2e5': {
      name: 'Tellor Tributes',
      symbol: 'TRB (old)',
      decimals: 18,
    },
    '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2': {
      decimals: 18,
      symbol: 'MKR',
      name: 'Maker',
    },
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': {
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    },
    '0x304A2050dF259DCA35335C90CE983AdC5f2Dc50C': {
      decimals: 18,
      symbol: 'sWETH',
      name: 'Sturdy Wrapped ETH',
    },
    '0x2BBf681cC4eb09218BEe85EA2a5d3D13Fa40fC0C': {
      decimals: 18,
      symbol: 'bb-a-USDT (old)',
      name: 'Balancer Aave Boosted Pool (USDT)',
    },
    '0x804CdB9116a10bB78768D3252355a1b18067bF8f': {
      decimals: 18,
      symbol: 'bb-a-DAI (old)',
      name: 'Balancer Aave Boosted Pool (DAI)',
    },
    '0x9210F1204b5a24742Eba12f710636D76240dF3d0': {
      decimals: 18,
      symbol: 'bb-a-USDC (old)',
      name: 'Balancer Aave Boosted Pool (USDC)',
    },
    '0x7B50775383d3D6f0215A8F290f2C9e2eEBBEceb2': {
      decimals: 18,
      symbol: 'bb-a-USD (old)',
      name: 'Balancer Aave Boosted StablePool (USD)',
    },
    '0xE95A203B1a91a908F9B9CE46459d101078c2c3cb': {
      decimals: 18,
      symbol: 'ankrETH',
      name: 'Ankr Staked ETH',
    },
    '0x9559Aaa82d9649C7A7b220E7c461d2E74c9a3593': {
      decimals: 18,
      symbol: 'staFi rETH',
      name: 'staFi rETH',
    },
    '0xf073bAC22DAb7FaF4a3Dd6c6189a70D54110525C': {
      decimals: 18,
      symbol: 'inETH',
      name: 'InceptionLRT restaked ETH',
    },
    '0xEb91861f8A4e1C12333F42DCE8fB0Ecdc28dA716': {
      decimals: 18,
      symbol: 'eUSDC',
      name: 'Euler Pool: USD Coin',
    },
    '0x4d19F33948b99800B6113Ff3e83beC9b537C85d2': {
      decimals: 18,
      symbol: 'eUSDT',
      name: 'Euler Pool: Tether USD',
    },
    '0xe025E3ca2bE02316033184551D4d3Aa22024D9DC': {
      decimals: 18,
      symbol: 'eDAI',
      name: 'Euler Pool: Dai Stablecoin',
    },
    '0xa2E3356610840701BDf5611a53974510Ae27E2e1': {
      decimals: 18,
      symbol: 'wBETH',
      name: 'Wrapped Beacon ETH',
    },
    '0x02c2d189b45ce213a40097b62d311cf0dd16ec92': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Ethereum USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x65799b9fd4206cdaa4a1db79254fcbc2fd2ffee6': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x862c57d48becb45583aeba3f489696d22466ca1b': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9': {
      logoURI:
        'https://assets.coingecko.com/coins/images/12645/standard/aave-token-round.png?1720472354',
    },
    '0x41FDbea2E52790c0a1Dc374F07b628741f2E062D': {
      name: 'Gyroscope ECLP sdeUSD/deUSD',
      symbol: 'ECLP-sdeUSD-deUSD',
    },
    '0x848107491E029AFDe0AC543779c7790382f15929': {
      symbol: 'waCrvUSD',
    },
    '0xDBf5E36569798D1E39eE9d7B1c61A7409a74F23A': {
      symbol: 'waLUSD',
    },
    '0x5C5b196aBE0d54485975D1Ec29617D42D9198326': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x8236a87084f8B84306f72007F36F2618A5634494': {
      extensions: {
        coingeckoId: 'lombard-staked-btc',
      },
    },
    '0xb51EDdDD8c47856D81C8681EA71404Cec93E92c6': {
      decimals: 6,
      symbol: 'Aave Core pyUSD',
      name: 'Aave Core pyUSD',
    },
    '0xC71Ea051a5F82c67ADcF634c36FFE6334793D24C': {
      decimals: 18,
      symbol: 'Aave Prime GHO',
      name: 'Aave Prime GHO',
    },
    '0xFa2B947eEc368f42195f24F36d2aF29f7c24CeC2': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xfa2b947eec368f42195f24f36d2af29f7c24cec2.png',
    },
    '0x6A1792a91C08e9f0bFe7a990871B786643237f0F': {
      decimals: 18,
      symbol: 'aRLUSD',
    },
    '0x9B3a8f7CEC208e247d97dEE13313690977e24459': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0xd3a452B305C8285c0Dd7b8537665c734d3D279eF': {
      name: 'Staked USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/sUSDp.svg',
    },
    '0x6eaf19b2fc24552925db245f9ff613157a7dbb4c': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6eaf19b2fc24552925db245f9ff613157a7dbb4c_1.png',
    },
    '0x97ccc1c046d067ab945d3cf3cc6920d3b1e54c88': {
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
    '0xE9185Ee218cae427aF7B9764A011bb89FeA761B4': {
      extensions: {
        coingeckoId: 'brz',
      },
    },
    '0x1f55a02A049033E3419a8E2975cF3F572F4e6E9A': {
      extensions: {
        coingeckoId: 'staked-frax-ether',
      },
    },
    '0x4EA71A20e655794051D1eE8b6e4A3269B13ccaCc': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Base USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x99aC4484e8a1dbd6A185380B3A811913Ac884D87': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x83f20f44975d03b1b09e64809b757c47f942beea.png',
    },
    '0xecAc9C5F704e954931349Da37F60E39f515c11c1': {
      extensions: {
        coingeckoId: 'lombard-staked-btc',
      },
    },
    '0x35e5db674d8e93a03d814fa0ada70731efe8a4b9': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x35e5db674d8e93a03d814fa0ada70731efe8a4b9.svg',
    },
    '0xF6BD14Bc7D980122aa2E70dFe2d7CF926709A0F4': {
      extensions: {
        coingeckoId: 'parifi',
      },
    },
    '0x994ac01750047B9d35431a7Ae4Ed312ee955E030': {
      extensions: {
        coingeckoId: 'optimism',
      },
    },
    '0x76A9A0062ec6712b99B4f63bD2b4270185759dd5': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0x472eD57b376fE400259FB28e5C46eB53f0E3e7E7': {
      name: 'Staked USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/sUSDp.svg',
    },
    '0x7788A3538C5fc7F9c7C8A74EAC4c898fC8d87d92': {
      extensions: {
        coingeckoId: 'usdx-money-staked-usdx',
      },
    },
    '0xf3527ef8dE265eAa3716FB312c12847bFBA66Cef': {
      extensions: {
        coingeckoId: 'usdx-money-usdx',
      },
    },
    '0xd09acb80c1e8f2291862c4978a008791c9167003': {
      extensions: {
        coingeckoId: 'treehouse-eth',
      },
    },
    '0xe5020a6d073a794b6e7f05678707de47986fb0b6': {
      name: 'Frax USD',
      symbol: 'frxUSD',
      extensions: {
        coingeckoId: 'frax-usd',
      },
    },
  },
  [Network.Sepolia]: {
    '0xb19382073c7A0aDdbb56Ac6AF1808Fa49e377B75': {
      extensions: {
        coingeckoId: 'balancer',
      },
    },
    '0xB77EB1A70A96fDAAeB31DB1b42F2b8b5846b2613': {
      extensions: {
        coingeckoId: 'dai',
      },
    },
    '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9': {
      extensions: {
        coingeckoId: 'weth',
      },
    },
    '0x80D6d3946ed8A1Da4E226aa21CCdDc32bd127d1A': {
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0x1c7d4b196cb0c7b01d743fbc6116a902379c7238': {
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0x6bF294B80C7d8Dc72DEE762af5d01260B756A051': {
      extensions: {
        coingeckoId: 'tether',
      },
    },
    '0x23BAd11F1543503CB1FB5dAd05fdAF93F42d30F3': {
      extensions: {
        coingeckoId: 'stasis-eurs',
      },
    },
    '0x0f409E839a6A790aecB737E4436293Be11717f95': {
      extensions: {
        coingeckoId: 'beethoven-x',
      },
    },
    '0xC3745bcE4b5D0977dC874832BC99108D416dCe8f': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0x29f2d40b0605204364af54ec677bd022da425d03': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357': {
      name: 'DAI (AAVE Faucet)',
      symbol: 'dai-aave',
      extensions: {
        coingeckoId: 'dai',
      },
    },
    '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8': {
      name: 'USDC (AAVE Faucet)',
      symbol: 'usdc-aave',
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0': {
      name: 'USDT (AAVE Faucet)',
      symbol: 'usdt-aave',
      extensions: {
        coingeckoId: 'tether',
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
