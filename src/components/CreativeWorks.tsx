import { WORKS } from '../data'
import { Heading, Reveal, Slot } from './Reveal'

export default function CreativeWorks() {
  return (
    <section id="works" className="bg-char/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Heading small="Creative Works">Frames, cuts and compositions</Heading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {WORKS.map((w, i) => (
            <Reveal key={w.title} delay={i * 100} className={i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}>
              <figure className="group relative overflow-hidden rounded-2xl">
                <Slot src={w.image} className={i < 2 ? 'aspect-[16/10]' : 'aspect-[4/3]'}><w.icon size={64} strokeWidth={1} /></Slot>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 group-hover:from-accent/50" />
                <figcaption className="absolute bottom-0 left-0 p-6 font-display text-2xl italic transition-transform duration-500 group-hover:-translate-y-1">{w.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
