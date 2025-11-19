import { Suspense } from 'react'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'

import Loader from './components/ui/Loader'

import routes from './constants/routes'

import './App.css'

function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes, location)

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode='wait'>
          {routeElement}
      </AnimatePresence>
    </Suspense>
  )
}

export default App
