import { useEffect, useRef, useState } from 'react'

export default function useIntersectionObserver(options = {}) {
  const targetRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = targetRef.current

    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options.root, options.rootMargin, options.threshold])

  return [targetRef, isVisible]
}
