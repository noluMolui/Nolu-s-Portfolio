import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

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
