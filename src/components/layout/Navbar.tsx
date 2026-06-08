import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import { scrollToSection } from '@/hooks/useSmoothScroll'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastY || y < 80)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    if (location.pathname !== '/') {
      window.location.href = '/' + href
    } else {
      scrollToSection(href)
    }
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100]"
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div
          className="flex items-center justify-between px-6 md:px-12 py-4"
          style={{
            background: 'rgba(3,3,8,0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(79,110,247,0.1)',
          }}
        >
          <Link to="/" className="flex-shrink-0">
            <YELogo />
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="relative text-sm font-medium transition-colors duration-200 group"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  <span className="group-hover:text-[#F0F0FF] transition-colors duration-200">
                    {link.label}
                  </span>
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: 'var(--glow-primary)' }}
                  />
                </button>
              </li>
            ))}
            <li>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(16,212,160,0.08)',
                  border: '1px solid rgba(16,212,160,0.3)',
                  color: '#10d4a0',
                }}
                whileHover={{ boxShadow: '0 0 16px rgba(16,212,160,0.25)' }}
                transition={{ duration: 0.15 }}
              >
                <FileText size={12} />
                Resume
              </motion.a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center"
            style={{ background: 'rgba(3,3,8,0.97)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-4xl font-bold tracking-tight"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.35 }}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(16,212,160,0.1)',
                    border: '1px solid rgba(16,212,160,0.35)',
                    color: '#10d4a0',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <FileText size={14} />
                  View Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function YELogo() {
  return (
    <svg
      width="52"
      height="32"
      viewBox="0 0 52 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Yehia Elsokkary"
    >
      {/* Y — white */}
      <path d="M2 3L11 15" stroke="#F0F0FF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 3L11 15" stroke="#F0F0FF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M11 15V29" stroke="#F0F0FF" strokeWidth="2.5" strokeLinecap="round" />
      {/* E — brand blue */}
      <path d="M28 3V29" stroke="#4F6EF7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 3H46" stroke="#4F6EF7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 16H42" stroke="#4F6EF7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 29H46" stroke="#4F6EF7" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
