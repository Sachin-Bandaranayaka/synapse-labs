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
            <motion.div className="relative">
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-synapse-cyan/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Rotating border */}
              <motion.div
                className="absolute -inset-4 border-2 border-transparent rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)',
                  maskImage: 'linear-gradient(transparent, transparent)',
                  WebkitMaskImage: 'linear-gradient(transparent, transparent)',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Logo container */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotateY: 180,
                  transition: { duration: 0.8 }
                }}
                className="relative transform-gpu"
              >
                <Image
                  src="/logo-icon.png"
                  alt="Synapse Labs"
                  width={120}
                  height={120}
                  className="brightness-200 relative z-10 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                />
              </motion.div>

              {/* Energy particles */}
              <motion.div className="absolute inset-0 z-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-6 bg-gradient-to-t from-synapse-cyan to-transparent"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: 'center',
                      rotate: `${i * 45}deg`,
                    }}
                    animate={{
                      scale: [1, 0],
                      opacity: [0.8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>
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