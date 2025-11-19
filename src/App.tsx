import { Suspense } from 'react'
import { AnimatePresence } from 'motion/react'
import { useLocation, useRoutes } from 'react-router-dom'

import DataProvider from './contexts/DataContext'
import ModalProvider from './contexts/ModalContext'
import Loader from './components/ui/Loader'

import routes from './constants/routes'

import './App.css'

function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes, location)

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode='wait'>
        <DataProvider>
          <ModalProvider>
            {routeElement}
          </ModalProvider>
        </DataProvider>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
