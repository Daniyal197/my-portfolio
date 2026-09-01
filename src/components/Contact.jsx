const CHANNELS = [
  { label: 'github', value: 'github.com/Daniyal197', href: 'https://github.com/Daniyal197' },
  { label: 'email', value: 'daniyal197@icloud.com', href: 'mailto:daniyal197@icloud.com' },
  { label: 'linkedin', value: 'linkedin.com/in/daniyal-ahmed-208652372', href: 'https://linkedin.com/in/daniyal-ahmed-208652372' },
]

const WHATSAPP_NUMBER = '923140055647'
const EMAIL = 'daniyal197@icloud.com'

const MEETINGS = [
  {
    id: 'deep-dive',
    command: 'book --deep-dive',
    duration: '30 min',
    desc: 'Code review, architecture discussion, or a proper technical deep-dive.',
    whatsappText: "Hi Daniyal, I'd like to book a 30-min Technical Deep-Dive call to discuss: ",
    emailSubject: '30-min Technical Deep-Dive Request',
    emailBody: "Hi Daniyal,\n\nI'd like to schedule a 30-minute technical deep-dive call to discuss:\n\n",
  },
  {
    id: 'walkthrough',
    command: 'book --walkthrough',
    duration: '15 min',
    desc: "A quick intro call to walk through my work and see if it's a fit.",
    whatsappText: "Hi Daniyal, I'd like to book a 15-min Walkthrough call to learn more about your work.",
    emailSubject: '15-min Walkthrough Request',
    emailBody: "Hi Daniyal,\n\nI'd like to schedule a 15-minute walkthrough call to learn more about your work.\n\n",
  },
]

function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

function mailLink(subject, body) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

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

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl">
          {/* Book a call */}
          <div className="rounded-lg border border-border-bright bg-surface overflow-hidden card-hover">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface-2">
              <span className="w-2.5 h-2.5 rounded-full bg-alert/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-text-dim" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary-dim" />
              <span className="ml-2 font-mono text-[11px] text-text-muted">book a call</span>
            </div>
            <div className="p-5 sm:p-6 font-mono text-[13px] space-y-6">
              {MEETINGS.map((m) => (
                <div key={m.id}>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-primary">{m.command}</span>
                    <span className="text-[10px] tracking-widest px-2 py-0.5 rounded-full border border-primary-dim text-primary shrink-0">
                      {m.duration}
                    </span>
                  </div>
                  <p className="text-text-muted text-[12px] leading-relaxed mb-3">{m.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={waLink(m.whatsappText)}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded font-mono text-[12px] font-semibold bg-primary text-bg hover:bg-primary-dim transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={mailLink(m.emailSubject, m.emailBody)}
                      className="px-3 py-1.5 rounded font-mono text-[12px] font-semibold border border-border-bright text-text hover:border-primary hover:text-primary transition-colors"
                    >
                      Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direct channels */}
          <div className="rounded-lg border border-border-bright bg-surface overflow-hidden card-hover">
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
      </div>
    </section>
  )
}