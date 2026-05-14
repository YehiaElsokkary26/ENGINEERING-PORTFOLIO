import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate()
  const cardRef = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 0

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: cardRef }
  )

  return (
    <div ref={cardRef}>
      <motion.div
        className="relative flex flex-col md:flex-row rounded-3xl overflow-hidden"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          minHeight: '420px',
          flexDirection: isEven ? 'row' : 'row-reverse',
        }}
        whileHover={{
          borderColor: 'rgba(79,110,247,0.4)',
          boxShadow: '0 0 40px rgba(79,110,247,0.15), 0 20px 60px rgba(0,0,0,0.4)',
          y: -8,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Gradient visual panel */}
        <div className="relative md:w-[45%] min-h-[240px] flex-shrink-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`,
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.gradient[1]} 0%, ${project.accentColor}55 100%)`,
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          {/* Number overlay */}
          <div
            className="absolute bottom-4 left-5 text-7xl font-bold select-none"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255,255,255,0.07)',
              lineHeight: 1,
            }}
          >
            {project.number}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-4 p-8 md:p-10 flex-1">
          <div className="flex items-center gap-3">
            <span
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                fontFamily: 'var(--font-mono)',
                background: `${project.accentColor}18`,
                border: `1px solid ${project.accentColor}40`,
                color: project.accentColor,
              }}
            >
              {project.category}
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              {project.number}
            </span>
          </div>

          <h3
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-muted)', maxWidth: '36ch' }}
          >
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'var(--text-muted)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <motion.button
            onClick={() => navigate(`/project/${project.id}`)}
            className="flex items-center gap-2 mt-2 w-fit text-sm font-semibold group"
            style={{ color: project.accentColor, fontFamily: 'var(--font-body)' }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            View Project
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
