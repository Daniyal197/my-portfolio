import Reveal from './Reveal'
import TiltCard from './TiltCard'

const GROUPS = [
  {
    label: 'languages',
    items: ['Python', 'C', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Flutter'],
  },
  {
    label: 'security & networking',
    items: ['Ethical Hacking', 'Packet Analysis', 'OSI / TCP-IP', 'Intrusion Detection', 'Subnetting' , 'Digital Forensics'],
  },
  {
    label: 'libraries & frameworks',
    items: ['NumPy', 'SciPy', 'Pillow', 'Node.js', 'Express'],
  },
  {
    label: 'web & tools',
    items: ['React', 'HTML/CSS', 'MySQL', 'Git', 'Figma'],
  },
  {
  label: 'ui/ux & app design',
  items: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Mobile App Design'],
},
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs text-primary tracking-widest mb-3">02 · SKILLS</p>
        <h2 className="font-mono-tight font-bold text-3xl sm:text-4xl text-text mb-3">
          $ Skills I use to build and secure software, networks, and systems.
        </h2>
        <p className="text-text-muted max-w-xl mb-12">
          Tools I reach for regularly, grouped the way I'd organize an actual environment. tech stacks are like toolboxes — the more you understand the tools, the better you can use them.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <TiltCard className="h-full">
                <div
                  className="rounded-lg border border-border bg-surface p-5 sm:p-6 card-hover h-full"
                >
                  <p className="font-mono text-[11px] text-text-dim tracking-widest uppercase mb-4">
                    # {group.label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-[13px] px-3 py-1.5 rounded border border-border-bright bg-surface-2 text-text-muted"
                      >
                        <span className="text-primary">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}