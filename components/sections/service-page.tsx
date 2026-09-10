"use client"

import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { ArrowRight, ArrowUpRight, Check, Mail } from "lucide-react"

type ServicePageProps = {
  kind: "institutional" | "landing"
}

type ServiceData = {
  title: string
  lead: string
  intro: string
  image: string
  imageAlt: string
  imageNote: string
  steps: Array<{ number: string; title: string; body: string }>
  deliverables: Array<{ title: string; body: string }>
  clientNotes: string[]
  closing: string
}

const services: Record<ServicePageProps["kind"], ServiceData> = {
  institutional: {
    title: "Uma sede digital à altura.",
    lead: "Um site institucional para explicar sua empresa com clareza, organizar autoridade e sustentar a próxima conversa.",
    intro: "Uma presença institucional não precisa dizer tudo de uma vez. Ela precisa dar contexto para quem está conhecendo a empresa e deixar claro por que vale continuar a conversa.",
    image: "/visuals/brutalist-night.jpg",
    imageAlt: "Fachada brutalista em preto e branco durante a noite",
    imageNote: "DIREÇÃO VISUAL / ARQUIVO DE REFERÊNCIA",
    steps: [
      { number: "01", title: "Entender o cenário", body: "Leio o negócio, o público, os materiais existentes e o que a presença atual precisa resolver." },
      { number: "02", title: "Organizar a narrativa", body: "Defino a arquitetura de páginas, a hierarquia da mensagem e o caminho de leitura mais natural." },
      { number: "03", title: "Construir a interface", body: "Desenvolvo uma experiência sob medida para a marca, com componentes e conteúdo trabalhando juntos." },
      { number: "04", title: "Revisar a base", body: "Ajusto estados, responsividade, semântica, fundamentos de SEO e os detalhes que sustentam a entrega." },
    ],
    deliverables: [
      { title: "Arquitetura de conteúdo", body: "Páginas e seções organizadas para responder às dúvidas certas na ordem certa." },
      { title: "Direção visual", body: "Uma linguagem própria para o negócio, aplicada com consistência em cada ponto de contato." },
      { title: "Desenvolvimento web", body: "Código, responsividade e estados preparados para uma experiência real em diferentes telas." },
    ],
    clientNotes: [
      "Textos, imagens, logotipo e materiais de referência entram no processo conforme o escopo combinado.",
      "Prazos, páginas, funcionalidades e valores são definidos em proposta formal antes do início do trabalho.",
      "O resultado comercial de um site também depende da oferta, da operação, do tráfego e da manutenção depois da entrega.",
    ],
    closing: "Se a empresa mudou, a presença digital precisa acompanhar.",
  },
  landing: {
    title: "Uma página para decidir.",
    lead: "Landing pages para organizar uma oferta específica, reduzir ruído e dar contexto à decisão.",
    intro: "Uma landing page não é um site completo. É uma superfície focada em uma ação, com mensagem, prova e caminho de decisão construídos para aquele contexto.",
    image: "/visuals/monitor-detail.jpg",
    imageAlt: "Detalhe de monitor e teclado em ambiente de trabalho com pouca luz",
    imageNote: "DIREÇÃO VISUAL / ARQUIVO DE REFERÊNCIA",
    steps: [
      { number: "01", title: "Definir a oferta", body: "Entendo o que está sendo apresentado, para quem e qual ação faz sentido ao final da leitura." },
      { number: "02", title: "Dar forma à mensagem", body: "Organizo promessa, contexto, prova disponível e objeções sem depender de urgência artificial." },
      { number: "03", title: "Desenhar o caminho", body: "A interface reduz distrações e torna visível o próximo passo, sem esconder informações importantes." },
      { number: "04", title: "Preparar a publicação", body: "Reviso conteúdo, responsividade, acessibilidade, estados e a base técnica necessária para a entrega." },
    ],
    deliverables: [
      { title: "Foco de campanha", body: "Uma estrutura dedicada a uma oferta, lançamento, captação ou conversa específica." },
      { title: "Hierarquia de mensagem", body: "Títulos, blocos, provas e chamadas organizados para facilitar entendimento." },
      { title: "Interface orientada à ação", body: "Um próximo passo claro, com formulário ou contato de acordo com a necessidade do projeto." },
    ],
    clientNotes: [
      "A qualidade da página depende também da clareza da oferta, dos materiais disponíveis e da origem do tráfego.",
      "Não publico resultados, percentuais ou garantias comerciais sem dados reais fornecidos e autorizados.",
      "Prazos, integrações, páginas e valores entram na proposta formal antes do início do trabalho.",
    ],
    closing: "Uma boa página começa antes do primeiro botão.",
  },
}

type RevealVariant = "lift" | "clip" | "side"

function Reveal({ children, className = "", variant = "lift", delay = 0 }: { children: React.ReactNode; className?: string; variant?: RevealVariant; delay?: number }) {
  const initial = {
    lift: { opacity: 1, y: 16 },
    clip: { opacity: 1, y: 8, clipPath: "inset(0 0 100% 0)" },
    side: { opacity: 1, x: 22 },
  }[variant]

  return (
    <m.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -12%" }}
      transition={{ duration: 0.68, delay, ease: [0.16, 1, 0.3, 1] }}
      data-reveal="true"
      className={className}
    >
      {children}
    </m.div>
  )
}

export function ServicePage({ kind }: ServicePageProps) {
  const service = services[kind]

  return (
    <LazyMotion features={domAnimation}>
    <main className="service-page">
      <section className="service-hero section-dark" aria-labelledby="service-title">
        <div className="container noirum-container service-hero-grid">
          <div className="service-hero-copy">
            <Link href="/" className="back-link"><ArrowRight size={14} /> Voltar para a home</Link>
            <h1 id="service-title" className="display-heading display-heading--service">{service.title}</h1>
            <p>{service.lead}</p>
            <a href="#service-contact" className="button button--light">Conversar sobre um projeto <ArrowUpRight size={16} /></a>
          </div>
          <div className="service-hero-media">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            <span>{service.imageNote}</span>
          </div>
        </div>
      </section>

      <section className="service-intro section-stone">
        <div className="container noirum-container service-intro-grid">
          <Reveal variant="clip"><h2 className="display-heading display-heading--stone">O trabalho é dar <span>forma à clareza.</span></h2></Reveal>
          <Reveal variant="side" delay={0.08}><p>{service.intro}</p></Reveal>
        </div>
      </section>

      <section className="service-story section-dark" aria-labelledby="service-story-title">
        <div className="container noirum-container">
          <Reveal variant="clip"><h2 id="service-story-title" className="display-heading display-heading--medium">Como a construção <span>acontece.</span></h2></Reveal>
          <div className="service-story-layout">
            <div className="service-step-list">
              {service.steps.map((step, index) => (
                <Reveal className="service-step" key={step.number} variant="side" delay={index * 0.07}>
                  <span className="service-step-number">{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.body}</p></div>
                </Reveal>
              ))}
            </div>
            <Reveal className="service-story-aside" variant="side" delay={0.12}>
              <p className="service-aside-label">O que não muda</p>
              <p>O escopo é construído a partir do seu contexto. Não existe pacote fechado escondido atrás de uma promessa ampla.</p>
              <div className="service-aside-line" />
              <p className="service-aside-label">O que você recebe</p>
              <p>Uma base visual e técnica documentada o suficiente para ser entendida, revisada e continuada.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="service-deliverables section-stone" aria-labelledby="deliverables-title">
        <div className="container noirum-container">
          <Reveal variant="clip"><h2 id="deliverables-title" className="display-heading display-heading--stone">O que entra <span>na construção.</span></h2></Reveal>
          <div className="deliverables-list">
            {service.deliverables.map((item, index) => (
              <Reveal className="deliverable-row" key={item.title} variant={index % 2 === 0 ? "side" : "lift"} delay={index * 0.06}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-notes section-dark" aria-labelledby="notes-title">
        <div className="container noirum-container service-notes-grid">
          <Reveal variant="clip"><h2 id="notes-title" className="display-heading display-heading--medium">Um projeto bom também <span>tem limites claros.</span></h2></Reveal>
          <Reveal className="service-notes-list" variant="side" delay={0.08}>
            {service.clientNotes.map((note) => <p key={note}><Check size={16} /> {note}</p>)}
          </Reveal>
        </div>
      </section>

      <section id="service-contact" className="service-contact section-stone" aria-labelledby="service-contact-title">
        <div className="container noirum-container service-contact-inner">
          <Reveal>
            <p className="service-contact-label">Próximo passo</p>
            <h2 id="service-contact-title" className="display-heading display-heading--stone">{service.closing}</h2>
            <p>Conte o que você está construindo e em que ponto precisa de ajuda. A primeira conversa serve para entender se a oferta faz sentido para o cenário.</p>
            <div className="service-contact-links"><Link href="/#contact" className="button button--ink">Conversar sobre um projeto <ArrowUpRight size={16} /></Link><a href="mailto:menesesluizf@gmail.com" className="inline-link inline-link--dark"><Mail size={15} /> Enviar e-mail</a></div>
          </Reveal>
        </div>
      </section>
    </main>
    </LazyMotion>
  )
}
