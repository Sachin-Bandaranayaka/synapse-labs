'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Synapse Labs transformed our business with their exceptional web development services. Their attention to detail and innovative solutions exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, InnovateCo',
    content: 'Working with Synapse Labs was a game-changer for our mobile app. Their team\'s expertise and dedication delivered outstanding results.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO, DigitalFlow',
    content: 'The team at Synapse Labs is incredibly skilled and professional. They turned our complex requirements into a beautifully simple solution.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/20 backdrop-blur-lg rounded-xl p-8 relative"
            >
              <div className="absolute -top-4 left-8 text-6xl text-accent opacity-20">"</div>
              <p className="text-gray-300 mb-6 relative z-10">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-accent text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
