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
      className={`relative px-6 py-3 rounded-lg overflow-hidden group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Base gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-synapse-blue to-synapse-cyan opacity-90"
        initial={{ opacity: 0.9 }}
        animate={{
          opacity: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Hover effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 211, 238, 0.4) 0%, transparent 100%)',
        }}
        onMouseMove={(e) => {
          const button = e.currentTarget.parentElement
          if (button) {
            const rect = button.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            const y = ((e.clientY - rect.top) / rect.height) * 100
            button.style.setProperty('--mouse-x', `${x}%`)
            button.style.setProperty('--mouse-y', `${y}%`)
          }
        }}
      />

      {/* Border gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(to right, rgba(34, 211, 238, 0.3), rgba(30, 58, 138, 0.3))',
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      <span className="relative z-10 font-semibold text-white">
        {children}
      </span>
    </motion.button>
  )
} 