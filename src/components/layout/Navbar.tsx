import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '@/hooks/useSmoothScroll'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
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
            <AgLogo />
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function AgLogo() {
  return (
    <svg
      width="52"
      height="32"
      viewBox="0 0 52 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Antigravity logo"
    >
      {/* A */}
      <path
        d="M2 28L10 3L18 28"
        stroke="#F0F0FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18H15"
        stroke="#F0F0FF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* G */}
      <path
        d="M44 9C41.5 5 38.5 3.5 35 3.5C28.5 3.5 24 8.5 24 16C24 23.5 28.5 28.5 35 28.5C38 28.5 41 27 44 24.5V16H37"
        stroke="#4F6EF7"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow up integrated at G opening */}
      <path
        d="M44 9L47 5.5L50 9"
        stroke="#4F6EF7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
