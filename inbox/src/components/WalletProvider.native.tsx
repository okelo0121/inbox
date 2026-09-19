import { AppIdentity, createSolanaDevnet, MobileWalletProvider } from '@wallet-ui/react-native-kit'
import type { ReactNode } from 'react'

type WalletProviderProps = {
  children: ReactNode
}

const cluster = createSolanaDevnet()
const identity: AppIdentity = { name: 'Kit Expo Uniwind' }

export function WalletProvider({ children }: WalletProviderProps) {
  return (
    <MobileWalletProvider cluster={cluster} identity={identity}>
      {children}
    </MobileWalletProvider>
  )
}
