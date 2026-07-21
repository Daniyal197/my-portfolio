const SPECS = [
  ['os', 'BS Information Technology'],
  ['host', 'University of Gujrat'],
  ['shell', 'Python · C/C++ · JavaScript'],
  ['focus', 'Cybersecurity · Ethical Hacking · Networking · Digital Forensics' ],
  ['status', 'Interning @ Netlogg pvt ltd. '],
  ['packages', '5 deployed projects'],
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-xs text-primary tracking-widest mb-3">01 · ABOUT</p>
            <h2 className="font-mono-tight font-bold text-3xl sm:text-4xl text-text mb-6">
              About me, technical philosophy, and the way I work.
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed text-[15px] sm:text-base">
              <p>
                Most student projects reach for a library and move on. Mine start with the
                question underneath it: what is <code className="font-mono text-primary text-sm">sklearn.PCA()</code> actually
                doing? What does a TCP handshake look like at the byte level? So my portfolio
                is built the same way my code is — nothing imported that I couldn't explain.
              </p>
              <p>
                That philosophy runs through everything below: a face recognition system with
                a hand-built neural network, a packet sniffer using nothing but raw sockets,
                and a password analyzer that calculates real entropy instead of guessing at
                "strength." I'm currently interning at Netlogg on the networking and digital
                forensics side of security, pointing that same curiosity at live traffic.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border-bright bg-surface overflow-hidden card-hover">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface-2">
                <span className="w-2.5 h-2.5 rounded-full bg-alert/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-text-dim" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary-dim" />
                <span className="ml-2 font-mono text-[11px] text-text-muted">neofetch</span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-7">
                <p className="text-primary font-bold mb-2">daniyal@portfolio</p>
                <p className="text-text-dim mb-3">{'─'.repeat(22)}</p>
                {SPECS.map(([k, v]) => (
                  <p key={k}>
                    <span className="text-primary">{k}</span>
                    <span className="text-text-dim">: </span>
                    <span className="text-text-muted">{v}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
