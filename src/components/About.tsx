export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#F5F5F5]">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-8">Sobre mí</h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="w-32 h-32 bg-[#E5E5E5] rounded-full flex items-center justify-center text-[#6B6B6B]">
              <span className="text-4xl font-semibold">JP</span>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 text-[#6B6B6B] leading-relaxed">
            <p>
              Estoy dando mis primeros pasos en el desarrollo web. Completé mi formación 
              en desarrollo frontend y actualmente busco mi primera experiencia profesional en tecnología.
            </p>
            <p>
              Me especializo en crear interfaces modernas con React y Next.js. 
              Valoro el código limpio, las soluciones simples y el trabajo en equipo.
            </p>
            <p>
              Tengo 19 años y estoy motivado por aprender y crecer en un entorno profesional.
              Fuera de la tecnología, me interesa la música y los videojuegos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
