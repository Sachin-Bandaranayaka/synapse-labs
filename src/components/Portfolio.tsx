'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { getProjects } from '@/lib/firebaseUtils'
import type { Project } from '@/lib/firebaseUtils'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ui', name: 'UI/UX Design' },
  { id: 'cloud', name: 'Cloud Solutions' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
    transition: { duration: 0.5 },
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  },
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects()
      setProjects(fetchedProjects)
      setFilteredProjects(fetchedProjects)
      setLoading(false)
    }
    fetchProjects()
  }, [])

  useEffect(() => {
    const filtered = selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory)
    setFilteredProjects(filtered)
  }, [selectedCategory, projects])

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-synapse-blue to-synapse-cyan text-white'
                  : 'bg-background-lighter text-gray-400 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {loading ? (
              // Loading skeletons
              Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-background-lighter rounded-xl h-[400px] animate-pulse"
                />
              ))
            ) : (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 30px rgba(34, 211, 238, 0.1)"
                  }}
                  className="relative overflow-hidden rounded-xl bg-background-lighter"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full object-cover"
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 50
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 flex flex-col justify-end"
                  >
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold mb-2"
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-400 mb-4"
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-4"
                    >
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-synapse-cyan/10 text-synapse-cyan rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex gap-4 mt-4"
                    >
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-synapse-cyan hover:text-white transition-colors"
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={`https://github.com/synapse-labs/${project.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-synapse-cyan hover:text-white transition-colors"
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                        View Code
                      </a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-background-lighter rounded-xl p-8"
        >
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Happy Clients', value: '30+' },
            { label: 'Countries Reached', value: '15+' },
            { label: 'Team Members', value: '20+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-synapse-cyan mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
