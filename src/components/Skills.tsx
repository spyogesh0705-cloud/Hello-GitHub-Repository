import { SKILLS } from '../data'
import { Heading, Reveal } from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="bg-char/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Heading small="Skills">Tools I build and create with</Heading>
        <div className="space-y-12">
          {SKILLS.map((g) => (
            <div key={g.group}>
              <Reveal><h3 className="mb-5 font-display text-2xl italic text-white/90">{g.group}</h3></Reveal>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {g.items.map((s, i) => (
                  <Reveal key={s.name} delay={i * 80}>
                    <div className="group h-full rounded-2xl border border-white/10 bg-ink p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
                      <s.icon className="mb-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                      <p className="text-sm font-medium">{s.name}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
