import { TokenInfo } from '@uniswap/token-lists'
import chalk from 'chalk'
import { Network } from '../../types'
import { sleep } from '../utils'
import config from '../../config'

/**
 * Auth (org secret is COINGECKO_API_KEY — currently a Demo key):
 * - COINGECKO_API_KEY / COINGECKO_DEMO_API_KEY → api.coingecko.com + x_cg_demo_api_key
 * - COINGECKO_PRO_API_KEY → pro-api.coingecko.com + x_cg_pro_api_key
 * - none → public api.coingecko.com (stricter rate limits)
 */
const proApiKey = process.env.COINGECKO_PRO_API_KEY
const demoApiKey =
  process.env.COINGECKO_API_KEY || process.env.COINGECKO_DEMO_API_KEY

const baseUrl = proApiKey
  ? 'https://pro-api.coingecko.com/api/v3'
  : 'https://api.coingecko.com/api/v3'

const apiKeyParam = proApiKey
  ? `x_cg_pro_api_key=${proApiKey}`
  : demoApiKey
  ? `x_cg_demo_api_key=${demoApiKey}`
  : ''

const isPro = Boolean(proApiKey)

/** Demo/public free tier is ~30 calls/min; Pro plans are much higher. */
const THROTTLE_MS = isPro ? 50 : 2000
/** Parallel logo fetches when using Pro (sequential for demo/public). */
const LOGO_PREFETCH_CONCURRENCY = isPro ? 8 : 1

/** Cache logo URIs by CoinGecko id so shared ids (e.g. usd-coin) hit the API once. */
const logoByIdCache = new Map<string, string | undefined>()

export function getCachedCoingeckoLogo(
  coingeckoId: string
): string | undefined {
  return logoByIdCache.get(coingeckoId)
}

async function throttleCoingeckoCalls() {
  await sleep(THROTTLE_MS)
}

async function mapPool<T>(
  items: T[],
  concurrency: number,
  fn: (item: T) => Promise<void>
): Promise<void> {
  const queue = [...items]
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (queue.length > 0) {
        const item = queue.shift()
        if (item === undefined) return
        await fn(item)
      }
    })
  )
}

/**
 * Prefetch logos for many coingeckoIds (uses cache + concurrency).
 */
export async function prefetchCoingeckoLogos(
  coingeckoIds: string[]
): Promise<void> {
  const uniqueIds = [...new Set(coingeckoIds.filter(Boolean))]
  await mapPool(uniqueIds, LOGO_PREFETCH_CONCURRENCY, async (id) => {
    await fetchCoingeckoLogoById(id)
  })
}

/**
 * Fetch the canonical CoinGecko image for a coin id (chain-agnostic).
 * Used when overwrites set `extensions.coingeckoId`.
 */
export async function fetchCoingeckoLogoById(
  coingeckoId: string
): Promise<string | undefined> {
  if (logoByIdCache.has(coingeckoId)) {
    return logoByIdCache.get(coingeckoId)
  }

  const params = [
    'localization=false',
    'tickers=false',
    'market_data=false',
    'community_data=false',
    'developer_data=false',
    'sparkline=false',
    apiKeyParam,
  ]
    .filter(Boolean)
    .join('&')

  const maxAttempts = 3
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await throttleCoingeckoCalls()

      const response = await fetch(`${baseUrl}/coins/${coingeckoId}?${params}`)

      if (response.status === 429) {
        const waitMs = 5_000 * attempt
        console.log(
          chalk.yellow(
            `Coingecko rate limited for ${coingeckoId}; retrying in ${waitMs}ms`
          )
        )
        await sleep(waitMs)
        continue
      }

      if (response.status === 404) {
        console.log(chalk.dim(`Coingecko logo (not found): ${coingeckoId}`))
        logoByIdCache.set(coingeckoId, undefined)
        return undefined
      }

      // Auth / bad-request errors will not recover on retry — fail fast.
      if (response.status === 400 || response.status === 401) {
        console.log(
          chalk.dim(
            `Coingecko logo (failed): ${coingeckoId} — ${response.status} ${response.statusText}`
          )
        )
        return undefined
      }

      if (response.status !== 200) {
        throw new Error(
          `Coingecko API error, status: ${response.status} ${response.statusText}`
        )
      }

      const data = await response.json()
      const logoURI: string | undefined = data?.image?.large

      logoByIdCache.set(coingeckoId, logoURI)
      if (logoURI) {
        console.log(chalk.dim(`Coingecko logo (${coingeckoId}): ${logoURI}`))
      }
      return logoURI
    } catch (e) {
      if (attempt === maxAttempts) {
        console.log(chalk.dim(`Coingecko logo (failed): ${coingeckoId} — ${e}`))
        // Do not cache transient failures so a later generate can retry.
        return undefined
      }
      await sleep(1000 * attempt)
    }
  }

  return undefined
}

/**
 * Fallback lookup by network platform + contract address.
 * Prefer `fetchCoingeckoLogoById` when an overwrite provides `coingeckoId`.
 */
export async function fetchCoingeckoMetadata(
  network: Network,
  address: string
): Promise<Partial<TokenInfo> | undefined> {
  try {
    await throttleCoingeckoCalls()

    const response = await fetch(
      `${baseUrl}/coins/${
        config[network].coingecko.platformId
      }/contract/${address.toLowerCase()}?${apiKeyParam}`
    )

    if (response.status !== 200) {
      throw new Error('Coingecko API error, status: ' + response.statusText)
    }

    const data = await response.json()

    const {
      name,
      symbol,
      image: { large: logoURI },
    } = data

    return {
      address,
      name,
      symbol,
      logoURI,
    }
  } catch (e) {
    console.log(e)
    console.log(chalk.dim(`Coingecko (not found): ${address}`))
    return undefined
  }
}
