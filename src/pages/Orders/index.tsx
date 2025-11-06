
import './styles.css'
import { motion } from 'motion/react'

export default function Orders() {
  return (
    <motion.div
        id='orders'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
      
    </motion.div>
  )
}
