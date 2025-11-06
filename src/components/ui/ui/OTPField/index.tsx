import React, { useRef, useState } from 'react'

import './styles.css'
import { useOverlay } from '../../../contexts/OverlayContext'

export default function OTPField({
    code,
    setCode
}: {
    code: Array<string>,
    setCode: React.Dispatch<React.SetStateAction<Array<string>>>
}) {
    const [status, setStatus] = useState<number>(-1)
    const { nextStep } = useOverlay()
    const refs = useRef<Array<HTMLInputElement | null>>([])

    function handleInput(e: React.ChangeEvent<HTMLInputElement>, index: number): void {
        const value = e.target.value
        if (/\D/.test(value)) return

        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)

        if (value && index < code.length - 1) refs.current[index + 1]?.focus()

        if (newCode.every(c => c !== "") && newCode.join("") == "111111") {
            refs.current[index]?.blur()
            setStatus(1)
            setTimeout(() => nextStep(), 1200)
        } else if (newCode.every(c => c !== "") && newCode.join("") != "111111") {
            refs.current[index]?.blur()
            setStatus(0)
            setTimeout(() => {
                setCode(["", "", "", "", "", ""])
                setStatus(-1)
                refs.current[0]?.focus()
            }, 400)
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
        if (e.key == 'Backspace' && code[index] == '' && index > 0) {
            const newCode = [...code]
            newCode[index - 1] = ''
            setCode(newCode)
            refs.current[index - 1]?.focus()
        }
    }

    function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
        e.preventDefault()

        const pasted = e.clipboardData.getData('text').replace(/\D/g, '')
        if (pasted.length != code.length) return

        const newCode = pasted.split('').slice(0, code.length)
        setCode(newCode)

        refs.current[code.length - 1]?.focus()

        if (newCode.every(c => c !== "") && newCode.join("") == "111111") {
            setStatus(1)
            setTimeout(() => nextStep(), 1200)
        } else if (newCode.every(c => c !== "") && newCode.join("") != "111111") {
            setStatus(0)
            setTimeout(() => {
                setCode(["", "", "", "", "", ""])
                setStatus(-1)
            }, 400)
        }
    }

    return (
        <div
            className="otp-field"
            data-status={status == 0 ? 'incorrect' : status == 1 ? 'correct' : ''}
        >
            {code.map((digit, index) => (
                <div key={index} className="otp-box">
                    <input
                        type="text"
                        value={digit}
                        ref={(ref) => { refs.current[index] = ref }}
                        onChange={(e) => handleInput(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={index == 0 ? handlePaste : undefined}
                        maxLength={1}
                        inputMode='numeric'
                        autoComplete='one-time-code'
                        data-filled={digit !== ""}
                        autoFocus={index == 0}
                    />
                </div>
            ))}
        </div>
    )
}
