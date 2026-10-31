import { useEffect, useRef } from 'react'
import { HERO_REVEAL } from '../data'

const RADIUS = 260

export default function RevealLayer() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current!, ctx = c.getContext('2d')!
    const img = new Image(); img.src = HERO_REVEAL
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = matchMedia('(hover: none)').matches
    let w = 0, h = 0, raf = 0, a = 0, on = false, touched = false
    const t = { x: 0, y: 0 }, p = { x: 0, y: 0 }
    const resize = () => { const d = devicePixelRatio || 1; w = c.clientWidth; h = c.clientHeight; c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0) }
    const move = (x: number, y: number) => { const b = c.getBoundingClientRect(); t.x = x - b.left; t.y = y - b.top; if (!on) { p.x = t.x; p.y = t.y; on = true } }
    const onPtr = (e: PointerEvent) => { if (e.pointerType !== 'touch') move(e.clientX, e.clientY) }
    const onTouch = (e: TouchEvent) => { const q = e.touches[0]; if (q) { touched = true; move(q.clientX, q.clientY) } }
    const end = () => { touched = false; if (!coarse) on = false }
    const tick = (time: number) => {
      // touch devices have no hover, so the spotlight drifts on its own until touched
      if (coarse && !touched && !reduce) {
        t.x = w * (0.5 + 0.3 * Math.sin(time / 2400)); t.y = h * (0.45 + 0.22 * Math.sin(time / 1800 + 1))
        if (!on) { p.x = t.x; p.y = t.y; on = true }
      }
      const k = reduce ? 1 : 0.12
      p.x += (t.x - p.x) * k; p.y += (t.y - p.y) * k; a += ((on ? 1 : 0) - a) * 0.1
      ctx.clearRect(0, 0, w, h)
      if (a > 0.01 && img.complete && img.naturalWidth) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, RADIUS)
        g.addColorStop(0, `rgba(0,0,0,${a})`); g.addColorStop(0.6, `rgba(0,0,0,${a * 0.7})`); g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = g; ctx.fillRect(0, 0, w, h)
        ctx.globalCompositeOperation = 'source-in'
        const s = Math.max(w / img.naturalWidth, h / img.naturalHeight), iw = img.naturalWidth * s, ih = img.naturalHeight * s
        ctx.drawImage(img, (w - iw) / 2, (h - ih) / 2, iw, ih)
        ctx.globalCompositeOperation = 'source-over'
      }
      raf = requestAnimationFrame(tick)
    }
    resize(); raf = requestAnimationFrame(tick)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPtr)
    window.addEventListener('touchstart', onTouch, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchend', end)
    window.addEventListener('touchcancel', end)
    document.addEventListener('mouseleave', end)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize); window.removeEventListener('pointermove', onPtr)
      window.removeEventListener('touchstart', onTouch); window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend', end); window.removeEventListener('touchcancel', end)
      document.removeEventListener('mouseleave', end)
    }
  }, [])
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />
}
