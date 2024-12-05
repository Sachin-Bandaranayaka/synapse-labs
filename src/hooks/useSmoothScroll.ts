'use client'

import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      
      if (link) {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        if (!targetId) return

        const targetElement = document.querySelector(targetId)
        if (!targetElement) return

        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])
} 