'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '@/lib/firebase'
import { toast } from 'react-hot-toast'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface BlogEditorProps {
  initialData?: {
    title: string
    content: string
    excerpt: string
    coverImage: string
    tags: string[]
  }
  isEditing?: boolean
}

export default function BlogEditor({ initialData, isEditing = false }: BlogEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '')
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [coverImagePreview, setCoverImagePreview] = useState(initialData?.coverImage || '')
  const [tags, setTags] = useState<string[]>(initialData?.tags || [])
  const [newTag, setNewTag] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCoverImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setCoverImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let coverImageUrl = initialData?.coverImage || ''

      if (coverImage) {
        const imageRef = ref(storage, `blog-images/${Date.now()}-${coverImage.name}`)
        await uploadBytes(imageRef, coverImage)
        coverImageUrl = await getDownloadURL(imageRef)
      }

      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')

      const blogData = {
        title,
        content,
        excerpt,
        coverImage: coverImageUrl,
        tags,
        slug,
        author: {
          name: 'Admin', // Replace with actual author data
          avatar: '/images/avatar.jpg', // Replace with actual avatar
        },
        publishedAt: new Date(),
        readingTime: Math.ceil(content.split(' ').length / 200), // Rough estimate
      }

      await addDoc(collection(db, 'blog-posts'), blogData)
      toast.success('Blog post published successfully!')
      router.push('/admin/blog')
    } catch (error) {
      console.error('Error publishing blog post:', error)
      toast.error('Failed to publish blog post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Excerpt
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          rows={3}
          className="w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Cover Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
        />
        {coverImagePreview && (
          <img
            src={coverImagePreview}
            alt="Cover preview"
            className="mt-2 h-48 w-full object-cover rounded-lg"
          />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Tags
        </label>
        <div className="flex gap-2 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-accent/10 rounded-full text-accent text-sm flex items-center gap-1"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="text-accent hover:text-accent/80"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="flex-1 px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
            placeholder="Add a tag"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90"
          >
            Add
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Content
        </label>
        <div className="prose-editor">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="h-96 mb-12 bg-black/20 rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 border border-gray-700 rounded-lg hover:bg-black/20"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </form>
  )
}
