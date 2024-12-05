'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { smoothScrollTo } from '@/utils/smoothScroll'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-synapse-blue to-synapse-cyan z-50 origin-left"
        style={{ scaleX }}
      />
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        {['home', 'services', 'portfolio', 'about', 'team', 'contact'].map((section) => (
          <motion.button
            key={section}
            onClick={() => smoothScrollTo(section)}
            className={`block w-3 h-3 mb-4 rounded-full transition-all duration-300 ${
              activeSection === section 
                ? 'bg-synapse-cyan scale-125' 
                : 'bg-gray-600 hover:bg-synapse-cyan/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </nav>
    </>
  )
} 