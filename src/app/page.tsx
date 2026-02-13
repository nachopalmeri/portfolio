const projects = [
  {
    title: "PolyTools",
    description: "Suite de análisis para traders. Integración compleja de APIs financieras.",
    stack: ["Python", "Polymarket API"],
    link: "https://polytools-omega.vercel.app/",
  },
  {
    title: "Wallet Tracker",
    description: "Bot de Telegram con alertas en tiempo real sobre transacciones.",
    stack: ["Python", "Telegram Bot API"],
    link: null,
  },
  {
    title: "DApp Registro",
    description: "Smart contract en Base Network para registros inmutables.",
    stack: ["Solidity", "Web3.py", "Base"],
    link: null,
  },
  {
    title: "Landing Pages",
    description: "Sitios web profesionales. UX directo y priorización.",
    stack: ["JavaScript", "HTML/CSS"],
    link: null,
  },
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      width="14" 
      height="14" 
      viewBox="0 0 14 14" 
      fill="none"
    >
      <path 
        d="M3 11L11 3M11 3H5M11 3V9" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 antialiased selection:bg-zinc-700 selection:text-white">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        
        <section className="min-h-[90vh] flex flex-col justify-center pt-20 pb-40">
          <div className="max-w-3xl">
            <p className="text-zinc-500 text-sm mb-8 font-mono">
              Buenos Aires, Argentina
            </p>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[72px] font-semibold leading-[1.05] tracking-tight text-white mb-6">
              Ignacio Palmeri
            </h1>
            
            <p className="text-xl sm:text-2xl text-zinc-400 font-medium mb-6">
              Backend Developer
            </p>
            
            <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
              Python, Web3, automatización. Construyo herramientas que resuelven problemas reales.
            </p>
          </div>
        </section>

        <section className="py-40 border-t border-zinc-800/50">
          <div className="mb-20">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] mb-4">
              Proyectos
            </h2>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <article 
                key={project.title}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-zinc-600 font-mono text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300"
                        >
                          <ArrowUpRight />
                        </a>
                      )}
                    </div>
                    <p className="text-zinc-400 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-5 lg:text-right">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
                      {project.stack.map((tech) => (
                        <span 
                          key={tech}
                          className="text-sm text-zinc-600 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-40 border-t border-zinc-800/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] mb-8">
                Sobre mí
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed">
                Estudiante de Gestión de TI en UADE. Autodidacta. Busco primera experiencia profesional.
              </p>
            </div>
            
            <div className="lg:col-span-5 lg:col-start-8">
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] mb-8">
                Contacto
              </h2>
              <div className="space-y-4">
                <a 
                  href="https://github.com/nachopalmeri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <span className="block text-zinc-600">
                  nachopalmeri@gmail.com
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-20 border-t border-zinc-800/50">
          <p className="text-zinc-600 text-sm">
            2024 — Ignacio Palmeri
          </p>
        </footer>
        
      </div>
    </div>
  );
}
