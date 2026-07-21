import { useEffect, useState } from 'react'

const LINKS = [
  { flag: 'About', href: '#about' },
  { flag: 'Skills', href: '#skills' },
  { flag: 'Projects', href: '#projects' },
  { flag: 'Experience', href: '#experience' },
  { flag: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur border-border' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); handleClick('#top') }}
          className="font-mono-tight text-sm sm:text-base text-primary shrink-0"
        >
          Dan<span className="text-text-muted"></span>Tech<span className="text-text-muted"></span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {LINKS.map((l) => (
            <li key={l.flag}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleClick(l.href) }}
                className="px-3 py-2 rounded text-text-muted hover:text-primary transition-colors"
              >
                {l.flag}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/Daniyal197"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[13px] px-3 py-1.5 rounded border border-border-bright text-text hover:border-primary hover:text-primary transition-colors"
        >
          github ↗
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-primary text-xl leading-none w-9 h-9 flex items-center justify-center border border-border-bright rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {open ? '×' : '≡'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur px-5 pb-5 pt-2">
          <ul className="flex flex-col font-mono text-sm">
            {LINKS.map((l) => (
              <li key={l.flag}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleClick(l.href) }}
                  className="block py-3 text-text-muted hover:text-primary border-b border-border last:border-none"
                >
                  {l.flag}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/Daniyal197"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-mono text-[13px] px-3 py-1.5 rounded border border-border-bright text-text"
          >
            github ↗
          </a>
        </div>
      )}
    </header>
  )
}
