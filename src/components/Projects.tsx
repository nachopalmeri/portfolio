const projects = [
  {
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas personales con persistencia local.',
    problem: 'Necesidad de organizar tareas diarias de forma simple y accesible.',
    solution: 'SPA desarrollada con React que utiliza localStorage para guardar las tareas.',
    technologies: ['React', 'TypeScript', 'CSS Modules'],
    learning: 'Manejo de estado con hooks y comprensión del ciclo de vida de componentes React.',
    code: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard que muestra el clima de múltiples ciudades en tiempo real.',
    problem: 'Consultar el clima de diferentes ciudades de manera rápida y centralizada.',
    solution: 'Aplicación que consume la API de OpenWeather para obtener datos meteorológicos.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    learning: 'Integración con APIs externas, manejo de estados de carga y error, y consumo de servicios REST.',
    code: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-8">Proyectos</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white border border-[#E5E5E5] rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-[#1A1A1A]">{project.title}</h3>
                <a
                  href={project.code}
                  className="text-sm text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  Ver código →
                </a>
              </div>
              <p className="text-[#6B6B6B] mb-4">{project.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium text-[#1A1A1A]">Problema:</span>
                  <p className="text-[#6B6B6B]">{project.problem}</p>
                </div>
                <div>
                  <span className="font-medium text-[#1A1A1A]">Solución:</span>
                  <p className="text-[#6B6B6B]">{project.solution}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-medium text-sm text-[#1A1A1A]">Tecnologías:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-[#F5F5F5] rounded-md text-[#6B6B6B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5]">
                <span className="font-medium text-sm text-[#1A1A1A]">Aprendizaje:</span>
                <p className="text-sm text-[#6B6B6B] mt-1">{project.learning}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
