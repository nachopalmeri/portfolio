const projects = [
  {
    title: "PolyTools",
    description: "Suite de análisis para traders con integración de APIs financieras complejas.",
    stack: ["Python", "Polymarket API"],
    link: "https://polytools-omega.vercel.app/",
    featured: true,
  },
  {
    title: "Wallet Tracker",
    description: "Bot de Telegram con alertas en tiempo real sobre transacciones.",
    stack: ["Python", "Telegram Bot API"],
    link: null,
    featured: false,
  },
  {
    title: "DApp Registro",
    description: "Smart contract en Base Network para registros inmutables.",
    stack: ["Solidity", "Web3.py", "Base"],
    link: null,
    featured: false,
  },
  {
    title: "Landing Pages",
    description: "Sitios web profesionales con UX directo y enfoque en conversión.",
    stack: ["JavaScript", "HTML/CSS"],
    link: null,
    featured: false,
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

function ProjectCard({ 
  title, 
  description, 
  stack, 
  link,
  featured 
}: { 
  title: string; 
  description: string; 
  stack: string[]; 
  link: string | null;
  featured: boolean;
}) {
  return (
    <div className={`group p-8 bg-[#111111] rounded-xl border border-[#1a1a1a] hover:border-[#252525] transition-all duration-150 ${featured ? 'col-span-2' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-medium text-[#e8e8e8] group-hover:text-white transition-colors duration-150">
          {title}
        </h3>
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666666] group-hover:text-emerald-500 transition-all duration-150 translate-x-0 group-hover:translate-x-0.5"
          >
            <ArrowUpRight />
          </a>
        )}
      </div>
      
      <p className="text-[15px] text-[#a0a0a0] leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-3">
        {stack.map((tech) => (
          <span 
            key={tech}
            className="text-[13px] text-[#555555]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8] antialiased selection:bg-emerald-500/20">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        
        <section className="min-h-[90vh] flex flex-col justify-center pt-20 pb-40">
          <div className="max-w-3xl">
            <p className="text-[#555555] text-sm mb-8">
              Buenos Aires, Argentina
            </p>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[72px] font-semibold leading-[1.05] tracking-tight text-white mb-6">
              Ignacio Palmeri
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#888888] font-medium mb-6">
              Backend Developer
            </p>
            
            <p className="text-[#666666] text-lg leading-relaxed max-w-xl">
              Python, Web3, automatización. Construyo herramientas que resuelven problemas reales.
            </p>
          </div>
        </section>

        <section className="py-40">
          <h2 className="text-sm uppercase tracking-[0.25em] text-[#555555] mb-16">
            Proyectos
          </h2>
          
          {featuredProject && (
            <div className="mb-6">
              <ProjectCard {...featuredProject} />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} {...project} featured={false} />
            ))}
          </div>
        </section>

        <section className="py-40 border-t border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-[0.25em] text-[#555555] mb-12">
            Sobre mí
          </h2>
          <div className="max-w-[640px]">
            <p className="text-base text-[#888888] leading-relaxed">
              Estudiante de Gestión de TI en UADE. Autodidacta. Busco primera experiencia profesional donde pueda aportar y seguir creciendo.
            </p>
          </div>
        </section>

        <section className="py-40 border-t border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-[0.25em] text-[#555555] mb-12">
            Contacto
          </h2>
          <div className="flex flex-wrap gap-8">
            <a 
              href="https://github.com/nachopalmeri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-emerald-500 transition-colors duration-150"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-emerald-500 transition-colors duration-150"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:nachopalmeri@gmail.com"
              className="text-[#666666] hover:text-emerald-500 transition-colors duration-150"
            >
              Email
            </a>
          </div>
        </section>

        <footer className="py-20 border-t border-[#1a1a1a]">
          <p className="text-[#444444] text-sm">
            2024 — Ignacio Palmeri
          </p>
        </footer>
        
      </div>
    </div>
  );
}
