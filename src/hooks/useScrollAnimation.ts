import type { RefObject } from 'react'
import { useEffect } from 'react'

export function useIntersectionReveal(
  ref: RefObject<Element | null>,
  onReveal: () => void,
  threshold = 0.2
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onReveal()
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, onReveal, threshold])
}
