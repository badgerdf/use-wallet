import { Connector } from '../types'

export default async function init(): Promise<Connector> {
  const { DeFiWeb3Connector } = await import('deficonnect')

  return {
    web3ReactConnector({
      chainId,
      rpcUrl,
    }: {
      chainId: number
      rpcUrl: string
    }) {
      return new DeFiWeb3Connector({
        supportedChainIds: [chainId],
        rpc: { [chainId]: rpcUrl },
      })
    },
  }
}
