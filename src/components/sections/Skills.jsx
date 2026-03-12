import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../../data/portfolio'

/**
 * Skills — Barres de progression animées par catégorie
 */
export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  const categories = Object.entries(DATA.skills)

  return (
    <section id="skills" className="relative z-10 py-24 lg:py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-tag">Compétences</p>
          <h2 className="font-syne text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-[-2px] mb-16 leading-tight">
            Stack technique
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map(([category, catData], catIdx) => {
            const items = Array.isArray(catData) ? catData : catData.items
            return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card rounded-3xl p-8"
            >
              <h3 className="font-syne text-base font-bold mb-8 tracking-tight uppercase text-white/70 flex items-center gap-3">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background:
                      catIdx === 0
                        ? '#7c3aed'
                        : catIdx === 1
                        ? '#06b6d4'
                        : '#f59e0b',
                  }}
                />
                {category}
              </h3>

              <div className="space-y-5">
                {items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-white/40 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Barre de progression */}
                    <div className="h-[6px] rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            catIdx === 0
                              ? 'linear-gradient(90deg, #7c3aed, #a855f7)'
                              : catIdx === 1
                              ? 'linear-gradient(90deg, #06b6d4, #22d3ee)'
                              : 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                        }}
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          delay: catIdx * 0.15 + i * 0.08,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
