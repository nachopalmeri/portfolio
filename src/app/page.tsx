'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "PolyTools",
    description: "Suite de análisis para traders de mercados predictivos.",
    stack: ["Python", "APIs"],
    span: "col-span-2 row-span-2",
    featured: true,
  },
  {
    title: "Wallet Tracker",
    description: "Bot de Telegram con alertas en tiempo real.",
    stack: ["Python", "Web3"],
    span: "col-span-1 row-span-1",
  },
  {
    title: "DApp Registro",
    description: "Smart contracts en Base Network.",
    stack: ["Solidity", "Web3.py"],
    span: "col-span-1 row-span-1",
  },
  {
    title: "Automation",
    description: "Scripts de automatización y scraping.",
    stack: ["Python", "Selenium"],
    span: "col-span-2 row-span-1",
  },
];

const techStack = [
  "Python", "Solidity", "Web3.py", "React", "Next.js", "TypeScript", "PostgreSQL"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#F5F5F7] selection:bg-[#0070f3]/30 font-sans">
      {/* Navbar con Glassmorphism */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-[#222]"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight text-[#F5F5F7]">IP</span>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-sm text-[#888888] hover:text-[#F5F5F7] transition-colors duration-200">Work</a>
            <a href="#about" className="text-sm text-[#888888] hover:text-[#F5F5F7] transition-colors duration-200">About</a>
            <a href="#contact" className="text-sm text-[#888888] hover:text-[#F5F5F7] transition-colors duration-200">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#888888] text-sm mb-4 tracking-wide">Buenos Aires, Argentina</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.9] mb-6">
              Ignacio
              <br />
              Palmeri
            </h1>
            <p className="text-[#888888] text-lg max-w-md leading-relaxed">
              Backend Developer especializado en Python, Web3 y automatización. 
              Construyo herramientas que resuelven problemas reales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Projects */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-[#888888] mb-12"
          >
            Proyectos
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className={`${project.span} relative group p-6 bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded-xl border border-[#222] overflow-hidden cursor-pointer`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#0070f3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-2 text-[#F5F5F7]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#888888] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-[10px] uppercase tracking-wider text-[#666] bg-[#111] rounded border border-[#222]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="about" className="py-32 px-6 border-t border-[#111]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-[#888888] mb-12"
          >
            Stack Tecnológico
          </motion.h2>
          
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 text-sm text-[#888888] bg-[#0a0a0a] rounded-lg border border-[#222] hover:border-[#0070f3]/50 hover:text-[#F5F5F7] transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 border-t border-[#111]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.05em] mb-6">
              Trabajemos juntos
            </h2>
            <p className="text-[#888888] mb-8 max-w-md mx-auto">
              Estoy disponible para nuevos proyectos y oportunidades.
            </p>
            <a 
              href="mailto:nachopalmeri@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5F5F7] text-black text-sm font-medium rounded-full hover:bg-[#0070f3] hover:text-white transition-all duration-300"
            >
              Contactar
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#111]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-[#444] text-sm">2024 — Ignacio Palmeri</p>
          <div className="flex gap-6">
            <a href="https://github.com/nachopalmeri" className="text-[#444] hover:text-[#888] text-sm transition-colors">GitHub</a>
            <a href="https://linkedin.com" className="text-[#444] hover:text-[#888] text-sm transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
