import { useEffect, useRef, type ReactNode } from 'react'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current!
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export function Heading({ small, children }: { small: string; children: ReactNode }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm text-accent">{small}</p>
      <h2 className="font-display text-4xl italic leading-tight sm:text-5xl">{children}</h2>
    </Reveal>
  )
}

/* Image with a gradient + icon fallback, so empty slots still look designed. */
export function Slot({ src, children, className = '' }: { src: string; children?: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#2a1a10] via-char to-[#0d0d0d] ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center text-accent/40">{children}</div>
      <img src={src} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
    </div>
  )
}
