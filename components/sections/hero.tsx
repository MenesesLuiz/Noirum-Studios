"use client"

import { motion } from "framer-motion"
import { LightBeamsBackground } from "@/components/light-beams"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LightBeamsBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1] text-balance"
          >
            Desenvolvimento Web para a Elite Digital.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            A Norium Studios constrói sites institucionais de alta performance e arquiteturas escaláveis. Integramos IA e segurança de nível corporativo em cada solução.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-all duration-300 hover:bg-primary/90">
              Iniciar Projeto
              <span className="absolute inset-0 border border-primary/20 -m-px opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="px-8 py-3 border border-white/10 text-foreground font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/5 hover:border-white/20">
              Ver Arquitetura
            </button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
