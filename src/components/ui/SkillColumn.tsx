import type { SkillDomain } from '@/data/skills'

interface SkillColumnProps {
  domain: SkillDomain
}

export default function SkillColumn({ domain }: SkillColumnProps) {
  return (
    <div
      className="flex flex-col gap-4 p-6 rounded-2xl h-full skill-column"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderTop: `2px solid ${domain.accentColor}`,
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl" role="img">{domain.icon}</span>
        <h3
          className="text-base font-bold"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {domain.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {domain.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-md text-xs"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--text-muted)',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
