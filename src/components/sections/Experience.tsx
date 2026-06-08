import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Shield, Briefcase } from 'lucide-react'

const EXPERIENCES = [
  {
    company: 'CYSHEILD',
    role: 'Cyber Security & AI Intern',
    period: 'July 2025 – August 2025',
    accentColor: '#4F6EF7',
    icon: Shield,
    bullets: [
      'Participated in hands-on cybersecurity and AI-powered threat detection training led by industry professionals.',
      'Gained experience in threat analysis, security fundamentals, and AI-based anomaly detection systems.',
      'Learned security protocols, risk assessment techniques, and data protection best practices.',
    ],
    tags: ['Cybersecurity', 'AI', 'Threat Analysis', 'Risk Assessment', 'Data Protection'],
  },
  {
    company: 'Commercial International Bank (CIB)',
    role: 'Intern',
    period: '2024',
    accentColor: '#10d4a0',
    icon: Briefcase,
    bullets: [
      'Gained hands-on exposure to banking operations and financial technology workflows at Egypt\'s leading private bank.',
      'Observed cross-departmental coordination, process management, and enterprise-scale operational systems.',
    ],
    tags: ['Banking', 'FinTech', 'Operations', 'Enterprise Systems'],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.exp-card', {
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
      id="experience"
      ref={containerRef}
      className="section-padding"
      style={{ background: 'var(--bg-void)' }}
    >
      <div className="container-wide">
        <div className="mb-14">
          <p className="section-tag mb-4">Experience</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Work in the field.
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Real-world experience applying skills in professional settings.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {EXPERIENCES.map((exp) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.company}
                className="exp-card rounded-2xl p-7 md:p-8"
                style={{
                  background: 'rgba(14,14,26,0.7)',
                  backdropFilter: 'blur(14px)',
                  border: `1px solid ${exp.accentColor}20`,
                  borderLeft: `3px solid ${exp.accentColor}`,
                }}
                whileHover={{
                  boxShadow: `0 0 40px ${exp.accentColor}12`,
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${exp.accentColor}12`,
                      border: `1px solid ${exp.accentColor}30`,
                    }}
                  >
                    <Icon size={20} color={exp.accentColor} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3
                          className="text-lg md:text-xl font-bold mb-1 leading-tight"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                        >
                          {exp.company}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: exp.accentColor }}>
                          {exp.role}
                        </p>
                      </div>
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs whitespace-nowrap self-start"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          background: `${exp.accentColor}12`,
                          border: `1px solid ${exp.accentColor}25`,
                          color: exp.accentColor,
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2.5 mb-5">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                          <span
                            className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: exp.accentColor }}
                          />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs whitespace-nowrap"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'var(--text-muted)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
