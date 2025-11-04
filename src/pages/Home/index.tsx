
import './styles.css'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <motion.div
        id='home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="home-container"></div>
    </motion.div>
  )
}
