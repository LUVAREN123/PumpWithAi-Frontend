
import { useState } from 'react'
import OTPField from '../../ui/OTPField'
import '../styles.css'
import { motion } from 'framer-motion'

export default function OTPStep() {
  const [code, setCode] = useState<Array<string>>(["", "", "", "", "", ""])
  
  return (
    <motion.div
      id='forgot-otp'
      className='auth-modal-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="auth-header">
        <div className="auth-title" style={{ position: "relative" }}>
          Enter the Code
          <img
            style={{
              width: "2.5rem",
              position: "absolute",
              aspectRatio: 1,
              top: -20,
              right: -30
            }}
            src="/logoBright.svg"
            alt="logo"
          />
        </div>
      </div>
      <div className="auth-fields">
        <OTPField
          code={code}
          setCode={setCode}
        />
        <div className="auth-subtitle">A one-time <span className="auth-highlight">authentication code</span> has been sent to your mail</div>
      </div>
      <div className="auth-footer">
        <div className="auth-subtitle">Expires in 10 minutes. <span className="auth-link">Resend Code</span></div>
      </div>
    </motion.div>
  )
}
