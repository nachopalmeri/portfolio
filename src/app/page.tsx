"use client";

import { useEffect, useState } from "react";

const skills = [
  { name: "Python", level: 90, color: "#00ff88" },
  { name: "Web3 / Blockchain", level: 85, color: "#a855f7" },
  { name: "Solidity", level: 75, color: "#22d3ee" },
  { name: "Automación", level: 88, color: "#00ff88" },
  { name: "JavaScript", level: 80, color: "#a855f7" },
  { name: "Análisis de Datos", level: 75, color: "#22d3ee" },
  { name: "Telegram Bots", level: 85, color: "#00ff88" },
  { name: "DaVinci Resolve", level: 70, color: "#a855f7" },
];

const projects = [
  {
    title: "Telegram Wallet Tracker Bot",
    description: "Bot de seguimiento de wallets en Telegram integrado con la API de Polymarket. Monitorea transacciones y alertas en tiempo real.",
    tech: ["Python", "Telegram API", "Polymarket"],
    color: "#00ff88",
  },
  {
    title: "DApp de Registro Blockchain",
    description: "Aplicación descentralizada para registros inmutables usando Smart Contracts en la red Base Network.",
    tech: ["Solidity", "Web3.py", "Base Network"],
    color: "#a855f7",
  },
  {
    title: "Landing Pages & Webs",
    description: "Desarrollo de páginas web para negocios, utilizando JavaScript, HTML, CSS y Figma para el diseño.",
    tech: ["JavaScript", "HTML/CSS", "Figma"],
    color: "#22d3ee",
  },
];

const experience = [
  {
    role: "Editor Multimedia & Content Manager",
    company: "Freelance",
    description: "Edición de videos en DaVinci Resolve. Videos largos para YouTube y cortos verticales para TikTok.",
    period: "Freelance",
  },
  {
    role: "Atención al Cliente & Stock",
    company: "Grido",
    description: "Resolución eficiente de pedidos y reclamos. Manejo de stock mediante Excel. Comunicación efectiva bajo presión.",
    period: "Freelance",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 136, 0.15) 0%, transparent 50%)`,
        }}
      />
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-20 h-20 border border-[#00ff88]/20 rounded-full animate-float opacity-50" />
      <div className="fixed top-40 right-20 w-16 h-16 border border-[#a855f7]/20 rounded-full animate-float opacity-50" style={{ animationDelay: "1s" }} />
      <div className="fixed bottom-40 left-1/4 w-12 h-12 border border-[#22d3ee]/20 rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "py-6"}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-mono text-xl font-bold gradient-text">IP</a>
          <div className="flex gap-8 font-mono text-sm">
            <a href="#about" className="hover:text-[#00ff88] transition-colors">// sobre mí</a>
            <a href="#skills" className="hover:text-[#00ff88] transition-colors">// skills</a>
            <a href="#projects" className="hover:text-[#00ff88] transition-colors">// proyectos</a>
            <a href="#contact" className="hover:text-[#00ff88] transition-colors">// contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="font-mono text-[#00ff88] mb-4 animate-pulse-glow">
            &lt;Hola, soy&gt;
          </div>
          <h1 className="text-7xl md:text-9xl font-bold mb-6 gradient-text animate-gradient">
            IGNACIO<br />PALMERI
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Estudiante de <span className="text-[#a855f7]">Gestión de Tecnología de la Información</span> en UADE
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 border border-[#00ff88]/30 rounded-full text-[#00ff88] font-mono text-sm">
              Python
            </span>
            <span className="px-4 py-2 border border-[#a855f7]/30 rounded-full text-[#a855f7] font-mono text-sm">
              Web3
            </span>
            <span className="px-4 py-2 border border-[#22d3ee]/30 rounded-full text-[#22d3ee] font-mono text-sm">
              Automatización
            </span>
            <span className="px-4 py-2 border border-[#00ff88]/30 rounded-full text-[#00ff88] font-mono text-sm">
              Blockchain
            </span>
          </div>
          <a 
            href="#projects"
            className="inline-block px-8 py-4 bg-[#00ff88] text-black font-bold rounded-lg glow-green hover:scale-105 transition-transform"
          >
            Ver Proyectos →
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00ff88]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#00ff88] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-[#00ff88] mb-8">
            &lt;sobre_mí&gt;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Autodidacta en programación y análisis de datos, con enfoque en el sector 
                <span className="text-[#00ff88]"> Fintech</span> y 
                <span className="text-[#a855f7]"> Criptoactivos</span>.
              </p>
              <p className="text-lg">
                Cuento con experiencia sólida en atención al cliente, aportando comunicación 
                efectiva y resolución de problemas bajo presión.
              </p>
              <p className="text-lg">
                Busco un rol de <span className="text-[#22d3ee]">Trainee/Junior</span> para aplicar 
                conocimientos en automatización, Web3 y gestión de datos.
              </p>
            </div>
            <div className="grid gap-4">
              {experience.map((exp, i) => (
                <div 
                  key={i}
                  className="p-6 border border-white/10 rounded-xl card-hover bg-white/5"
                >
                  <div className="font-mono text-sm text-[#00ff88] mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-[#a855f7] mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-[#a855f7] mb-8">
            &lt;skills&gt;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-mono">{skill.name}</span>
                  <span className="font-mono text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_20px_currentColor]"
                    style={{ 
                      width: `${skill.level}%`, 
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-[#22d3ee] mb-8">
            &lt;proyectos&gt;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i}
                className="p-8 border border-white/10 rounded-2xl card-hover bg-white/5 relative overflow-hidden"
                style={{ borderColor: `${project.color}30` }}
              >
                <div 
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ backgroundColor: project.color }}
                />
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1 text-sm font-mono rounded-full"
                      style={{ 
                        backgroundColor: `${project.color}20`,
                        color: project.color 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-[#00ff88] mb-8">
            &lt;contacto&gt;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Hable<span className="gradient-text">mos</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            ¿Interesado en trabajar juntos? ¡Contáctame!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://github.com/nachopalmeri"
              target="_blank"
              className="px-6 py-3 border border-white/20 rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-all flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/"
              target="_blank"
              className="px-6 py-3 border border-white/20 rounded-lg hover:border-[#0077b5] hover:text-[#0077b5] transition-all flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="tel:+5491155090832"
              className="px-6 py-3 border border-white/20 rounded-lg hover:border-[#a855f7] hover:text-[#a855f7] transition-all flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +54 9 11 5509-0832
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-gray-500">
            &copy; 2024 Ignacio Palmeri. Construido con <span className="text-[#00ff88]">Next.js</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
