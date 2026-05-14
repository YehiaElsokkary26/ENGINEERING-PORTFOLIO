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
        <div className="mb-16 text-center">
          <p className="section-tag mb-4">Capabilities</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Tools of the trade.
          </h2>
          <p
            className="text-sm max-w-sm mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            The stack I reach for when things need to actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillDomains.map((domain) => (
            <SkillColumn key={domain.id} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  )
}
