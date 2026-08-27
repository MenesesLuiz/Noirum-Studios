"use client"

import { FormEvent, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Send,
  ShieldCheck,
} from "lucide-react"

const whatsappNumber = "5594992810971"

type Project = {
  id: string
  title: string
  description: string
  meta: string
  image: string
  alt: string
}

const projects: Project[] = [
  {
    id: "01",
    title: "Presença institucional",
    description:
      "Uma arquitetura de conteúdo para negócios que precisam explicar sua operação sem diminuir sua complexidade.",
    meta: "Conteúdo / Arquitetura",
    image: "/visuals/brutalist-night.jpg",
    alt: "Fachada brutalista em preto e branco durante a noite",
  },
  {
    id: "02",
    title: "Página de decisão",
    description:
      "Uma landing page com mensagem, prova e próximo passo organizados para uma oferta específica.",
    meta: "Campanha / Conversão",
    image: "/visuals/monitor-detail.jpg",
    alt: "Detalhe de monitor e teclado em um ambiente de trabalho com pouca luz",
  },
  {
    id: "03",
    title: "Base que sustenta",
    description:
      "A camada técnica tratada como parte da experiência, com estrutura limpa, semântica e espaço para evoluir.",
    meta: "Código / Performance",
    image: "/visuals/server-racks.jpg",
    alt: "Racks de servidores com luzes de status em ambiente escuro",
  },
]

const processSteps = [
  ["01", "Entender", "Contexto, objetivo, público e materiais disponíveis."],
  ["02", "Direcionar", "Mensagem, hierarquia, conteúdo e linguagem visual."],
  ["03", "Construir", "Interface, código e estados preparados para uso real."],
  ["04", "Revisar", "Ajustes, validação técnica e lançamento com contexto."],
] as const

const engineeringItems = ["Semântica", "Responsivo", "Acessível", "Explicável"]

const faqs = [
  {
    question: "Quanto custa um site premium?",
    answer:
      "O investimento depende do escopo, da profundidade de conteúdo e das integrações necessárias. Primeiro entendo o cenário, depois organizo uma proposta específica para o projeto.",
  },
  {
    question: "Quanto tempo leva para construir?",
    answer:
      "O prazo é definido depois do planejamento e varia conforme o número de páginas, a disponibilidade dos materiais e o nível de customização. O cronograma entra na proposta, não em uma promessa genérica.",
  },
  {
    question: "O site será responsivo e preparado para SEO?",
    answer:
      "Sim. Responsividade, estrutura semântica, fundamentos técnicos de SEO e carregamento eficiente fazem parte da base de construção.",
  },
  {
    question: "Você cuida da hospedagem e das alterações?",
    answer:
      "Esses pontos são combinados conforme a necessidade de cada projeto. No contato inicial, você pode contar o que já existe e o que ainda precisa ser estruturado.",
  },
  {
    question: "Como funciona o processo?",
    answer:
      "O trabalho passa por entendimento do cenário, direção, construção, revisão e lançamento. Cada fase tem um objetivo claro e depende do material necessário para avançar.",
  },
]

function trackEvent(name: string, data?: Record<string, string>) {
  if (typeof window !== "undefined") {
    const umami = (window as Window & { umami?: { track: (event: string, data?: Record<string, string>) => void } }).umami
    umami?.track(name, data)
  }
}

type RevealVariant = "lift" | "clip" | "side" | "project" | "project-reverse" | "image"

function Reveal({ children, className = "", variant = "lift", delay = 0 }: { children: React.ReactNode; className?: string; variant?: RevealVariant; delay?: number }) {
  const initialStates: Record<RevealVariant, Record<string, string | number>> = {
    lift: { opacity: 1, y: 18 },
    clip: { opacity: 1, y: 8, clipPath: "inset(0 0 100% 0)" },
    side: { opacity: 1, x: 24 },
    project: { opacity: 1, x: -18, clipPath: "inset(0 100% 0 0)" },
    "project-reverse": { opacity: 1, x: 18, clipPath: "inset(0 0 0 100%)" },
    image: { opacity: 1, scale: 1.04, clipPath: "inset(0 0 100% 0)" },
  }

  return (
    <motion.div
      initial={initialStates[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -12%" }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
      data-reveal="true"
      className={className}
    >
      {children}
    </motion.div>
  )
}

function HeroHeadline() {
  const transition = (delay: number) => ({ duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] as const })
  const initial = { y: "8px", opacity: 1 }

  return (
    <h1 id="hero-title" className="display-heading display-heading--hero">
      <span className="hero-line"><motion.span initial={initial} animate={{ y: "0%", opacity: 1 }} transition={transition(0.08)}>Desenvolvimento web</motion.span></span>
      <span className="hero-line"><motion.em initial={initial} animate={{ y: "0%", opacity: 1 }} transition={transition(0.18)}>para a elite digital.</motion.em></span>
    </h1>
  )
}

function ProjectVisual({ project, sizes, parallax = ["-3%", "3%"] }: { project: Project; sizes: string; parallax?: [string, string] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], parallax)

  return (
    <div ref={ref} className="project-visual">
      <motion.div className="project-visual-image" style={{ y: imageY }}>
        <Image src={project.image} alt={project.alt} fill sizes={sizes} loading={project.id === "01" ? undefined : "lazy"} />
      </motion.div>
      <span className="project-index">{project.id}</span>
    </div>
  )
}

export function EngineeringScan() {
  const scanRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: scanRef, offset: ["start end", "end start"] })
  const scanX = useTransform(scrollYProgress, [0, 1], ["12%", "88%"])
  const blueprintClip = useTransform(scrollYProgress, [0, 1], ["inset(0 88% 0 0)", "inset(0 12% 0 0)"])

  return (
    <section className="scan-section section-dark" aria-labelledby="scan-title">
      <div className="container noirum-container">
        <div className="scan-heading">
          <h2 id="scan-title" className="display-heading display-heading--medium">
            O cuidado que aparece <span>começa por baixo.</span>
          </h2>
          <p>
            Design, conteúdo e código são pensados juntos para que a presença digital tenha intenção em cada camada.
          </p>
        </div>

        <div ref={scanRef} className="scan-viewport">
          <div className="scan-grid" aria-hidden="true" />
          <div className="scan-finished">
            <div className="scan-finished-bar">
              <span className="scan-dot scan-dot--red" />
              <span className="scan-dot scan-dot--yellow" />
              <span className="scan-dot scan-dot--green" />
              <span className="scan-address">noirum.studio / system-preview</span>
            </div>
            <div className="scan-finished-body">
              <div className="scan-finished-copy">
                <span>estrutura digital / demonstração</span>
                <strong>Clareza<br />em camadas.</strong>
                <div className="scan-finished-rule" />
                <small>conteúdo / interface / código</small>
              </div>
              <div className="scan-finished-blocks" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          <motion.div
            className="scan-blueprint"
            style={{ clipPath: blueprintClip }}
            aria-hidden="true"
          >
            <div className="blueprint-label">NOIRUM / MAPA DE SISTEMA / 001</div>
            <div className="blueprint-lines">
              <div className="blueprint-window blueprint-window--large"><span>PROPOSTA / CONTEXTO</span></div>
              <div className="blueprint-window blueprint-window--small"><span>AÇÃO / PRÓXIMO PASSO</span></div>
              <div className="blueprint-window blueprint-window--tall"><span>CONTEÚDO / PROVA</span></div>
              <div className="blueprint-cross blueprint-cross--one" />
              <div className="blueprint-cross blueprint-cross--two" />
            </div>
          </motion.div>

          <motion.div className="scan-line" style={{ left: scanX }} aria-hidden="true"><span /></motion.div>
          <div className="scan-footnote">
            <span>Inspecione a construção</span>
            <ArrowRight size={14} strokeWidth={1.4} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function NoirumHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [formState, setFormState] = useState<"idle" | "error" | "success">("idle")
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const projectType = String(data.get("projectType") || "").trim()

    if (!name || !email || !projectType) {
      setFormState("error")
      trackEvent("form_error", { reason: "required_fields" })
      return
    }

    const message = [
      `Olá, sou ${name}.`,
      `Empresa: ${String(data.get("company") || "não informada")}`,
      `Projeto: ${projectType}`,
      `Objetivo: ${String(data.get("objective") || "não informado")}`,
      `Prazo: ${String(data.get("timeline") || "não informado")}`,
      `Mensagem: ${String(data.get("message") || "não informada")}`,
      `E-mail: ${email}`,
    ].join("\n")

    trackEvent("form_submit", { project_type: projectType })
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
    setFormState("success")
  }

  return (
    <main className="noirum-page">
      <section className="hero-section section-dark" aria-labelledby="hero-title">
        <div className="hero-image-column">
          <Image
            src="/visuals/server-room.jpg"
            alt="Corredor de racks em um data center com luz fria"
            className="hero-image"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 43vw"
          />
          <div className="image-fringe image-fringe--cyan" aria-hidden="true" />
          <div className="hero-image-caption"><span>NOIRUM / 001</span><span>DESIGN + DESENVOLVIMENTO</span></div>
        </div>
        <div className="hero-copy-column">
          <div className="hero-copy-inner">
            <HeroHeadline />
            <p className="hero-description">
              Sites institucionais e landing pages para negócios que precisam parecer tão claros quanto são.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button--light" onClick={() => trackEvent("hero_cta", { placement: "hero" })}>
                Conversar sobre um projeto <ArrowUpRight size={16} />
              </a>
              <a href="#projects" className="button button--ghost" onClick={() => trackEvent("project_view", { placement: "hero" })}>
                Ver trabalho <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note-line" aria-hidden="true" />
              <p>Uma operação independente, conduzida por Luiz Felipe Meneses.</p>
            </div>
          </div>
          <div className="hero-bottom-note"><span>NOIRUM STUDIOS</span><span>WEB / CONTEÚDO / ENGENHARIA</span></div>
        </div>
      </section>

      <div id="approach"><EngineeringScan /></div>

      <section className="credibility-section section-stone" aria-labelledby="credibility-title">
        <div className="stone-grid" aria-hidden="true" />
        <div className="container noirum-container credibility-layout">
          <Reveal variant="clip">
            <h2 id="credibility-title" className="display-heading display-heading--stone">
              Um site não precisa dizer tudo. <span>Precisa dizer o certo.</span>
            </h2>
          </Reveal>
          <Reveal className="credibility-copy" variant="side" delay={0.08}>
            <p className="stone-lead">
              O trabalho começa organizando o que a marca precisa comunicar, para quem e com qual próximo passo. A interface vem depois dessa clareza.
            </p>
            <div className="capability-strip" aria-label="Princípios de construção">
              <div className="capability-item"><span>01</span><strong>Clareza</strong><p>A proposta aparece antes do ruído.</p></div>
              <div className="capability-item"><span>02</span><strong>Direção</strong><p>Forma e conteúdo seguem o mesmo caminho.</p></div>
              <div className="capability-item"><span>03</span><strong>Base</strong><p>O código recebe o mesmo cuidado da superfície.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="projects-section section-dark" aria-labelledby="projects-title">
        <div className="container noirum-container">
            <Reveal className="section-intro" variant="clip">
            <h2 id="projects-title" className="display-heading display-heading--medium">Trabalho para ser <span>percebido.</span></h2>
            <p>As imagens abaixo são direções demonstrativas. Casos, clientes e resultados entram aqui somente depois de validados.</p>
          </Reveal>
          <div className="projects-grid">
              <Reveal className="project-card project-card--lead" variant="project">
                <ProjectVisual project={projects[0]} sizes="(max-width: 900px) 100vw, 56vw" parallax={["-4%", "4%"]} />
              <div className="project-card-copy">
                <h3>{projects[0].title}</h3>
                <p>{projects[0].description}</p>
                <span className="project-meta">{projects[0].meta}</span>
              </div>
            </Reveal>
            <div className="project-stack">
              {projects.slice(1).map((project) => (
                <Reveal className="project-card project-card--compact" key={project.id} variant={project.id === "02" ? "project-reverse" : "project"} delay={project.id === "03" ? 0.1 : 0}>
                  <ProjectVisual project={project} sizes="(max-width: 900px) 100vw, 32vw" parallax={project.id === "02" ? ["2%", "-2%"] : ["-2%", "2%"]} />
                  <div className="project-card-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="project-meta">{project.meta}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section section-stone" aria-labelledby="services-title">
        <div className="container noirum-container">
          <Reveal className="services-heading" variant="clip">
            <h2 id="services-title" className="display-heading display-heading--stone">Duas ofertas. <span>Uma conversa honesta.</span></h2>
            <p>Escolha o problema que precisa ser resolvido. O escopo exato entra na proposta.</p>
          </Reveal>
          <div className="service-choices">
            <motion.article className="service-choice" data-reveal="true" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -10%" }} transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}>
              <div className="service-choice-media"><Image src="/visuals/brutalist-night.jpg" alt="Estrutura de concreto vista à noite" fill sizes="(max-width: 900px) 100vw, 48vw" loading="lazy" /></div>
              <div className="service-choice-body"><span className="service-number">01</span><h3>Sites institucionais premium</h3><p>Uma presença digital sob medida para explicar a empresa, organizar autoridade e abrir espaço para novas conversas.</p><a href="/servicos/site-institucional" className="inline-link inline-link--dark">Conhecer a oferta <ArrowUpRight size={15} /></a></div>
            </motion.article>
            <motion.article className="service-choice service-choice--offset" data-reveal="true" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -10%" }} transition={{ duration: 0.72, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}>

              <div className="service-choice-body"><span className="service-number">02</span><h3>Landing pages de alta conversão</h3><p>Uma página com mensagem, prova e caminho de decisão organizados para uma campanha ou oferta específica.</p><a href="/servicos/landing-pages" className="inline-link inline-link--dark">Conhecer a oferta <ArrowUpRight size={15} /></a></div>
              <div className="service-choice-media"><Image src="/visuals/monitor-detail.jpg" alt="Detalhe de monitor e teclado em ambiente de trabalho" fill sizes="(max-width: 900px) 100vw, 48vw" loading="lazy" /></div>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="process" className="process-section section-dark" aria-labelledby="process-title">
        <div className="container noirum-container">
          <Reveal className="process-heading" variant="clip"><h2 id="process-title" className="display-heading display-heading--medium">O projeto precisa de <span>ritmo.</span></h2><p>Menos improviso, mais decisões visíveis. Cada fase existe para reduzir ruído antes da próxima.</p></Reveal>
          <div className="process-grid">
            {processSteps.map(([number, title, body], index) => (
              <Reveal className="process-item" key={number} variant="side" delay={index * 0.08}>
                <span className="process-number">{number}</span><h3>{title}</h3><p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="engineering-section section-dark" aria-labelledby="engineering-title">
        <div className="container noirum-container engineering-layout">
          <Reveal variant="clip">
            <h2 id="engineering-title" className="display-heading display-heading--medium">A camada invisível também <span>faz parte da marca.</span></h2>
            <p className="engineering-lead">Semântica, responsividade, fundamentos de SEO, acessibilidade e boas práticas de segurança entram na construção. Nenhum deles é promessa de resultado comercial isolado.</p>
          </Reveal>
          <Reveal className="engineering-proof" variant="side">
            {engineeringItems.map((item, index) => (
              <motion.div className="proof-word" data-reveal="true" key={item} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "0px 0px -10%" }} transition={{ duration: 0.58, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}><Check size={20} /> {item}</motion.div>
            ))}
            <div className="proof-note"><ShieldCheck size={18} strokeWidth={1.3} /><span>A fundação é construída com cuidado. A manutenção contínua depende também da hospedagem, das senhas e das atualizações do projeto.</span></div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="about-section section-stone" aria-labelledby="about-title">
        <div className="container noirum-container about-layout">
            <Reveal className="about-image" variant="image">
            <Image src="/visuals/brutalist-night.jpg" alt="Geometria de um edifício brutalista em preto e branco" fill sizes="(max-width: 900px) 100vw, 42vw" loading="lazy" />
            <div className="about-image-note">IMAGEM DE ARQUIVO / NÃO É UM RETRATO</div>
          </Reveal>
          <Reveal className="about-copy" variant="side" delay={0.08}>
            <h2 id="about-title" className="display-heading display-heading--stone">Uma operação pequena, com <span>atenção inteira.</span></h2>
            <p>Eu sou Luiz Felipe Meneses, desenvolvedor web independente e criador da Noirum Studios.</p>
            <p>Trabalho na intersecção entre direção visual e desenvolvimento. Meu foco é construir sites institucionais e landing pages que sejam bonitos, claros, rápidos de entender e possíveis de explicar.</p>
            <p className="about-note">Ainda não publico uma equipe ou um acervo de casos que não possa comprovar. Prefiro mostrar o que está pronto e conversar sobre o que precisa ser construído.</p>
            <a href="#contact" className="inline-link inline-link--dark">Conversar sobre um projeto <ArrowUpRight size={15} /></a>
          </Reveal>
        </div>
      </section>

      <section className="faq-section section-dark" aria-labelledby="faq-title">
        <div className="container noirum-container faq-layout">
          <Reveal variant="clip"><h2 id="faq-title" className="display-heading display-heading--medium">Clareza antes <span>do contrato.</span></h2></Reveal>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div className="faq-item" key={faq.question}>
                  <button className="faq-button" type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}>
                    <span>{faq.question}</span>
                    <span className={`faq-icon ${isOpen ? "is-open" : ""}`}><Plus size={18} strokeWidth={1.4} /></span>
                  </button>
                  <div className={`faq-answer ${isOpen ? "is-open" : ""}`}><p>{faq.answer}</p></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-stone" aria-labelledby="contact-title">
        <div className="container noirum-container contact-layout">
          <Reveal className="contact-copy" variant="clip">
            <h2 id="contact-title" className="display-heading display-heading--stone">Se fizer sentido, a próxima etapa <span>começa aqui.</span></h2>
            <p>Conte o que existe, o que precisa mudar e o que seria um bom projeto para você. Eu respondo com contexto, não com uma tabela pronta.</p>
            <div className="contact-fallback"><span>Prefere conversar direto?</span><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { placement: "contact" })}>Abrir WhatsApp <ArrowUpRight size={15} /></a></div>
          </Reveal>
          <Reveal variant="side" delay={0.08}>
            <form className="lead-form" onSubmit={handleSubmit} onChange={() => formState !== "idle" && setFormState("idle")} noValidate>
              <div className="form-row">
                <label htmlFor="name">Nome<input id="name" name="name" placeholder="Seu nome" autoComplete="name" required aria-invalid={formState === "error"} /></label>
                <label htmlFor="company">Empresa<input id="company" name="company" placeholder="Nome da empresa" autoComplete="organization" /></label>
              </div>
              <div className="form-row">
                <label htmlFor="email">E-mail<input id="email" name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" required aria-invalid={formState === "error"} /></label>
                <label htmlFor="projectType">Tipo de projeto<select id="projectType" name="projectType" defaultValue="" required aria-invalid={formState === "error"}><option value="" disabled>Selecione uma opção</option><option>Site institucional premium</option><option>Landing page de alta conversão</option><option>Ainda avaliando</option></select></label>
              </div>
              <div className="form-row">
                <label htmlFor="objective">Objetivo<input id="objective" name="objective" placeholder="O que precisa mudar?" /></label>
                <label htmlFor="timeline">Prazo<input id="timeline" name="timeline" placeholder="Existe uma data importante?" /></label>
              </div>
              <label htmlFor="message">Mensagem<textarea id="message" name="message" rows={4} placeholder="Contexto, desafio e o que você espera do projeto." /></label>
              <p className="form-helper">Os dados são usados apenas para responder ao seu contato e preparar a conversa sobre o projeto.</p>
              {formState === "error" && <p className="form-feedback form-feedback--error" role="alert">Preencha nome, e-mail e tipo de projeto para continuar.</p>}
              {formState === "success" && <p className="form-feedback form-feedback--success" role="status">WhatsApp aberto. Se preferir, você também pode continuar por e-mail.</p>}
              <button className="button button--ink form-submit" type="submit" onClick={() => trackEvent("form_start", { placement: "contact" })}>Enviar briefing <Send size={15} /></button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="final-line section-dark" aria-label="Fechamento"><div className="container noirum-container final-line-inner"><span>NOIRUM STUDIOS</span><span>DESIGN / DESENVOLVIMENTO / CONTEÚDO</span><span>2026</span></div></section>
    </main>
  )
}
