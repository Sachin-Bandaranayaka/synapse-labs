'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface ScrollContainerProps {
  children: React.ReactNode
}

export const ScrollContainer = ({ children }: ScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rafId: number
    let lastScrollTop = window.pageYOffset

    const smoothScroll = () => {
      const currentScrollTop = window.pageYOffset
      const diff = currentScrollTop - lastScrollTop
      const speed = 0.1 // Adjust for faster/slower scroll

      if (Math.abs(diff) > 0.1) {
        lastScrollTop += diff * speed
        container.style.transform = `translateY(${-lastScrollTop}px)`
        rafId = requestAnimationFrame(smoothScroll)
      } else {
        lastScrollTop = currentScrollTop
      }
    }

    window.addEventListener('scroll', () => {
      rafId = requestAnimationFrame(smoothScroll)
    }, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={containerRef} className="smooth-scroll">
      {children}
      <motion.div
        className="progress-bar"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  )
} 