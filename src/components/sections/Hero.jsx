import { motion } from 'framer-motion'
import { DATA } from '../../data/portfolio'

/**
 * Hero — Section héro spectaculaire
 * Texte animé + carte 3D avec tilt au survol + badges flottants
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-12" id="hero">
      {/* Orbes lumineux */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-accent/[0.08] blur-[120px] animate-float pointer-events-none" />
      <div className="absolute -bottom-12 -left-24 w-[400px] h-[400px] rounded-full bg-cyan/[0.05] blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center relative z-10">
        {/* Texte gauche */}
        <div className="w-full pt-6 sm:pt-8">
          {/* Badge disponible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-sm sm:mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.02em] text-accent-lighter sm:text-xs sm:tracking-wide">
              Disponible pour de nouveaux projets
            </span>
          </motion.div>

          {/* Nom */}
          <motion.h1
            className="mb-6 max-w-[8ch] font-syne text-[clamp(3.2rem,18vw,6.5rem)] font-extrabold leading-[0.88] tracking-[-0.05em] sm:mb-8 sm:max-w-none sm:leading-[0.95]"
          >
            <motion.span
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                className="block"
                initial={{ y: '120%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              >
                {DATA.firstName}
              </motion.span>
            </motion.span>
            <motion.span
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                className="block gradient-text"
                initial={{ y: '120%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              >
                {DATA.lastName}
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-8 max-w-[34rem] text-base leading-relaxed text-white/60 sm:mb-10 sm:text-lg"
          >
            {DATA.bio}
          </motion.p>

          {/* Boutons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#contact"
              className="cursor-hover group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-accent to-accent-light px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(124,58,237,0.5)] sm:w-auto sm:px-7"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Démarrer un projet</span>
              <span className="relative transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#projects"
              className="cursor-hover inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/[0.08] px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-accent-light hover:text-accent-light hover:bg-accent/5 sm:w-auto sm:px-7"
            >
              Voir mes réalisations
            </a>
          </motion.div>
        </div>

        {/* Carte 3D droite */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:flex items-center justify-center"
        >
          <HeroCard />
        </motion.div>
      </div>
    </section>
  )
}

/**
 * HeroCard — Carte 3D avec tilt interactif
 */
function HeroCard() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.03)`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(800px) rotateY(-5deg) rotateX(3deg)'
  }

  return (
    <div className="relative">
      {/* Carte principale */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-hover w-full max-w-[420px] h-[500px] mx-auto rounded-3xl bg-gradient-to-br from-dark-700/70 to-dark-900/90 border border-white/[0.08] overflow-hidden backdrop-blur-sm transition-shadow duration-600 hover:shadow-[0_30px_100px_rgba(124,58,237,0.2)]"
        style={{ transform: 'perspective(800px) rotateY(-5deg) rotateX(3deg)', transformStyle: 'preserve-3d' }}
      >
        {/* Glows intérieurs */}
        <div className="absolute -top-[20%] -left-[10%] w-72 h-72 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-[20%] -right-[10%] w-72 h-72 rounded-full bg-cyan/10 blur-[100px] pointer-events-none" />

        {/* Contenu */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-10 text-center gap-4">
          {/* Avatar avec anneau rotatif */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-[-3px] rounded-full bg-conic-gradient animate-spin-slow" style={{ background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #a855f7, #f59e0b, #7c3aed)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '3px', borderRadius: '50%' }} />
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center font-syne text-3xl font-extrabold text-white overflow-hidden relative">
              {DATA.initials}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/15 pointer-events-none" />
            </div>
          </div>

          <h3 className="font-syne text-xl font-extrabold tracking-tight">{DATA.name}</h3>
          <p className="text-sm text-white/50">Fondateur — {DATA.company}</p>

          <div className="w-10 h-0.5 bg-gradient-to-r from-accent to-cyan rounded-full" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 w-full mt-2">
            {[
              { val: '1+', label: 'An Exp.' },
              { val: '6+', label: 'Services' },
              { val: 'ESP', label: 'Dakar' },
            ].map((s, i) => (
              <div key={i} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-syne text-xl font-extrabold gradient-text">{s.val}</span>
                <span className="block text-[10px] text-white/25 uppercase tracking-wider mt-1">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex gap-1.5 flex-wrap justify-center mt-1">
            {['React', 'Node.js', 'Prisma', 'AI', 'Tailwind'].map(t => (
              <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[11px] text-white/40 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Badges flottants */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[5%] right-0 z-20"
      >
        <div className="px-4 py-2.5 rounded-xl bg-dark-900/85 border border-white/[0.08] backdrop-blur-xl text-xs font-semibold text-accent-lighter flex items-center gap-2 shadow-[0_8px_30px_rgba(124,58,237,0.15)]">
          <span className="text-base">⚡</span> React & Node.js
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[18%] left-0 z-20"
      >
        <div className="px-4 py-2.5 rounded-xl bg-dark-900/85 border border-white/[0.08] backdrop-blur-xl text-xs font-semibold text-cyan-light flex items-center gap-2 shadow-[0_8px_30px_rgba(6,182,212,0.1)]">
          <span className="text-base">🤖</span> IA & Automatisation
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-[45%] right-0 z-20"
      >
        <div className="px-4 py-2.5 rounded-xl bg-dark-900/85 border border-white/[0.08] backdrop-blur-xl text-xs font-semibold text-gold flex items-center gap-2 shadow-[0_8px_30px_rgba(245,158,11,0.1)]">
          <span className="text-base">🌍</span> Made in Sénégal
        </div>
      </motion.div>
    </div>
  )
}
