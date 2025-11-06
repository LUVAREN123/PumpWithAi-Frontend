import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalImagePreloader from './components/ui/GlobalImagePreloader/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalImagePreloader>
        <App />
      </GlobalImagePreloader>
    </BrowserRouter>
  </StrictMode>,
)
