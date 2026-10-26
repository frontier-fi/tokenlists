import { Network } from '../types'

/**
 * Chains that refetch onchain metadata during `npm run generate`.
 * All other networks reuse tokens from the existing generated list.
 *
 * To enable another chain in a PR, append its `Network.*` member here, e.g.:
 *   [Network.Sepolia, Network.Ethereum]
 */
export const NETWORKS_TO_REGENERATE: Network[] = [Network.Sepolia]
