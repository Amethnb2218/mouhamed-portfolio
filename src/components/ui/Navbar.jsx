import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Navbar — Navigation flottante avec effet glass au scroll
 */
const links = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Parcours' },
  { href: '#projects', label: 'Projets' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[9990] px-6 lg:px-12 py-4 transition-all duration-400 ${
        scrolled
          ? 'bg-dark-900/75 backdrop-blur-[30px] saturate-150 border-b border-white/[0.06]'
          : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-syne text-2xl font-extrabold tracking-tight">
          <span className="gradient-text">MS</span>
          <span className="text-white/20">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent-light rounded-full transition-all duration-400 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold hover:shadow-[0_10px_40px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Me contacter
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-white rounded-full transition-all ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-5 h-0.5 bg-white rounded-full transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white rounded-full transition-all ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-dark-900/97 backdrop-blur-[30px] border-b border-white/[0.06] p-6"
        >
          <ul className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold"
              >
                Me contacter
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
