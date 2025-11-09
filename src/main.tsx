import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalImagePreloader from './components/ui/GlobalImagePreloader/index.tsx'
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) throw new Error("Missing Publishable Key")

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        appearance={{
          theme: dark
        }}
        afterSignOutUrl='/'
        signInFallbackRedirectUrl='/dashboard'
        signUpFallbackRedirectUrl='/dashboard'
      >
        <GlobalImagePreloader>
          <ClerkLoaded>
            <App />
          </ClerkLoaded>
        </GlobalImagePreloader>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
