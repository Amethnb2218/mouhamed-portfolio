import { useEffect, useRef, useState } from 'react'

/**
 * CustomCursor — Curseur personnalisé avec dot + ring
 * Effet mix-blend-mode + agrandissement au hover sur les interactifs
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    // Pas de curseur custom sur mobile
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mx = 0, my = 0, cx = 0, cy = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const loop = () => {
      cx += (mx - cx) * 0.15
      cy += (my - cy) * 0.15

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`
        dotRef.current.style.top = `${my}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${cx}px`
        ringRef.current.style.top = `${cy}px`
      }
      requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    loop()

    // Hover sur les éléments interactifs
    const addHover = () => {
      document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true))
        el.addEventListener('mouseleave', () => setHovered(false))
      })
    }

    // Observer les mutations DOM pour ajouter les events sur les nouveaux éléments
    const observer = new MutationObserver(addHover)
    observer.observe(document.body, { childList: true, subtree: true })
    addHover()

    return () => {
      document.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  // Pas de rendu sur mobile
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference">
      <div
        ref={dotRef}
        className="absolute w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className={`absolute rounded-full border border-white/50 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          hovered ? 'w-16 h-16 border-accent-light' : 'w-10 h-10'
        }`}
      />
    </div>
  )
}
