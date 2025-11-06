import React, { createContext, useContext, useState } from "react";
import { forgotPasswordSteps, type ForgotPasswordStep } from "../constants/overlaySteps";

type OverlayType = { type: 'login' }
                | { type: 'register' }
                | { type: 'forgot-password', step: ForgotPasswordStep }
                | null

interface OverlayContextType {
    overlay: OverlayType,
    openOverlay: (ov: OverlayType) => void,
    closeOverlay: () => void,
    nextStep: () => void,
    prevStep: () => void
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined)

export const useOverlay = () => {
    const ctx = useContext(OverlayContext)
    if (!ctx) throw new Error("OverlayProvider is missing")

    return ctx
}

export default function OverlayProvider({ children }: { children: React.ReactNode }) {
    const [overlay, setOverlay] = useState<OverlayType>(null)

    const openOverlay = (ov: OverlayType) => setOverlay(ov)
    const closeOverlay = () => setOverlay(null)

    const nextStep = () => {
        if (overlay?.type == 'forgot-password') {
            const idx = forgotPasswordSteps.indexOf(overlay.step)
            if (idx < forgotPasswordSteps.length - 1) setOverlay({ type: 'forgot-password', step: forgotPasswordSteps[idx + 1] })
        }
    }

    const prevStep = () => {
        if (overlay?.type == 'forgot-password') {
            const idx = forgotPasswordSteps.indexOf(overlay.step)
            if (idx == 0) setOverlay({ type: 'login' })
            else if (idx > 0) setOverlay({ type: 'forgot-password', step: forgotPasswordSteps[idx - 1] })
        }
    }

    return (
        <OverlayContext.Provider value={{ overlay, openOverlay, closeOverlay, nextStep, prevStep }}>
            {children}
        </OverlayContext.Provider>
    )
}