import RevealLayer from './RevealLayer'
import { HERO_BASE } from '../data'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-black">
      <img src={HERO_BASE} alt="" className="hero-zoom absolute inset-0 h-full w-full object-cover opacity-70" />
      <RevealLayer />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/60" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20 sm:pb-24">
        <p className="hero-fade mb-6 text-xs tracking-[0.3em] text-accent" style={{ animationDelay: '.2s' }}>ALL ROUND CREATIVE PROFESSIONAL</p>
        <h1 className="mb-6 leading-[1.02]">
          <span className="block overflow-hidden pb-2"><span className="hero-reveal font-display text-5xl italic sm:text-7xl lg:text-8xl" style={{ animationDelay: '.35s' }}>Ideas into</span></span>
          <span className="block overflow-hidden"><span className="hero-reveal text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl" style={{ animationDelay: '.55s' }}>visual stories</span></span>
        </h1>
        <p className="hero-fade mb-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg" style={{ animationDelay: '.9s' }}>
          I'm Yogeshwara Pandiyan — a BCA student, web designer and creative enthusiast passionate about technology, design and visual storytelling.
        </p>
        <div className="hero-fade flex flex-wrap items-center gap-6" style={{ animationDelay: '1.1s' }}>
          <a href="#works" className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105">Explore My Work</a>
          <a href="#about" className="text-sm text-white/80 underline-offset-8 transition-colors hover:text-accent hover:underline">About Me</a>
        </div>
      </div>
    </section>
  )
}
