import React, { Suspense } from 'react'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'
import { PrivyProvider } from '@privy-io/react-auth'
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana'

import routes from './constants/routes'

import './App.css'

const Loader = React.lazy(() => import("./components/ui/Loader"))
const ModalProvider = React.lazy(() => import("./contexts/ModalContext"))
const DataProvider = React.lazy(() => import("./contexts/DataContext"))

const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID


function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes, location)

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode='wait'>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
