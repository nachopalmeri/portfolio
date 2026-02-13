"use client";

import { useState, useEffect } from "react";

const skills = [
  { name: "Python", level: 90 },
  { name: "Web3 / Blockchain", level: 85 },
  { name: "Solidity", level: 75 },
  { name: "Automatización", level: 88 },
  { name: "JavaScript", level: 80 },
  { name: "Telegram Bots", level: 85 },
  { name: "Análisis de Datos", level: 75 },
];

const projects = [
  {
    title: "Telegram Wallet Tracker Bot",
    description: "Bot de seguimiento de wallets en Telegram integrado con la API de Polymarket. Monitorea transacciones y alertas en tiempo real.",
    tech: ["Python", "Telegram API", "Polymarket"],
  },
  {
    title: "DApp de Registro Blockchain",
    description: "Aplicación descentralizada para registros inmutables usando Smart Contracts en la red Base Network.",
    tech: ["Solidity", "Web3.py", "Base Network"],
  },
  {
    title: "Landing Pages & Webs",
    description: "Desarrollo de páginas web para negocios utilizando JavaScript, HTML, CSS y Figma.",
    tech: ["JavaScript", "HTML/CSS", "Figma"],
  },
];

const experience = [
  {
    role: "Editor Multimedia & Content Manager",
    company: "Freelance",
    description: "Edición de videos en DaVinci Resolve. Videos largos para YouTube y cortos para TikTok.",
  },
  {
    role: "Atención al Cliente & Stock",
    company: "Grido",
    description: "Resolución de pedidos y reclamos. Manejo de stock mediante Excel.",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-[#1a1a2e]">
            Ignacio Palmeri
          </a>
          <div className="hidden md:flex gap-8">
            {[
              { id: "about", label: "Sobre mí" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Proyectos" },
              { id: "contact", label: "Contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#e94560]"
                    : "text-gray-600 hover:text-[#1a1a2e]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#e94560] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1a1a2e] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-gray-500 mb-4 font-medium">Buenos Aires, Argentina</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1a1a2e] mb-6 leading-tight">
            Ignacio<br />Palmeri
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Estudiante de{' '}
            <span className="text-[#e94560] font-semibold">
              Gestión de Tecnología de la Información
            </span>
            {' '}en UADE
          </p>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Apasionado por Python, Web3 y automatización. Buscando mi primera oportunidad 
            profesional en el mundo tech.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Python", "Web3", "Blockchain", "Automatización"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="btn-primary">
              Ver Proyectos
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-[#1a1a2e] text-[#1a1a2e] rounded-lg font-semibold hover:bg-[#1a1a2e] hover:text-white transition-all">
              Contactarme
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">Conoce un poco más de mi trayectoria</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Soy estudiante de <strong>Gestión de Tecnología de la Información</strong> en UADE, 
                con una pasión genuina por la tecnología y la innovación.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Me considero autodidacta en programación y análisis de datos, con un enfoque especial 
                en el sector <strong>Fintech</strong> y <strong>Criptoactivos</strong>.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cuento con experiencia sólida en atención al cliente, desarrollando habilidades de 
                comunicación efectiva y resolución de problemas bajo presión.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Actualmente busco un rol de <strong>Trainee/Junior</strong> para aplicar mis 
                conocimientos en automatización, Web3 y gestión de datos.
              </p>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="card p-6">
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-1">{exp.role}</h3>
                  <p className="text-[#e94560] font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-[#f8f9fa]">
        <div className="container mx-auto">
          <h2 className="section-title">Skills & Tecnologías</h2>
          <p className="section-subtitle">Herramientas con las que trabajo</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-[#1a1a2e]">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1a1a2e] to-[#e94560] rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Proyectos</h2>
          <p className="section-subtitle">Alguns de mis trabajos destacados</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="card p-8">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-[#f8f9fa]">
        <div className="container mx-auto">
          <h2 className="section-title">Educación</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <p className="text-sm text-gray-500 mb-2">2022 - Presente</p>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                Licenciatura en Gestión de la Tecnología de la Información
              </h3>
              <p className="text-[#e94560] font-medium">UADE</p>
            </div>
            <div className="card p-8">
              <p className="text-sm text-gray-500 mb-2">2016 - 2021</p>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Secundario</h3>
              <p className="text-[#e94560] font-medium mb-2">Colegio Eccleston</p>
              <p className="text-gray-600">Promedio: 9.03</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-[#1a1a2e] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Hablamos?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Estoy buscando nuevas oportunidades. Si te interesa mi perfil, no dudes en contactarme.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/nachopalmeri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="tel:+5491155090832"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +54 9 11 5509-0832
            </a>
            <a
              href="mailto:ignacio@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1a1a2e] border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2024 Ignacio Palmeri. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
