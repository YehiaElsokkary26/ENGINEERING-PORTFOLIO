import { useRef } from 'react'
import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Lock, Hourglass, Cpu } from 'lucide-react'

// ─── Add new coming-soon entries here — no layout code changes needed ───────
const COMING_SOON_PROJECTS: {
  icon: ComponentType<{ size?: number; color?: string }>
  label: string
  hint: string
  accentColor: string
}[] = [
  {
    icon: Cpu,
    label: 'Arduino IoT Project',
    hint: 'Hardware · Embedded Systems',
    accentColor: '#4F6EF7',
  },
  {
    icon: Hourglass,
    label: 'Mobile App',
    hint: 'React Native · Full-Stack',
    accentColor: '#8B5CF6',
  },
  {
    icon: Lock,
    label: 'Stealth Project',
    hint: 'Details coming soon...',
    accentColor: '#10d4a0',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function ComingSoon() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.cs-card', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      id="coming-soon"
      ref={containerRef}
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(139,92,246,0.06) 0%, transparent 70%), var(--bg-void)',
      }}
    >
      <div className="container-wide">
        <div className="mb-14">
          <p className="section-tag mb-4">What's Next</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Coming soon.
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Projects currently in progress — check back soon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {COMING_SOON_PROJECTS.map((card, i) => {
            const Icon = card.icon
            return (
              <div key={i} className="cs-card relative rounded-2xl overflow-hidden" style={{ minHeight: '220px' }}>
                {/* Frosted glass background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${card.accentColor}08 0%, rgba(14,14,26,0.9) 100%)`,
                    border: `1px solid ${card.accentColor}20`,
                    borderRadius: '1rem',
                  }}
                />

                {/* Blurred content behind the overlay (gives depth) */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 select-none"
                  style={{ filter: 'blur(5px)', opacity: 0.35, pointerEvents: 'none' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${card.accentColor}20`, border: `1px solid ${card.accentColor}40` }}
                  >
                    <Icon size={28} color={card.accentColor} />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-base mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                      {card.label}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{card.hint}</p>
                  </div>
                </div>

                {/* Frosted glass overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  style={{
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                    background: 'rgba(7,7,15,0.45)',
                  }}
                >
                  {/* Pulsing lock icon */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: `${card.accentColor}15`,
                      border: `1px solid ${card.accentColor}50`,
                      boxShadow: `0 0 24px ${card.accentColor}25`,
                    }}
                  >
                    <Lock size={18} color={card.accentColor} />
                  </motion.div>

                  {/* Label */}
                  <div className="text-center px-4">
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                    >
                      {card.label}
                    </p>
                    <p
                      className="text-xs tracking-widest uppercase"
                      style={{ fontFamily: 'var(--font-mono)', color: card.accentColor }}
                    >
                      Coming Soon
                    </p>
                  </div>
                </div>

                {/* Animated border pulse */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
                  style={{ border: `1px solid ${card.accentColor}60` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
