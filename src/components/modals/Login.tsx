
import { motion } from 'framer-motion'
import Field from '../ui/Field'
import { useOverlay } from '../../contexts/OverlayContext'

import google from '../../assets/icons/google.svg'

import './styles.css'
import Checkbox from '../ui/Checkbox'

export default function Login() {
  const { openOverlay } = useOverlay()

  return (
    <motion.div
      id='login'
      className='auth-modal-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="auth-header">
        <div className="auth-title" style={{ position: "relative" }}>
          Login to your Account
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
        <Field
          label='Email'
          type='email'
          name='email'
          placeholder='example@gmail.com'
        />
        <Field
          label='Password'
          type='password'
          name='password'
          placeholder='********'
        />
        <div className="field-layer">
          <Checkbox
            name='remember-password'
            label='Remember Me'
          />
          <div className="auth-link" onClick={() => openOverlay({ type: 'forgot-password', step: 'email' })}>Forgot Password?</div>
        </div>
      </div>
      <div className="auth-footer">
        <div className="auth-btn" onClick={() => {}}>Login with us</div>
        <div className="auth-subtitle">Don't have an account? <span className="auth-link" onClick={() => openOverlay({ type: 'register' })}>Sign up</span></div>
      </div>
      
      <div className="auth-divider">
        <span className="line"></span>
        <span>OR</span>
        <span className="line"></span>
      </div>
      <div className="field-options">
        <button className="field-option">
          <div className="field-icon">
            <img src={google} alt="google" />
          </div>
          <div className="field-name">Login with Google</div>
        </button>
      </div>
    </motion.div>
  )
}
