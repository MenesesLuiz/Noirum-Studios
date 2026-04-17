"use client"

import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="relative py-32 lg:py-48 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1] text-balance">
            Pronto para escalar sua presença digital?
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <button className="group relative px-10 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-all duration-300 hover:bg-primary/90">
              Iniciar uma Conversa
              <span className="absolute inset-0 border border-primary/20 -m-px opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-zinc-600"
          >
            Retorno em até 24 horas
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
