import { useEffect, useRef, useState } from 'react'

const ENTRIES = [
  {
    range: 'Jul 1 — Aug 20, 2026',
    title: 'Cybersecurity Intern — Netlogg PVT LTD',
    detail:
      'Focused internship in networking and digital forensics. Designed and built a from-scratch network packet sniffer using raw sockets — capturing and parsing live traffic, exporting to PCAP, and detecting SYN-flood and port-scan activity — as a core forensics deliverable.',
    tag: 'ACTIVE',
    icon: '💼',
  },
  {
    range: '2023 — present',
    title: 'BS Information Technology, University of Gujrat',
    detail:
      'Coursework spanning AI, Information Security, Web 3.0, and Computer Organisation — with every major project rebuilt from fundamentals rather than framework defaults.',
    tag: 'ONGOING',
    icon: '🎓',
  },
  {
    range: 'Ongoing',
    title: 'Co-owner, Dezee Shoes',
    detail:
      'Runs day-to-day operations for a shoe store outside GBHP Colony, Attock — the non-technical half of the resume.',
    tag: 'ONGOING',
    icon: '🏪',
  },
]

function TimelineItem({ entry, isLast }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVisible(true)
      return
    }
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entryObs]) => {
        if (entryObs.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative pl-9 pb-12 last:pb-0 border-l transition-colors duration-700 ${
        isLast ? 'border-transparent' : visible ? 'border-primary-dim' : 'border-border'
      }`}
    >
      <span
        className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center text-[9px] transition-all duration-500 ${
          visible ? 'bg-primary border-primary' : 'bg-bg border-border-bright'
        } ${entry.tag === 'ACTIVE' && visible ? 'animate-pulse' : ''}`}
      />

      <div
        className={`transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-base leading-none">{entry.icon}</span>
          <p className="font-mono text-[12px] text-text-dim">{entry.range}</p>
          <span
            className={`font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-full border ${
              entry.tag === 'ACTIVE'
                ? 'border-primary text-primary'
                : 'border-primary-dim text-text-muted'
            }`}
          >
            {entry.tag}
          </span>
        </div>
        <h3 className="font-mono-tight font-semibold text-lg text-text mb-2">{entry.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed max-w-xl">{entry.detail}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs text-primary tracking-widest mb-3">04 · EXPERIENCE</p>
        <h2 className="font-mono-tight font-bold text-3xl sm:text-4xl text-text mb-12">
          $ Mine technical experience and work history for relevant information.
        </h2>

        <div className="max-w-3xl">
          {ENTRIES.map((e, i) => (
            <TimelineItem key={e.title} entry={e} isLast={i === ENTRIES.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}