import { Award } from 'lucide-react'
import { CERTS } from '../data'
import { Heading, Reveal, Slot } from './Reveal'

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Heading small="Certificates">Learning, on paper</Heading>
      <div className="grid gap-6 md:grid-cols-3">
        {CERTS.map((c, i) => (
          <Reveal key={c.title} delay={i * 120}>
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-char transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
              <Slot src={c.image} className="aspect-[4/3]"><Award size={56} strokeWidth={1.2} /></Slot>
              <p className="p-5 font-medium">{c.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
