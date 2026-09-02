const LINKS = [
  { flag: 'About', href: '#about' },
  { flag: 'Skills', href: '#skills' },
  { flag: 'Projects', href: '#projects' },
  { flag: 'Experience', href: '#experience' },
  { flag: 'Contact', href: '#contact' },
]

const CHANNELS = [
  { label: 'GitHub', href: 'https://github.com/Daniyal197' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/daniyal-ahmed-208652372' },
  { label: 'Email', href: 'mailto:daniyal197@icloud.com' },
]

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 font-mono text-[13px]">
          <div>
            <button
              onClick={() => scrollTo('#top')}
              className="font-mono-tight text-base text-primary mb-3 hover:text-text transition-colors"
            >
              DanTech
            </button>
            <p className="text-text-muted text-[12px] leading-relaxed max-w-[22ch]">
              Security tools and full-stack apps, built from the layer underneath the library.
            </p>
          </div>

          <div>
            <p className="text-text-dim tracking-widest text-[11px] uppercase mb-3"># sitemap</p>
            <ul className="space-y-2">
              {LINKS.map((l) => (
                <li key={l.flag}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {l.flag}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-text-dim tracking-widest text-[11px] uppercase mb-3"># connect</p>
            <ul className="space-y-2">
              {CHANNELS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {c.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-text-dim">
          <p>© {new Date().getFullYear()} Daniyal Ahmed. Built from scratch, naturally.</p>
          <p>React · Vite · Tailwind · deployed on Vercel</p>
          <button
            onClick={() => scrollTo('#top')}
            className="text-text-muted hover:text-primary transition-colors"
          >
            back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}