import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import Footer from '@/components/layout/Footer'
import { projects } from '@/data/projects'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const projectIndex = projects.findIndex((p) => p.id === id)
  const project = projects[projectIndex]

  if (!project) {
    return (
      <PageWrapper>
        <div
          className="flex flex-col items-center justify-center min-h-screen gap-4"
          style={{ background: 'var(--bg-void)', color: 'var(--text-muted)' }}
        >
          <p style={{ fontFamily: 'var(--font-mono)' }}>Project not found.</p>
          <button
            onClick={() => navigate('/')}
            style={{ color: 'var(--glow-primary)' }}
          >
            ← Back home
          </button>
        </div>
      </PageWrapper>
    )
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <PageWrapper>
      <div
        style={{ background: 'var(--bg-void)', minHeight: '100vh', paddingTop: '80px' }}
      >
        {/* Back button */}
        <div className="container-wide pt-8">
          <button
            onClick={() => {
              navigate('/')
              setTimeout(() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }, 400)
            }}
            className="flex items-center gap-2 text-sm mb-12 group transition-colors duration-200"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span className="group-hover:text-[#F0F0FF] transition-colors duration-200">
              All Projects
            </span>
          </button>
        </div>

        {/* Hero cover */}
        <div className="relative w-full overflow-hidden" style={{ height: '50vh', minHeight: '320px' }}>
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 60%, ${project.accentColor}44 100%)`,
            }}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,0,0,0.2) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10rem] font-bold select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255,255,255,0.04)',
              lineHeight: 1,
            }}
          >
            {project.number}
          </div>
        </div>

        <div className="container-wide py-16">
          {/* Metadata row */}
          <motion.div
            className="flex flex-wrap gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {[
              { label: 'Category', value: project.category },
              { label: 'Year', value: String(project.year) },
              { label: 'Duration', value: project.duration },
              { label: 'Role', value: project.role },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                >
                  {label}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {project.title}
          </motion.h1>

          {/* Overview */}
          <motion.p
            className="text-base md:text-lg leading-relaxed mb-16 max-w-2xl"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {project.description}
          </motion.p>

          {/* Challenge + Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <SectionBlock
              title="The Challenge"
              body={project.challenge}
              accentColor={project.accentColor}
            />
            <SectionBlock
              title="The Solution"
              body={project.solution}
              accentColor={project.accentColor}
            />
          </div>

          {/* Tech stack */}
          <div className="mb-16">
            <h3
              className="text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-xl text-sm font-medium"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: `${project.accentColor}12`,
                    border: `1px solid ${project.accentColor}30`,
                    color: project.accentColor,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h3
              className="text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((r) => (
                <div
                  key={r.label}
                  className="flex flex-col items-center gap-2 py-8 px-4 rounded-2xl text-center"
                  style={{
                    background: 'var(--surface)',
                    border: `1px solid ${project.accentColor}20`,
                  }}
                >
                  <span
                    className="text-4xl font-bold"
                    style={{ fontFamily: 'var(--font-mono)', color: project.accentColor }}
                  >
                    {r.value}
                  </span>
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                  >
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery — placeholder gradient panels */}
          <div className="mb-20">
            <h3
              className="text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridAutoRows: '200px' }}>
              <div
                className="rounded-2xl md:row-span-2"
                style={{
                  background: `linear-gradient(160deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                  minHeight: '200px',
                }}
              />
              <div
                className="rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient[1]}, ${project.accentColor}55)`,
                }}
              />
              <div
                className="rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor}33, ${project.gradient[0]})`,
                }}
              />
              <div
                className="rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient[0]}88, ${project.accentColor}44)`,
                }}
              />
              <div
                className="rounded-2xl"
                style={{
                  background: `linear-gradient(160deg, ${project.accentColor}22, ${project.gradient[1]})`,
                }}
              />
            </div>
          </div>

          {/* Prev / Next nav */}
          <div
            className="flex items-center justify-between pt-8"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {prevProject ? (
              <button
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className="flex items-center gap-3 group"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                  color="var(--text-muted)"
                />
                <div className="text-left">
                  <p
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                  >
                    Previous
                  </p>
                  <p
                    className="text-sm font-semibold group-hover:text-[#4F6EF7] transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {prevProject.title}
                  </p>
                </div>
              </button>
            ) : (
              <span />
            )}

            {nextProject ? (
              <button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="flex items-center gap-3 text-right group"
              >
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                  >
                    Next
                  </p>
                  <p
                    className="text-sm font-semibold group-hover:text-[#4F6EF7] transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  color="var(--text-muted)"
                />
              </button>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  )
}

function SectionBlock({
  title,
  body,
  accentColor,
}: {
  title: string
  body: string
  accentColor: string
}) {
  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderLeft: `3px solid ${accentColor}`,
      }}
    >
      <h3
        className="text-base font-bold mb-4"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {body}
      </p>
    </div>
  )
}
