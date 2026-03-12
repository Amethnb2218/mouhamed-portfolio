import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../../data/portfolio'

/**
 * About — Section "À propos" avec services
 */
export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="relative z-10 py-24 lg:py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-tag">À propos</p>
          <h2 className="font-syne text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-[-2px] mb-3 leading-tight">
            Ce que je propose
          </h2>
          <p className="text-base text-white/50 max-w-xl mb-16">
            {DATA.about}
          </p>
        </motion.div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="cursor-hover group glass-card rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/[0.1]"
            >
              {/* Glow effect au hover */}
              <div
                className="absolute -top-[40%] -right-[40%] w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `${service.color}20` }}
              />

              {/* Barre colorée top */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: service.color }}
              />

              {/* Icône */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl border border-white/[0.06]"
                style={{ background: `${service.color}0d` }}
              >
                {service.icon}
              </div>

              <h3 className="font-syne text-lg font-bold mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
