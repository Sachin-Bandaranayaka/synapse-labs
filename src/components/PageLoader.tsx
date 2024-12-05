'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      animate={{ opacity: 0, transition: { duration: 0.5 } }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className="relative">
        <motion.div
          className="w-24 h-24 border-4 border-synapse-cyan rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderRadius: ["50%", "40%", "50%"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-synapse-blue rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  )
} 