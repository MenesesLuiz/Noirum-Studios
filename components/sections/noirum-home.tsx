"use client"

import { FormEvent, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight, Check, Mail, Send } from "lucide-react"

const whatsappNumber = "5594992810971"

const visualStudies = [
  {
    id: "01",
    title: "PRESENÇA",
    label: "VISUAL STUDY",
    description: "Direção para uma presença institucional que sustenta a próxima conversa.",
    image: "/visuals/brutalist-night.jpg",
    alt: "Fachada brutalista em preto e branco durante a noite",
  },
  {
    id: "02",
    title: "DECISÃO",
    label: "INDEPENDENT STUDY",
    description: "Uma superfície de campanha organizada para tornar o próximo passo visível.",
    image: "/visuals/monitor-detail.jpg",
    alt: "Detalhe de monitor e teclado em um ambiente de trabalho com pouca luz",
  },
  {
    id: "03",
    title: "BASE",
    label: "NOIRUM EXPERIMENT",
    description: "A camada técnica tratada como parte da experiência, não como bastidor.",
    image: "/visuals/server-racks.jpg",
    alt: "Racks de servidores com luzes de status em ambiente escuro",
  },
]

const buildSteps = [
  ["01", "DIRECTION", "What should this communicate?"],
  ["02", "DESIGN", "What should this feel like?"],
  ["03", "DEVELOPMENT", "How should this behave?"],
  ["04", "DELIVERY", "Does it work outside the mockup?"],
] as const

function trackEvent(name: string, data?: Record<string, string>) {
  if (typeof window !== "undefined") {
    const umami = (window as Window & { umami?: { track: (event: string, data?: Record<string, string>) => void } }).umami
    umami?.track(name, data)
  }
}

type RevealVariant = "lift" | "clip" | "side"

function Reveal({
  children,
  className = "",
  variant = "lift",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
}) {
  const initial = {
    lift: { opacity: 1, y: 24 },
    clip: { opacity: 1, y: 10, clipPath: "inset(0 0 100% 0)" },
    side: { opacity: 1, x: 26 },
  }[variant]

  return (
    <motion.div
      data-afterimage-reveal="true"
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -14%" }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ProjectVisual({
  study,
  className = "",
}: {
  study: (typeof visualStudies)[number]
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"])

  return (
    <div ref={ref} className={`afterimage-study-visual ${className}`}>
      <motion.div className="afterimage-study-image" style={{ y: imageY }}>
        <Image src={study.image} alt={study.alt} fill sizes="(max-width: 900px) 100vw, 62vw" loading={study.id === "01" ? undefined : "lazy"} />
      </motion.div>
      <div className="afterimage-study-frame" aria-hidden="true" />
      <span className="afterimage-study-index">{study.id}</span>
    </div>
  )
}

export function NoirumHome() {
  const [formState, setFormState] = useState<"idle" | "error" | "success">("idle")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const projectType = String(data.get("projectType") || "").trim()
    const messageText = String(data.get("message") || "").trim()

    if (!name || !email || !projectType) {
      setFormState("error")
      trackEvent("form_error", { reason: "required_fields" })
      return
    }

    const message = [
      `Olá, sou ${name}.`,
      `Projeto: ${projectType}`,
      `Mensagem: ${messageText || "não informada"}`,
      `E-mail: ${email}`,
    ].join("\n")

    trackEvent("form_submit", { project_type: projectType })
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
    setFormState("success")
  }

  return (
    <main className="afterimage-page">
      <section className="afterimage-hero section-dark" aria-labelledby="hero-title">
        <div className="afterimage-hero-visual">
          <Image
            src="/visuals/server-room.jpg"
            alt="Corredor de racks em um data center com luz fria"
            className="afterimage-hero-image"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 63vw"
          />
          <div className="afterimage-hero-scan" aria-hidden="true" />
          <div className="afterimage-hero-visual-meta"><span>NOIRUM / AFTERIMAGE</span><span>01 — 06</span></div>
        </div>
        <div className="afterimage-hero-copy">
          <div className="afterimage-hero-copy-inner">
            <p className="afterimage-kicker">INDEPENDENT DIGITAL STUDIO</p>
            <h1 id="hero-title" className="afterimage-hero-title">
              <span data-afterimage="BUILT">BUILT</span>
              <span data-afterimage="FOR">FOR</span>
              <em data-afterimage="THE">THE</em>
              <em data-afterimage="AFTERIMAGE.">AFTERIMAGE.</em>
            </h1>
            <div className="afterimage-hero-meta">
              <span>BRAND WEBSITES / LANDING PAGES</span>
              <span>DIRECTION / DESIGN / DEVELOPMENT</span>
            </div>
            <div className="afterimage-hero-actions">
              <a href="#contact" className="button button--light" onClick={() => trackEvent("hero_cta", { placement: "hero" })}>
                Conversar sobre um projeto <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="#work" className="afterimage-text-link" onClick={() => trackEvent("project_view", { placement: "hero" })}>
                Ver trabalho <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="afterimage-hero-footer"><span>BRAZIL — WORLDWIDE</span><span>BRAND / DIGITAL / MOTION</span></div>
        </div>
      </section>

      <section id="offers" className="afterimage-offers section-stone" aria-labelledby="offers-title">
        <div className="container noirum-container">
          <div className="afterimage-section-head afterimage-offers-head">
            <Reveal variant="clip"><p className="afterimage-index">01 / WHAT WE BUILD</p></Reveal>
            <Reveal variant="side" delay={0.08}>
              <h2 id="offers-title" className="afterimage-display afterimage-display--stone">THE INTERNET HAS <span>ENOUGH WEBSITES.</span></h2>
              <p className="afterimage-section-lead afterimage-section-lead--stone">A Noirum cria experiências digitais com direção suficiente para serem entendidas e presença suficiente para serem lembradas.</p>
            </Reveal>
          </div>
          <div className="afterimage-offer-list">
            <Reveal className="afterimage-offer-row" variant="side">
              <span className="afterimage-offer-number">01</span>
              <div><h3>Sites institucionais premium</h3><p>Para explicar uma empresa, organizar autoridade e abrir a próxima conversa.</p></div>
              <a href="/servicos/site-institucional" className="afterimage-row-link">Ver oferta <ArrowUpRight size={15} aria-hidden="true" /></a>
            </Reveal>
            <Reveal className="afterimage-offer-row" variant="side" delay={0.1}>
              <span className="afterimage-offer-number">02</span>
              <div><h3>Landing pages</h3><p>Para foco, campanha, lançamento ou decisão — com o próximo passo visível.</p></div>
              <a href="/servicos/landing-pages" className="afterimage-row-link">Ver oferta <ArrowUpRight size={15} aria-hidden="true" /></a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="work" className="afterimage-work section-dark" aria-labelledby="work-title">
        <div className="container noirum-container">
          <Reveal className="afterimage-work-intro" variant="clip">
            <p className="afterimage-index">02 / SELECTED WORK</p>
            <h2 id="work-title" className="afterimage-display">VISUAL STUDIES <span>TO REMEMBER.</span></h2>
            <p className="afterimage-section-lead">Experiments, direções e sistemas visuais independentes. O trabalho aparece aqui antes da explicação.</p>
          </Reveal>
          <div className="afterimage-work-feature">
            <Reveal className="afterimage-study afterimage-study--feature" variant="clip">
              <ProjectVisual study={visualStudies[0]} />
              <div className="afterimage-study-caption"><div><span className="afterimage-study-label">{visualStudies[0].label}</span><h3>{visualStudies[0].title}</h3></div><p>{visualStudies[0].description}</p></div>
            </Reveal>
            <div className="afterimage-work-side">
              {visualStudies.slice(1).map((study, index) => (
                <Reveal className="afterimage-study afterimage-study--small" key={study.id} variant={index === 0 ? "side" : "clip"} delay={index * 0.1}>
                  <ProjectVisual study={study} />
                  <div className="afterimage-study-caption"><div><span className="afterimage-study-label">{study.label}</span><h3>{study.title}</h3></div><p>{study.description}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="build" className="afterimage-build section-dark" aria-labelledby="build-title">
        <div className="container noirum-container">
          <div className="afterimage-build-head">
            <Reveal variant="clip"><p className="afterimage-index">03 / HOW WE BUILD</p></Reveal>
            <Reveal variant="side" delay={0.08}>
              <h2 id="build-title" className="afterimage-display">DIRECTION <span>→</span> DESIGN <span>→</span> DEVELOPMENT <span>→</span> DELIVERY</h2>
              <p className="afterimage-section-lead">Cada projeto começa pelo que precisa ser entendido, ganha forma antes do código e é revisado para existir fora do mockup.</p>
            </Reveal>
          </div>
          <div className="afterimage-build-track" aria-label="Como a Noirum constrói um projeto">
            <motion.span className="afterimage-build-progress" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "0px 0px -12%" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} aria-hidden="true" />
            {buildSteps.map(([number, title, question], index) => (
              <Reveal className="afterimage-build-step" key={number} variant="lift" delay={index * 0.08}>
                <span className="afterimage-build-number">{number}</span>
                <h3>{title}</h3>
                <p>{question}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="afterimage-build-note" variant="side" delay={0.18}>
            <Check size={17} aria-hidden="true" />
            <p>Responsividade, semântica, fundamentos de SEO, acessibilidade e estados preparados para uso real fazem parte da base.</p>
          </Reveal>
        </div>
      </section>

      <section id="studio" className="afterimage-studio section-stone" aria-labelledby="studio-title">
        <div className="container noirum-container afterimage-studio-grid">
          <Reveal className="afterimage-studio-copy" variant="clip">
            <p className="afterimage-index">04 / STUDIO</p>
            <h2 id="studio-title" className="afterimage-display afterimage-display--stone">INDEPENDENT.<br /><span>BY DESIGN.</span></h2>
            <p className="afterimage-studio-lead">Eu sou Luiz Felipe Meneses, desenvolvedor web independente e criador da Noirum Studios. Trabalho entre direção, design e desenvolvimento.</p>
            <div className="afterimage-studio-meta"><span>BASE / BRAZIL</span><span>DISPONIBILIDADE E ESCOPO / CONVERSA INICIAL</span></div>
          </Reveal>
          <Reveal className="afterimage-studio-visual" variant="side" delay={0.12}>
            <Image src="/visuals/brutalist-night.jpg" alt="Geometria de um edifício brutalista em preto e branco" fill sizes="(max-width: 900px) 100vw, 44vw" loading="lazy" />
            <span>IMAGE / ARCHIVE / NOT A PORTRAIT</span>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="afterimage-contact section-dark" aria-labelledby="contact-title">
        <div className="container noirum-container afterimage-contact-grid">
          <Reveal className="afterimage-contact-copy" variant="clip">
            <p className="afterimage-index">05 / START A PROJECT</p>
            <h2 id="contact-title" className="afterimage-display">HAVE A PROJECT?<br /><span>MAKE IT UNFORGETTABLE.</span></h2>
            <p className="afterimage-contact-lead">Conte o que existe, o que precisa mudar e onde você quer chegar. O resto a gente estrutura juntos.</p>
            <div className="afterimage-contact-channels"><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { placement: "contact" })}>WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a><a href="mailto:menesesluiz@gmail.com">E-mail <Mail size={15} aria-hidden="true" /></a></div>
          </Reveal>
          <Reveal variant="side" delay={0.1}>
            <form id="briefing" className="afterimage-form" onSubmit={handleSubmit} onChange={() => formState !== "idle" && setFormState("idle")} noValidate>
              <div className="afterimage-form-row">
                <label htmlFor="name">Nome<input id="name" name="name" placeholder="Seu nome" autoComplete="name" required aria-invalid={formState === "error"} /></label>
                <label htmlFor="email">E-mail<input id="email" name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" required aria-invalid={formState === "error"} /></label>
              </div>
              <label htmlFor="projectType">Tipo de projeto<select id="projectType" name="projectType" defaultValue="" required aria-invalid={formState === "error"}><option value="" disabled>Selecione uma opção</option><option>Site institucional premium</option><option>Landing page</option><option>Ainda avaliando</option></select></label>
              <label htmlFor="message">Contexto<textarea id="message" name="message" rows={4} placeholder="O que existe e o que precisa mudar?" /></label>
              <p className="afterimage-form-helper">Você envia contexto. Luiz responde para entender o cenário antes de qualquer proposta.</p>
              {formState === "error" && <p className="afterimage-form-feedback afterimage-form-feedback--error" role="alert">Preencha nome, e-mail e tipo de projeto para continuar.</p>}
              {formState === "success" && <p className="afterimage-form-feedback afterimage-form-feedback--success" role="status">WhatsApp aberto. Se preferir, você também pode continuar por e-mail.</p>}
              <button className="button button--light afterimage-form-submit" type="submit" onClick={() => trackEvent("form_start", { placement: "contact" })}>Conversar sobre um projeto <Send size={15} aria-hidden="true" /></button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="afterimage-endmark section-dark" aria-label="Fechamento"><div className="container noirum-container"><span>NOIRUM — AFTERIMAGE</span><span>06 / 06</span></div></section>
    </main>
  )
}
