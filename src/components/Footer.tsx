export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[#E5E5E5]">
      <div className="max-w-[1024px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6B6B6B]">
        <p>© {currentYear} Juan Pérez. Todos los derechos reservados.</p>
        <p>Hecho con Next.js y Tailwind CSS</p>
      </div>
    </footer>
  );
}
