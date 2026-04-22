"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { motion } from "framer-motion"
import { LightBeamsBackground } from "@/components/light-beams"

export default function SecurityPage() {
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
              Política de Segurança
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
                Na Noirum Studios, levo a segurança da informação a sério. Como seu parceiro no desenvolvimento digital, quero que você saiba como protejo a navegação neste site e as informações que você compartilha comigo.
              </p>
            </div>

            <div>
              <h2>1. Navegação Segura (Certificado SSL)</h2>
              <p>
                Este site utiliza tecnologia de criptografia SSL (Secure Socket Layer) - evidenciada pelo cadeado na barra de endereços do seu navegador e pelo prefixo "https". Isso significa que qualquer dado que você inserir em meus formulários será criptografado antes de ser transmitido pela internet, protegendo suas informações contra interceptações.
              </p>
            </div>

            <div>
              <h2>2. Segurança no Desenvolvimento</h2>
              <p>
                Ao criar o seu site ou landing page, aplico as melhores práticas de desenvolvimento limpo e seguro. Embora eu construa a fundação de forma robusta, lembre-se que a segurança contínua de um site também depende de uma boa hospedagem, senhas fortes e atualizações constantes (as quais podemos negociar em um pacote de manutenção).
              </p>
            </div>

            <div>
              <h2>3. Armazenamento de Dados</h2>
              <p>
                Os e-mails, arquivos e informações de projetos que você me envia são armazenados em dispositivos protegidos por senha e antivírus, além de serviços de nuvem de empresas reconhecidas mundialmente pela sua segurança (como Google Workspace, iCloud, etc.).
              </p>
            </div>

            <div>
              <h2>4. Sem Sistemas 100% Infalíveis</h2>
              <p>
                Embora eu adote as melhores práticas de segurança comercialmente aceitas para proteger suas informações pessoais e os arquivos do seu projeto, é importante ressaltar que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Portanto, não posso garantir sua segurança absoluta, mas me comprometo a agir rapidamente caso qualquer vulnerabilidade seja identificada.
              </p>
            </div>

            <div>
              <h2>5. Contato sobre Segurança</h2>
              <p>
                Se você identificar qualquer vulnerabilidade neste site ou tiver dúvidas sobre como seus dados são protegidos, por favor, me avise imediatamente através do e-mail: <a href="mailto:menesesluizf@gmail.com">menesesluizf@gmail.com</a>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}