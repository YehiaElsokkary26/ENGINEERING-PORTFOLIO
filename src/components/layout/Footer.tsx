import { motion } from 'framer-motion'
import { Download, ArrowUp } from 'lucide-react'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12"
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-deep)',
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

        {/* Center — resume */}
        <div className="flex items-center order-1 sm:order-2">
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
