import { useRef, useState } from 'react'
import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Code2, Film, Star } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'

const STATS = [
  { value: '4', label: 'Projects Shipped' },
  { value: '99.4%', label: 'IGCSE Score' },
  { value: '3', label: 'Languages' },
]

const IDENTITY_CARDS: {
  title: string
  icon: ComponentType<{ size?: number; color?: string }>
  tags: string[]
  color: string
}[] = [
  {
    title: 'Engineering',
    icon: Code2,
    tags: ['Full-Stack', 'Java OOP', 'Databases'],
    color: '#4F6EF7',
  },
  {
    title: 'Creative',
    icon: Film,
    tags: ['Filmmaking', 'Photography', 'UI/UX'],
    color: '#8B5CF6',
  },
  {
    title: 'Leadership',
    icon: Star,
    tags: ['IEEE', 'MUN', 'Marketing'],
    color: '#10d4a0',
  },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [photoFailed, setPhotoFailed] = useState(false)

  useGSAP(
    () => {
      gsap.from('.about-text-reveal', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      const cards = cardsRef.current?.querySelectorAll('.identity-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          rotateY: 25,
          x: 30,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 100% 50%, rgba(139,92,246,0.06) 0%, transparent 70%), var(--bg-deep)',
      }}
    >
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-7">

            {/* Portrait slot — shows headshot or YE monogram fallback */}
            <div className="about-text-reveal flex items-center gap-4">
              <div
                className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: '2px solid rgba(79,110,247,0.35)', background: 'rgba(79,110,247,0.06)' }}
              >
                {!photoFailed ? (
                  <img
                    src="/headshot.jpg"
                    alt="Yehia Elsokkary"
                    className="w-full h-full object-cover"
                    onError={() => setPhotoFailed(true)}
                  />
                ) : (
                  <span
                    className="absolute inset-0 flex items-center justify-center text-base font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--glow-primary)' }}
                  >
                    YE
                  </span>
                )}
              </div>
              <div>
                <p className="text-base font-bold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                  Yehia Elsokkary
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Cairo, Egypt
                </p>
              </div>
            </div>

            <div>
              <p className="section-tag about-text-reveal mb-4">About</p>
              <h2
                className="about-text-reveal text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Computer Science &amp; Engineering student —{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #8aaeff, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  building real things.
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "Third-year Computer Science & Engineering student at the German University in Cairo (GUC) — building with Java, Python, and full-stack React & Node.js. From scheduling platforms to digital board games and IoT circuits, I engineer solutions to problems worth solving.",
                "Every project starts the same way: map the constraints, design before coding, iterate until it works. I've shipped full-stack platforms, game engines, and database systems — both solo and in teams.",
                "Outside the IDE, I direct short films, shoot photography, and lead marketing teams at IEEE and MUN. Creativity and engineering aren't separate disciplines — they're the same skill applied to different materials.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="about-text-reveal text-sm leading-relaxed"
                  style={{ color: i === 2 ? 'var(--text-body)' : 'var(--text-body)', fontStyle: i === 2 ? 'normal' : 'normal' }}
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="about-text-reveal grid grid-cols-3 gap-2">
              {STATS.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right — identity cards */}
          <div>
            {/* Desktop: overlapping fan layout (md+) */}
            <div
              ref={cardsRef}
              className="relative hidden md:flex items-center justify-center"
              style={{ perspective: '1200px', minHeight: '380px' }}
            >
              {IDENTITY_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.title}
                    className="identity-card absolute w-64 p-6 rounded-2xl"
                    style={{
                      background: 'rgba(14,14,26,0.85)',
                      backdropFilter: 'blur(14px)',
                      border: `1px solid ${card.color}30`,
                      borderTop: `2px solid ${card.color}`,
                      transformOrigin: 'bottom center',
                      rotate: (i - 1) * 8,
                      translateX: (i - 1) * 40,
                      translateY: Math.abs(i - 1) * 16,
                      zIndex: IDENTITY_CARDS.length - Math.abs(i - 1),
                    }}
                    whileHover={{
                      rotate: 0,
                      translateX: 0,
                      translateY: -16,
                      zIndex: 10,
                      transition: { duration: 0.35 },
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
                        style={{
                          background: `${card.color}15`,
                          border: `1px solid ${card.color}30`,
                        }}
                      >
                        <Icon size={16} color={card.color} />
                      </div>
                      <h3
                        className="font-bold text-lg"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            background: `${card.color}12`,
                            border: `1px solid ${card.color}30`,
                            color: card.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Mobile: flat 3-column card grid (< md) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:hidden">
              {IDENTITY_CARDS.map((card) => {
                const MIcon = card.icon
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl p-4 flex flex-col items-center text-center gap-2.5"
                    style={{
                      background: 'rgba(14,14,26,0.85)',
                      backdropFilter: 'blur(14px)',
                      border: `1px solid ${card.color}30`,
                      borderTop: `2px solid ${card.color}`,
                    }}
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-lg"
                      style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                    >
                      <MIcon size={15} color={card.color} />
                    </div>
                    <h3
                      className="font-bold text-xs leading-tight"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                    >
                      {card.title}
                    </h3>
                    <div className="flex flex-col gap-1.5 w-full">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-xs whitespace-nowrap block"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            background: `${card.color}12`,
                            border: `1px solid ${card.color}30`,
                            color: card.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
