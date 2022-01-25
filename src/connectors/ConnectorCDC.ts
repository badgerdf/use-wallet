import { Connector, RpcData } from '../types'

export default async function init(): Promise<Connector> {
  const { DeFiWeb3Connector } = await import('deficonnect')

  return {
    web3ReactConnector({
      chainId,
      rpc,
      pollingInterval,
      bridge,
    }: {
      chainId: number
      rpc: RpcData
      pollingInterval?: number
      bridge?: string
    }) {
      return new DeFiWeb3Connector({
        supportedChainIds: [chainId],
        rpc,
        pollingInterval,
        bridge,
      })
    },
  }
}
