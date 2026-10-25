const DRPC_HTTP = 'https://lb.drpc.org/ogrpc'

/**
 * JSON-RPC URL for a dRPC network short-name.
 * Every chain uses the same DRPC_KEY.
 * Returns undefined when the key is unset so scripts that only read chain
 * names can still import config.
 */
export function drpcRpc(network: string): string | undefined {
  const dkey = process.env.DRPC_KEY
  if (!dkey) return undefined
  return `${DRPC_HTTP}?network=${network}&dkey=${dkey}`
}
