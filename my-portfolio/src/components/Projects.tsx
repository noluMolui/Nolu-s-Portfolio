import React, { useState } from 'react'
import motion from '../utils/motion'

// 1. Added liveUrl to the Project type definition
type Project = {
  id: string
  title: string
  desc: string
  tags: string[]
  liveUrl?: string // Optional string so it won't break if a project lacks a link
}


const PROJECTS: Project[] = [
  { 
    id: 'ForgeSetup (Full-Stack Application)', 
    title: 'ForgeSetup (Full-Stack Application)', 
    desc: 'A full-stack developer workspace application built with a React/Vite frontend and a Node.js/Express backend. Features seamless integration with the Google Gemini API to deliver real-time, intelligent developer assistance and automated project workflows. Securely backed by a cloud database architecture using MongoDB Atlas and fully deployed across Vercel and Render using automated CI/CD pipelines.', 
    tags: ['React', 'Node', 'Postgres'],
    liveUrl: 'hhttps://nolu-foege-set-up.vercel.app/' 
  },
  { 
    id: 'HustleFlow-Job application tracker75day', 
    title: 'HustleFlow-Job application tracker', 
    desc: ' A full-stack application designed to centralize and manage the recruitment lifecycle. Features include secure user authentication, real-time application status updates, and a responsive data-grid for tracking professional opportunities.', 
    tags: ['React' , 'Node.js ', 'MongoDB' , 'Express'],
    liveUrl: 'https://job-application-tracker-1-3jsp.onrender.com/' 
  },
  { 
    id: 'Titelo Electrica Business Website', 
    title: 'Titelo Electrical Business Website', 
    desc: ' A clean, professional website built for an electrical company, focused on credibility, clarity, and ease of client contact.', 
    tags: ['HTML' , 'CSS' , 'JavaScript',],
    liveUrl: 'https://noluforge.co.za/' 
  },

    { 
    id: 'Business Website', 
    title: 'Business Website', 
    desc: 'An official business website showcasing full digital services, brand clarity, and a strong professional online presence.', 
    tags: ['HTML' , 'CSS' , 'JavaScript',],
    liveUrl: 'https://www.titelo.co.za/' 
  },

      { 
    id: 'Weather App', 
    title: 'Weather App', 
    desc: 'A weather application that consumes a public API to display real-time weather data through a simple, user-friendly interface.', 
    tags: ['HTML' , 'CSS' , 'JavaScript',],
    liveUrl: 'https://weatherappapipractice.netlify.app/' 
  },
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
      className="flex flex-col justify-between bg-gradient-to-br from-[#07060b] to-[#080512] border border-gray-800 rounded-xl p-6 shadow-neon hover:shadow-xl transition-shadow duration-300"
    >
      <div>
        <div className="flex items-start justify-between">
          <h4 className="text-lg font-semibold">{p.title}</h4>
        </div>
        <p className="mt-3 text-gray-300">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded-md text-crisp">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Render the Live Demo link if it exists */}
      {p.liveUrl && (
        <div className="mt-6 pt-4 border-t border-gray-800/50">
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-200 group"
          >
            Live Demo 
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      )}
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