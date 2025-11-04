import React from 'react'

import './styles.css'
import { motion } from 'motion/react'

export default function Support() {
  return (
    <motion.div
        id='support'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="support-container"></div>
    </motion.div>
  )
}
