import fs from 'fs'
import path from 'path'
import { getAddress, isAddress } from 'ethers'
import { describe, expect, it } from 'vitest'
import { NETWORKS_TO_REGENERATE } from '../../config/networks-to-regenerate'
import { fetchLocalTokenIcons } from '../../lib/fetchers/existing'
import { Network } from '../../types'
import { metadata } from './metadata'
import { overwrites } from './overwrites'
import { tokens } from './tokens'

const CURATED_NETWORKS: Array<{ network: Network; file: string }> = [
  { network: Network.Base, file: 'base.ts' },
  { network: Network.Sepolia, file: 'sepolia.ts' },
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
    ({ network, file }) => {
      const addresses = tokens[network]
      expect(addresses.length).toBeGreaterThan(0)

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
    'has valid overwrites with no orphans on $file',
    ({ network }) => {
      const networkTokens = tokens[network]
      const networkOverwrites = overwrites[network] ?? {}

      const tokenSet = new Set(networkTokens.map((addr) => getAddress(addr)))
      const overwriteKeys = Object.keys(networkOverwrites)

      for (const key of overwriteKeys) {
        expect(isAddress(key)).toBe(true)
        expect(tokenSet.has(getAddress(key))).toBe(true)

        const extensions = networkOverwrites[key]?.extensions
        if (
          extensions &&
          Object.prototype.hasOwnProperty.call(extensions, 'coingeckoId')
        ) {
          const cgId = extensions.coingeckoId
          expect(
            cgId === null || (typeof cgId === 'string' && cgId.length > 0)
          ).toBe(true)
        }
      }

      // CoinGecko has no Sepolia platform, so every Sepolia token must set coingeckoId
      if (network === Network.Sepolia) {
        for (const addr of networkTokens) {
          const extensions = networkOverwrites[addr]?.extensions ?? {}
          expect(
            Object.prototype.hasOwnProperty.call(extensions, 'coingeckoId')
          ).toBe(true)
        }
      }
    }
  )

  it('resolves non-empty Frontier-hosted or CoinGecko logoURIs for all curated wrappers', () => {
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
})
