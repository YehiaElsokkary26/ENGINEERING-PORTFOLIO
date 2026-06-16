import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const EDUCATION = [
  {
    institution: 'German University in Cairo',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    period: 'Sept 2023 – July 2028',
    location: 'Cairo, Egypt',
    detail: '3rd Year · GPA: 2.3 on German Scale (1.0 = best · equivalent to B+ in US system)',
    courses: ['Data Structures', 'Computer Architecture', 'Database', 'OOP'],
    accentColor: '#4F6EF7',
    icon: GraduationCap,
    badge: null,
  },
  {
    institution: 'Egypt British International School',
    degree: 'High School',
    period: 'June 2023',
    location: 'Cairo, Egypt',
    detail: 'IG Score: 99.4% · 8 OLs (All A*) · A-Level Math (A)',
    courses: [],
    accentColor: '#8B5CF6',
    icon: Award,
    badge: 'Certificate of Excellence — Pearson Edexcel',
  },
]

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.edu-card', {
        y: 50,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
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
      id="education"
      ref={containerRef}
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 0% 50%, rgba(79,110,247,0.06) 0%, transparent 65%), var(--bg-deep)',
      }}
    >
      <div className="container-wide">
        <div className="mb-16">
          <p className="section-tag mb-4">Education</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Academic foundation.
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Building on a strong technical and academic base.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {EDUCATION.map((edu) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={edu.institution}
                className="edu-card rounded-2xl p-6 md:p-10"
                style={{
                  background: 'rgba(14,14,26,0.7)',
                  backdropFilter: 'blur(14px)',
                  border: `1px solid ${edu.accentColor}20`,
                  borderLeft: `3px solid ${edu.accentColor}`,
                }}
                whileHover={{
                  y: -4,
                  boxShadow: `0 8px 40px ${edu.accentColor}20`,
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-7">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${edu.accentColor}12`,
                      border: `1px solid ${edu.accentColor}30`,
                    }}
                  >
                    <Icon size={20} color={edu.accentColor} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div className="min-w-0">
                        <h3
                          className="text-lg md:text-xl font-bold mb-1 leading-tight"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                        >
                          {edu.institution}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: edu.accentColor, fontFamily: 'var(--font-body)' }}>
                          {edu.degree}
                        </p>
                      </div>
                      <div className="sm:text-right flex-shrink-0">
                        <p
                          className="text-sm mb-0.5"
                          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
                        >
                          {edu.period}
                        </p>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-body)' }}>
                      {edu.detail}
                    </p>

                    {edu.badge && (
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 text-sm font-medium whitespace-nowrap"
                        style={{
                          background: `${edu.accentColor}12`,
                          border: `1px solid ${edu.accentColor}30`,
                          color: edu.accentColor,
                        }}
                      >
                        <Award size={12} />
                        {edu.badge}
                      </div>
                    )}

                    {edu.courses.length > 0 && (
                      <div className="flex items-start gap-2">
                        <BookOpen size={13} style={{ color: 'var(--text-muted)', marginTop: 3, flexShrink: 0 }} />
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 rounded-full text-sm whitespace-nowrap"
                              style={{
                                fontFamily: 'var(--font-mono)',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: 'var(--text-muted)',
                              }}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
