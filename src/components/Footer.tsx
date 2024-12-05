'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SocialIcons } from '@/components/icons/SocialIcons'
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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setStatus('idle')
    setMessage('')
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()
      
      if (response.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again.')
    }
  }, [email])

  return (
    <footer className="bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
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
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 
                            focus:border-synapse-cyan focus:outline-none focus:ring-1 focus:ring-synapse-cyan
                            transition-all duration-200 transform-gpu"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-2 top-2 px-4 py-1 rounded-md bg-synapse-cyan/20 
                            hover:bg-synapse-cyan/30 text-synapse-cyan transition-all duration-200
                            disabled:opacity-50 disabled:cursor-not-allowed transform-gpu"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            {new Date().getFullYear()} Synapse Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 