"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section className="relative py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Sobre</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-tight">
              Projetos que exigem excelência.
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-zinc-400 leading-relaxed font-light">
              A Noirum Studios é uma unidade de engenharia especializada, dedicada a marcas que exigem qualidade, velocidade e elegância arquitetônica sem concessões.
            </p>
            <p className="mt-6 text-zinc-500 leading-relaxed">
              Nossa equipe opera na intersecção entre precisão em design e excelência em engenharia. Firmamos parceria com instituições, empresas e fundadores que compreendem que presença digital não é apenas recurso — é vantagem competitiva.
            </p>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl font-light text-foreground">20+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-600">Projetos Entregues</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-2xl font-light text-foreground">1+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-600">Anos de Experiência</div>
              </div>
            </div>
          </motion.div>

          {/* Abstract geometric element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Grid pattern */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {Array.from({ length: 64 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.01 }}
                    className="border border-zinc-900 hover:bg-zinc-900/50 transition-colors duration-300"
                  />
                ))}
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-24 h-24 border border-zinc-700 bg-zinc-900/30"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-cyan-500/20 bg-cyan-500/5"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/10 rotate-45" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
