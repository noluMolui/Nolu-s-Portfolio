import React from 'react'
import './index.css'
import Hero from './components/Hero'
import TechArsenal from './components/TechArsenal'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-crisp">
      <Hero />
      <TechArsenal />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
