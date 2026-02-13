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
    title: "PolyTools",
    description: "Herramientas de trading y análisis para Polymarket. Suite de herramientas para traders.",
    tech: ["Python", "Telegram API", "Polymarket"],
    link: "https://polytools-omega.vercel.app/",
  },
  {
    title: "Telegram Wallet Tracker Bot",
    description: "Bot de seguimiento de wallets en Telegram integrado con la API de Polymarket.",
    tech: ["Python", "Telegram API", "Polymarket"],
    link: "",
  },
  {
    title: "DApp de Registro Blockchain",
    description: "Aplicación descentralizada para registros inmutables usando Smart Contracts en Base Network.",
    tech: ["Solidity", "Web3.py", "Base Network"],
    link: "",
  },
];

const experience = [
  {
    role: "Editor Multimedia & Content Manager",
    company: "Freelance",
    description: "Edición de videos en DaVinci Resolve para YouTube y TikTok.",
  },
  {
    role: "Atención al Cliente & Stock",
    company: "Grido",
    description: "Gestión de pedidos, reclamos y stock mediante Excel.",
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-lg font-bold text-gray-900">
            Ignacio Palmeri
          </a>
          <div className="flex gap-6">
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
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 mb-3">Buenos Aires, Argentina</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ignacio Palmeri
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Estudiante de{' '}
            <span className="font-semibold text-blue-600">
              Gestión de Tecnología de la Información
            </span>
            {' '}en UADE
          </p>
          <p className="text-gray-500 mb-8">
            Apasionado por Python, Web3 y automatización. Buscando mi primera oportunidad profesional.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Python", "Web3", "Blockchain", "Automatización"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Ver Proyectos
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition">
              Contactarme
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sobre Mí</h2>
          <p className="text-gray-500 mb-8">Conoce mi trayectoria</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-600">
              <p>
                Soy estudiante de <strong>Gestión de Tecnología de la Información</strong> en UADE, 
                con pasión por la tecnología y la innovación.
              </p>
              <p>
                Autodidacta en programación y análisis de datos, con enfoque en 
                <strong> Fintech</strong> y <strong>Criptoactivos</strong>.
              </p>
              <p>
                Busco un rol de <strong>Trainee/Junior</strong> para aplicar mis conocimientos 
                en automatización, Web3 y gestión de datos.
              </p>
            </div>
            
            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div key={i} className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 text-sm mb-1">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
          <p className="text-gray-500 mb-8">Herramientas con las que trabajo</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Proyectos</h2>
          <p className="text-gray-500 mb-8">Mis trabajos destacados</p>
          
          <div className="grid gap-6">
            {projects.map((project, i) => (
              <div key={i} className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Ver proyecto →
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Educación</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-500 text-sm mb-2">2022 - Presente</p>
              <h3 className="font-semibold text-gray-900">
                Licenciatura en Gestión de la Tecnología de la Información
              </h3>
              <p className="text-blue-600">UADE</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-500 text-sm mb-2">2016 - 2021</p>
              <h3 className="font-semibold text-gray-900">Secundario</h3>
              <p className="text-blue-600">Colegio Eccleston</p>
              <p className="text-gray-500 text-sm">Promedio: 9.03</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Hablamos?</h2>
          <p className="text-gray-400 mb-8">
            Estoy buscando nuevas oportunidades. Contactame.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/nachopalmeri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="tel:+5491155090832"
              className="px-5 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              +54 9 11 5509-0832
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          © 2024 Ignacio Palmeri
        </div>
      </footer>
    </div>
  );
}
