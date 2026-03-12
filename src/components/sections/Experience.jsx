import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../../data/portfolio'

/**
 * Experience — Timeline professionnelle + formation + certifications
 */
export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section id="experience" className="relative z-10 py-24 lg:py-32 px-6 lg:px-12 bg-dark-800/30" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-tag">Parcours</p>
          <h2 className="font-syne text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-[-2px] mb-4 leading-tight">
            Expérience professionnelle
          </h2>
          <p className="text-base text-white/50 max-w-xl mb-16">
            De la production télécom à l'entrepreneuriat digital.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl pl-12">
          {/* Ligne verticale */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent-light to-cyan/30" />

          {DATA.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Marqueur */}
              <div className={`absolute -left-12 top-1 w-[26px] h-[26px] rounded-full border-[3px] border-accent flex items-center justify-center z-10 ${
                i === 0
                  ? 'bg-accent shadow-[0_0_25px_rgba(124,58,237,0.5)]'
                  : 'bg-dark-900'
              }`}>
                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-accent-light'}`} />
              </div>

              {/* Carte */}
              <div className="cursor-hover glass-card rounded-2xl p-7 relative overflow-hidden transition-all duration-500 hover:translate-x-2 hover:bg-white/[0.04] hover:border-white/[0.1] group">
                {/* Barre gauche au hover */}
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-accent to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <h3 className="font-syne text-lg font-bold tracking-tight">{exp.role}</h3>
                  <span className="text-accent-light font-semibold text-sm">{exp.company}</span>
                </div>

                <div className="flex gap-4 flex-wrap text-xs text-white/30 font-mono mb-3">
                  <span>{exp.period}</span>
                  <span>📍 {exp.location}</span>
                  {exp.current && <span className="text-green-500 font-sans">● Actuel</span>}
                </div>

                <ul className="space-y-1">
                  {exp.desc.map((d, j) => (
                    <li key={j} className="text-sm text-white/50 pl-5 relative leading-relaxed">
                      <span className="absolute left-0 text-accent-light font-semibold">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Formation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <p className="section-tag">Formation</p>
          <h2 className="font-syne text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-1.5px] mb-8 leading-tight">
            Parcours académique
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {DATA.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                className="cursor-hover glass-card rounded-2xl p-7 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.1] group"
              >
                <div className="absolute inset-0 bg-radial-gradient opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
                  style={{ background: 'radial-gradient(circle at 100% 0%, rgba(124,58,237,0.06), transparent 50%)' }} />
                
                <span className="inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent-light text-xs font-bold tracking-wider font-mono mb-4">
                  {edu.level}
                </span>
                <h3 className="font-syne text-base font-bold mb-1">{edu.degree}</h3>
                <p className="text-sm text-accent-lighter font-medium mb-0.5">{edu.field}</p>
                <p className="text-sm text-white/50">{edu.school}</p>
                <p className="text-xs text-white/30 font-mono mt-2">{edu.period}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          {DATA.certifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6"
            >
              {DATA.certifications.map((cert, i) => (
                <div key={i} className="cursor-hover inline-flex items-center gap-4 glass-card rounded-2xl px-6 py-4 transition-all duration-400 hover:border-white/[0.1]">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center text-xl flex-shrink-0">
                    🏅
                  </div>
                  <div>
                    <h4 className="font-syne text-sm font-bold">{cert.name}</h4>
                    <p className="text-xs text-white/30 font-mono">{cert.org} · {cert.date}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
