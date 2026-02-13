export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#EDEDED] font-sans">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Navbar */}
        <nav className="py-6 flex items-center justify-between border-b border-[#1F1F1F]">
          <span className="text-sm font-medium text-[#EDEDED]">IP</span>
          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm text-[#333333] hover:text-[#EDEDED] transition-colors duration-200">Work</a>
            <a href="#stack" className="text-sm text-[#333333] hover:text-[#EDEDED] transition-colors duration-200">Stack</a>
            <a href="#contact" className="text-sm text-[#333333] hover:text-[#EDEDED] transition-colors duration-200">Contact</a>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 md:py-32">
          <p className="text-[#333333] text-xs uppercase tracking-widest mb-4">Backend Developer</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
            Ignacio
            <br />
            Palmeri
          </h1>
          <p className="text-[#333333] text-lg max-w-md leading-relaxed">
            Construyo herramientas con Python, Web3 y automatización.
          </p>
        </section>

        {/* Bento Grid */}
        <section id="work" className="py-16">
          <h2 className="text-xs uppercase tracking-widest text-[#333333] mb-8">Proyectos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* FulboTracker Pro - 7 columns */}
            <div className="md:col-span-7 md:row-span-2 h-80 md:h-auto min-h-[320px]">
              <a href="https://fulbotracker.vercel.app/" target="_blank" rel="noopener noreferrer" className="block h-full p-6 bg-[#0A0A0A] rounded-xl border border-[#1F1F1F] hover:border-[#333333] transition-all duration-300">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p className="text-[#333333] text-[10px] uppercase tracking-wider mb-2">Gestión deportiva y analítica financiera</p>
                    <h3 className="text-xl font-bold mb-2 text-[#EDEDED]">FulboTracker Pro</h3>
                    <p className="text-[#333333] text-sm leading-relaxed">Dashboard de estadísticas, cálculo de costos y persistencia de datos.</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className="px-2 py-0.5 text-[10px] text-[#333333] bg-[#141414] rounded">Next.js</span>
                    <span className="px-2 py-0.5 text-[10px] text-[#333333] bg-[#141414] rounded">Vercel</span>
                    <span className="px-2 py-0.5 text-[10px] text-[#333333] bg-[#141414] rounded">Tailwind</span>
                  </div>
                </div>
              </a>
            </div>

            {/* PolyTools - 5 columns */}
            <div className="md:col-span-5 md:row-span-2 h-80 md:h-auto min-h-[320px]">
              <div className="h-full p-6 bg-[#0A0A0A] rounded-xl border border-[#1F1F1F]">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#EDEDED]">PolyTools</h3>
                    <p className="text-[#333333] text-sm leading-relaxed">Automatización para Polymarket y análisis de mercados.</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className="px-2 py-0.5 text-[10px] text-[#333333] bg-[#141414] rounded">Python</span>
                    <span className="px-2 py-0.5 text-[10px] text-[#333333] bg-[#141414] rounded">APIs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Automation - 6 columns */}
            <div className="md:col-span-6 h-48">
              <div className="h-full p-6 bg-[#0A0A0A] rounded-xl border border-[#1F1F1F]">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#EDEDED]">Backend Automation</h3>
                    <p className="text-[#333333] text-sm leading-relaxed">Scripts en Python para optimización de tareas.</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className="px-2 py-0.5 text-[10px] text-[#333333] bg-[#141414] rounded">Python</span>
                    <span className="px-2 py-0.5 text-[10px] text-[#333333] bg-[#141414] rounded">Selenium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DApp Registro - 6 columns */}
            <div className="md:col-span-6 h-48">
              <div className="h-full p-6 bg-[#0A0A0A] rounded-xl border border-[#1F1F1F]">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#EDEDED]">DApp Registro</h3>
                    <p className="text-[#333333] text-sm leading-relaxed">Smart contracts en Base Network.</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className="px-2 py-0.5 text-[10px] text-[#333333] bg-[#141414] rounded">Solidity</span>
                    <span className="px-2 py-0.5 text-[10px] text-[#333333] bg-[#141414] rounded">Web3.py</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="py-16 border-t border-[#1F1F1F]">
          <h2 className="text-xs uppercase tracking-widest text-[#333333] mb-6">Stack</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-xs text-[#333333] bg-[#0A0A0A] rounded-full border border-[#1F1F1F]">Python</span>
            <span className="px-3 py-1.5 text-xs text-[#333333] bg-[#0A0A0A] rounded-full border border-[#1F1F1F]">Next.js</span>
            <span className="px-3 py-1.5 text-xs text-[#333333] bg-[#0A0A0A] rounded-full border border-[#1F1F1F]">Solidity</span>
            <span className="px-3 py-1.5 text-xs text-[#333333] bg-[#0A0A0A] rounded-full border border-[#1F1F1F]">Web3.py</span>
            <span className="px-3 py-1.5 text-xs text-[#333333] bg-[#0A0A0A] rounded-full border border-[#1F1F1F]">TypeScript</span>
            <span className="px-3 py-1.5 text-xs text-[#333333] bg-[#0A0A0A] rounded-full border border-[#1F1F1F]">Tailwind</span>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 border-t border-[#1F1F1F]">
          <h2 className="text-xs uppercase tracking-widest text-[#333333] mb-6">Contacto</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <a href="mailto:nachopalmeri@gmail.com" className="text-[#333333] hover:text-[#EDEDED] text-sm transition-colors duration-200">Email</a>
              <a href="https://github.com/nachopalmeri" target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-[#EDEDED] text-sm transition-colors duration-200">GitHub</a>
              <a href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/" target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-[#EDEDED] text-sm transition-colors duration-200">LinkedIn</a>
            </div>
            <a href="mailto:nachopalmeri@gmail.com" className="inline-flex items-center gap-2 text-[#EDEDED] hover:text-white text-sm mt-4 group">
              <span>Hablemos</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">-&gt;</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
