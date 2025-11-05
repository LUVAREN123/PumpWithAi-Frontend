import React, { Suspense } from 'react'
import { AnimatePresence } from 'motion/react'
import { useRoutes } from 'react-router-dom'

import Loader from './components/ui/Loader'

import routes from './constants/routes'

import './App.css'

const Header = React.lazy(() => import("./components/shared/Header"))
const Footer = React.lazy(() => import("./components/shared/Footer"))

function App() {
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
