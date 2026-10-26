import 'dotenv/config'
import { TokenList, TokenInfo } from '@uniswap/token-lists'
import {
  Network,
  OverwritesForList,
  PartialTokenInfoMap,
  TokenListMetadata,
} from './types'
import { fetchOnchainMetadata } from './lib/fetchers/onchain'
import { fetchExistingMetadata } from './lib/fetchers/existing'
import { merge } from 'lodash'
import {
  fetchCoingeckoLogoById,
  fetchCoingeckoMetadata,
  getCachedCoingeckoLogo,
} from './lib/fetchers/coingecko'
import fs from 'fs'
import { getAddress } from 'ethers'
import chalk from 'chalk'
import {
  getTokenlistSrc,
  getTokenlistsToBuild,
  isEqualTokenlists,
  safeStringify,
} from './lib/utils'
import { NETWORKS_TO_REGENERATE } from './config/networks-to-regenerate'

/**
 * Primary generation function.
 *
 * Run via `npm run generate`
 */
async function run() {
  const tokenlistsToBuild = getTokenlistsToBuild()
  for (const tokenlist of tokenlistsToBuild) {
    console.log(chalk.bgGreen(`Building tokenlist: ${tokenlist}`))
    await build(tokenlist)
    console.log(
      chalk.bgCyan(`Built tokenlist: /generated/${tokenlist}.tokenlist.json`)
    )
  }
}

;(async () => {
  try {
    await run()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()

// ----------------------------------------------------------------]

/**
 * Data hierarchy:
 * 1. Existing data, includes overwrites and local images
 * 2. Onchain data
 * 3. If overwrite has extensions.coingeckoId → logo from /coins/{id} (chain-agnostic)
 * 4. Coingecko contract lookup (last resort by platform + address)
 */

async function build(tokenlistName: string) {
  let network: Network
  let allTokens: TokenInfo[] = []
  const { metadata, tokens, overwrites, existingTokenList } =
    await getTokenlistSrc(tokenlistName)

  for (network in tokens) {
    console.log(chalk.cyan(`Starting build for ${network}`))

    if (!NETWORKS_TO_REGENERATE.includes(network)) {
      console.log(
        chalk.yellow(
          `Skipping onchain fetch for ${network}; reusing existing tokens`
        )
      )
      allTokens = allTokens.concat(
        readTokenInfo(tokenlistName, Number(network))
      )
      continue
    }

    // format to hashed value
    const tokenAddresses = tokens[network].map((token) => getAddress(token))

    console.time(chalk.cyan(`Fetched onchain metadata for chain ${network}`))

    let onchainMetadata: PartialTokenInfoMap = {}
    try {
      onchainMetadata = await fetchOnchainMetadata(network, tokenAddresses)
    } catch (e) {
      // Fall back to the previously generated list when RPC is unavailable.
      console.error(e)
      console.log(
        chalk.yellow(
          `Onchain fetch failed for ${network}; reusing existing tokens`
        )
      )
      allTokens = allTokens.concat(
        readTokenInfo(tokenlistName, Number(network))
      )
      continue
    }
    console.timeEnd(chalk.cyan(`Fetched onchain metadata for chain ${network}`))

    console.time(chalk.cyan(`Fetched existing metadata for chain ${network}`))
    const existingMetadata = await fetchExistingMetadata(
      network,
      overwrites,
      existingTokenList
    )
    console.timeEnd(
      chalk.cyan(`Fetched existing metadata for chain ${network}`)
    )

    console.time(chalk.cyan(`Generated tokens for chain ${network}`))
    const tokenInfo = await generateTokens(
      network,
      tokenAddresses,
      onchainMetadata,
      existingMetadata
    )
    allTokens = allTokens.concat(tokenInfo)
    console.timeEnd(chalk.cyan(`Generated tokens for chain ${network}`))
  }

  console.time(chalk.cyan('Applied CoinGecko logos from coingeckoId overwrites'))
  allTokens = await applyCoingeckoIdLogos(allTokens, overwrites)
  console.timeEnd(
    chalk.cyan('Applied CoinGecko logos from coingeckoId overwrites')
  )

  const tokenList = buildTokenList(metadata, allTokens, existingTokenList)

  fs.writeFileSync(
    `./generated/${tokenlistName}.tokenlist.json`,
    safeStringify(tokenList)
  )
}

function buildTokenList(
  metadata: TokenListMetadata,
  tokens: TokenInfo[],
  existingTokenList: TokenList | undefined
): TokenList {
  const newVersion = {
    ...metadata.version,
    patch: (existingTokenList?.version?.patch ?? metadata.version.patch) + 1,
  }
  const newMetadata = {
    ...metadata,
    version: newVersion,
  }
  const newTokenList = {
    ...newMetadata,
    timestamp: new Date().toISOString(),
    tokens,
  }

  if (existingTokenList && isEqualTokenlists(newTokenList, existingTokenList)) {
    newTokenList.timestamp = existingTokenList.timestamp
    newTokenList.version.patch = existingTokenList.version.patch
  }

  return newTokenList
}

async function generateTokens(
  network: Network,
  tokenAddresses: string[],
  onchainMetadata: PartialTokenInfoMap,
  existingMetadata: PartialTokenInfoMap
): Promise<TokenInfo[]> {
  const tokens: TokenInfo[] = []

  for (const tokenAddress of tokenAddresses) {
    const existingToken = existingMetadata[tokenAddress]
    const onchainToken = onchainMetadata[tokenAddress]
    const tokenInfo = await setTokenInfo(
      tokenAddress,
      network,
      existingToken,
      onchainToken
    )
    if (tokenInfo) tokens.push(tokenInfo)
  }

  return tokens
}

function satisfiesTokenInfoSchema({
  token,
  includeOptionals,
}: {
  token: Partial<TokenInfo>
  includeOptionals: boolean
}): boolean {
  const requiredKeys = ['chainId', 'address', 'name', 'symbol', 'decimals']
  if (includeOptionals) requiredKeys.push('logoURI')

  return requiredKeys.every((key) => token?.[key as keyof TokenInfo] != null)
}

function getCoingeckoId(metadata: Partial<TokenInfo>): string | undefined {
  const id = metadata.extensions?.coingeckoId
  return typeof id === 'string' && id.length > 0 ? id : undefined
}

function findOverwrite(
  overwrites: OverwritesForList,
  chainId: number,
  address: string
): Partial<TokenInfo> | undefined {
  const byNetwork = overwrites[String(chainId) as Network]
  if (!byNetwork) return undefined

  const checksummed = getAddress(address)
  return (
    byNetwork[checksummed] ||
    byNetwork[address] ||
    byNetwork[address.toLowerCase()] ||
    Object.entries(byNetwork).find(
      ([key]) => key.toLowerCase() === address.toLowerCase()
    )?.[1]
  )
}

/**
 * For every token with a coingeckoId (on the token or in overwrites), set logoURI
 * from GET /coins/{id}. Image is chain-agnostic — same id → same logo everywhere.
 */
async function applyCoingeckoIdLogos(
  tokens: TokenInfo[],
  overwrites: OverwritesForList
): Promise<TokenInfo[]> {
  // Resolve id per token first, then prefetch unique ids (cached) so rate limits
  // are paid once per coin, not once per chain deployment.
  const idsByIndex: (string | undefined)[] = tokens.map((token) => {
    const overwrite = findOverwrite(overwrites, token.chainId, token.address)
    return getCoingeckoId(token) || getCoingeckoId(overwrite ?? {})
  })

  const uniqueIds = [...new Set(idsByIndex.filter(Boolean) as string[])]
  console.log(
    chalk.cyan(
      `Fetching CoinGecko logos for ${uniqueIds.length} unique coingeckoId(s)`
    )
  )
  for (const id of uniqueIds) {
    await fetchCoingeckoLogoById(id)
  }

  return tokens.map((token, index) => {
    const overwrite = findOverwrite(overwrites, token.chainId, token.address)
    const coingeckoId = idsByIndex[index]

    let next: TokenInfo = token

    if (overwrite?.extensions) {
      next = {
        ...next,
        extensions: {
          ...(next.extensions ?? {}),
          ...overwrite.extensions,
        },
      }
    }

    if (coingeckoId) {
      const logoURI = getCachedCoingeckoLogo(coingeckoId)
      if (logoURI) {
        next = { ...next, logoURI }
      }
    }

    return next
  })
}

async function setTokenInfo(
  address: string,
  network: Network,
  existingMetadata: Partial<TokenInfo>,
  onchainMetadata: Partial<TokenInfo>
): Promise<TokenInfo | undefined> {
  // combine existingMetadata and overwriteMetadata (precedence last to first)
  // We want the onchain data to be used only if it's missing from existing data.
  let metadata = merge(
    { chainId: Number(network), address: getAddress(address) },
    onchainMetadata,
    existingMetadata
  )

  if (metadata.decimals) {
    metadata = merge(metadata, { decimals: Number(metadata.decimals) })
  }

  // When overwrites tag a coingeckoId, prefer that coin's image on every chain
  // (same asset → same logo; platformId / contract lookup not required).
  const coingeckoId = getCoingeckoId(metadata)
  if (coingeckoId) {
    const logoURI = await fetchCoingeckoLogoById(coingeckoId)
    if (logoURI) {
      metadata = { ...metadata, logoURI }
    }
  }

  if (satisfiesTokenInfoSchema({ token: metadata, includeOptionals: true })) {
    return formatMetadata(metadata)
  }

  const coingeckoMetadata = await fetchCoingeckoMetadata(network, address)
  // Again, we want the coingecko data to be used only if it's missing from existing data.
  metadata = merge(coingeckoMetadata, metadata)

  if (satisfiesTokenInfoSchema({ token: metadata, includeOptionals: false })) {
    return formatMetadata(metadata)
  } else {
    console.warn('Failed to generate token info for:', metadata)
    return undefined
  }
}

function formatMetadata(metadata: Partial<TokenInfo>): TokenInfo {
  // Order provided metadata by specified key order.
  const orderedByKey = Object.assign(
    {
      chainId: undefined,
      address: undefined,
      name: undefined,
      symbol: undefined,
      decimals: undefined,
      logoURI: undefined,
      extensions: undefined,
    },
    metadata
  )
  // Remove undefined values.
  Object.keys(orderedByKey).forEach((key) =>
    orderedByKey[key as keyof TokenInfo] === undefined
      ? delete orderedByKey[key as keyof TokenInfo]
      : {}
  )
  return orderedByKey as unknown as TokenInfo
}

function readTokenInfo(tokenlistName: string, chainId: number) {
  const jsonString = fs.readFileSync(
    `./generated/${tokenlistName}.tokenlist.json`,
    'utf-8'
  )
  const data = JSON.parse(jsonString).tokens

  return data.filter((item: { chainId: number }) => item.chainId === chainId)
}
