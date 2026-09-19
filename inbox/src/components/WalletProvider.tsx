import type { ReactNode } from 'react'

type WalletProviderProps = {
  children: ReactNode
}

export function WalletProvider({ children }: WalletProviderProps) {
  return children
}
