"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Planejamento Estratégico",
    description: "Imersão total no seu cenário de mercado e objetivos de negócio. Mapeamos a experiência ideal do seu cliente antes de iniciarmos a concepção visual e técnica."
  },
  {
    number: "02",
    title: "Construção Exclusiva",
    description: "Desenvolvimento de uma base sólida e sob medida para a sua marca. Focamos em entregar um ambiente digital premium, altamente estável e blindado contra falhas."
  },
  {
    number: "03",
    title: "Retenção e Conversão",
    description: "Ajustamos cada detalhe tecnológico para que a plataforma carregue quase instantaneamente. Uma experiência fluida e sem lentidão é essencial para reter a atenção do cliente e gerar vendas."
  },
  {
    number: "04",
    title: "Lançamento e Crescimento",
    description: "Sua plataforma é entregue perfeitamente polida e estruturada para absorver alto volume de acessos. Ela nasce robusta e preparada para acompanhar a expansão da sua empresa desde o primeiro dia."
  }
]

export function Process() {
  return (
    <section className="relative py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Metodologia</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Precisão em Cada Fase
          </h2>
          <p className="mt-4 text-zinc-500 leading-relaxed">
            Um fluxo de trabalho técnico e controlado, desenhado para arquitetura limpa e ciência de conversão.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800" />
          
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 py-12 border-b border-white/5 last:border-b-0"
              >
                {/* Number */}
                <div className="relative">
                  <span className="text-4xl lg:text-5xl font-light text-zinc-800 group-hover:text-zinc-600 transition-colors duration-500 tabular-nums">
                    {step.number}
                  </span>
                  {/* Dot on the line */}
                  <div className="hidden lg:block absolute left-[60px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 border-2 border-background group-hover:bg-cyan-500/50 transition-colors duration-500" />
                </div>
                
                {/* Content */}
                <div className="lg:pl-12">
                  <h3 className="text-xl font-medium text-foreground tracking-tight group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-zinc-500 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
