"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { motion } from "framer-motion"
import { LightBeamsBackground } from "@/components/light-beams"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      <Header />
      
      <div className="absolute inset-0 z-0 h-[80vh] overflow-hidden">
        <LightBeamsBackground />
      </div>
      
      <div className="absolute inset-0 z-0 bg-background/80 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <section className="relative z-10 container mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-6 sm:p-10 md:p-16 rounded-[2.5rem] shadow-2xl"
        >
          <div className="space-y-6 border-b border-white/[0.05] pb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white"
            >
              Política de Privacidade
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-400"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Noirum Studios
              </div>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-zinc-600"></span>
              <span>Última atualização: 21/04/2026</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert prose-zinc max-w-none text-zinc-300 space-y-12 pt-10
              prose-h2:text-2xl prose-h2:font-medium prose-h2:text-white prose-h2:tracking-tight prose-h2:mt-12 prose-h2:mb-6
              prose-p:leading-relaxed prose-p:text-zinc-400 prose-p:text-base md:prose-p:text-lg
              prose-li:text-zinc-400 prose-li:text-base md:prose-li:text-lg
              prose-a:text-primary hover:prose-a:text-primary/80 prose-a:transition-colors"
          >
            <div className="space-y-4">
              <p>
                Bem-vindo à Noirum Studios. A sua privacidade e a segurança dos seus dados são fundamentais para mim. Esta Política de Privacidade explica como eu, Luiz Felipe Meneses, desenvolvedor independente e criador da Noirum Studios, coleto, uso e protejo suas informações ao visitar este site e solicitar meus serviços.
              </p>
              <p>
                Mesmo atuando como profissional autônomo (Pessoa Física), comprometo-me a seguir as diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
              </p>
            </div>

            <div>
              <h2>1. Quais dados eu coleto?</h2>
              <p>Para que possamos conversar sobre o seu projeto, eu posso solicitar os seguintes dados através de formulários de contato ou e-mail:</p>
              <ul>
                <li>Nome completo ou nome de sua empresa;</li>
                <li>Endereço de e-mail;</li>
                <li>Número de telefone/WhatsApp;</li>
                <li>Informações sobre o projeto que você deseja desenvolver.</li>
              </ul>
            </div>

            <div>
              <h2>2. Para que uso seus dados?</h2>
              <p>As informações coletadas têm propósitos estritamente profissionais:</p>
              <ul>
                <li>Responder às suas mensagens e pedidos de orçamento;</li>
                <li>Elaborar propostas comerciais personalizadas;</li>
                <li>Manter contato durante o desenvolvimento do seu site ou landing page;</li>
                <li>Enviar cobranças e recibos referentes aos serviços prestados.</li>
              </ul>
            </div>

            <div>
              <h2>3. Com quem compartilho seus dados?</h2>
              <p>
                Seus dados não serão vendidos, alugados ou repassados a terceiros para fins de marketing. Eles poderão ser compartilhados apenas de forma estritamente necessária com plataformas de terceiros que utilizo para executar o trabalho (por exemplo, provedores de e-mail, serviços de hospedagem caso você solicite, ou ferramentas de gestão financeira), os quais também possuem suas próprias políticas de segurança.
              </p>
            </div>

            <div>
              <h2>4. Retenção dos Dados</h2>
              <p>
                Mantenho seus dados apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, inclusive para fins de cumprimento de obrigações legais, contratuais ou de prestação de contas.
              </p>
            </div>

            <div>
              <h2>5. Seus Direitos</h2>
              <p>Você é o dono dos seus dados. A qualquer momento, você pode solicitar:</p>
              <ul>
                <li>A confirmação da existência de tratamento dos seus dados;</li>
                <li>O acesso, correção ou atualização dos seus dados;</li>
                <li>A exclusão dos seus dados dos meus registros (desde que não haja pendências financeiras ou legais que exijam a retenção).</li>
              </ul>
              <p>
                Para exercer seus direitos, basta me enviar um e-mail para: <a href="mailto:menesesluizf@gmail.com">menesesluizf@gmail.com</a>.
              </p>
            </div>

            <div>
              <h2>6. Alterações nesta Política</h2>
              <p>
                Posso atualizar esta Política de Privacidade periodicamente para refletir mudanças na forma como opero. A data da última atualização estará sempre no topo desta página.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
