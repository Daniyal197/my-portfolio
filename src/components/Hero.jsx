import { useEffect, useState } from 'react'

const LINES = [
  { cmd: 'Whoami', out: 'Daniyal Ahmed' },
  { cmd: 'Role', out: 'BS Information Technology · University of Gujrat' },
  { cmd: 'Focus', out: 'Cybersecurity · Ethical Hacking · Networking' },
  { cmd: 'Status', out: 'Interning @ Netlogg Pvt Ltd.' },
]

function useTypedLines(lines, speed = 22, lineDelay = 350) {
  const [rendered, setRendered] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setRendered(lines.map((l) => ({ cmd: l.cmd, out: l.out, cmdDone: true, outDone: true })))
      setDone(true)
      return
    }

    let cancelled = false
    const run = async () => {
      const buffer = []
      for (const line of lines) {
        buffer.push({ cmd: '', out: '', cmdDone: false, outDone: false })
        const idx = buffer.length - 1

        for (let i = 1; i <= line.cmd.length; i++) {
          if (cancelled) return
          buffer[idx] = { ...buffer[idx], cmd: line.cmd.slice(0, i) }
          setRendered([...buffer])
          await new Promise((r) => setTimeout(r, speed))
        }
        buffer[idx] = { ...buffer[idx], cmdDone: true }
        setRendered([...buffer])
        await new Promise((r) => setTimeout(r, 200))

        buffer[idx] = { ...buffer[idx], out: line.out, outDone: true }
        setRendered([...buffer])
        await new Promise((r) => setTimeout(r, lineDelay))
      }
      if (!cancelled) setDone(true)
    }
    run()
    return () => { cancelled = true }
  }, [])

  return { rendered, done }
}

export default function Hero() {
  const { rendered, done } = useTypedLines(LINES)

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="scanline top-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-vignette pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="font-mono text-[13px] sm:text-sm text-text-muted mb-8 min-h-[92px] sm:min-h-[76px]">
            {rendered.map((line, i) => (
              <div key={i} className="leading-relaxed">
                <span className="text-primary">$</span> {line.cmd}
                {!line.cmdDone && <span className="cursor-blink" />}
                {line.cmdDone && line.out && (
                  <div className="text-text pl-4">
                    <span className="text-text-dim">→</span> {line.out}
                  </div>
                )}
              </div>
            ))}
          </div>

          <h1 className="font-mono-tight font-extrabold text-[clamp(2.25rem,7vw,4.25rem)] leading-[1.05] text-text text-glow">
            Building security tools
            <br />
            <span className="text-primary">from the syscall up. </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
            I'm Daniyal — a BS IT student who'd rather write a packet parser than import one.
            Currently interning in cybersecurity and shipping standard-library-only tools:
            sniffers, intrusion detection, and password analysis.
          </p>

          <div className={`mt-9 flex flex-wrap gap-4 transition-opacity duration-700 ${done ? 'opacity-100' : 'opacity-0'}`}>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-5 py-3 rounded font-mono text-sm font-semibold bg-primary text-bg hover:bg-primary-dim transition-colors"
            >
              ./view_projects.sh
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-5 py-3 rounded font-mono text-sm font-semibold border border-border-bright text-text hover:border-primary hover:text-primary transition-colors"
            >
              Contact 
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
