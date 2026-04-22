"use client"

import { motion } from "framer-motion"
import { Globe, Zap, Shield, Cpu } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Plataformas Web Institucionais",
    description: "Plataformas web de nível corporativo construídas para escabilidade, segurança e performance. Projetadas para representar instituições globais.",
    href: "/servicos/site-institucional"
  },
  {
    icon: Zap,
    title: "Landing Pages de Alta Conversão",
    description: "Páginas estrategicamente projetadas para converter. Cada elemento otimizado por meio de princípios de design orientados a dados.",
    href: "/servicos/landing-pages"
  },
  {
    icon: Shield,
    title: "Sistemas Web Seguros e Confiáveis",
    description: "Desenvolvimento pautado nas melhores práticas da web. Arquiteturas blindadas contra as vulnerabilidades mais comuns, protegendo sua presença digital."
  },
  {
    icon: Cpu,
    title: "Desenvolvimento Potencializado por IA",
    description: "Integramos ferramentas avançadas de Inteligência Artificial ao nosso fluxo de trabalho, garantindo entregas mais rápidas, código extremante otimizado e alto desempenho."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export function Services() {
  return (
    <section className="relative py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Serviços</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            O Que Nós Construímos
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800"
        >
          {services.map((service, index) => {
            const CardContent = (
              <motion.div
                variants={itemVariants}
                className="group relative bg-background p-8 lg:p-12 transition-colors duration-500 hover:bg-zinc-950 h-full"
              >
                {/* ... */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                </div>
                
                <service.icon className="w-6 h-6 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300" strokeWidth={1.5} />
                
                <h3 className="mt-6 text-xl font-medium text-foreground tracking-tight">
                  {service.title}
                </h3>
                
                <p className="mt-4 text-zinc-500 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {service.href && (
                  <div className="mt-8 flex items-center text-xs uppercase tracking-[0.15em] text-zinc-400 group-hover:text-cyan-400 font-semibold transition-colors duration-300">
                    <span>Saiba mais</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );

            return service.href ? (
              <Link key={service.title} href={service.href} className="block">
                {CardContent}
              </Link>
            ) : (
              <div key={service.title} className="block cursor-default">
                {CardContent}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}
