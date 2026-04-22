"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { 
  Globe, Shield, Zap, Search, LayoutTemplate, Code2, 
  PaintBucket, ArrowRight, CheckCircle2, BarChart3
} from "lucide-react"
import Link from "next/link"

export default function SiteInstitucionalPage() {
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
              <Globe className="w-5 h-5 text-cyan-500" />
              <span className="text-sm uppercase tracking-[0.2em] text-zinc-400 font-medium">Serviços</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-8 leading-tight">
              A base digital da sua <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                autoridade corporativa
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
              Um site institucional não é apenas um cartão de visitas digital. É o epicentro da sua marca, projetado para transmitir confiança, engajar investidores e clientes, e operar com extrema performance global.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Como Construímos - Scroll Storytelling */}
      <section ref={containerRef} className="relative bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
            
            {/* Lado Esquerdo - Textos explicativos */}
            <div className="py-32 lg:py-48 space-y-32 lg:space-y-48">
              
              <div className="max-w-xl">
                 <h2 className="text-3xl font-medium tracking-tight mb-4 text-white">
                   O Poder do Digital<br />
                   <span className="text-zinc-500">Presença Sólida na Web</span>
                 </h2>
                 <p className="text-zinc-400 text-lg leading-relaxed">
                   Entenda o que é um site institucional, quais elementos essenciais ele possui e como ele se torna o principal ativo da sua empresa hoje.
                 </p>
              </div>

              <div className="max-w-xl">
                <span className="text-cyan-500 font-mono text-xl mb-4 block">01</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-white">O Cartão de Visitas Global</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Mais do que uma página, o site institucional é a sede oficial da sua empresa na internet. Ele apresenta de forma profissional e confiável a sua identidade, história, missão e os valores fundamentais para visitantes de qualquer lugar do mundo.
                </p>
              </div>

              <div className="max-w-xl">
                <span className="text-cyan-500 font-mono text-xl mb-4 block">02</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Estrutura e Organização</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Ele possui painéis e seções dedicadas para seus serviços, produtos, prêmios ou estrutura corporativa. Uma navegação inteligente, clara e limpa guia o usuário pelos diferenciais competitivos da marca, entregando exatamente a informação que ele procura.
                </p>
              </div>

              <div className="max-w-xl">
                <span className="text-cyan-500 font-mono text-xl mb-4 block">03</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Tecnologia Embarcada</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Sites de alto nível são robustos. Eles têm SEO otimizado para serem encontrados facilmente no Google, painéis analíticos para ver exatamente quem o acessa, design responsivo (celulares) e proteção rígida contra ataques, vazamentos e lentidão.
                </p>
              </div>

              <div className="max-w-xl pb-[40vh] lg:pb-[60vh]">
                <span className="text-cyan-500 font-mono text-xl mb-4 block">04</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Por que ter um? Vantagem e Confiança</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Ter um site demonstra seriedade e validade imediata. Sem ele, você perde espaço para a concorrência que transmite mais segurança no digital. O site atrai parceiros, prova sua expertise e converte atenção e tráfego em fechamento de negócios.
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
                    <LayoutTemplate className="w-16 h-16 text-zinc-600" />
                    <div className="space-y-4 w-3/4">
                      <div className="h-4 w-full bg-zinc-800/50 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-zinc-800/50 rounded animate-pulse" />
                      <div className="h-4 w-4/6 bg-zinc-800/50 rounded animate-pulse" />
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
                      <PaintBucket className="w-5 h-5 text-cyan-500" />
                      <div className="h-3 w-20 bg-zinc-800 rounded-full" />
                    </div>
                    <div className="p-8 space-y-6 flex-1 bg-gradient-to-b from-zinc-900/20 to-transparent">
                      <div className="w-16 h-16 rounded bg-cyan-500/20 border border-cyan-500/50" />
                      <h3 className="text-xl font-medium text-white">Design System</h3>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-full bg-white" />
                        <div className="w-10 h-10 rounded-full bg-zinc-500" />
                        <div className="w-10 h-10 rounded-full bg-cyan-500" />
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
                    <div className="h-10 bg-zinc-900 flex items-center px-4 border-b border-white/5">
                      <Code2 className="w-4 h-4 text-zinc-500 mr-2" />
                      <span className="text-xs font-mono text-zinc-500">layout.tsx</span>
                    </div>
                    <div className="p-6 font-mono text-sm text-zinc-400 space-y-2">
                      <p><span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> RootLayout() {'{'}</p>
                      <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                      <p className="pl-8 text-zinc-300">&lt;html <span className="text-blue-300">lang</span>=<span className="text-green-400">"pt-BR"</span>&gt;</p>
                      <p className="pl-12 text-zinc-300">&lt;body className=<span className="text-green-400">"antialiased"</span>&gt;</p>
                      <p className="pl-16 text-zinc-500">{'{children}'}</p>
                      <p className="pl-12 text-zinc-300">&lt;/body&gt;</p>
                      <p className="pl-8 text-zinc-300">&lt;/html&gt;</p>
                      <p className="pl-4">)</p>
                      <p>{'}'}</p>
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
                      <Globe className="w-20 h-20 text-cyan-400 opacity-80" />
                      <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-white mb-2">Deploy Global</h3>
                      <p className="text-zinc-500 text-sm">Online em +100 edge networks</p>
                    </div>
                    <div className="w-full space-y-3 mt-4 text-left">
                      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/5 pb-2">
                        <span>Tempo de resposta</span>
                        <span className="text-white font-mono">12ms</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/5 pb-2">
                        <span>Lighthouse Score</span>
                        <span className="text-green-400 font-mono">100/100</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
              O que todo Site Institucional Premium precisa ter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Ultra Performance",
                description: "Milissegundos importam. Seu site será otimizado para carregar o mais rápido possível, retendo a atenção do usuário."
              },
              {
                icon: Search,
                title: "SEO Técnico Constante",
                description: "Arquitetura pautada nas melhores práticas do Google para garantir que sua empresa seja encontrada com facilidade."
              },
              {
                icon: Shield,
                title: "Segurança de Dados",
                description: "Protocolos rígidos de segurança, proteção contra invasões e conformidade com leis de proteção de dados (LGPD)."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
                <feature.icon className="w-8 h-8 text-zinc-500 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-foreground mb-3">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-zinc-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Eleve a percepção sobre a sua marca hoje.
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Converse com nossos especialistas e entenda como um site institucional corporativo pode transformar o relacionamento com seus clientes.
          </p>
          <button className="h-14 bg-white text-zinc-950 font-medium px-8 flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors mx-auto rounded-sm group">
            Iniciar Projeto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}