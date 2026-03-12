import { DATA } from '../../data/portfolio'

/**
 * Marquee — Bande défilante infinie avec les compétences
 */
export default function Marquee() {
  const items = DATA.marquee

  return (
    <div className="relative z-10 py-5 overflow-hidden border-y border-white/[0.06] bg-white/[0.01]">
      <div className="flex gap-12 animate-marquee w-max">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="font-syne text-sm font-bold text-white/15 uppercase tracking-[3px] whitespace-nowrap flex items-center gap-4"
          >
            {text}
            <span className="text-[8px] text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
