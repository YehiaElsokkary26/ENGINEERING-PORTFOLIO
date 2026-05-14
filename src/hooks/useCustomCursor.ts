import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

const SPRING = { stiffness: 380, damping: 38, mass: 0.5 }
const HOVER_SPRING = { stiffness: 300, damping: 30 }

export function useCustomCursor() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const isHovering = useMotionValue(0)

  const springX = useSpring(mouseX, SPRING)
  const springY = useSpring(mouseY, SPRING)
  const hoverProgress = useSpring(isHovering, HOVER_SPRING)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element
      if (el.closest('a, button, [role="button"], [data-cursor-hover]')) {
        isHovering.set(1)
      }
    }

    const onOut = (e: MouseEvent) => {
      const el = e.target as Element
      if (el.closest('a, button, [role="button"], [data-cursor-hover]')) {
        isHovering.set(0)
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [mouseX, mouseY, isHovering])

  return { springX, springY, hoverProgress }
}
