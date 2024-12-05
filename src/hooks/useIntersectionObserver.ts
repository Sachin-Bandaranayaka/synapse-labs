import { useEffect, useState, RefObject } from 'react'

export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '-20% 0px'
  }
) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options])

  return isVisible
} 