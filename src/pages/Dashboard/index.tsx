import React from 'react'

import './styles.css'
import { motion } from 'motion/react'

export default function Dashboard() {
  return (
    <motion.div
        id='dashboard'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="dashboard-container"></div>
    </motion.div>
  )
}
