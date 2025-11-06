
import './styles.css'
import { motion } from 'motion/react'

export default function Referrals() {
  return (
    <motion.div
        id='referrals'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
      
    </motion.div>
  )
}
