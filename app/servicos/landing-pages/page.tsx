"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { 
  Zap, Target, MousePointerClick, TrendingUp, 
  BarChart3, SplitSquareHorizontal, CheckCircle2, ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function LandingPagesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Animações para a seção de construção
  const step1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [0, 1, 0])
  const step2Opacity = useTransform(scrollYProgress, [0.25, 0.45, 0.6], [0, 1, 0])
  const step3Opacity = useTransform(scrollYProgress, [0.5, 0.7, 0.85], [0, 1, 0])
  const step4Opacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1])

  return (
    <div className="bg-background min-h-screen selection:bg-cyan-500/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-zinc-950 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-background to-background -z-10" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8">
              ← Voltar para Home
            </Link>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-cyan-500" />
              <span className="text-sm uppercase tracking-[0.2em] text-zinc-400 font-medium">Serviços</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-8 leading-tight">
              Máquinas de<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                Alta Conversão
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
              Landing pages estrategicamente desenhadas não vendem apenas um produto, elas vendem a solução exata que o seu cliente procura. Transforme cliques em receita com engenharia e neurociência aplicadas ao design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Storytelling Scroll */}
      <section ref={containerRef} className="relative bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
            
            {/* Lado Esquerdo - Textos explicativos */}
            <div className="py-32 lg:py-48 space-y-32 lg:space-y-48">
              
              <div className="max-w-xl">
                 <h2 className="text-3xl font-medium tracking-tight mb-4 text-white">
                   O que engaja?<br />
                   <span className="text-zinc-500">A Anatomia de uma Venda</span>
                 </h2>
                 <p className="text-zinc-400 text-lg leading-relaxed">
                   Entenda o que é uma landing page e por que ela é o mecanismo mais eficiente para extrair ROI (Retorno sobre Investimento) de qualquer campanha de marketing.
                 </p>
              </div>

              <div className="max-w-xl">
                <span className="text-cyan-500 font-mono text-xl mb-4 block">01</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Objetivo Único</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Uma Landing Page não é um site completo para passear. É uma página ultra focada com uma única missão: convencer o usuário a tomar uma ação exata, seja contatar sua equipe, comprar um produto ou gerar um lead capturando dados.
                </p>
              </div>

              <div className="max-w-xl">
                <span className="text-cyan-500 font-mono text-xl mb-4 block">02</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Psicologia de Consumo</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  O Copywriting (textos persuasivos) dita o ritmo. Cada título, quebra de objeção e botão é posicionado usando gatilhos mentais para atrair urgência e fechar a venda de forma que pareça a escolha óbvia.
                </p>
              </div>

              <div className="max-w-xl">
                <span className="text-cyan-500 font-mono text-xl mb-4 block">03</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Design sem atrito</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Uma interface sem "rotas de fuga". Focamos puramente nos princípios visuais orientados a dados. Nós guiamos seus olhos até a oferta removendo elementos de distração, menu e links externos.
                </p>
              </div>

              <div className="max-w-xl pb-[40vh] lg:pb-[60vh]">
                <span className="text-cyan-500 font-mono text-xl mb-4 block">04</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Para que ter uma? Crescimento</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Se você injeta capital em tráfego pago (Instagram Ads, LinkedIn, Google) e direciona para a home de um site genérico, você queima dinheiro. Landing Pages reduzem o custo de aquisição inflando drasticamente sua taxa de vitória comercial.
                </p>
              </div>

            </div>

            {/* Lado Direito - Visuais Fixos */}
            <div className="hidden lg:flex sticky top-0 h-screen w-full items-center justify-center pointer-events-none perspective-[1000px]">
              <div className="relative w-full max-w-lg aspect-square">
                
                {/* Step 1 Visual */}
                <motion.div 
                  style={{ opacity: step1Opacity }} 
                  className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500"
                >
                  <div className="w-full h-full border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-6 bg-zinc-900/20 backdrop-blur-sm">
                    <Target className="w-16 h-16 text-cyan-500" />
                    <div className="text-center px-8">
                       <h4 className="text-xl text-white font-medium mb-2">Foco Absoluto</h4>
                       <p className="text-zinc-500 text-sm">Sem distrações, sem menu, 1 foco.</p>
                       <div className="mt-8 flex justify-center">
                         <div className="px-6 py-3 bg-cyan-500 text-zinc-950 font-bold rounded-sm animate-pulse flex items-center gap-2">
                           <MousePointerClick className="w-4 h-4" /> COMPRAR AGORA
                         </div>
                       </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2 Visual */}
                <motion.div 
                  style={{ opacity: step2Opacity }} 
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  <div className="w-full h-full border border-zinc-800 rounded-2xl overflow-hidden bg-background shadow-2xl flex flex-col">
                    <div className="h-12 border-b border-white/5 flex items-center px-6 gap-4 bg-zinc-900/50">
                      <SplitSquareHorizontal className="w-5 h-5 text-cyan-500" />
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">A/B Testing</span>
                    </div>
                    <div className="p-8 space-y-6 flex-1 bg-gradient-to-b from-zinc-900/20 to-transparent flex flex-col justify-center">
                       <div className="flex flex-col gap-6 w-full">
                         <div className="p-4 border border-zinc-800 rounded-lg flex items-center justify-between">
                            <span className="text-sm text-zinc-400">Variante A</span>
                            <div className="px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded border border-red-500/20">Taxa: 2.4%</div>
                         </div>
                         <div className="p-6 border-2 border-cyan-500/50 bg-cyan-500/5 rounded-lg flex items-center justify-between relative shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)]">
                            <span className="text-sm text-white font-medium">Variante B (Vencedora)</span>
                            <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded border border-cyan-500/50">Taxa: 11.8%</div>
                         </div>
                       </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 Visual */}
                <motion.div 
                  style={{ opacity: step3Opacity }} 
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  <div className="w-full h-full border border-white/10 rounded-2xl bg-[#0a0a0a] flex flex-col overflow-hidden shadow-2xl shadow-cyan-900/10">
                     <div className="flex-1 flex flex-col items-center justify-center p-8 gap-8 relative">
                       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
                       <div className="text-center z-10">
                         <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6" />
                         <h3 className="text-3xl font-bold text-white mb-2 line-through decoration-zinc-700 decoration-2">De: R$ 499</h3>
                         <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-200">Por: R$ 97</h3>
                         <p className="mt-4 text-xs tracking-[0.2em] text-red-400 uppercase font-bold animate-pulse">Apenas 10 vagas</p>
                       </div>
                     </div>
                  </div>
                </motion.div>

                {/* Step 4 Visual */}
                <motion.div 
                  style={{ opacity: step4Opacity }} 
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  <div className="w-full h-full border border-zinc-800 rounded-2xl bg-zinc-950 flex flex-col items-center justify-center p-8 text-center gap-6 shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)] ring-1 ring-white/5">
                    <div className="relative">
                      <TrendingUp className="w-20 h-20 text-cyan-400 opacity-80" />
                      <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-white mb-2">Escala Máxima</h3>
                      <p className="text-zinc-500 text-sm">CAC reduzido, Lucro aumentado</p>
                    </div>
                    <div className="w-full space-y-3 mt-4 text-left">
                      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/5 pb-2">
                        <span>Custo por Lead (CPL)</span>
                        <span className="text-green-400 font-mono">- 43%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/5 pb-2">
                        <span>Volume de Vendas Mensal</span>
                        <span className="text-cyan-400 font-mono">+ 215%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-zinc-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Cansado de perder vendas na última etapa?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Nós mapeamos o comportamento do seu lead para estruturar a armadilha de conversões ideal para alavancar seu produto ou serviço.
          </p>
          <button className="h-14 bg-white text-zinc-950 font-medium px-8 flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors mx-auto rounded-sm group">
            Quero mais vendas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}