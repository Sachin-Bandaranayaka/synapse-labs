'use client'

import BlogEditor from '@/components/admin/BlogEditor'

export default function NewBlogPost() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Create New Blog Post</h1>
      <BlogEditor />
    </div>
  )
}
