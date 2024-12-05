'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Successfully subscribed to newsletter!')
        setEmail('')
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to subscribe')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-padding bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for the latest insights on web development,
            mobile apps, and technology trends.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
