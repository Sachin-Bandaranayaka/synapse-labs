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
import { ParallaxSection } from '@/components/ParallaxSection'
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ParallaxSection
              key={service.title}
              direction="up"
              speed={0.3}
              className="h-full"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 30px rgba(34, 211, 238, 0.1)"
                }}
                className="bg-background-lighter rounded-xl p-8 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-synapse-blue to-synapse-cyan rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative bg-background-lighter rounded-xl p-8 hover:shadow-lg hover:shadow-synapse-cyan/5 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${service.gradient} p-3 mb-6`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-synapse-blue to-synapse-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                </div>
              </motion.div>
            </ParallaxSection>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies We Use</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Flutter', 'AWS'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 bg-background rounded-lg text-synapse-cyan border border-synapse-cyan/20 hover:border-synapse-cyan transition-colors duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionTransition>
  )
}
