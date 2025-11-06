
import './styles.css'
import { motion } from 'motion/react'

export default function Guides() {
  return (
    <motion.div
        id='guides'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="guides-container"></div>
    </motion.div>
  )
}
