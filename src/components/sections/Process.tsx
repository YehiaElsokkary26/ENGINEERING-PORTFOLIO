import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const STEPS = [
  {
    number: '01',
    title: 'Research & Constraints',
    description: 'Understand the problem space deeply. Map every constraint — physical, electrical, latency, cost. Build a mental model before touching a keyboard.',
  },
  {
    number: '02',
    title: 'Architecture & Prototyping',
    description: 'Design the system architecture on paper first. Build the smallest possible prototype that validates the riskiest assumption.',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'Write real code to real standards. Iterate fast with tight feedback loops. Every iteration must be measurably better than the last.',
  },
  {
    number: '04',
    title: 'Ship & Document',
    description: 'Harden for production, instrument for observability, and document thoroughly. Code without context is technical debt.',
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useGSAP(
    () => {
      STEPS.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `#step-${i}`,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => setActiveStep(i),
          onEnterBack: () => setActiveStep(i),
        })
      })

      gsap.from('.process-step', {
        opacity: 0,
        x: -30,
        stagger: 0.15,
        duration: 0.7,
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
      id="process"
      ref={containerRef}
      className="section-padding"
      style={{ background: 'var(--bg-void)' }}
    >
      <div className="container-wide">
        <div className="mb-16">
          <p className="section-tag mb-4">Methodology</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            How I build.
          </h2>
        </div>

        {/* Desktop: horizontal | Mobile: vertical */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              id={`step-${i}`}
              key={step.number}
              className="process-step flex flex-col gap-4 p-6 rounded-2xl relative"
              animate={{
                background: activeStep === i ? 'rgba(79,110,247,0.08)' : 'var(--surface)',
                borderColor: activeStep === i ? 'rgba(79,110,247,0.4)' : 'var(--border)',
              }}
              style={{ border: '1px solid var(--border)' }}
              transition={{ duration: 0.35 }}
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 w-6 h-px translate-x-full -translate-y-1/2 z-10"
                  style={{
                    background: 'linear-gradient(to right, rgba(79,110,247,0.4), transparent)',
                  }}
                />
              )}
              <span
                className="text-5xl font-bold"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: activeStep === i ? 'rgba(79,110,247,0.4)' : 'rgba(255,255,255,0.06)',
                  lineHeight: 1,
                  transition: 'color 0.35s',
                }}
              >
                {step.number}
              </span>
              <h3
                className="font-bold text-base"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: activeStep === i ? 'var(--text-primary)' : 'var(--text-muted)',
                  transition: 'color 0.35s',
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-4 lg:hidden">
          {STEPS.map((step, i) => (
            <div
              id={`step-${i}`}
              key={step.number}
              className="process-step flex gap-5 p-5 rounded-2xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <span
                className="text-3xl font-bold flex-shrink-0 pt-1"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'rgba(79,110,247,0.3)',
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>
              <div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                >
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
