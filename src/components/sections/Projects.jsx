import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { DATA } from '../../data/portfolio'

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouse(e) {
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12
    setTilt({ x, y })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="cursor-hover"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="glass-card rounded-3xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.1]"
        style={{
          transform: `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Image browser mockup */}
        <div className="relative overflow-hidden">
          {/* Top bar de navigateur */}
          <div className="absolute top-0 z-10 w-full flex items-center gap-1.5 px-4 py-2.5 bg-black/60 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] text-white/30 font-mono truncate">
              {project.url || `${project.name.toLowerCase().replace(/\s/g, '')}.me`}
            </span>
          </div>

          {/* Image */}
          <div className="aspect-video bg-dark-800">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
        </div>

        {/* Info */}
        <div className="p-7">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-syne text-xl font-bold tracking-tight">
              {project.name}
            </h3>
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover w-9 h-9 rounded-xl bg-white/[0.05] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-colors"
                >
                  <FiGithub size={16} />
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover w-9 h-9 rounded-xl bg-white/[0.05] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-colors"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-white/45 mb-5 leading-relaxed line-clamp-2">
            {project.desc}
          </p>

          {/* Tags tech */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] px-3 py-1 rounded-full bg-white/[0.04] text-white/50 border border-white/[0.06] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="projects" className="relative z-10 py-24 lg:py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-tag">Projets</p>
          <h2 className="font-syne text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-[-2px] mb-16 leading-tight">
            Réalisations récentes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
