import CommandPalette from './components/CommandPalette'
import { useState } from 'react'
import BootSequence from './components/BootSequence'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

export default function App() {
  const [bootDone, setBootDone] = useState(false)

  return (
    <>
      {!bootDone && <BootSequence onComplete={() => setBootDone(true)} />}
    <CommandPalette />
    <div className="min-h-screen bg-bg text-text"></div>
      {!bootDone && <BootSequence onComplete={() => setBootDone(true)} />}
      <div className="min-h-screen bg-bg text-text">
        <Nav />
        <main>
          <Hero />
          <StatsStrip />
          <Reveal><About /></Reveal>
          <Skills />
          <Projects />
          <Reveal><Experience /></Reveal>
          <Reveal><Contact /></Reveal>
        </main>
        <Footer />
      </div>
    </>
  )
}