import React, { Suspense } from 'react'
import './App.css'

import Loader from './components/ui/Loader'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './constants/routes'

const Header = React.lazy(() => import("./components/shared/Header"))

function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes, location)

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode='wait'>
        <Header />
        <main id="main" role="main" aria-label="Page Content">
          {routeElement}
        </main>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
