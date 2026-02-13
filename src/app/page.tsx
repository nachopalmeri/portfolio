'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "PolyTools",
    description: "Suite de análisis para traders con integración de APIs financieras complejas.",
    stack: ["Python", "Polymarket API"],
    link: "https://polytools-omega.vercel.app/",
    featured: true,
  },
  {
    title: "Wallet Tracker",
    description: "Bot de Telegram con alertas en tiempo real sobre transacciones.",
    stack: ["Python", "Telegram Bot API"],
    link: null,
    featured: false,
  },
  {
    title: "DApp Registro",
    description: "Smart contract en Base Network para registros inmutables.",
    stack: ["Solidity", "Web3.py", "Base"],
    link: null,
    featured: false,
  },
  {
    title: "Landing Pages",
    description: "Sitios web profesionales con UX directo y enfoque en conversión.",
    stack: ["JavaScript", "HTML/CSS"],
    link: null,
    featured: false,
  },
];

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub", href: "https://github.com/nachopalmeri", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ignacio-palmeri-64035b378/", external: true },
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-14 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-white/[0.04]"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16 h-full flex items-center justify-between">
        <a href="#" className="text-white text-sm font-medium tracking-tight">
          IP
        </a>
        <div className="flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15, delay: 0.05 + i * 0.03 }}
              className="text-[#666666] hover:text-white text-sm transition-colors duration-150"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function FloatingCard({ title, position, delay }: { title: string; position: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.12 } }}
      className={`absolute ${position} hidden lg:block`}
    >
      <div className="bg-[#111111]/90 backdrop-blur-sm border border-[#222222] rounded-lg px-4 py-3">
        <p className="text-[12px] text-[#777777] font-mono">{title}</p>
      </div>
    </motion.div>
  );
}

function HeroBottomBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute bottom-8 left-0 right-0 z-20"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="inline-flex items-center gap-6 bg-[#111111]/80 backdrop-blur-sm border border-[#222222] rounded-full px-5 py-2.5">
          <span className="text-[12px] text-[#888888]">Ignacio Palmeri</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
          <span className="text-[12px] text-[#555555]">Disponible</span>
          <span className="w-1 h-1 rounded-full bg-[#333333]" />
          <span className="text-[12px] text-[#555555] font-mono">UTC-3</span>
          <span className="w-1 h-1 rounded-full bg-[#333333]" />
          <span className="text-[12px] text-[#444444] font-mono">Python • Web3</span>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden flex items-center pt-14">
      {/* Layer 1: Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0c0c0c] to-[#0a0a0a]" />
      
      {/* Layer 3: Secondary text - parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 flex items-center justify-end pr-4 md:pr-12 lg:pr-20 pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-bold text-[#0f0f0f] tracking-tighter leading-none">
          DEV
        </span>
      </motion.div>
      
      {/* Layer 4: Floating elements */}
      <FloatingCard title="PolyTools" position="top-[25%] right-[8%]" delay={0.5} />
      <FloatingCard title="Web3.py" position="bottom-[35%] right-[12%]" delay={0.55} />
      <FloatingCard title="Python" position="top-[40%] right-[5%]" delay={0.6} />
      
      {/* Layer 2: Main content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16 w-full"
      >
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#444444] text-sm mb-6 font-mono tracking-wide"
          >
            Buenos Aires, Argentina
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-6xl sm:text-7xl lg:text-[82px] font-semibold leading-[0.92] tracking-tight text-white mb-8"
          >
            Ignacio
            <br />
            Palmeri
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl sm:text-2xl text-[#666666] font-medium mb-6 max-w-lg"
          >
            Backend Developer
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#555555] text-lg leading-relaxed max-w-xl mb-10"
          >
            Python, Web3, automatización. 
            <br />
            Construyo herramientas que resuelven problemas reales.
          </motion.p>
          
          {/* CTA */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ x: 3, transition: { duration: 0.12 } }}
            className="inline-flex items-center gap-2 text-[#777777] hover:text-emerald-500 text-sm transition-colors duration-150 group"
          >
            <span>Ver proyectos</span>
            <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </motion.a>
        </div>
      </motion.div>
      
      {/* Bottom bar */}
      <HeroBottomBar />
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />
    </section>
  );
}

function ProjectCard({ 
  title, 
  description, 
  stack, 
  link,
  featured 
}: { 
  title: string; 
  description: string; 
  stack: string[]; 
  link: string | null;
  featured: boolean;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group p-8 bg-[#111111] rounded-xl border border-[#1a1a1a] hover:border-[#333333] transition-all duration-150 ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-medium text-[#e8e8e8] group-hover:text-white transition-colors duration-150">
          {title}
        </h3>
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555555] group-hover:text-emerald-500 transition-all duration-150"
          >
            <ArrowUpRight />
          </a>
        )}
      </div>
      
      <p className="text-[15px] text-[#888888] leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-3">
        {stack.map((tech) => (
          <span key={tech} className="text-[13px] text-[#444444]">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8] antialiased selection:bg-emerald-500/20">
      <Navbar />
      <Hero />

      <section id="projects" className="py-32 max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="text-sm uppercase tracking-[0.25em] text-[#444444] mb-16"
        >
          Proyectos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProject && <ProjectCard {...featuredProject} />}
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} {...project} featured={false} />
          ))}
        </div>
      </section>

      <section id="about" className="py-32 border-t border-[#151515] max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="text-sm uppercase tracking-[0.25em] text-[#444444] mb-12"
        >
          Sobre mí
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.18, delay: 0.05 }}
          className="max-w-[640px]"
        >
          <p className="text-base text-[#777777] leading-relaxed">
            Estudiante de Gestión de TI en UADE. Autodidacta. Busco primera experiencia profesional donde pueda aportar y seguir creciendo.
          </p>
        </motion.div>
      </section>

      <section id="contact" className="py-32 border-t border-[#151515] max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="text-sm uppercase tracking-[0.25em] text-[#444444] mb-12"
        >
          Contacto
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.18, delay: 0.05 }}
          className="flex flex-wrap gap-8"
        >
          <a href="https://github.com/nachopalmeri" target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-emerald-500 transition-colors duration-150">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ignacio-palmeri-64035b378/" target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-emerald-500 transition-colors duration-150">
            LinkedIn
          </a>
          <a href="mailto:nachopalmeri@gmail.com" className="text-[#555555] hover:text-emerald-500 transition-colors duration-150">
            Email
          </a>
        </motion.div>
      </section>

      <footer className="py-16 border-t border-[#151515] max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        <p className="text-[#333333] text-sm">
          2024 — Ignacio Palmeri
        </p>
      </footer>
    </div>
  );
}
