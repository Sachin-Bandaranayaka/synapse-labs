'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
}

export function Parallax({ children, offset = 50 }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
} 