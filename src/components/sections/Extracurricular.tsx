import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Star, Users } from 'lucide-react'

const CATEGORIES = [
  {
    icon: Star,
    label: 'Leadership Roles',
    color: '#4F6EF7',
    items: [
      'IEEE Marketing Head',
      "AYB 'Packing 25' — Marketing Team Leader",
      'CMISMUN — Multimedia Head',
      'World Scholars Cup 2021 — Judge & Attendee',
    ],
  },
  {
    icon: Users,
    label: 'Activities & Memberships',
    color: '#8B5CF6',
    items: [
      'IEEE Media Design — Junior Teaching Program',
      'IEEE Marketing Team',
      'Athar — Fundraising & Events',
      'GUC MUN — Peoples Operations',
      'Cura — Human Resources Committee',
      'AYB — Corporate Partnerships',
    ],
  },
]

export default function Extracurricular() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.extra-card', {
        y: 40,
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
      id="extracurricular"
      ref={containerRef}
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 100% 50%, rgba(79,110,247,0.05) 0%, transparent 65%), var(--bg-deep)',
      }}
    >
      <div className="container-wide">
        <div className="mb-14">
          <p className="section-tag mb-4">Beyond the Code</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Extracurricular &amp; Leadership.
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Organizations, roles, and initiatives I've contributed to outside the classroom.
          </p>
        </div>

        {/* 2-column balanced grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.label}
                className="extra-card flex flex-col rounded-2xl p-7 h-full"
                style={{
                  background: 'rgba(14,14,26,0.7)',
                  backdropFilter: 'blur(14px)',
                  border: `1px solid ${cat.color}20`,
                  borderTop: `2px solid ${cat.color}`,
                }}
                whileHover={{
                  y: -4,
                  boxShadow: `0 8px 32px ${cat.color}22`,
                  borderColor: `${cat.color}40`,
                }}
                transition={{ duration: 0.25 }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${cat.color}12`,
                      border: `1px solid ${cat.color}30`,
                    }}
                  >
                    <Icon size={17} color={cat.color} />
                  </div>
                  <h3
                    className="font-bold text-xs uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-mono)', color: cat.color }}
                  >
                    {cat.label}
                  </h3>
                </div>

                {/* Items */}
                <ul className="flex flex-col gap-3 flex-1">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: cat.color }}
                      />
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
