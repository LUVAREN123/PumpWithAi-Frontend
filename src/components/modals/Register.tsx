
import { motion } from 'framer-motion'
import Field from '../ui/Field'
import { useOverlay } from '../../contexts/OverlayContext'

import google from '../../assets/icons/google.svg'

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
        <div className="auth-title" style={{ position: "relative" }}>
          Create an Account
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
          label='Name'
          type='text'
          name='Name'
          placeholder='Write your name here'
        />
        <Field
          label='Password'
          type='password'
          name='password'
          placeholder='********'
        />
      </div>
      <div className="auth-footer">
        <div className="auth-btn" onClick={() => {}}>Register with us</div>
        <div className="auth-subtitle">Already have an account? <span className="auth-link" onClick={() => openOverlay({ type: 'login' })}>Login</span></div>
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
          <div className="field-name">Register with Google</div>
        </button>
      </div>
    </motion.div>
  )
}
