import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'
import { CONTACT as C } from '../data'
import { Reveal } from './Reveal'

export default function Contact() {
  const icon = 'grid h-12 w-12 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:scale-110 hover:border-accent hover:text-accent'
  return (
    <section id="contact" className="bg-char/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-12 max-w-3xl font-display text-4xl italic leading-tight sm:text-6xl">Let's Create Something Together.</h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal className="space-y-5">
            <p className="text-xl font-semibold">{C.name}</p>
            <a href={`mailto:${C.email}`} className="flex items-center gap-3 text-white/70 transition-colors hover:text-accent"><Mail size={18} className="text-accent" />{C.email}</a>
            <a href={`tel:${C.tel}`} className="flex items-center gap-3 text-white/70 transition-colors hover:text-accent"><Phone size={18} className="text-accent" />{C.phone}</a>
            <p className="flex items-center gap-3 text-white/70"><MapPin size={18} className="text-accent" />{C.location}</p>
          </Reveal>
          <Reveal className="flex flex-wrap items-start gap-4 md:justify-end" delay={150}>
            <a href={`mailto:${C.email}`} className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105">Email Me</a>
            <a href={C.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={icon}><Instagram size={20} /></a>
            <a href={C.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={icon}><Linkedin size={20} /></a>
            <a href={`tel:${C.tel}`} aria-label="Call" className={icon}><Phone size={20} /></a>
          </Reveal>
        </div>
        <p className="mt-20 border-t border-white/10 pt-6 text-sm text-white/40">© {new Date().getFullYear()} Yogeshwara Pandiyan S</p>
      </div>
    </section>
  )
}
