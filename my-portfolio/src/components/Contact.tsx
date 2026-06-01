import React, { useState } from 'react'
import motion from '../utils/motion'

const Contact: React.FC = () => {
  const [focused, setFocused] = useState(false)

  return (
    <section id="contact" className="pt-16 pb-0 bg-[#050509] text-crisp">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
        <p className="text-gray-300 mb-6">Let's discuss strategy, systems, or a collaboration.</p>

        <motion.form className="relative bg-transparent p-6 rounded-lg border border-gray-800" onSubmit={(e)=>e.preventDefault()}>
          <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect x="0" y="0" width="100" height="100" fill="none" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.06" />
          </svg>

          <div className="grid grid-cols-1 gap-4">
            <input onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} className="px-4 py-3 bg-transparent border-b border-gray-700 outline-none" placeholder="Your email" />
            <input onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} className="px-4 py-3 bg-transparent border-b border-gray-700 outline-none" placeholder="Subject" />
            <textarea onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} className="px-4 py-3 bg-transparent border-b border-gray-700 outline-none" placeholder="Message" rows={4} />
          </div>

          <div className="mt-6 flex justify-end">
            <motion.button whileHover={{ scale: 1.02 }} className="px-4 py-2 bg-emerald text-black rounded-md font-semibold">Send</motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
