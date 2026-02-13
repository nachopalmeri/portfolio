export default function Contact() {
  const contactLinks = [
    {
      label: "Email",
      href: "mailto:juanperez@email.com",
      description: "juanperez@email.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/juanperez",
      description: "github.com/juanperez",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/juanperez",
      description: "linkedin.com/in/juanperez",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-[1024px] mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-4">Contacto</h2>
        <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">
          Estoy buscando mi primera oportunidad profesional. 
          Si te parece que puedo aportar en tu equipo, contactame.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#E5E5E5] rounded-md text-sm text-[#1A1A1A] hover:bg-[#F5F5F5] hover:border-[#2563EB] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
