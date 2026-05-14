import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlowButtonProps {
  children: ReactNode
  variant?: 'filled' | 'outlined'
  onClick?: () => void
  className?: string
}

export default function GlowButton({
  children,
  variant = 'filled',
  onClick,
  className = '',
}: GlowButtonProps) {
  const base: CSSProperties =
    variant === 'filled'
      ? {
          background: 'rgba(79,110,247,0.15)',
          border: '1px solid rgba(79,110,247,0.5)',
          color: '#F0F0FF',
          boxShadow: '0 0 20px rgba(79,110,247,0.2)',
        }
      : {
          background: 'rgba(14,14,26,0.5)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'var(--text-muted)',
          backdropFilter: 'blur(12px)',
        }

  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl text-sm font-semibold tracking-wide ${className}`}
      style={{ ...base, fontFamily: 'var(--font-body)' }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          variant === 'filled'
            ? '0 0 32px rgba(79,110,247,0.5), 0 0 64px rgba(79,110,247,0.15)'
            : '0 0 20px rgba(255,255,255,0.06)',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  )
}
