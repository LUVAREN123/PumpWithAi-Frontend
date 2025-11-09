import { Suspense } from 'react'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

import Loader from './components/ui/Loader'

import routes from './constants/routes'

import './App.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) throw new Error("Missing Publishable Key")

function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes, location)

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode='wait'>
        <ClerkProvider
          publishableKey={PUBLISHABLE_KEY}
          appearance={{
            theme: dark
          }}
          afterSignOutUrl='/'
          signInFallbackRedirectUrl='/dashboard'
          signUpFallbackRedirectUrl='/dashboard'
        >
          <Suspense fallback={<Loader />}>
            {routeElement}
          </Suspense>
        </ClerkProvider>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
