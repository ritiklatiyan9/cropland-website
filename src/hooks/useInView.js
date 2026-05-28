import { useEffect, useRef, useState } from 'react'

export default function useInView({ threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect reduced motion — show immediately
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
