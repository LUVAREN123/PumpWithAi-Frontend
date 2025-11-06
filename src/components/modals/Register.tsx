
import { motion } from 'framer-motion'
import Field from '../ui/Field'
import { useOverlay } from '../../contexts/OverlayContext'

import google from '../../assets/icons/google.svg'
import facebook from '../../assets/icons/facebook.svg'

import './styles.css'

export default function Register() {
  const { openOverlay } = useOverlay()

  return (
    <motion.div
      id='register'
      className='auth-modal-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="auth-header">
        <div className="auth-title">Sign Up Account</div>
        <div className="auth-subtitle">Enter your personal data to create your account</div>
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
          label='Username'
          type='text'
          name='username'
          placeholder='Put your username here'
        />
        <Field
          label='Password'
          type='password'
          name='password'
          placeholder='********'
        />
      </div>
      <div className="auth-footer">
        <div className="auth-btn" onClick={() => {}}>Sign Up</div>
        <div className="auth-subtitle">Already have an account? <span className="auth-link" onClick={() => openOverlay({ type: 'login' })}>Login</span></div>
      </div>
    </motion.div>
  )
}
