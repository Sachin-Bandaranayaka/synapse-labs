'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitContactForm } from '@/lib/firebaseUtils'
import { toast } from 'react-hot-toast'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { SocialIcons } from '@/components/icons/SocialIcons'
import { ParticleField } from '@/components/ParticleField'
import { ParallaxSection } from '@/components/ParallaxSection'
import { InteractiveButton } from '@/components/InteractiveButton'

interface FormData {
  name: string
  email: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: ''
}

const contactInfo = {
  address: '123 Innovation Drive, Tech Valley, CA 94025',
  email: 'hello@synapselabs.dev',
  phone: '+1 (555) 123-4567',
  socials: {
    linkedin: 'https://linkedin.com/company/synapse-labs',
    github: 'https://github.com/synapse-labs',
    twitter: 'https://twitter.com/synapse_labs'
  }
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [loading, setLoading] = useState(false)
  const [activeField, setActiveField] = useState<keyof FormData | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const success = await submitContactForm(formData)
      if (success) {
        toast.success('Message sent successfully!')
        setFormData(initialFormData)
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('An error occurred. Please try again.')
    }

    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <ParticleField />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background-lighter rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <motion.div
                  animate={activeField === 'name' ? { scale: 0.98 } : { scale: 1 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    required
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-background border border-synapse-blue/20 rounded-lg focus:outline-none focus:border-synapse-cyan transition-colors"
                  />
                </motion.div>
              </div>

              <div>
                <motion.div
                  animate={activeField === 'email' ? { scale: 0.98 } : { scale: 1 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    required
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-background border border-synapse-blue/20 rounded-lg focus:outline-none focus:border-synapse-cyan transition-colors"
                  />
                </motion.div>
              </div>

              <div>
                <motion.div
                  animate={activeField === 'message' ? { scale: 0.98 } : { scale: 1 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    required
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-6 py-4 bg-background border border-synapse-blue/20 rounded-lg focus:outline-none focus:border-synapse-cyan transition-colors resize-none"
                  />
                </motion.div>
              </div>

              <InteractiveButton type="submit" className="w-full">
                Send Message
              </InteractiveButton>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background-lighter rounded-xl p-8 space-y-6"
          >
            {/* Contact Information */}
            <div className="flex items-start space-x-4">
              <MapPinIcon className="w-6 h-6 text-synapse-cyan flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-400">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="w-6 h-6 text-synapse-cyan flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-synapse-cyan transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <PhoneIcon className="w-6 h-6 text-synapse-cyan flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-synapse-cyan transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-800">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <SocialIcons 
                  platform="linkedin" 
                  url={contactInfo.socials.linkedin} 
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-synapse-cyan hover:bg-synapse-cyan/10 transition-colors"
                />
                <SocialIcons 
                  platform="github" 
                  url={contactInfo.socials.github}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-synapse-cyan hover:bg-synapse-cyan/10 transition-colors"
                />
                <SocialIcons 
                  platform="twitter" 
                  url={contactInfo.socials.twitter}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-synapse-cyan hover:bg-synapse-cyan/10 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 