import { useEffect, useRef, useState } from 'react'
import useInView from '../../hooks/useInView.js'

// CountUp animates 0 → target on first scroll into view.
// `prefix` / `suffix` are static strings rendered around the number.
export default function CountUp({ to = 0, duration = 1400, prefix = '', suffix = '', className = '' }) {
  const [ref, inView] = useInView()
  const [value, setValue] = useState(0)
  const frame = useRef()

  useEffect(() => {
    if (!inView) return
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(to * eased))
      if (t < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{value.toLocaleString('en-IN')}{suffix}
    </span>
  )
}
