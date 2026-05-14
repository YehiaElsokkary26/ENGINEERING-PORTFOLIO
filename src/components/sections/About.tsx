import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import StatCard from '@/components/ui/StatCard'

const STATS = [
  { value: '20+', label: 'Projects' },
  { value: '4+', label: 'Years Building' },
  { value: '5', label: 'Domains' },
]

const SKILL_CARDS = [
  {
    title: 'Software',
    icon: '🧠',
    tags: ['TypeScript', 'Rust', 'Python'],
    color: '#8B5CF6',
  },
  {
    title: 'Hardware',
    icon: '⚡',
    tags: ['PCB Design', 'FPGA', 'Embedded C'],
    color: '#4F6EF7',
  },
  {
    title: 'Systems',
    icon: '🤖',
    tags: ['RTOS', 'Linux', 'Distributed'],
    color: '#10d4a0',
  },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      const cards = cardsRef.current?.querySelectorAll('.skill-fan-card')
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
          <div className="flex flex-col gap-8">
            <div>
              <p className="section-tag about-text-reveal mb-4">About</p>
              <h2
                className="about-text-reveal text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                I build things that shouldn't work —{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #8aaeff, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  until they do.
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "I'm an engineer who operates across the full stack — from schematic design and embedded firmware to distributed cloud systems and interactive interfaces. My work lives at the intersection of precision and ambition.",
                "I'm drawn to problems where the constraints are real: limited power budgets, millisecond latency requirements, physics that don't negotiate. I believe the best engineering comes from deeply understanding a system before touching it.",
                "Whether it's a mesh network of sensors in an industrial plant or a real-time collaboration platform for hardware teams, I care about systems that are reliable, elegant, and built to last.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="about-text-reveal text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="about-text-reveal grid grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right — floating card stack */}
          <div
            ref={cardsRef}
            className="relative flex items-center justify-center"
            style={{ perspective: '1200px', minHeight: '380px' }}
          >
            {SKILL_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                className="skill-fan-card absolute w-64 p-6 rounded-2xl"
                style={{
                  background: 'rgba(14,14,26,0.85)',
                  backdropFilter: 'blur(14px)',
                  border: `1px solid ${card.color}30`,
                  borderTop: `2px solid ${card.color}`,
                  transformOrigin: 'bottom center',
                  rotate: (i - 1) * 8,
                  translateX: (i - 1) * 40,
                  translateY: Math.abs(i - 1) * 16,
                  zIndex: SKILL_CARDS.length - Math.abs(i - 1),
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
                  <span className="text-2xl">{card.icon}</span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
