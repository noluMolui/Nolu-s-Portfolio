import React, { useState } from 'react'
import { motion } from 'framer-motion'

type Project = {
  id: string
  title: string
  desc: string
  tags: string[]
}

const PROJECTS: Project[] = [
  { id: 'carequeue', title: 'CareQueue', desc: 'Healthcare coordination platform.', tags: ['React', 'Node', 'Postgres'] },
  { id: '75day', title: '75-Day Hard Tracker', desc: 'Habit-tracking with progressive difficulty.', tags: ['React', 'TS', 'Tailwind'] },
  { id: 'movieboard', title: 'Movie Board', desc: 'Collaborative movie discovery.', tags: ['Next.js', 'Vercel', 'Framer'] },
]

const ProjectCard: React.FC<{ p: Project }> = ({ p }) => {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const onMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = -(y - rect.height / 2) / 18
    const ry = (x - rect.width / 2) / 18
    setTilt({ rx, ry })
  }

  const reset = () => setTilt({ rx: 0, ry: 0 })

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      className="bg-gradient-to-br from-[#07060b] to-[#080512] border border-gray-800 rounded-xl p-6 shadow-neon hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start justify-between">
        <h4 className="text-lg font-semibold">{p.title}</h4>
      </div>
      <p className="mt-3 text-gray-300">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-white/3 rounded-md text-crisp">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-obsidian text-crisp">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
