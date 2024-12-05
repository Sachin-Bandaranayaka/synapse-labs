'use client'

import Link from 'next/link'
import Image from 'next/image'
import { smoothScrollTo } from '@/utils/smoothScroll'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          <Link href="/" className="flex items-center">
            <motion.div 
              className="relative w-[120px] h-[120px]"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-synapse-cyan/10 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Logo */}
              <Image
                src="/logo-icon.png"
                alt="Synapse Labs"
                width={120}
                height={120}
                className="relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] transform-gpu"
                priority
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {['services', 'portfolio', 'about', 'team', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => smoothScrollTo(section)}
                className="nav-link cursor-pointer capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 