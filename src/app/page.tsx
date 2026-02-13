'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "FulboTracker Pro",
    subtitle: "Gestión de rendimiento deportivo y analítica financiera personal",
    description: "Dashboard de estadísticas, lógica de cálculo de participación de costos (%) y persistencia de datos para torneos y ligas.",
    stack: ["Next.js", "Vercel", "Tailwind CSS", "Data Management"],
    span: "col-span-2 row-span-2",
    featured: true,
    link: "https://fulbotracker.vercel.app/",
  },
  {
    title: "PolyTools",
    description: "Automatización para Polymarket y análisis de mercados de predicción.",
    stack: ["Python", "APIs"],
    span: "col-span-1 row-span-2",
  },
  {
    title: "Backend Automation",
    description: "Scripts en Python para optimización de tareas y manejo de APIs.",
    stack: ["Python", "Selenium"],
    span: "col-span-1 row-span-1",
  },
  {
    title: "DApp Registro",
    description: "Smart contracts en Base Network para registros inmutables.",
    stack: ["Solidity", "Web3.py"],
    span: "col-span-1 row-span-1",
  },
];

const techStack = [
  "Python", "Next.js", "Solidity", "Web3.py", "React", "TypeScript", "Tailwind"
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#0070f3]/30 font-sans antialiased">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-[#1F1F1F]"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">IP</span>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-sm text-[#888888] hover:text-white transition-colors duration-200">Work</a>
            <a href="#about" className="text-sm text-[#888888] hover:text-white transition-colors duration-200">About</a>
            <a href="#contact" className="text-sm text-[#0070f3] hover:text-[#3291FF] transition-colors duration-200">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#666666] text-sm mb-6 tracking-widest uppercase">Backend Developer</p>
            <h1 className="text-[clamp(3rem,15vw,12rem)] font-black tracking-[-0.07em] leading-[0.85] bg-gradient-to-b from-white via-white to-[#333333] bg-clip-text text-transparent">
              IGNACIO
              <br />
              PALMERI
            </h1>
            <p className="text-[#888888] text-lg md:text-xl max-w-xl mt-8 leading-relaxed">
              Construyo herramientas que resuelven problemas reales. 
              Especializado en Python, Web3 y automatización.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#666666] mb-2">Proyectos Destacados</h2>
            <p className="text-[#444444] text-sm">Trabajo reciente</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
            {projects.map((project, index) => {
              const CardContent = (
                <>
                  {/* Radial glow effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0070f3]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Featured indicator */}
                  {project.featured && (
                    <div className="absolute top-6 right-6">
                      <span className="flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0070f3] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0070f3]"></span>
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      {project.subtitle && (
                        <p className="text-[#666666] text-xs uppercase tracking-wider mb-3">{project.subtitle}</p>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#888888] leading-relaxed max-w-sm">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.stack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 text-[11px] font-medium text-[#666666] bg-[#141414] rounded-full border border-[#1F1F1F]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="text-[#0070f3]" />
                  </div>
                </>
              );

              const cardClasses = "relative h-full p-8 bg-[#0A0A0A] rounded-2xl border border-[#1F1F1F] overflow-hidden transition-all duration-500 hover:border-[#333333] cursor-pointer block";

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`${project.span} relative group`}
                >
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClasses}
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div className={cardClasses}>
                      {CardContent}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="about" className="py-32 px-6 border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#666666] mb-2">Stack Tecnológico</h2>
            <p className="text-[#444444] text-sm">Tecnologías que uso diariamente</p>
          </motion.div>
          
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="px-5 py-2.5 text-sm text-[#888888] bg-[#0A0A0A] rounded-full border border-[#1F1F1F] hover:border-[#333333] hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#666666] text-sm uppercase tracking-widest mb-6">Disponible para trabajar</p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] mb-8">
              Hablemos
            </h2>
            <p className="text-[#888888] mb-12 max-w-md mx-auto text-lg">
              Estoy buscando nuevas oportunidades y proyectos interesantes.
            </p>
            <a 
              href="mailto:nachopalmeri@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#0070f3] hover:text-white transition-all duration-300"
            >
              Contactar
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444444] text-sm">2024 — Ignacio Palmeri</p>
          <div className="flex gap-8">
            <a href="https://github.com/nachopalmeri" className="text-[#666666] hover:text-white text-sm transition-colors duration-200">GitHub</a>
            <a href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/" className="text-[#666666] hover:text-white text-sm transition-colors duration-200">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
