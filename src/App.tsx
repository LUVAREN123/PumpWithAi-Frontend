import { Suspense } from 'react'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'

import Loader from './components/ui/Loader'

import routes from './constants/routes'

import './App.css'
import { PrivyProvider } from '@privy-io/react-auth'
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana'

const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID
const PRIVY_CLIENT_ID = import.meta.env.VITE_PRIVY_CLIENT_ID

function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes, location)

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode='wait'>
        <Suspense fallback={<Loader />}>
          <PrivyProvider
            appId={PRIVY_APP_ID}
            clientId={PRIVY_CLIENT_ID}
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
            {routeElement}
          </PrivyProvider>
        </Suspense>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
