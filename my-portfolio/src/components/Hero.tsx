import React, { useEffect } from 'react'
import motion, { useMotionValue, useTransform, AnimatePresence } from '../utils/motion'

interface HeroProps {}

const words = [
  'Noluthando Molui',
]

const AnimatedWord: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  return (
    <motion.span
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, type: 'spring', stiffness: 90, damping: 18 }}
      className="inline-block mr-2"
    >
      {text}
    </motion.span>
  )
}

const Hero: React.FC<HeroProps> = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  const bgX = useTransform(mouseX, [0, window.innerWidth || 1], [-20, 20])
  const bgY = useTransform(mouseY, [0, window.innerHeight || 1], [-20, 20])

  return (
    <section className="relative isolate overflow-hidden bg-obsidian text-crisp py-20">
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#071018] via-[#0b0720] to-[#07050b] opacity-90"
      />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            <AnimatePresence>
              {words.map((w, i) => (
                <AnimatedWord key={w} text={w} delay={i * 0.35} />
              ))}
            </AnimatePresence>
          </h1>

          {/* Social Media Links Section - No Package Imports Required */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex gap-5 items-center text-gray-400"
          >
            <motion.a 
              href="https://github.com/noluMolui" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: '#f3f4f6' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium transition-colors"
            >
              {/* Clean GitHub Inline SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              <span>GitHub</span>
            </motion.a>

            <span className="text-gray-700">|</span>

            <motion.a 
              href="https://www.linkedin.com/in/msmolui-b718ab320/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: '#0077b5' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium transition-colors"
            >
              {/* Clean LinkedIn Inline SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          <p className="mt-6 text-lg text-gray-300">
            Full-Stack Developer | Founder (Noluforge) | Hackathon Winner.
            Proven in intensive engineering environments.
          </p>

          <div className="mt-8 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-gradient-to-r from-emerald to-neonpurple text-obsidian font-semibold shadow-neon"
              href="#projects"
            >
              Explore Solutions
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-md border border-gray-700 text-crisp"
              href="#tech"
            >
              Analyze My Stack
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero