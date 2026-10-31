import { PROJECTS } from '../data'
import { Heading, Reveal, Slot } from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Heading small="Projects">Things I've built and imagined</Heading>
      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-char transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
              <Slot src={p.image} className="aspect-[4/3]"><p.icon size={56} strokeWidth={1.2} /></Slot>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-white/60">{p.text}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{t}</span>)}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
