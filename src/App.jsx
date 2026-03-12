import { useState, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/ui/Loader'
import Navbar from './components/ui/Navbar'
import CustomCursor from './components/ui/CustomCursor'
import Marquee from './components/ui/Marquee'
import Footer from './components/ui/Footer'
import Scene3D from './components/3d/Scene3D'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative min-h-screen bg-dark-900 text-white overflow-x-hidden"
        >
          {/* Fond 3D */}
          <div className="fixed inset-0 z-0">
            <Scene3D />
          </div>

          {/* Noise overlay */}
          <div className="noise-overlay" />

          {/* Navigation */}
          <Navbar />

          {/* Contenu */}
          <main>
            <Hero />
            <Marquee />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  )
}
