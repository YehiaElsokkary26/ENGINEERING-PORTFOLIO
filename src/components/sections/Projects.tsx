import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'var(--bg-void)' }}
    >
      <div className="container-wide">
        <div className="mb-16">
          <p className="section-tag mb-4">Selected Work</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Projects that defy the obvious.
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
