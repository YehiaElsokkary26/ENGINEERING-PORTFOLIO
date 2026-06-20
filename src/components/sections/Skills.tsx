import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { skillDomains } from '@/data/skills'
import SkillColumn from '@/components/ui/SkillColumn'

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.skill-column', {
        y: 60,
        opacity: 0,
        stagger: 0.12,
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
      id="skills"
      ref={containerRef}
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(79,110,247,0.06) 0%, transparent 70%), var(--bg-deep)',
      }}
    >
      <div className="container-wide">
        {/* Stat-led header */}
        <div className="mb-14">
          <div className="flex items-end gap-4 mb-3">
            <span
              className="text-7xl md:text-8xl font-bold leading-none tracking-tight"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--glow-primary)' }}
            >
              25
            </span>
            <div className="pb-2">
              <p className="section-tag mb-1">Frontend Engineering</p>
              <p
                className="text-2xl md:text-3xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                technologies across 3 tiers.
              </p>
            </div>
          </div>
          <p className="text-base" style={{ color: 'var(--text-muted)' }}>
            From what I ship with daily to what I can pick up on demand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">
          {skillDomains.map((domain) => (
            <SkillColumn key={domain.id} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  )
}
