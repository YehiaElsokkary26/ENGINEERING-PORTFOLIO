import { motion } from 'framer-motion'
import { GitBranch, Globe, AtSign, Download, ArrowUp } from 'lucide-react'

const FOOTER_SOCIALS = [
  { icon: GitBranch, label: 'GitHub',   href: 'https://github.com/YehiaElsokkary26' },
  { icon: Globe,     label: 'LinkedIn', href: 'https://www.linkedin.com/in/yehia-elsokkary-b785792b7/' },
  { icon: AtSign,    label: 'Email',    href: 'mailto:yehia.elsokkary@gmail.com' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12"
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-void)',
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Left — copyright */}
        <p
          className="text-xs tracking-widest uppercase order-3 sm:order-1"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
        >
          © {new Date().getFullYear()} Yehia Elsokkary
        </p>

        {/* Center — socials + resume */}
        <div className="flex items-center gap-3 order-1 sm:order-2">
          {FOOTER_SOCIALS.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
              whileHover={{
                borderColor: 'rgba(79,110,247,0.45)',
                color: '#4F6EF7',
                boxShadow: '0 0 16px rgba(79,110,247,0.2)',
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon size={14} />
            </motion.a>
          ))}

          <div style={{ width: '1px', height: '20px', background: 'var(--border)' }} />

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'rgba(16,212,160,0.06)',
              border: '1px solid rgba(16,212,160,0.25)',
              color: '#10d4a0',
            }}
            whileHover={{ boxShadow: '0 0 12px rgba(16,212,160,0.2)' }}
            transition={{ duration: 0.2 }}
          >
            <Download size={11} />
            Resume
          </motion.a>
        </div>

        {/* Right — back to top */}
        <motion.button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs order-2 sm:order-3"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
          whileHover={{ color: 'var(--text-primary)' }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUp size={12} />
          Back to top
        </motion.button>

      </div>
    </footer>
  )
}
