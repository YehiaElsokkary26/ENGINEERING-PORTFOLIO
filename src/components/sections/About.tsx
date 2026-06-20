import { useRef, useState } from 'react'
import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Code2, Film, Star } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'

const STATS = [
  { value: '7',  label: 'Projects Built' },
  { value: '4',  label: 'Work Experiences' },
  { value: '4',  label: 'Leadership Roles' },
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

      gsap.from('.identity-card', {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })
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
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — portrait + text */}
          <div className="flex flex-col gap-7">

            {/* Portrait block — 160px */}
            <div className="about-text-reveal flex items-end gap-5">
              <div
                className="relative flex-shrink-0"
                style={{ width: 160, height: 160 }}
              >
                <div
                  className="w-full h-full rounded-2xl overflow-hidden"
                  style={{
                    border: '2px solid rgba(79,110,247,0.35)',
                    background: 'rgba(79,110,247,0.06)',
                  }}
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
                      className="absolute inset-0 flex items-center justify-center text-3xl font-bold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--glow-primary)' }}
                    >
                      YE
                    </span>
                  )}
                </div>
                {/* Accent glow behind portrait */}
                <div
                  className="absolute -inset-2 rounded-2xl -z-10"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(79,110,247,0.12) 0%, transparent 70%)' }}
                />
              </div>
              <div className="pb-2">
                <p
                  className="text-xl font-bold mb-0.5"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                >
                  Yehia Elsokkary
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Cairo, Egypt
                </p>
              </div>
            </div>

            {/* Heading — no section-tag, lead directly */}
            <div>
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

            <div className="flex flex-col gap-5">
              {[
                "Third-year Computer Science & Engineering student at the German University in Cairo (GUC) — building with Java, Python, and full-stack React & Node.js. From scheduling platforms to digital board games and IoT circuits, I engineer solutions to problems worth solving.",
                "Every project starts the same way: map the constraints, design before coding, iterate until it works. I've shipped full-stack platforms, game engines, and database systems — both solo and in teams.",
                "Outside the IDE, I direct short films, shoot photography, and lead marketing teams at IEEE and MUN. Creativity and engineering aren't separate disciplines — they're the same skill applied to different materials.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="about-text-reveal text-base leading-relaxed"
                  style={{ color: 'var(--text-body)', maxWidth: '60ch' }}
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="about-text-reveal grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right — always-visible identity cards */}
          <div className="flex flex-col gap-5">
            {IDENTITY_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  className="identity-card rounded-2xl p-6"
                  style={{
                    background: 'rgba(14,14,26,0.85)',
                    backdropFilter: 'blur(14px)',
                    border: `1px solid ${card.color}25`,
                    borderTop: `2px solid ${card.color}`,
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: `0 8px 32px ${card.color}20`,
                    borderColor: `${card.color}45`,
                  }}
                  transition={{ duration: 0.25 }}
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
                      className="font-bold text-base"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-2 rounded-md text-sm"
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

        </div>
      </div>
    </section>
  )
}
