import { Connector, RpcData } from '../types'

export default async function init(): Promise<Connector> {
  const { DeFiWeb3Connector } = await import('deficonnect')

  return {
    web3ReactConnector({ chainId, rpc }: { chainId: number; rpc: RpcData }) {
      return new DeFiWeb3Connector({ supportedChainIds: [chainId], rpc })
    },
  }
}
