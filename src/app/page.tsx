'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ParticleField } from '@/components/ParticleField'
import { AnimatedGradient } from '@/components/AnimatedGradient'
import { InteractiveButton } from '@/components/InteractiveButton'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <ParticleField />
        <AnimatedGradient />
        
        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Engineering the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-synapse-blue to-synapse-cyan animate-gradient">
                Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              We craft cutting-edge web and mobile experiences that bring your vision to life
            </motion.p>

            <motion.div className="flex gap-6 justify-center">
              <InteractiveButton
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </InteractiveButton>
              <InteractiveButton
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent"
              >
                Get in Touch
              </InteractiveButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
} 