import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlowButtonProps {
  children: ReactNode
  variant?: 'filled' | 'outlined'
  onClick?: () => void
  className?: string
  href?: string
  target?: string
  rel?: string
  as?: 'button' | 'a'
}

export default function GlowButton({
  children,
  variant = 'filled',
  onClick,
  className = '',
  href,
  target,
  rel,
  as: Tag = 'button',
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
          border: '1px solid rgba(255,255,255,0.18)',
          color: 'rgba(240,240,255,0.72)',
          backdropFilter: 'blur(12px)',
        }

  const sharedProps = {
    className: `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide whitespace-nowrap min-w-[120px] ${className}`,
    style: { ...base, fontFamily: 'var(--font-body)' } as CSSProperties,
    whileHover: {
      scale: 1.02,
      boxShadow:
        variant === 'filled'
          ? '0 0 32px rgba(79,110,247,0.5), 0 0 64px rgba(79,110,247,0.15)'
          : '0 0 24px rgba(255,255,255,0.1), 0 0 48px rgba(255,255,255,0.04)',
    },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  }

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} onClick={onClick} {...sharedProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} {...sharedProps}>
      {children}
    </motion.button>
  )
}
