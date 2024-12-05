'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SocialIcons } from '@/components/icons/SocialIcons'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { toast } from 'react-hot-toast'

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '/blog' },
]

const services = [
  { name: 'Web Development', href: '#services' },
  { name: 'Mobile Development', href: '#services' },
  { name: 'UI/UX Design', href: '#services' },
  { name: 'Cloud Solutions', href: '#services' },
  { name: 'DevOps', href: '#services' },
]

const socialLinks = {
  linkedin: 'https://linkedin.com/company/synapse-labs',
  github: 'https://github.com/synapse-labs',
  twitter: 'https://twitter.com/synapse_labs'
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    try {
      await addDoc(collection(db, 'newsletter_subscribers'), {
        email,
        subscribedAt: serverTimestamp(),
      })
      toast.success('Successfully subscribed to newsletter!')
      setEmail('')
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      toast.error('Failed to subscribe. Please try again.')
    }
    setLoading(false)
  }

  return (
    <footer className="bg-background-light pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Synapse Labs"
                width={150}
                height={40}
                className="mb-6"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Crafting cutting-edge web and mobile experiences that bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <SocialIcons 
                platform="linkedin" 
                url={socialLinks.linkedin}
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-synapse-cyan hover:bg-synapse-cyan/10 transition-colors"
              />
              <SocialIcons 
                platform="github" 
                url={socialLinks.github}
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-synapse-cyan hover:bg-synapse-cyan/10 transition-colors"
              />
              <SocialIcons 
                platform="twitter" 
                url={socialLinks.twitter}
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-synapse-cyan hover:bg-synapse-cyan/10 transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-synapse-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-synapse-cyan transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter to receive updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-synapse-cyan"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-synapse-cyan text-background rounded-lg hover:bg-synapse-cyan/90 transition-colors disabled:opacity-50"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Synapse Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 