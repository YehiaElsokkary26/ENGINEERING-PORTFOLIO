import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { scrollToSection } from '@/hooks/useSmoothScroll'
import GlowButton from '@/components/ui/GlowButton'
import { Download, ArrowRight } from 'lucide-react'


const HeroScene = lazy(() => import('@/components/three/HeroScene'))

const NAME_WORDS = [
  { word: 'Yehia', gradient: false },
  { word: 'Elsokkary.', gradient: true },
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
            Open to Engineering Roles &amp; Internships
          </motion.p>

          <h1 className="text-display mb-3" style={{ maxWidth: '14ch' }}>
            {/* aria-hidden on each span: the animation wrappers are purely
                decorative. The sr-only span below provides the AT label so
                screen readers announce "Yehia Elsokkary." as a single unit
                rather than as two separate staggered fragments. */}
            {NAME_WORDS.map(({ word, gradient }, i) => (
              <motion.span
                key={word}
                aria-hidden={true}
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
            {/* Accessible text — visually hidden, read by screen readers */}
            <span className="sr-only">
              {NAME_WORDS.map((h) => h.word).join(' ')}
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl font-semibold mb-5"
            style={{ color: 'var(--text-body)', fontFamily: 'var(--font-display)', maxWidth: '34ch' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.55, ease: 'easeOut' }}
          >
            Computer Science &amp; Engineering Student
          </motion.p>

          <motion.p
            className="text-hero-sub mb-10 max-w-[46ch]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66, duration: 0.65, ease: 'easeOut' }}
          >
            Computer Science &amp; Engineering student at GUC — building full-stack applications, Java systems, and software that actually ships.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.55, ease: 'easeOut' }}
          >
            {/* Primary CTA */}
            <GlowButton variant="filled" onClick={() => scrollToSection('#projects')}>
              View Projects
              <ArrowRight size={15} />
            </GlowButton>

            {/* Secondary CTA */}
            <GlowButton variant="outlined" onClick={() => scrollToSection('#contact')}>
              Contact Me
            </GlowButton>

            {/* Tertiary — outlined button, same visual level as Contact Me */}
            <GlowButton
              variant="outlined"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={14} />
              Download CV
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
