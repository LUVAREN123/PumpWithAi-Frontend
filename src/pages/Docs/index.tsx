
import './styles.css'
import { motion } from 'motion/react'

export default function Docs() {
  return (
    <motion.div
        id='docs'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="docs-container"></div>
    </motion.div>
  )
}
