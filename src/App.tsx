import React, { Suspense } from 'react'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'

import OverlayProvider from './contexts/OverlayContext'
import Loader from './components/ui/Loader'

import routes from './constants/routes'

import './App.css'

const OverlayRenderer = React.lazy(() => import("./layouts/OverlayRenderer"))

function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes, location)

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode='wait'>
        <OverlayProvider>
          <Suspense fallback={<Loader />}>
            {routeElement}
          </Suspense>
          <OverlayRenderer />
        </OverlayProvider>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
