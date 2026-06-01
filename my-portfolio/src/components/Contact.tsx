import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-16 pb-24 bg-[#050509] text-crisp">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
        <p className="text-gray-300 mb-8">
          Let's discuss strategy, systems, or a collaboration. Drop me an email directly!
        </p>

        {/* Clean, perfectly sized bordered card */}
        <div className="inline-block mx-auto px-6 py-4 rounded-lg border border-gray-800 bg-transparent transition-all hover:border-emerald/30">
          <a 
            href="mailto:noluthandotinyiko@gmail.com" 
            className="text-lg sm:text-2xl font-mono text-emerald hover:text-emerald/80 tracking-wide transition-colors"
          >
            noluthandotinyiko@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact