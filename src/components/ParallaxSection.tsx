'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  speed?: number
  className?: string
}

export const ParallaxSection = ({
  children,
  direction = 'up',
  speed = 0.5,
  className = ''
}: ParallaxSectionProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${speed * 100}%`])
      case 'down':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
      case 'left':
        return useTransform(scrollYProgress, [0, 1], ['0%', `-${speed * 100}%`])
      case 'right':
        return useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
      default:
        return '0%'
    }
  }

  const transform = getTransform()
  const axis = direction === 'up' || direction === 'down' ? 'y' : 'x'

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ [axis]: transform }}>
        {children}
      </motion.div>
    </div>
  )
} 