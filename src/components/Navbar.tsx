import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  const links = [...NAV.slice(0, 5), { label: 'Certificates', id: 'certificates' }, NAV[5]]
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-accent/15 text-[11px] font-semibold text-accent" style={{ clipPath: 'polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)' }}>YP</span>
          <span className="text-sm font-medium">Yogeshwara <span className="font-display italic text-accent">Creative</span></span>
        </a>
        <nav className="hidden rounded-full border border-white/10 bg-black/40 px-2 py-1.5 backdrop-blur-md lg:flex">
          {NAV.map((n) => <a key={n.id} href={`#${n.id}`} className="rounded-full px-4 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">{n.label}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-full border border-accent px-5 py-2 text-sm text-accent transition-all hover:scale-105 hover:bg-accent hover:text-black lg:block">Let's Talk</a>
        <button aria-label="Toggle menu" aria-expanded={open} className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <div className={`fixed inset-0 top-16 overflow-y-auto bg-black/95 transition-all duration-300 lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <nav className="flex flex-col p-6">
          {links.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-display text-2xl italic">{n.label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-6 rounded-full bg-accent py-3 text-center text-sm font-medium text-black">Let's Talk</a>
        </nav>
      </div>
    </header>
  )
}
