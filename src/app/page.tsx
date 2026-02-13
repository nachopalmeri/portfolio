"use client";

const projects = [
  {
    title: "PolyTools",
    problem: "Traders necesitaban herramientas de análisis para Polymarket.",
    what: "Desarrollé suite de herramientas para trading con Python y APIs.",
    stack: "Python • Telegram API • Polymarket API",
    link: "https://polytools-omega.vercel.app/",
  },
  {
    title: "Telegram Wallet Tracker",
    problem: "Dificultad para seguir wallets de traders.",
    what: "Bot de Telegram que alerta en tiempo real sobre transacciones.",
    stack: "Python • Telegram Bot API",
  },
  {
    title: "DApp Registro Blockchain",
    problem: "Registros no verificables.",
    what: "Smart contract en Base Network para registros inmutables.",
    stack: "Solidity • Web3.py • Base Network",
  },
  {
    title: "Landing Pages",
    problem: "Negocios sin presencia web.",
    what: "Desarrollo de páginas web profesionales.",
    stack: "JavaScript • HTML/CSS • Figma",
  },
];

const skills = {
  "Backend": ["Python", "Web3", "Solidity"],
  "Herramientas": ["Telegram Bots", "APIs", "Git"],
  "Otros": ["Análisis de Datos", "Excel"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <p className="text-sm text-gray-500 mb-4">Buenos Aires, Argentina</p>
        <h1 className="text-4xl font-bold mb-4">Ignacio Palmeri</h1>
        <p className="text-xl text-gray-600 mb-6">Backend Developer</p>
        <p className="text-gray-600 max-w-lg">
          Python, Web3 y automatización. Estudiando Gestión de TI en UADE.
        </p>
      </header>

      {/* Projects */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-lg font-semibold mb-8">Proyectos</h2>
        
        <div className="space-y-12">
          {projects.map((project, i) => (
            <article key={i}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    →
                  </a>
                )}
              </div>
              <p className="text-gray-600 mb-1">{project.problem}</p>
              <p className="text-gray-600 mb-2">{project.what}</p>
              <p className="text-sm text-gray-500">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Sobre mí</h2>
        <p className="text-gray-600 max-w-lg">
          Estudiando LIC en Gestión de Tecnología de la Información (UADE). 
          Autodidacta. Busco mi primera experiencia profesional en tech.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-lg font-semibold mb-6">Skills</h2>
        
        <div className="grid grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="text-sm text-gray-500 mb-2">{category}</p>
              <ul className="space-y-1">
                {items.map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Contacto</h2>
        <div className="flex gap-6">
          <a href="https://github.com/nachopalmeri" className="text-gray-600 hover:text-gray-900">GitHub</a>
          <a href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
          <a href="tel:+5491155090832" className="text-gray-600 hover:text-gray-900">+54 9 11 5509-0832</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-8 text-sm text-gray-400">
        © 2024 Ignacio Palmeri
      </footer>
    </div>
  );
}
