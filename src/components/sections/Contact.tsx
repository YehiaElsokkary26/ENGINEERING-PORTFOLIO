import { motion } from 'framer-motion'
import { Mail, Globe, GitBranch, AtSign, Phone, Download } from 'lucide-react'

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 155 065 4567',
    href: 'tel:+201550654567',
    accentColor: '#10d4a0',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'yehia.elsokkary@gmail.com',
    href: 'mailto:yehia.elsokkary@gmail.com',
    accentColor: '#4F6EF7',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    value: 'Yehia Elsokkary',
    href: 'https://www.linkedin.com/in/yehia-elsokkary-b785792b7/',
    accentColor: '#8B5CF6',
    external: true,
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: '@YehiaElsokkary26',
    href: 'https://github.com/YehiaElsokkary26',
    accentColor: '#E07B39',
    external: true,
  },
]

const SOCIALS = [
  { icon: GitBranch, label: 'GitHub',   href: 'https://github.com/YehiaElsokkary26' },
  { icon: Globe,     label: 'LinkedIn', href: 'https://www.linkedin.com/in/yehia-elsokkary-b785792b7/' },
  { icon: AtSign,    label: 'Email',    href: 'mailto:yehia.elsokkary@gmail.com' },
]

// proficiency: number of filled dots out of 5
const LANGUAGES = [
  { name: 'Arabic', level: 'Fluent', flag: '🇪🇬', proficiency: 5 },
  { name: 'English', level: 'Fluent', flag: '🇬🇧', proficiency: 5 },
  { name: 'German', level: 'A2 Level', flag: '🇩🇪', proficiency: 2 },
]

function ProficiencyDots({ filled, color }: { filled: number; color: string }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full"
          style={{
            background: i < filled ? color : 'rgba(255,255,255,0.1)',
            border: `1px solid ${i < filled ? color : 'rgba(255,255,255,0.08)'}`,
          }}
        />
      ))}
    </div>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-void)' }}
    >
      {/* Radial glow orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(79,110,247,0.10) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10">
        {/* Heading */}
        <div className="mb-14">
          <p className="section-tag mb-4">Contact</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Have something worth building?
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Open to engineering roles, freelance projects, and interesting problems.
          </p>
        </div>

        {/* Contact + Languages side-by-side on md+ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {/* Contact cards — takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{
                    background: 'rgba(14,14,26,0.7)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: `1px solid ${card.accentColor}18`,
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: `${card.accentColor}50`,
                    boxShadow: `0 0 28px ${card.accentColor}18`,
                  }}
                  transition={{ duration: 0.22 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${card.accentColor}12`,
                      border: `1px solid ${card.accentColor}25`,
                    }}
                  >
                    <Icon size={18} color={card.accentColor} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs mb-0.5 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                    >
                      {card.label}
                    </p>
                    <p
                      className="text-sm font-semibold truncate"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {card.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Languages card — takes 1 col */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{
              background: 'rgba(14,14,26,0.7)',
              backdropFilter: 'blur(14px)',
              border: '1px solid var(--border)',
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
            >
              Languages
            </p>
            <div className="flex flex-col gap-5 flex-1 justify-center">
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{lang.flag}</span>
                    <div>
                      <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
                        {lang.name}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{lang.level}</p>
                    </div>
                  </div>
                  <ProficiencyDots filled={lang.proficiency} color="#4F6EF7" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume download */}
        <div className="flex justify-start mb-14">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap"
            style={{
              background: 'rgba(16,212,160,0.08)',
              border: '1px solid rgba(16,212,160,0.3)',
              color: '#10d4a0',
              fontFamily: 'var(--font-body)',
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(16,212,160,0.22)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <Download size={15} />
            Download Resume
          </motion.a>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ background: 'var(--border)' }} />

        {/* Social icon row */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
              whileHover={{
                borderColor: 'rgba(79,110,247,0.45)',
                color: '#4F6EF7',
                boxShadow: '0 0 16px rgba(79,110,247,0.25)',
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
