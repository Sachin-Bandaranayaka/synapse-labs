'use client'

import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Use springs for smoother movement
  const springConfig = { damping: 25, stiffness: 400 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = target.closest('a, button, input, textarea, [role="button"]')
      setIsHovering(!!isHoverable)
    }

    window.addEventListener('mousemove', updatePosition, { passive: true })
    window.addEventListener('mouseover', updateHoverState, { passive: true })

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', updateHoverState)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-synapse-cyan rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
          translateX: '-50%',
          translateY: '-50%'
        }}
        transition={{
          scale: { type: "spring", damping: 25, stiffness: 400 },
          default: { duration: 0 }
        }}
      />
      <motion.div
        className="fixed w-8 h-8 border border-synapse-cyan rounded-full pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
          translateX: '-50%',
          translateY: '-50%'
        }}
        transition={{
          scale: { type: "spring", damping: 25, stiffness: 400 },
          default: { duration: 0 }
        }}
      />
    </>
  )
} 