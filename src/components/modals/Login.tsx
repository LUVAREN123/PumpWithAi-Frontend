
import { motion } from 'framer-motion'
import Field from '../ui/Field'
import { useOverlay } from '../../contexts/OverlayContext'

import google from '../../assets/icons/google.svg'
import facebook from '../../assets/icons/facebook.svg'

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
        <div className="auth-title">Login to Your Account</div>
        <div className="auth-subtitle">Enter your personal data to login to your account</div>
      </div>
      <div className="auth-fields">
        <div className="field-options">
          <button className="field-option">
            <div className="field-icon">
              <img src={google} alt="google" />
            </div>
            <div className="field-name">Google</div>
          </button>
          <button className="field-option">
            <div className="field-icon">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="field-name">Facebook</div>
          </button>
        </div>
        <div className="auth-divider">
          <span className="line"></span>
          <span>Or</span>
          <span className="line"></span>
        </div>
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
        <div className="auth-btn" onClick={() => {}}>Sign Up</div>
        <div className="auth-subtitle">Don't have an account? <span className="auth-link" onClick={() => openOverlay({ type: 'register' })}>Sign up.</span></div>
      </div>
    </motion.div>
  )
}
