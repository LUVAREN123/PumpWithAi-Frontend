import React, { Suspense, useEffect } from 'react'
import { useOverlay } from '../contexts/OverlayContext'
import Loader from '../components/ui/Loader'
import delayImport from '../lib/delayImport'

const Login = React.lazy(() => delayImport(() => import("../components/modals/Login"), 1500))
const Register = React.lazy(() => delayImport(() => import("../components/modals/Register"), 1500))
const EmailStep = React.lazy(() => delayImport(() => import("../components/modals/ForgotPassword/EmailStep"), 1500))
const OTPStep = React.lazy(() => delayImport(() => import("../components/modals/ForgotPassword/OTPStep"), 1500))
const ResetStep = React.lazy(() => delayImport(() => import("../components/modals/ForgotPassword/ResetStep"), 1500))

const MODALS: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
    login: Login,
    register: Register
}

const FORGOT_PASSWORD_MODALS: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
    email: EmailStep,
    otp: OTPStep,
    reset: ResetStep
}

export default function OverlayRenderer() {
    const { overlay, closeOverlay, prevStep } = useOverlay()
    
    useEffect(() => {
        const ctrl = new AbortController()
        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            if (e.key == 'Escape') {
                closeOverlay()
            }
        }
        
        document.addEventListener('keydown', handleKeyDown, { signal: ctrl.signal })
        
        return () => ctrl.abort()
    }, [closeOverlay])

    useEffect(() => {
        if (overlay) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "auto"
    }, [overlay])
    
    if (!overlay) return null

    let ModalComponent: React.LazyExoticComponent<React.ComponentType<any>> | null = null

    if (overlay.type == 'forgot-password') ModalComponent = FORGOT_PASSWORD_MODALS[overlay.step] ?? null
    else ModalComponent = MODALS[overlay.type] ?? null
    
    return (
        <div
            id="overlay"
            role="dialog"
            aria-modal="true"
        >
            <div id="modal">
                <div className="modal-header">
                    <div
                        className="modal-btn"
                        onClick={() => prevStep()}
                        style={{ visibility: overlay.type == 'forgot-password' ? 'visible' : 'hidden' }}
                    >
                        <span className="material-symbols-rounded">arrow_back</span>
                    </div>
                    <div className="modal-btn" onClick={() => closeOverlay()}>
                        <span className="material-symbols-rounded">close</span>
                    </div>
                </div>
                <Suspense fallback={<Loader />}>
                    {ModalComponent && <ModalComponent />}
                </Suspense>
            </div>
        </div>
    )
}
