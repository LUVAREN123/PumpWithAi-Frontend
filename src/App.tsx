import React, { Suspense } from 'react'
import './App.css'

import Loader from './components/ui/Loader'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './constants/routes'

const Header = React.lazy(() => import("./components/shared/Header"))
const Footer = React.lazy(() => import("./components/shared/Footer"))

function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes)

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <AnimatePresence mode='wait'>
        <main id='main smooth-content' role='main' aria-label='Page Content'>
          {routeElement}
        </main>
      </AnimatePresence>
      <Footer />
    </Suspense>
  )
}

export default App
