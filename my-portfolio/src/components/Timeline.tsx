import React from 'react'
import motion, { useScroll, useTransform } from '../utils/motion'

type Waypoint = {
  year: string
  title: string
  desc: string
}

const WAYPOINTS: Waypoint[] = [
  { 
    year: 'Present', 
    title: 'Founder & Lead Engineer — Noluforge', 
    desc: 'Architecting full-stack web applications and robust systems for small-to-medium businesses. Managing end-to-end digital transformations, including responsive UI/UX designs, core functional systems development, and complete online presence setups to position clients for strategic market growth.' 
  },
  { 
    year: 'May 2026', 
    title: 'Hackathon Victory & AI Fellowship (Melsoft Academy)', 
    desc: 'Competed in a high-intensity development hackathon and placed in the elite Top 25 to secure a fully sponsored Study Now, Pay Later (SNPL) position. Specializing in the AI-Augmented Full-Stack Developer track, mastering advanced system architectures, and integrating AI-native workflows into rapid engineering cycles.' 
  },
  { 
    year: '2025', 
    title: 'Rapid Skill Acquisition (Tech4Dev & SheCodes)', 
    desc: 'Established a powerful full-stack foundation spanning advanced JavaScript (ES6+), Python, Node.js, and database architectures. Co-engineered "CareQueue", a comprehensive resource and queue management application, while executing rigorous Git branch management workflows within a collaborative developer team.' 
  },
]

const Timeline: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <section className="py-20 bg-[#07060b] text-crisp">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8">Proven Trajectory</h2>
        <div className="relative">
          <motion.div style={{ scale }} className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald to-neonpurple rounded" />

          <div className="ml-12 space-y-12">
            {WAYPOINTS.map((w, idx) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative"
              >
                <div className="absolute -left-8 top-1 w-5 h-5 rounded-full bg-emerald border-2 border-black" />
                <h3 className="text-xl font-semibold">{w.title}</h3>
                <p className="text-gray-300 mt-2">{w.desc}</p>
                <div className="text-sm mt-1 text-gray-500">{w.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
