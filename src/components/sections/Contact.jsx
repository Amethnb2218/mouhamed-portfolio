import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSend, FiCheck } from 'react-icons/fi'
import { DATA } from '../../data/portfolio'

/**
 * Contact — Section contact avec liens + formulaire stylé
 */
export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.target.reset()
    }, 3000)
  }

  const contactLinks = [
    { icon: '📧', label: 'Email', value: DATA.email, href: `mailto:${DATA.email}`, bg: 'rgba(124,58,237,0.06)' },
    { icon: '💼', label: 'LinkedIn', value: 'Mouhamed SALL — Afrigen AI', href: DATA.linkedin, bg: 'rgba(6,182,212,0.06)' },
    { icon: '🐙', label: 'GitHub', value: '@Amethnb2218', href: DATA.github, bg: 'rgba(255,255,255,0.03)' },
    { icon: '📍', label: 'Localisation', value: DATA.location, href: null, bg: 'rgba(16,185,129,0.06)' },
  ]

  return (
    <section id="contact" className="relative z-10 py-24 lg:py-32 px-6 lg:px-12 bg-dark-800/30 overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.03] blur-[200px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-tag">Contact</p>
          <h2 className="font-syne text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-[-2px] mb-4 leading-tight">
            Travaillons ensemble
          </h2>
          <p className="text-base text-white/50 max-w-xl mb-16">
            Un projet en tête ? Discutons-en.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Liens de contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => {
              const Wrapper = link.href ? 'a' : 'div'
              const extraProps = link.href
                ? { href: link.href, target: link.href.startsWith('mailto') ? undefined : '_blank', rel: 'noopener noreferrer' }
                : {}

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <Wrapper
                    {...extraProps}
                    className="cursor-hover flex items-center gap-5 glass-card rounded-2xl p-5 transition-all duration-500 hover:translate-x-2 hover:bg-white/[0.04] hover:border-accent/40"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border border-white/[0.06]"
                      style={{ background: link.bg }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="font-syne text-sm font-bold">{link.label}</h4>
                      <p className="text-xs text-white/30">{link.value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Formulaire */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider font-mono">
                  Nom
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white placeholder:text-white/20 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_30px_rgba(124,58,237,0.08)]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider font-mono">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white placeholder:text-white/20 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_30px_rgba(124,58,237,0.08)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider font-mono">
                Sujet
              </label>
              <input
                type="text"
                placeholder="Site web, hébergement, IA..."
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white placeholder:text-white/20 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_30px_rgba(124,58,237,0.08)]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider font-mono">
                Message
              </label>
              <textarea
                placeholder="Décrivez votre projet..."
                required
                rows={6}
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white placeholder:text-white/20 text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_30px_rgba(124,58,237,0.08)] resize-y min-h-[150px]"
              />
            </div>

            <button
              type="submit"
              className={`cursor-hover group w-full py-4 rounded-2xl font-bold text-sm transition-all duration-400 relative overflow-hidden flex items-center justify-center gap-2 ${
                sent
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'bg-gradient-to-r from-accent to-accent-light text-white hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(124,58,237,0.4)]'
              }`}
            >
              {!sent && (
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              <span className="relative flex items-center gap-2">
                {sent ? <FiCheck size={18} /> : <FiSend size={16} />}
                {sent ? 'Message envoyé !' : 'Envoyer le message'}
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
