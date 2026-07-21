const ENTRIES = [
  {
    range: 'Jul 1 — Aug 20, 2026',
    title: 'Cybersecurity Intern — Netlogg PVT LTD',
    detail:
      'Focused internship in networking and digital forensics. Designed and built a from-scratch network packet sniffer using raw sockets — capturing and parsing live traffic, exporting to PCAP, and detecting SYN-flood and port-scan activity — as a core forensics deliverable.',
    tag: 'ACTIVE',
  },
  {
    range: '2023 — present',
    title: 'BS Information Technology, University of Gujrat',
    detail:
      'Coursework spanning AI, Information Security, Web 3.0, and Computer Organisation — with every major project rebuilt from fundamentals rather than framework defaults.',
    tag: 'ONGOING',
  },
  {
    range: 'Ongoing',
    title: 'Co-owner, Dezee Shoes',
    detail:
      'Runs day-to-day operations for a shoe store outside GBHP Colony, Attock — the non-technical half of the resume.',
    tag: 'ONGOING',
  },
]

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
            <div key={e.title} className="relative pl-8 pb-12 last:pb-0 border-l border-border last:border-transparent">
              <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-bg border-2 border-primary" />
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <p className="font-mono text-[12px] text-text-dim">{e.range}</p>
                <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-full border border-primary-dim text-primary">
                  {e.tag}
                </span>
              </div>
              <h3 className="font-mono-tight font-semibold text-lg text-text mb-2">{e.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-xl">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
