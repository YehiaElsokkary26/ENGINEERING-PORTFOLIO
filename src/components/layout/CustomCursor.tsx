import { useCustomCursor } from '@/hooks/useCustomCursor'
import { motion, useTransform } from 'framer-motion'

export default function CustomCursor() {
  const { springX, springY, hoverProgress } = useCustomCursor()

  const dotSize = useTransform(hoverProgress, [0, 1], [8, 0])
  const ringSize = useTransform(hoverProgress, [0, 1], [0, 40])
  const ringOpacity = useTransform(hoverProgress, [0, 1], [0, 0.8])
  const dotOpacity = useTransform(hoverProgress, [0, 1], [1, 0])

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9998] pointer-events-none select-none"
      style={{ x: springX, y: springY }}
    >
      {/* Dot */}
      <motion.div
        className="rounded-full"
        style={{
          width: dotSize,
          height: dotSize,
          opacity: dotOpacity,
          x: '-50%',
          y: '-50%',
          backgroundColor: '#4F6EF7',
          boxShadow: '0 0 12px rgba(79,110,247,0.9), 0 0 24px rgba(79,110,247,0.4)',
        }}
      />
      {/* Hover ring */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: ringSize,
          height: ringSize,
          opacity: ringOpacity,
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          borderColor: 'rgba(79,110,247,0.7)',
          boxShadow: '0 0 16px rgba(79,110,247,0.3)',
        }}
      />
    </motion.div>
  )
}
