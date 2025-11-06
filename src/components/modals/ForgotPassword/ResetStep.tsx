
import '../styles.css'
import { motion } from 'framer-motion'
import Field from '../../ui/Field'

export default function ResetStep() {
  return (
    <motion.div
      id='forgot-reset'
      className='auth-modal-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="auth-header">
        <div className="auth-title" style={{ position: "relative" }}>
          Reset Password
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
          label='Enter New Password'
          type='password'
          name='password'
          placeholder='********'  
        />
      </div>
      <div className="auth-footer">
        <div className="auth-btn">Reset Password</div>
      </div>
    </motion.div>
  )
}
