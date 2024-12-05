'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import type { Project } from '@/lib/firebaseUtils'

interface PortfolioCardProps {
  project: Project
}

export const PortfolioCard = ({ project }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      className="relative perspective-1000"
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{ rotateX, rotateY }}
    >
      <motion.div
        className="relative bg-background-lighter rounded-xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="w-full object-cover"
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 50 }}
        >
          {/* Project content */}
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15) 0%,
              transparent 50%
            )`
          }}
        />
      </motion.div>
    </motion.div>
  )
} 