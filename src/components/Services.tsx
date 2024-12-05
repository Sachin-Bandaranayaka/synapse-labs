'use client'

import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  CloudArrowUpIcon,
  CommandLineIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ParticleField } from '@/components/ParticleField'
import { AnimatedGradient } from '@/components/AnimatedGradient'
import { SectionTransition } from '@/components/SectionTransition'

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and dynamic web applications using React, Next.js, and Node.js.',
    icon: CodeBracketIcon,
    gradient: 'from-blue-600 to-cyan-400',
    delay: 0.2,
  },
  {
    title: 'Mobile Development',
    description: 'Building native mobile apps for Android and iOS using React Native and Flutter.',
    icon: DevicePhoneMobileIcon,
    gradient: 'from-cyan-400 to-teal-400',
    delay: 0.3,
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces with a focus on user experience.',
    icon: PaintBrushIcon,
    gradient: 'from-teal-400 to-emerald-400',
    delay: 0.4,
  },
  {
    title: 'Cloud Solutions',
    description: 'Implementing scalable cloud infrastructure using AWS, Azure, and Google Cloud.',
    icon: CloudArrowUpIcon,
    gradient: 'from-emerald-400 to-cyan-400',
    delay: 0.5,
  },
  {
    title: 'DevOps',
    description: 'Streamlining development and deployment with CI/CD pipelines and containerization.',
    icon: CommandLineIcon,
    gradient: 'from-cyan-400 to-blue-600',
    delay: 0.6,
  },
  {
    title: 'AI Integration',
    description: 'Incorporating artificial intelligence and machine learning solutions into applications.',
    icon: CpuChipIcon,
    gradient: 'from-blue-600 to-violet-500',
    delay: 0.7,
  },
]

export default function Services() {
  return (
    <SectionTransition
      className="py-20 bg-background relative overflow-hidden"
    >
      <ParticleField />
      <AnimatedGradient />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div 
                  className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform-gpu will-change-transform"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                       style={{
                         background: `linear-gradient(135deg, ${service.gradient})`,
                       }} />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-4 text-synapse-cyan">
                      <Icon className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionTransition>
  )
}
