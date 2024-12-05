'use client'

import { motion } from 'framer-motion'

export const AnimatedGradient = () => {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none opacity-30"
      animate={{
        background: [
          'radial-gradient(circle at 0% 0%, #0EA5E9 0%, transparent 50%)',
          'radial-gradient(circle at 100% 0%, #22D3EE 0%, transparent 50%)',
          'radial-gradient(circle at 100% 100%, #0EA5E9 0%, transparent 50%)',
          'radial-gradient(circle at 0% 100%, #22D3EE 0%, transparent 50%)',
          'radial-gradient(circle at 0% 0%, #0EA5E9 0%, transparent 50%)',
        ]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )
} 