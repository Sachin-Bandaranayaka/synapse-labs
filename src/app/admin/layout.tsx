'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard' },
  { name: 'Blog Posts', href: '/admin/blog' },
  { name: 'Projects', href: '/admin/projects' },
  { name: 'Testimonials', href: '/admin/testimonials' },
  { name: 'Newsletter', href: '/admin/newsletter' },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !user && pathname !== '/admin/login') {
      router.push('/admin/login')
    }
  }, [user, loading, router, pathname])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!user && pathname !== '/admin/login') {
    return null
  }

  if (pathname === '/admin/login') {
    return children
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-secondary border-r border-gray-800">
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-gray-400 hover:text-white hover:bg-black/20'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
          <div />
          <button
            onClick={() => signOut()}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Sign Out
          </button>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
