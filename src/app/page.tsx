const projects = [
  {
    title: "PolyTools",
    problem: "Traders sin herramientas de análisis para mercados predictivos.",
    solution: "Suite de análisis con Python + APIs de Polymarket.",
    stack: "Python, Polymarket API",
    link: "https://polytools-omega.vercel.app/",
    learn: "Integración compleja de APIs financieras.",
  },
  {
    title: "Wallet Tracker",
    problem: "Seguimiento manual de wallets de traders.",
    solution: "Bot de Telegram con alertas en tiempo real.",
    stack: "Python, Telegram Bot API",
    learn: "Automatización de monitoreo blockchain.",
  },
  {
    title: "DApp Registro",
    problem: "Falta de verificabilidad en registros.",
    solution: "Smart contract para registros inmutables en Base.",
    stack: "Solidity, Web3.py, Base",
    learn: "DeFi y contratos inteligentes.",
  },
  {
    title: "Landing Pages",
    problem: "Negocios sin presencia web profesional.",
    solution: "Sitios web rápidos y funcionales.",
    stack: "JavaScript, HTML/CSS",
    learn: "UX directo y priorización.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="max-w-2xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-semibold mb-2">Ignacio Palmeri</h1>
        <p className="text-lg text-gray-600 mb-4">Backend Developer</p>
        <p className="text-gray-600">
          Python, Web3, automatización. Construyo herramientas que resuelven problemas reales.
        </p>
      </header>

      <section className="max-w-2xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-base font-semibold mb-8">Proyectos</h2>
        
        <div className="space-y-10">
          {projects.map((project, i) => (
            <article key={i}>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-medium">{project.title}</h3>
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
              <p className="text-gray-600 text-sm mb-1">{project.problem}</p>
              <p className="text-gray-600 text-sm mb-1">{project.solution}</p>
              <p className="text-gray-500 text-sm mb-1">{project.learn}</p>
              <p className="text-gray-400 text-xs">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-base font-semibold mb-4">Sobre mí</h2>
        <p className="text-gray-600 text-sm">
          Estudiante de Gestión de TI en UADE. Autodidacta. Busco primera experiencia 
          profesional donde pueda aportar y seguir creciendo.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-base font-semibold mb-4">Contacto</h2>
        <div className="flex gap-6 text-sm">
          <a href="https://github.com/nachopalmeri" className="text-gray-600 hover:text-gray-900">GitHub</a>
          <a href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
          <span className="text-gray-600">nachopalmeri@gmail.com</span>
        </div>
      </section>

      <footer className="max-w-2xl mx-auto px-6 py-8 text-xs text-gray-400">
        Buenos Aires, Argentina
      </footer>
    </div>
  );
}
