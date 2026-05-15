import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { scrollToSection } from '@/hooks/useSmoothScroll'
import GlowButton from '@/components/ui/GlowButton'

const HeroScene = lazy(() => import('@/components/three/HeroScene'))

const HEADING = [
  { word: 'Built', gradient: false },
  { word: 'against', gradient: false },
  { word: 'gravity.', gradient: true },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* Deep-space background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 72% 50%, rgba(79,110,247,0.08) 0%, transparent 65%),' +
            'radial-gradient(ellipse 60% 80% at 28% 20%, rgba(139,92,246,0.05) 0%, transparent 70%),' +
            'var(--bg-void)',
        }}
      />

      {/* Three.js canvas — lazy-loaded, disposed on unmount */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* HTML overlay */}
      <div className="relative z-10 flex flex-col justify-center h-full container-wide">
        <div className="max-w-2xl">
          <motion.p
            className="section-tag mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.55, ease: 'easeOut' }}
          >
            Engineering Portfolio
          </motion.p>

          <h1
            className="text-display mb-6"
            aria-label={HEADING.map((h) => h.word).join(' ')}
          >
            {HEADING.map(({ word, gradient }, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.22em] last:mr-0"
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.22 + i * 0.14,
                  duration: 0.85,
                  ease: 'easeOut',
                }}
              >
                {gradient ? (
                  <span
                    style={{
                      background:
                        'linear-gradient(135deg, #f0f0ff 0%, #8aaeff 45%, #8B5CF6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-hero-sub mb-10 max-w-[42ch]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66, duration: 0.65, ease: 'easeOut' }}
          >
            Software engineering · Java · Web development. Systems built to last.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.55, ease: 'easeOut' }}
          >
            <GlowButton variant="filled" onClick={() => scrollToSection('#projects')}>
              View Work
            </GlowButton>
            <GlowButton variant="outlined" onClick={() => scrollToSection('#contact')}>
              Get in Touch
            </GlowButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.55, ease: 'easeOut' }}
      >
        <span
          className="text-[10px] tracking-[0.22em] uppercase"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-14 overflow-hidden"
          style={{ background: 'rgba(79,110,247,0.12)' }}
        >
          <div
            className="w-full h-full animate-scroll-line"
            style={{
              background: 'linear-gradient(to bottom, transparent, #4F6EF7, transparent)',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
