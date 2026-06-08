import type { SkillDomain } from '@/data/skills'

interface SkillColumnProps {
  domain: SkillDomain
}

export default function SkillColumn({ domain }: SkillColumnProps) {
  return (
    <div
      className="flex flex-col gap-5 p-6 rounded-2xl h-full skill-column"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderTop: `2px solid ${domain.accentColor}`,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span
          className="text-sm font-bold select-none w-7 h-7 flex items-center justify-center rounded-lg flex-shrink-0"
          style={{
            background: `${domain.accentColor}15`,
            border: `1px solid ${domain.accentColor}30`,
            color: domain.accentColor,
            fontFamily: 'var(--font-mono)',
          }}
        >
          {domain.icon}
        </span>
        <h3
          className="text-sm font-bold leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {domain.title}
        </h3>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {domain.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-mono)',
              background: `${domain.accentColor}0d`,
              border: `1px solid ${domain.accentColor}25`,
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
