
import '../styles.css'
import { motion } from 'framer-motion'
import Field from '../../ui/Field'
import { useOverlay } from '../../../contexts/OverlayContext'

export default function EmailStep() {
  const { nextStep } = useOverlay()

  return (
    <motion.div
      id='forgot-email'
      className='auth-modal-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="auth-header">
        <div className="auth-title">Forgot Password?</div>
        <div className="auth-subtitle">Enter your email to login to your account</div>
      </div>
      <div className="auth-fields">
        <Field
          label='Email'
          type='email'
          placeholder='example@gmail.com'
          name='email'  
        />
      </div>
      <div className="auth-footer">
        <div className="auth-btn" onClick={() => nextStep()}>Get Code</div>
      </div>
    </motion.div>
  )
}
