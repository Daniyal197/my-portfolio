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
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    if (sections.length === 0) return

    // Thin band through the middle of the viewport — whichever section
    // crosses it becomes "active", regardless of how tall each section is.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const linkClass = (href) =>
    `px-3 py-2 rounded transition-colors ${
      active === href
        ? 'text-primary font-semibold'
        : 'text-text-muted hover:text-primary'
    }`

  const mobileLinkClass = (href) =>
    `block py-3 border-b border-border last:border-none transition-colors ${
      active === href ? 'text-primary font-semibold' : 'text-text-muted hover:text-primary'
    }`

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
                className={linkClass(l.href)}
              >
                {active === l.href && <span className="text-primary mr-1">●</span>}
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
        <button
          onClick={() => window.dispatchEvent(new Event("cmdk:open"))}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-border text-text-muted text-xs font-mono hover:text-primary hover:border-primary transition-colors"
        >
          <span>search</span>
          <kbd className="px-1.5 py-0.5 rounded bg-bg border border-border text-[10px]">Ctrl K</kbd>
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
                  className={mobileLinkClass(l.href)}
                >
                  {active === l.href && <span className="text-primary mr-1">●</span>}
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