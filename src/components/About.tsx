import { GraduationCap, MapPin } from 'lucide-react'
import { Heading, Reveal } from './Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Heading small="About">A Little About Me</Heading>
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <h3 className="text-2xl font-semibold">Yogeshwara Pandiyan S</h3>
          <p className="mb-6 text-accent">All Round Creative Professional</p>
          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            I'm a BCA student at NPR Arts and Science College with a strong interest in web development, creative designing and multimedia editing. I enjoy combining technology and creativity to build meaningful digital experiences.
          </p>
        </Reveal>
        <Reveal className="space-y-4 lg:col-span-2" delay={150}>
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-char p-6">
            <GraduationCap className="mt-1 shrink-0 text-accent" />
            <div><p className="font-medium">BCA — NPR Arts and Science College</p><p className="text-sm text-white/60">2024–2027 (Currently pursuing)</p></div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-char p-6">
            <MapPin className="mt-1 shrink-0 text-accent" />
            <div><p className="font-medium">Madurai, Tamil Nadu</p><p className="text-sm text-white/60">Location</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
