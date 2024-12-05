'use client'

import { motion } from 'framer-motion'

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-synapse-cyan rounded-full border-t-transparent"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute w-12 h-12 border-4 border-synapse-blue rounded-full border-t-transparent"
        animate={{
          rotate: -360
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
} 