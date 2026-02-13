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
];

const externalLinks = [
  { label: "GitHub", href: "https://github.com/nachopalmeri" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ignacio-palmeri-64035b378/" },
];

const floatingTags = [
  { label: "Python", x: "75%", y: "25%", delay: 0 },
  { label: "Web3", x: "82%", y: "35%", delay: 0.5 },
  { label: "APIs", x: "70%", y: "45%", delay: 1 },
  { label: "Automation", x: "85%", y: "55%", delay: 1.5 },
];

const floatingCards = [
  { title: "PolyTools", subtitle: "Trading Suite", x: "78%", y: "65%", delay: 0.3 },
  { title: "Wallet Tracker", subtitle: "Bot Alert", x: "68%", y: "75%", delay: 0.8 },
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F14]/60 border-b border-white/[0.06]"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16 h-14 flex items-center justify-between">
        <a href="#" className="text-[#F9FAFB] text-sm font-medium">
          IP
        </a>
        
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[#9CA3AF] hover:text-[#F9FAFB] text-xs uppercase tracking-[0.2em] transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#22C55E] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <div className="w-[1px] h-3 bg-[#374151]" />
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-[#9CA3AF] hover:text-[#F9FAFB] text-xs uppercase tracking-[0.2em] transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function FloatingTag({ label, style, delay }: { label: string; style: React.CSSProperties; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay + 0.5 
        }
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      style={style}
      className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#111827]/80 backdrop-blur-md border border-[#1F2937]/50 rounded-full cursor-default"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]/60" />
      <span className="text-[11px] text-[#9CA3AF] font-mono uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

function FloatingCard({ title, subtitle, style, delay }: { title: string; subtitle: string; style: React.CSSProperties; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={style}
      className="absolute hidden lg:block p-4 bg-[#111827]/60 backdrop-blur-md border border-[#1F2937]/50 rounded-lg cursor-pointer hover:border-[#374151]/80 hover:shadow-lg hover:shadow-[#22C55E]/5 transition-all duration-300"
    >
      <p className="text-[12px] text-[#F9FAFB] font-medium mb-0.5">{title}</p>
      <p className="text-[10px] text-[#6B7280] font-mono">{subtitle}</p>
    </motion.div>
  );
}

function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.5], [0.12, 0.04]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden flex items-center">
      {/* Layer 1: Background with radial gradient */}
      <div className="absolute inset-0 bg-[#0B0F14]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#111827_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#1F2937_0%,_transparent_50%)]" />
      </div>
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Layer 3: Ghost text with parallax */}
      <motion.div 
        style={{ y: backgroundY, opacity: ghostOpacity }}
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        <span className="absolute top-[8%] right-[-5%] text-[22vw] font-bold text-[#6B7280] tracking-tighter leading-none">
          DEV
        </span>
        <span className="absolute top-[38%] right-[5%] text-[14vw] font-bold text-[#6B7280] tracking-tighter leading-none">
          BACKEND
        </span>
        <span className="absolute bottom-[15%] right-[0%] text-[12vw] font-bold text-[#6B7280] tracking-tighter leading-none">
          SYSTEMS
        </span>
      </motion.div>
      
      {/* Layer 4: Floating elements */}
      {floatingTags.map((tag) => (
        <FloatingTag 
          key={tag.label} 
          label={tag.label} 
          style={{ left: tag.x, top: tag.y }} 
          delay={tag.delay} 
        />
      ))}
      
      {floatingCards.map((card) => (
        <FloatingCard 
          key={card.title} 
          title={card.title} 
          subtitle={card.subtitle}
          style={{ left: card.x, top: card.y }} 
          delay={card.delay} 
        />
      ))}
      
      {/* Layer 2: Main content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16 w-full py-24"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p 
            variants={itemVariants}
            className="text-[#6B7280] text-sm mb-8 font-mono tracking-wide flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-[#374151]" />
            Buenos Aires, Argentina
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-[88px] font-semibold leading-[0.9] tracking-tight text-[#F9FAFB] mb-8"
          >
            Ignacio
            <br />
            Palmeri
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-2xl sm:text-3xl text-[#9CA3AF] font-medium mb-8 max-w-lg"
          >
            Backend Developer
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-[#6B7280] text-lg leading-relaxed max-w-xl mb-12"
          >
            Python, Web3, automatización. 
            <br />
            Construyo herramientas que resuelven problemas reales.
          </motion.p>
          
          <motion.a
            variants={itemVariants}
            href="#projects"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-3 text-[#9CA3AF] hover:text-[#22C55E] text-sm transition-colors duration-200 group"
          >
            <span className="uppercase tracking-[0.2em]">Ver proyectos</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F14] to-transparent pointer-events-none z-20" />
    </section>
  );
}

function ProjectCard({ 
  title, 
  description, 
  stack, 
  link,
  featured,
  index
}: { 
  title: string; 
  description: string; 
  stack: string[]; 
  link: string | null;
  featured: boolean;
  index: number;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`group relative p-8 bg-gradient-to-br from-[#111827] to-[#0F172A] rounded-xl border border-[#1F2937] hover:border-[#374151] hover:shadow-xl hover:shadow-[#22C55E]/5 transition-all duration-300 ${featured ? 'md:col-span-2' : ''}`}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <h3 className="text-xl font-medium text-[#F9FAFB] group-hover:text-white transition-colors duration-200">
            {title}
          </h3>
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] hover:text-[#22C55E] transition-all duration-200"
            >
              <ArrowUpRight />
            </a>
          )}
        </div>
        
        <p className="text-[15px] text-[#9CA3AF] leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 text-[11px] text-[#6B7280] bg-[#1F2937]/50 rounded-full font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F9FAFB] antialiased selection:bg-[#22C55E]/30 selection:text-[#F9FAFB]">
      <Navbar />
      <Hero />

      <section id="projects" className="py-32 max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#6B7280] mb-2">Proyectos</h2>
          <p className="text-[#9CA3AF] text-sm">Herramientas construidas con código</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProject && <ProjectCard {...featuredProject} index={0} />}
          {otherProjects.map((project, idx) => (
            <ProjectCard key={project.title} {...project} index={idx + 1} featured={false} />
          ))}
        </div>
      </section>

      <section id="about" className="py-32 border-t border-[#1F2937]/50 max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#6B7280] mb-6">Sobre mí</h2>
            <p className="text-[#9CA3AF] text-lg leading-relaxed">
              Estudiante de Gestión de TI en UADE. Autodidacta. Busco primera experiencia profesional donde pueda aportar y seguir creciendo.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#6B7280] mb-6">Contacto</h2>
            <div className="flex flex-wrap gap-8">
              {externalLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-[#9CA3AF] hover:text-[#F9FAFB] text-sm transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <a 
                href="mailto:nachopalmeri@gmail.com"
                className="relative text-[#9CA3AF] hover:text-[#F9FAFB] text-sm transition-colors duration-200 group"
              >
                Email
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#22C55E] group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 border-t border-[#1F2937]/50 max-w-[1120px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <p className="text-[#374151] text-sm">
            2024 — Ignacio Palmeri
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]/50 animate-pulse" />
            <span className="text-[#374151] text-xs">Available for work</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
