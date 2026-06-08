import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'

const IN_PROGRESS = [
  { label: 'Arduino IoT', hint: 'Embedded Systems' },
  { label: 'Mobile App', hint: 'React Native' },
  { label: 'Stealth Project', hint: 'Details soon' },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'var(--bg-void)' }}
    >
      <div className="container-wide">
        <div className="mb-14">
          <p className="section-tag mb-4">Selected Work</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Projects that defy the obvious.
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            A selection of real projects — built, shipped, and learned from.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* In-progress strip */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-6"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              In progress
            </span>
            {IN_PROGRESS.map(({ label, hint }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(79,110,247,0.06)',
                  border: '1px solid rgba(79,110,247,0.15)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse-glow"
                  style={{ background: 'var(--glow-primary)' }}
                />
                <span style={{ color: 'var(--text-primary)' }}>{label}</span>
                <span style={{ color: 'var(--text-muted)' }}>· {hint}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
