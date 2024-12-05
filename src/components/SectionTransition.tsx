'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionTransitionProps {
  children: ReactNode
  className?: string
}

export const SectionTransition = ({ children, className = '' }: SectionTransitionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
      className={className}
    >
      <motion.div
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.1
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
} 