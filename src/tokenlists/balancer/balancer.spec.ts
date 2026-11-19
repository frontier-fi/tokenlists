import fs from 'fs'
import path from 'path'
import { TokenList } from '@uniswap/token-lists'
import { getAddress, isAddress } from 'ethers'
import { describe, expect, it } from 'vitest'
import { NETWORKS_TO_REGENERATE } from '../../config/networks-to-regenerate'
import { fetchLocalTokenIcons } from '../../lib/fetchers/existing'
import { Network } from '../../types'
import { metadata } from './metadata'
import { overwrites } from './overwrites'
import { tokens } from './tokens'

const CURATED_NETWORKS: Array<{
  network: Network
  file: string
  expectedTotal: number
  expectedWrappers: number
}> = [
  {
    network: Network.Base,
    file: 'base.ts',
    expectedTotal: 46,
    expectedWrappers: 17,
  },
  {
    network: Network.Sepolia,
    file: 'sepolia.ts',
    expectedTotal: 19,
    expectedWrappers: 7,
  },
]

describe('Frontier tokenlist curation', () => {
  it('enables regeneration for Sepolia and Base', () => {
    expect(NETWORKS_TO_REGENERATE).toContain(Network.Sepolia)
    expect(NETWORKS_TO_REGENERATE).toContain(Network.Base)
  })

  it('rebrands tokenlist metadata to Frontier', () => {
    expect(metadata.name).toBe('Frontier')
    expect(metadata.keywords).toContain('Frontier')
    expect(metadata.keywords).not.toContain('Balancer')
  })

  it.each(CURATED_NETWORKS)(
    'has valid, deduplicated addresses and allowListToken compatibility for $file',
    ({ network, file, expectedTotal }) => {
      const addresses = tokens[network]
      expect(addresses).toHaveLength(expectedTotal)

      const seen = new Set<string>()
      for (const addr of addresses) {
        expect(isAddress(addr)).toBe(true)
        const lower = addr.toLowerCase()
        expect(seen.has(lower)).toBe(false)
        seen.add(lower)
      }

      // Ensure edit-tokenlist.ts allowListToken regex captures the full array body
      const source = fs.readFileSync(
        path.resolve(__dirname, 'tokens', file),
        'utf-8'
      )
      const match = source.match(/\[([\s\S]+?)\]/)
      expect(match).not.toBeNull()
      for (const addr of addresses) {
        expect(match![1]).toContain(addr)
      }
    }
  )

  it.each(CURATED_NETWORKS)(
    'has no orphan overwrites and valid optional coingeckoIds on $file',
    ({ network, expectedWrappers }) => {
      const networkTokens = tokens[network]
      const networkOverwrites = overwrites[network] ?? {}

      const tokenSet = new Set(networkTokens.map((addr) => getAddress(addr)))
      const overwriteKeys = Object.keys(networkOverwrites)

      for (const key of overwriteKeys) {
        expect(isAddress(key)).toBe(true)
        expect(tokenSet.has(getAddress(key))).toBe(true)
      }

      let wrapperCount = 0

      for (const addr of networkTokens) {
        const extensions = networkOverwrites[addr]?.extensions ?? {}
        if (
          !Object.prototype.hasOwnProperty.call(extensions, 'coingeckoId')
        ) {
          continue
        }

        const cgId = extensions.coingeckoId
        expect(
          cgId === null || (typeof cgId === 'string' && cgId.length > 0),
          `Invalid coingeckoId overwrite for ${addr}`
        ).toBe(true)

        if (cgId === null) wrapperCount++
      }

      expect(wrapperCount).toBe(expectedWrappers)
    }
  )

  it('resolves Frontier-hosted or CoinGecko logoURIs for all curated tokens', () => {
    const tokensDir = path.resolve(process.cwd(), 'src/assets/images/tokens')
    const diskFiles = new Set(fs.readdirSync(tokensDir))

    for (const { network } of CURATED_NETWORKS) {
      const localIcons = fetchLocalTokenIcons(network)
      const networkOverwrites = overwrites[network] ?? {}

      for (const icon of Object.values(localIcons)) {
        expect(icon.logoURI).toBeDefined()
        expect(icon.logoURI).not.toContain('balancer/tokenlists')
        expect(icon.logoURI).toContain(
          'raw.githubusercontent.com/frontier-fi/tokenlists/main/src/assets/images/tokens/'
        )
      }

      for (const [addr, overwrite] of Object.entries(networkOverwrites)) {
        if (overwrite.logoURI) {
          expect(overwrite.logoURI).not.toContain('balancer/tokenlists')
        }

        if (overwrite.extensions?.coingeckoId === null) {
          const hasLocalFile = diskFiles.has(`${addr.toLowerCase()}.png`)
          const resolvedLogo =
            overwrite.logoURI ??
            (hasLocalFile ? localIcons[getAddress(addr)]?.logoURI : undefined)
          expect(resolvedLogo).toBeTruthy()
          expect(resolvedLogo).not.toContain('balancer/tokenlists')
        }
      }
    }
  })

  it('generated tokenlist has Frontier branding and valid optional coingeckoIds on Base and Sepolia', () => {
    const generatedPath = path.resolve(
      process.cwd(),
      'generated/balancer.tokenlist.json'
    )
    const generatedList: TokenList = JSON.parse(
      fs.readFileSync(generatedPath, 'utf-8')
    )

    expect(generatedList.name).toBe('Frontier')
    expect(generatedList.keywords).toContain('Frontier')
    expect(generatedList.keywords).not.toContain('Balancer')
    expect(generatedList.logoURI).toBeUndefined()

    for (const { network, expectedWrappers } of CURATED_NETWORKS) {
      const chainTokens = generatedList.tokens.filter(
        (t) => t.chainId === Number(network)
      )
      const generatedAddrs = chainTokens.map((t) => getAddress(t.address))
      const expectedAddrs = new Set(
        tokens[network].map((a) => getAddress(a))
      )

      // Generated may lag allowlist until regenerate runs; every generated
      // curated-network token must still be allowlisted.
      expect(generatedAddrs.length).toBeGreaterThan(0)
      for (const addr of generatedAddrs) {
        expect(expectedAddrs.has(addr)).toBe(true)
      }

      let wrapperCount = 0
      for (const token of chainTokens) {
        expect(
          typeof token.logoURI === 'string' && token.logoURI.length > 0,
          `Missing logoURI on generated ${token.chainId}:${token.address}`
        ).toBe(true)
        expect(token.logoURI).not.toContain('balancer/tokenlists')

        if (
          !Object.prototype.hasOwnProperty.call(
            token.extensions ?? {},
            'coingeckoId'
          )
        ) {
          continue
        }

        const cgId = token.extensions?.coingeckoId
        expect(
          cgId === null || (typeof cgId === 'string' && cgId.length > 0),
          `Invalid extensions.coingeckoId on ${token.chainId}:${token.address}`
        ).toBe(true)
        if (cgId === null) wrapperCount++
      }

      expect(wrapperCount).toBe(expectedWrappers)
    }
  })
})
