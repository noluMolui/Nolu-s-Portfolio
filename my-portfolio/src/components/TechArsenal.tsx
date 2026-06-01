import React, { useMemo } from 'react'
import motion, { useMotionValue, useTransform } from '../utils/motion'

type Skill = {
  id: string
  label: string
  group: 'fullstack' | 'systems' | 'workflows'
}

type SkillGroup = {
  title: string
  description: string
  skills: Skill[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Full-Stack Mastery',
    description: 'Building complete, scalable web applications from front-end to back-end with modern tooling.',
    skills: [
      { id: 'react', label: 'React', group: 'fullstack' },
      { id: 'next', label: 'Next.js', group: 'fullstack' },
      { id: 'ts', label: 'TypeScript', group: 'fullstack' },
      { id: 'tailwind', label: 'Tailwind CSS', group: 'fullstack' },
    ]
  },
  {
    title: 'Systems Engineering',
    description: 'Architecting robust backends, databases, and API layers that scale.',
    skills: [
      { id: 'node', label: 'Node.js', group: 'systems' },
      { id: 'api', label: 'API Architecture', group: 'systems' },
    ]
  },
  {
    title: 'Accelerated Workflows',
    description: 'Optimized development processes through automation and strategic practices.',
    skills: [
      { id: 'ai', label: 'AI Prompt Engineering', group: 'workflows' },
      { id: 'git', label: 'Advanced Git Flow', group: 'workflows' },
      { id: 'ci', label: 'CI/CD Pipelines', group: 'workflows' },
    ]
  },
]

const SOFT_SKILLS = [
  { label: 'Leadership', description: 'Group Leader at Tech4Dev—mentored and guided teammates through complex projects.' },
  { label: 'Facilitation', description: 'Facilitator at Girlcode—championing tech education for underrepresented communities.' },
  { label: 'Education', description: 'Grade 5 HTML & CSS Instructor—teaching foundational web skills to young learners.' },
  { label: 'Communication', description: 'Proven ability to articulate technical concepts and guide teams toward shared goals.' },
]

const AnimatedSkillBubble: React.FC<{ skill: Skill; mouse: { x: any; y: any } }> = ({ skill, mouse }) => {
  const mx = useTransform(mouse.x, (v: number) => (v - window.innerWidth / 2) / 60)
  const my = useTransform(mouse.y, (v: number) => (v - window.innerHeight / 2) / 60)

  return (
    <motion.div
      className="flex-shrink-0" whileHover={{ scale: 1.12 }} transition={{ type: 'spring', stiffness: 100, damping: 18 }}
    >
      <motion.button
        className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald/20 to-neonpurple/20 border border-emerald/50 text-sm text-crisp font-medium hover:shadow-neon transition-shadow"
        whileTap={{ scale: 0.95 }}
        style={{ x: mx, y: my }}
      >
        {skill.label}
      </motion.button>
    </motion.div>
  )
}

const TechArsenal: React.FC = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const mouse = useMemo(() => ({ x: mouseX, y: mouseY }), [mouseX, mouseY])

  React.useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <section id="tech" className="py-20 bg-obsidian text-crisp">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-2">Tech Arsenal & Core Competencies</h2>
        <p className="text-gray-400 mb-12">A comprehensive overview of technical mastery and human-centered leadership.</p>

        {/* Hard Skills with Animated Bubbles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-gradient-to-br from-gray-900/40 to-black/20 border border-gray-800 hover:border-emerald/30 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">{group.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <AnimatedSkillBubble key={skill.id} skill={skill} mouse={mouse} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8">Leadership & Mentorship</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOFT_SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-lg bg-gradient-to-br from-emerald/10 to-neonpurple/5 border border-emerald/20 hover:border-emerald/40 transition-colors"
              >
                <h4 className="text-emerald font-semibold mb-2">{skill.label}</h4>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechArsenal
