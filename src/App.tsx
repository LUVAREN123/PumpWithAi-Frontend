import { Suspense } from 'react'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'
import { PrivyProvider } from '@privy-io/react-auth'
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana'

import DataProvider from './contexts/DataContext'
import ModalProvider from './contexts/ModalContext'
import Loader from './components/ui/Loader'

import routes from './constants/routes'

import './App.css'

const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID

function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes, location)

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode='wait'>
          <PrivyProvider
            appId={PRIVY_APP_ID}
            config={{
              appearance: {
                  walletChainType: 'solana-only',
                  theme: 'dark',
              },
              externalWallets: {
                solana: { connectors: toSolanaWalletConnectors() }
              }
            }}
          >
            <DataProvider>
              <ModalProvider>
                {routeElement}
              </ModalProvider>
            </DataProvider>
          </PrivyProvider>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
