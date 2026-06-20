import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, GitBranch, ExternalLink } from 'lucide-react'
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
        className={`relative flex flex-col rounded-3xl overflow-hidden ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          minHeight: '420px',
        }}
        whileHover={{
          borderColor: 'rgba(79,110,247,0.4)',
          boxShadow: '0 0 40px rgba(79,110,247,0.15), 0 20px 60px rgba(0,0,0,0.4)',
          y: -6,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Visual panel — screenshot when available, gradient fallback */}
        <div className="relative md:w-[45%] min-h-[140px] md:min-h-0 flex-shrink-0 overflow-hidden">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Tinted overlay so text remains readable if overlaid */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient[0]}cc 0%, ${project.gradient[1]}99 100%)`,
                }}
              />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`,
                }}
              />
              {/* Subtle grid texture on gradient-only cards */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                  backgroundSize: '36px 36px',
                }}
              />
            </>
          )}

          {/* Hover shimmer overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.gradient[1]} 0%, ${project.accentColor}55 100%)`,
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Project number watermark */}
          <div
            className="absolute bottom-4 left-5 text-7xl font-bold select-none"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255,255,255,0.08)',
              lineHeight: 1,
            }}
          >
            {project.number}
          </div>
        </div>

        {/* Info panel */}
        <div className="flex flex-col justify-center gap-5 p-6 md:p-8 flex-1">
          {/* Category + number + WIP badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="text-xs px-3 py-2 rounded-full whitespace-nowrap"
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
            {project.status && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(79,110,247,0.06)',
                  border: '1px solid rgba(79,110,247,0.15)',
                  color: 'var(--text-muted)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse-glow"
                  style={{ background: 'var(--glow-primary)' }}
                />
                {project.status}
              </span>
            )}
          </div>

          {/* Title — reduced from text-3xl/4xl to text-xl/2xl for better proportion */}
          <h3
            className="text-xl md:text-2xl font-bold tracking-tight leading-snug"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>

          {/* Tagline — increased from text-sm to text-base, brighter color */}
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-body)', maxWidth: '42ch' }}
          >
            {project.tagline}
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-3">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="px-3 py-2 rounded-full text-xs whitespace-nowrap"
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

          {/* Actions */}
          <div className="flex items-center gap-4 mt-1 flex-wrap">
            <motion.button
              onClick={() => navigate(`/project/${project.id}`)}
              className="flex items-center gap-2 text-sm font-semibold group py-2 pr-2 -ml-1"
              style={{ color: project.accentColor, fontFamily: 'var(--font-body)' }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Case Study
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="flex items-center gap-1.5 text-xs transition-colors duration-200 py-2 px-1"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <GitBranch size={13} />
                Code
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="flex items-center gap-1.5 text-xs transition-colors duration-200 py-2 px-1"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <ExternalLink size={13} />
                Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
