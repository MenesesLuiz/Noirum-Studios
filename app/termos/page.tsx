"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { motion } from "framer-motion"
import { LightBeamsBackground } from "@/components/light-beams"

export default function TermsPage() {
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
              Termos de Uso e Prestação de Serviços
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
                Olá! Que bom ter você aqui na Noirum Studios. Estes Termos de Uso governam a utilização deste site e estabelecem as condições gerais para a prestação dos meus serviços de desenvolvimento web.
              </p>
              <p>
                Ao navegar neste site e ao contratar meus serviços, você concorda com as regras abaixo. Leia com atenção.
              </p>
            </div>

            <div>
              <h2>1. Quem sou eu?</h2>
              <p>
                A Noirum Studios é o nome fantasia sob o qual eu, Luiz Felipe Meneses, profissional autônomo e desenvolvedor web (inscrito no CPF sob o nº [Seu CPF, opcional colocar apenas os primeiros dígitos ou deixar para o contrato privado]), ofereço serviços de criação de sites institucionais e landing pages.
              </p>
            </div>

            <div>
              <h2>2. Sobre os Serviços</h2>
              <p>
                Ofereço serviços focados em design e desenvolvimento web. As especificações exatas (páginas, funcionalidades, prazos e valores) de cada projeto serão definidas em um orçamento formal e/ou contrato de prestação de serviços específico aprovado por você antes do início dos trabalhos.
              </p>
            </div>

            <div>
              <h2>3. Responsabilidades do Cliente</h2>
              <p>Para que o projeto flua perfeitamente, você se compromete a:</p>
              <ul>
                <li>Fornecer os textos, imagens, logotipos e demais materiais necessários no prazo combinado;</li>
                <li>Garantir que você possui os direitos autorais ou licença de uso de todo o material fornecido à Noirum Studios. Não me responsabilizo pelo uso de imagens ou textos com direitos autorais não autorizados enviados por você;</li>
                <li>Realizar os pagamentos conforme acordado na proposta comercial.</li>
              </ul>
            </div>

            <div>
              <h2>4. Minhas Responsabilidades (O Desenvolvedor)</h2>
              <p>Como seu desenvolvedor, comprometo-me a:</p>
              <ul>
                <li>Entregar o projeto conforme o escopo definido na proposta aprovada;</li>
                <li>Garantir o funcionamento técnico do site no momento da entrega;</li>
                <li>Manter a confidencialidade sobre estratégias de negócio e dados sensíveis compartilhados durante a criação do projeto.</li>
              </ul>
            </div>

            <div>
              <h2>5. Limitação de Responsabilidade</h2>
              <p>Como atuo desenvolvendo o software (código e layout), não me responsabilizo por:</p>
              <ul>
                <li>Quedas de servidor, instabilidades na sua hospedagem ou problemas no registro do seu domínio;</li>
                <li>Invasões ou ataques cibernéticos ao seu site após a entrega (recomenda-se a contratação de manutenção contínua ou serviços de segurança específicos);</li>
                <li>Resultados de vendas ou conversões das Landing Pages, pois dependem de fatores externos como tráfego, anúncios e qualidade da oferta.</li>
              </ul>
            </div>

            <div>
              <h2>6. Propriedade Intelectual</h2>
              <p>
                Após a quitação integral do valor acordado, os direitos patrimoniais sobre o layout desenvolvido para o seu projeto são transferidos para você. No entanto, a Noirum Studios reserva-se o direito de exibir capturas de tela e links do projeto concluído em seu portfólio e redes sociais, a menos que acordemos o contrário.
              </p>
            </div>

            <div>
              <h2>7. Foro</h2>
              <p>
                Para dirimir quaisquer dúvidas oriundas deste documento, fica eleito o foro da comarca de Parauapebas - PA.
              </p>
              <p>
                Para dúvidas sobre estes termos, entre em contato: <a href="mailto:menesesluizf@gmail.com">menesesluizf@gmail.com</a>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}