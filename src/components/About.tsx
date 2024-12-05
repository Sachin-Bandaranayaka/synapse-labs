'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a team of passionate developers and designers dedicated to creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/about-image.jpg"
              alt="About Synapse Labs"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-synapse-cyan">Our Mission</h3>
              <p className="text-gray-300">
                At Synapse Labs, we bridge the gap between innovative ideas and technological solutions. Our mission is to empower businesses with cutting-edge digital solutions that drive growth and success.
              </p>

              <h3 className="text-2xl font-bold text-synapse-cyan">Our Approach</h3>
              <p className="text-gray-300">
                We combine technical expertise with creative thinking to deliver solutions that not only meet but exceed our clients' expectations. Our agile methodology ensures transparent communication and rapid delivery.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-4xl font-bold text-synapse-cyan mb-2">100+</h4>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-synapse-cyan mb-2">50+</h4>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 