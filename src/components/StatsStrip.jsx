import Reveal from './Reveal'

const STATS = [
  { value: '05', label: 'Projects shipped' },
  { value: '00', label: 'ML frameworks used — everything built from scratch' },
  { value: '01', label: 'Live internship — Networking & Forensics' },
]

export default function StatsStrip() {
  return (
    <div className="border-y border-border bg-surface/60">
      <Reveal>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center sm:text-left">
          {STATS.map((s) => (
            <div key={s.label} className="flex sm:flex-col items-baseline sm:items-start gap-3 sm:gap-1 justify-center sm:justify-start">
              <span className="font-mono-tight font-extrabold text-3xl sm:text-4xl text-primary">
                {s.value}
              </span>
              <span className="font-mono text-[12px] text-text-muted uppercase tracking-wide max-w-[16rem]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
