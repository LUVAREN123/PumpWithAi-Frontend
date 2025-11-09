
import React, { Suspense, useMemo, useState, type JSX } from 'react'
import './styles.css'
import { motion } from 'motion/react'
import Loader from '../../components/ui/Loader'

const Interactive = React.lazy(() => import('./views/Interactive'))
const Search = React.lazy(() => import('./views/Search'))
const Filters = React.lazy(() => import('./views/Filters'))

export type StepName = "interactive" | "search" | "filters"

type LazyStepComponentType = React.LazyExoticComponent<({ setStep }: {
  setStep: React.Dispatch<React.SetStateAction<StepName>>
}) => JSX.Element>

const StepComponents: Record<StepName, LazyStepComponentType> = {
  interactive: Interactive,
  search: Search,
  filters: Filters
}

export default function Dashboard() {
  const [step, setStep] = useState<StepName>("interactive")

  const StepComponent = useMemo<LazyStepComponentType>(() => StepComponents[step], [step])

  return (
    <motion.div
        id='dashboard'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
      <div className="dashboard-header">
        {step == "interactive" && <img src="/logoBright.svg" alt="logo" />}
        <h1>Are you ready to find the next 100x?</h1>
      </div>
      <div className="dashboard-interactive">
        <Suspense fallback={<Loader />}>
          <StepComponent setStep={setStep} />
        </Suspense>
      </div>
      {
        step == "interactive"
          &&
        <div className='additional-options'>
          <span>or start from here</span>
          <div>
            <button className="additional-btn">Add your own Memecoin</button>
            <button className="additional-btn">Bulk-Add Memecoins</button>
            <button className="additional-btn">Import CSV (upto 50 coins)</button>
          </div>
        </div>
      }
    </motion.div>
  )
}
