import { useState } from 'react'
import CommandPalette from './components/CommandPalette'
import BootSequence from './components/BootSequence'
import MatrixRain from './components/MatrixRain'
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
      <MatrixRain />
      <div className="min-h-screen text-text relative z-10">
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