export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-[1024px] mx-auto">
        <p className="text-[#6B6B6B] text-sm mb-4">Hola, soy</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
          Juan Pérez
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#2563EB] font-semibold mb-6">
          Desarrollador Frontend
        </h2>
        <p className="text-[#6B6B6B] text-lg max-w-xl mb-8 leading-relaxed">
          Busco mi primera oportunidad profesional en tecnología. 
          Me especializo en crear experiencias web modernas, accesibles y performant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-block bg-[#2563EB] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-block border border-[#E5E5E5] text-[#1A1A1A] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#F5F5F5] transition-colors duration-200"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
