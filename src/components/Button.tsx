'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}

export function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-6 py-3 rounded-lg font-semibold
        transition-all duration-300
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-synapse-blue to-synapse-cyan text-white hover:shadow-lg hover:shadow-synapse-cyan/20' 
          : 'border border-synapse-cyan text-synapse-cyan hover:bg-synapse-cyan/10'
        }
        ${className}
      `}
      onClick={onClick}
    >
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.button>
  )
} 