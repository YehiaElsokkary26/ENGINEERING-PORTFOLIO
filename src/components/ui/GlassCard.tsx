import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: boolean
  interactive?: boolean
}

export default function GlassCard({ children, className = '', glow = false, interactive = false }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-2xl ${className}`}
      style={{
        background: 'rgba(14,14,26,0.65)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid var(--border)',
        boxShadow: glow ? 'var(--glow-blue)' : undefined,
      }}
      whileHover={interactive ? {
        borderColor: 'rgba(79,110,247,0.35)',
        boxShadow: '0 0 24px rgba(79,110,247,0.2), 0 0 60px rgba(79,110,247,0.08)',
      } : undefined}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
