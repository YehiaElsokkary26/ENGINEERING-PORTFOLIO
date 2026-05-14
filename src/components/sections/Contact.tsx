import { motion } from 'framer-motion'
import { Mail, Globe, GitBranch, AtSign } from 'lucide-react'

const SOCIALS = [
  { icon: GitBranch, label: 'GitHub', href: 'https://github.com' },
  { icon: Globe,     label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: AtSign,    label: 'X / Twitter', href: 'https://twitter.com' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-deep)' }}
    >
      {/* Radial glow orb — brain.fm style */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(79,110,247,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <p className="section-tag mb-6">Contact</p>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Have something worth building?
          </h2>
          <p
            className="text-sm max-w-md mx-auto"
            style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}
          >
            Open to engineering roles, freelance projects, and interesting problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center max-w-2xl mx-auto mb-16">
          {/* Email card */}
          <motion.a
            href="mailto:hello@antigravity.dev"
            className="flex-1 flex items-center gap-4 p-6 rounded-2xl"
            style={{
              background: 'rgba(14,14,26,0.7)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid var(--border)',
            }}
            whileHover={{
              y: -6,
              borderColor: 'rgba(79,110,247,0.4)',
              boxShadow: '0 0 30px rgba(79,110,247,0.2)',
            }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(79,110,247,0.12)',
                border: '1px solid rgba(79,110,247,0.2)',
              }}
            >
              <Mail size={18} color="#4F6EF7" />
            </div>
            <div>
              <p
                className="text-xs mb-0.5 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
              >
                Email
              </p>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                Send a message
              </p>
            </div>
          </motion.a>

          {/* LinkedIn card */}
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center gap-4 p-6 rounded-2xl"
            style={{
              background: 'rgba(14,14,26,0.7)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid var(--border)',
            }}
            whileHover={{
              y: -6,
              borderColor: 'rgba(139,92,246,0.4)',
              boxShadow: '0 0 30px rgba(139,92,246,0.2)',
            }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(139,92,246,0.12)',
                border: '1px solid rgba(139,92,246,0.2)',
              }}
            >
              <Globe size={18} color="#8B5CF6" />
            </div>
            <div>
              <p
                className="text-xs mb-0.5 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
              >
                LinkedIn
              </p>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                Connect
              </p>
            </div>
          </motion.a>
        </div>

        {/* Social icon row */}
        <div className="flex items-center justify-center gap-5">
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
