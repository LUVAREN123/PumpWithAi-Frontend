import React from 'react'

import './styles.css'
import { motion } from 'motion/react'

export default function About() {
  return (
    <motion.div
        id='about'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="about-container"></div>
    </motion.div>
  )
}
