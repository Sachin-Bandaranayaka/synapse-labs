'use client';

import { useEffect, useState } from 'react'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { toast } from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'

interface DashboardStats {
  blogPosts: number
  projects: number
}

export default function DashboardPage() {
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardStats>({
    blogPosts: 0,
    projects: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      if (!user) {
        setError('Authentication required')
        setLoading(false)
        return
      }

      try {
        setError(null)
        
        // Ensure collections exist
        const collections = ['blogPosts', 'projects']
        for (const collectionName of collections) {
          try {
            await getDocs(collection(db, collectionName))
          } catch (error) {
            console.log(`Creating ${collectionName} collection...`)
            // Create a dummy document to initialize the collection
            await setDoc(doc(db, collectionName, 'placeholder'), {
              createdAt: new Date(),
              createdBy: user.uid,
              isPlaceholder: true
            })
          }
        }

        // Now fetch the stats
        const [blogSnapshot, projectsSnapshot] = await Promise.all([
          getDocs(collection(db, 'blogPosts')),
          getDocs(collection(db, 'projects')),
        ])

        // Filter out placeholder documents
        const blogCount = blogSnapshot.docs.filter(doc => !doc.data().isPlaceholder).length
        const projectCount = projectsSnapshot.docs.filter(doc => !doc.data().isPlaceholder).length

        setStats({
          blogPosts: blogCount,
          projects: projectCount,
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
        setError('Failed to load dashboard data. Please try again.')
        toast.error('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [user])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blog Posts Card */}
        <div className="bg-secondary/20 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Blog Posts</h2>
          <p className="text-4xl font-bold text-accent">{stats.blogPosts}</p>
          <p className="text-gray-400 mt-2">Total published posts</p>
        </div>

        {/* Projects Card */}
        <div className="bg-secondary/20 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <p className="text-4xl font-bold text-accent">{stats.projects}</p>
          <p className="text-gray-400 mt-2">Total projects</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/admin/blog/new" 
            className="px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
          >
            Create New Blog Post
          </a>
          <a 
            href="/admin/projects/new" 
            className="px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
          >
            Add New Project
          </a>
        </div>
      </div>
    </div>
  )
}
