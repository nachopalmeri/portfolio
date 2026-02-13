const projects = [
  {
    title: "PolyTools",
    description: "Suite de análisis para traders de mercados predictivos. Integración compleja de APIs financieras.",
    stack: ["Python", "Polymarket API"],
    link: "https://polytools-omega.vercel.app/",
  },
  {
    title: "Wallet Tracker",
    description: "Bot de Telegram con alertas en tiempo real sobre transacciones de wallets.",
    stack: ["Python", "Telegram Bot API"],
    link: null,
  },
  {
    title: "DApp Registro",
    description: "Smart contract en Base Network para registros inmutables y verificables.",
    stack: ["Solidity", "Web3.py", "Base"],
    link: null,
  },
  {
    title: "Landing Pages",
    description: "Sitios web profesionales para negocios. UX directo y priorización.",
    stack: ["JavaScript", "HTML/CSS"],
    link: null,
  },
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none"
    >
      <path 
        d="M4 12L12 4M12 4H6M12 4V10" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({ 
  title, 
  description, 
  stack, 
  link 
}: { 
  title: string; 
  description: string; 
  stack: string[]; 
  link: string | null;
}) {
  const CardContent = (
    <>
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-xl font-medium text-zinc-100">{title}</h3>
        {link && (
          <ArrowUpRight className="text-zinc-500 group-hover:text-blue-400 transition-colors duration-200" />
        )}
      </div>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-8">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span 
            key={tech} 
            className="text-xs text-zinc-500 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  const className = "group block p-8 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-200";

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={className}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className={className}>
      {CardContent}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/20">
      <main className="max-w-6xl mx-auto px-6 lg:px-12">
        
        <section className="min-h-screen flex flex-col justify-center py-24">
          <div className="space-y-6">
            <p className="text-zinc-500 text-sm font-mono">
              Buenos Aires, Argentina
            </p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
              Ignacio Palmeri
            </h1>
            
            <p className="text-xl sm:text-2xl text-zinc-300">
              Backend Developer
            </p>
            
            <p className="text-zinc-500 max-w-xl text-lg leading-relaxed">
              Python, Web3, automatización. Construyo herramientas que resuelven problemas reales.
            </p>
          </div>
        </section>

        <section className="py-24 border-t border-zinc-900">
          <div className="mb-16">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Proyectos
            </h2>
            <p className="text-zinc-400">
              Herramientas construidas con código.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-6">
                Sobre mí
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed max-w-lg">
                Estudiante de Gestión de TI en UADE. Autodidacta. Busco primera experiencia 
                profesional donde pueda aportar y seguir creciendo.
              </p>
            </div>
            
            <div>
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-6">
                Contacto
              </h2>
              <div className="space-y-4">
                <a 
                  href="https://github.com/nachopalmeri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <span className="block text-zinc-500">
                  nachopalmeri@gmail.com
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-zinc-900">
          <p className="text-zinc-600 text-sm">
            2024 — Ignacio Palmeri
          </p>
        </footer>
        
      </main>
    </div>
  );
}
