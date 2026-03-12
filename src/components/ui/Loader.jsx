import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Loader — Écran de chargement cinématique
 * Barre de progression + texte dynamique
 */
export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState('INITIALIZING')

  const labels = ['LOADING ASSETS', 'BUILDING SCENE', 'COMPILING SHADERS', 'READY']

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 18 + 8
        const clamped = Math.min(next, 100)

        // Met à jour le texte du loader
        const idx = Math.min(Math.floor(clamped / 28), 3)
        setText(labels[idx])

        if (clamped >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 600)
        }

        return clamped
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100000] bg-dark-900 flex flex-col items-center justify-center gap-8"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Logo animé */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-syne text-4xl font-extrabold"
      >
        <span className="gradient-text">MS</span>
        <span className="text-white/20">.</span>
      </motion.div>

      {/* Barre de progression */}
      <div className="w-60 h-[3px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-cyan rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Texte de statut */}
      <motion.p
        key={text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-xs text-white/20 tracking-[3px]"
      >
        {text}
      </motion.p>

      {/* Pourcentage */}
      <p className="font-mono text-xs text-accent/50">
        {Math.round(progress)}%
      </p>
    </motion.div>
  )
}
