"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "<1s",
    label: "Carregamento Rápido"
  },
  {
    value: "100",
    label: "Score do Lighthouse"
  },
  {
    value: "99.9%",
    label: "Disponibilidade"
  }
]

export function Stats() {
  return (
    <section className="relative py-32 border-t border-white/5 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Padrões</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Corporativo por Padrão
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 lg:p-12 text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
                {stat.value}
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
