import Reveal from './Reveal'
import TiltCard from './TiltCard'
import TechBadge from './TechBadge'

const PROJECTS = [
  {
    id: '001',
    file: 'password_strength_analyzer.py',
    status: 'DEPLOYED',
    stack: ['Python', 'stdlib'],
    description:
      "Calculates real password entropy and estimated crack time instead of a made-up strength meter, with pattern detection for common substitutions. Ships as both a CLI and a Tkinter GUI.",
    href: 'https://github.com/Daniyal197/Password-Strength-Analyzer',
  },
  {
    id: '002',
    file: 'network_sniffer.py',
    status: 'DEPLOYED',
    stack: ['Python', 'raw sockets', 'stdlib'],
    description:
      'Captures and parses live traffic byte-by-byte with struct, exports captures to PCAP, and flags SYN-flood and port-scan behavior in real time. Built for a cybersecurity internship.',
    href: 'https://github.com/Daniyal197',
  },
  {
    id: '003',
    file: 'nids_pca.py',
    status: 'DEPLOYED',
    stack: ['Python', 'NumPy', 'SciPy'],
    description:
      'A network intrusion detection system using PCA-based anomaly detection to flag abnormal traffic — no prebuilt ML framework, just the linear algebra underneath it.',
    href: 'https://github.com/Daniyal197',
  },
  {
    id: '004',
    file: 'face_recognition_mlp.py',
    status: 'DEPLOYED',
    stack: ['Python', 'NumPy', 'Pillow'],
    description:
      'A multilayer perceptron trained from scratch — no OpenCV, no sklearn. Eigenfaces via PCA compress each face from 4096 to 50 dimensions before classification, with a live Tkinter interface.',
    href: 'https://github.com/Daniyal197',
  },
  {
    id: '005',
    file: 'weather_app/',
    status: 'DEPLOYED',
    stack: ['Node.js', 'Express', 'OpenWeatherMap API'],
    description:
      'A full-stack weather app with Google OAuth login and JWT-secured sessions, pulling live conditions from the OpenWeatherMap API.',
    href: 'https://github.com/Daniyal197',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs text-primary tracking-widest mb-3">03 · PROJECTS</p>
        <h2 className="font-mono-tight font-bold text-3xl sm:text-4xl text-text mb-3">
          $ Is ~/Projects
        </h2>
        <p className="text-text-muted max-w-xl mb-12">
          Five projects, one rule: understand the layer below before importing it away.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <TiltCard className="h-full">
                <article
                  className="rounded-lg border border-border bg-surface p-5 sm:p-6 flex flex-col card-hover h-full"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <p className="font-mono text-[11px] text-text-dim">[LOG {p.id}]</p>
                    <span className="font-mono text-[10px] tracking-widest px-2 py-1 rounded-full border border-primary-dim text-primary shrink-0">
                      {p.status}
                    </span>
                  </div>

                  <h3 className="font-mono-tight font-semibold text-lg text-text mb-1 break-all">
                    {p.file}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {p.description}
                  </p>

                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-mono text-[13px] text-primary hover:text-text w-fit"
                  >
                    cat source.log <span aria-hidden="true">→</span>
                  </a>
                </article>
              </TiltCard>
            </Reveal>
          ))}

          <a
            href="https://github.com/Daniyal197"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-dashed border-border-bright p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-2 text-text-muted hover:text-primary hover:border-primary transition-colors min-h-[220px]"
          >
            <span className="font-mono text-2xl">+</span>
            <span className="font-mono text-sm">more on github.com/Daniyal197</span>
          </a>
        </div>
      </div>
    </section>
  )
}