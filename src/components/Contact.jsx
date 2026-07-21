const CHANNELS = [
  { label: 'github', value: 'github.com/Daniyal197', href: 'https://github.com/Daniyal197' },
  { label: 'email', value: 'daniyal197@icloud.com', href: 'mailto:daniyal197@icloud.com' },
  { label: 'linkedin', value: 'linkedin.com/in/daniyal-ahmed-208652372', href: 'https://linkedin.com/in/daniyal-ahmed-208652372' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs text-primary tracking-widest mb-3">05 · CONTACT</p>
        <h2 className="font-mono-tight font-bold text-3xl sm:text-4xl text-text mb-4">
          $ Contact me for work, collaboration, or just to talk about packets.
        </h2>
        <p className="text-text-muted max-w-xl mb-12">
          Open to internships, freelance work, and anyone who wants to talk packet headers.
        </p>

        <div className="rounded-lg border border-border-bright bg-surface overflow-hidden max-w-2xl">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface-2">
            <span className="w-2.5 h-2.5 rounded-full bg-alert/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-text-dim" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-dim" />
            <span className="ml-2 font-mono text-[11px] text-text-muted">connection established</span>
          </div>
          <div className="p-5 sm:p-6 font-mono text-[13px] space-y-4">
            {CHANNELS.map((c) => (
                <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-wrap items-center gap-2 group"
              >
                <span className="text-primary w-24 shrink-0">{c.label}</span>
                <span className="text-text-dim">:</span>
                <span className="text-text-muted group-hover:text-primary transition-colors break-all">
                  {c.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}