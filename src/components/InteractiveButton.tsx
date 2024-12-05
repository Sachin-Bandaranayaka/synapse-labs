'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface InteractiveButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const InteractiveButton = ({ children, onClick, className = '', type = 'button' }: InteractiveButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      type={type}
      className={`relative px-6 py-3 rounded-lg overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-synapse-blue to-synapse-cyan"
        animate={{
          rotate: isHovered ? 180 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="absolute inset-0 opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(34, 211, 238, 0.2) 0%, transparent 70%)'
        }}
      />

      <span className="relative z-10 font-semibold text-white">
        {children}
      </span>
    </motion.button>
  )
} 