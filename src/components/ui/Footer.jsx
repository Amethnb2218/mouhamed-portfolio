import { motion } from 'framer-motion'
import { DATA } from '../../data/portfolio'

const socials = [
  { icon: '📧', href: `mailto:${DATA.email}` },
  { icon: '💼', href: DATA.linkedin },
  { icon: '🐙', href: DATA.github },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04] py-12 px-6 lg:px-12 bg-dark-900/60">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-white/30 text-center sm:text-left font-mono"
        >
          © {new Date().getFullYear()} Mouhamed SALL — Afrigen AI · Dakar, Sénégal
        </motion.p>

        <div className="flex items-center gap-3">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="cursor-hover w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-sm transition-all hover:bg-accent/20 hover:border-accent/40 hover:scale-110"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
