"use client"

import { FormEvent, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

const whatsappNumber = "5594992810971"

const projects = [
  {
    id: "01",
    type: "Direção demonstrativa",
    title: "Sistemas institucionais",
    description:
      "Uma presença digital construída para explicar negócios complexos com clareza, autoridade e espaço para crescimento.",
    meta: "Institucional / Arquitetura de conteúdo",
    image: "/visuals/brutalist-night.jpg",
    alt: "Fachada brutalista em preto e branco durante a noite",
    align: "left",
  },
  {
    id: "02",
    type: "Direção demonstrativa",
    title: "Landing pages de conversão",
    description:
      "Páginas que organizam atenção em torno de uma decisão: uma mensagem forte, uma prova clara e um próximo passo sem ruído.",
    meta: "Campanha / Conversão",
    image: "/visuals/monitor-detail.jpg",
    alt: "Detalhe de monitor e teclado em um ambiente de trabalho com pouca luz",
    align: "right",
  },
  {
    id: "03",
    type: "Sistema visual",
    title: "Infraestrutura que sustenta",
    description:
      "Design, performance, SEO e segurança tratados como uma única camada de engenharia — não como remendos depois do lançamento.",
    meta: "Performance / Engenharia web",
    image: "/visuals/server-racks.jpg",
    alt: "Racks de servidores com luzes de status em ambiente escuro",
    align: "left",
  },
]

const faqs = [
  {
    question: "Quanto custa um site premium?",
    answer:
      "O investimento depende do escopo, da profundidade de conteúdo e das integrações necessárias. A conversa inicial serve para entender o cenário antes de sugerir uma estrutura de projeto.",
  },
  {
    question: "Quanto tempo leva para construir?",
    answer:
      "O prazo é definido depois do planejamento e varia conforme o número de páginas, a disponibilidade de conteúdo e o nível de customização. O cronograma é organizado por fases, não por estimativas genéricas.",
  },
  {
    question: "O site será responsivo e preparado para SEO?",
    answer:
      "Sim. Responsividade, estrutura semântica, fundamentos técnicos de SEO e carregamento eficiente fazem parte da base de construção, não de uma etapa opcional.",
  },
  {
    question: "Vocês cuidam de hospedagem, suporte e alterações?",
    answer:
      "Esses pontos são alinhados conforme a necessidade de cada projeto. No contato inicial, você pode informar o que já existe e o que precisa ser estruturado para que o escopo seja claro.",
  },
  {
    question: "Como funciona o processo?",
    answer:
      "O trabalho passa por planejamento estratégico, construção exclusiva, ajustes de retenção e conversão, e lançamento com uma base pronta para acompanhar o crescimento.",
  },
]

function trackEvent(name: string, data?: Record<string, string>) {
  if (typeof window !== "undefined") {
    const umami = (window as Window & { umami?: { track: (event: string, data?: Record<string, string>) => void } }).umami
    umami?.track(name, data)
  }
}

export function EngineeringScan() {
  const scanRef = useScrollTarget()
  const reducedMotion = useReducedMotion()
  const scanX = useTransform(scanRef.scroll, [0, 1], ["12%", "88%"])
  const blueprintClip = useTransform(scanRef.scroll, [0, 1], ["inset(0 88% 0 0)", "inset(0 12% 0 0)"])
  const blueprintOpacity = useTransform(scanRef.scroll, [0, 0.5, 1], reducedMotion ? [0.7, 0.8, 0.9] : [0.35, 0.72, 0.9])

  return (
    <section className="scan-section section-dark" aria-labelledby="scan-title">
      <div className="container noirum-container">
        <div className="section-kicker">
          <span>01</span>
          <span>Por baixo da superfície</span>
        </div>
        <div className="scan-intro">
          <h2 id="scan-title" className="display-heading display-heading--medium">
            Bonito na frente. <span>preciso por baixo.</span>
          </h2>
          <p>
            A mesma atenção que você percebe no design existe na estrutura: conteúdo, interface, código e performance trabalhando em uma única direção.
          </p>
        </div>

        <div ref={scanRef.ref} className="scan-viewport">
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
                <span>digital architecture / 2026</span>
                <strong>Surface<br />with intent.</strong>
                <div className="scan-finished-rule" />
                <small>Institutional system · performance · conversion</small>
              </div>
              <div className="scan-finished-blocks" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          <motion.div className="scan-blueprint" style={reducedMotion ? undefined : { clipPath: blueprintClip, opacity: blueprintOpacity }} aria-hidden="true">
            <div className="blueprint-label">NOIRUM / SYSTEM MAP / 001</div>
            <div className="blueprint-lines">
              <div className="blueprint-window blueprint-window--large"><span>HERO / VALUE PROP</span></div>
              <div className="blueprint-window blueprint-window--small"><span>CTA / PRIMARY</span></div>
              <div className="blueprint-window blueprint-window--tall"><span>CONTENT / PROOF</span></div>
              <div className="blueprint-cross blueprint-cross--one" />
              <div className="blueprint-cross blueprint-cross--two" />
            </div>
          </motion.div>

          {!reducedMotion && <motion.div className="scan-line" style={{ left: scanX }} aria-hidden="true"><span /></motion.div>}
          <div className="scan-footnote">
            <span>Scroll to inspect</span>
            <ArrowDown size={14} strokeWidth={1.4} />
          </div>
        </div>
      </div>
    </section>
  )
}

function useScrollTarget() {
  const ref = useScrollRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  return { ref, scroll: scrollYProgress }
}

function useScrollRef() {
  return useRef<HTMLDivElement>(null)
}

export function NoirumHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [formState, setFormState] = useState<"idle" | "error" | "success">("idle")
  const reducedMotion = useReducedMotion()

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
          <img src="/visuals/server-room.jpg" alt="Corredor de racks em um data center com luz fria" className="hero-image" />
          <div className="image-fringe image-fringe--cyan" aria-hidden="true" />
          <div className="image-fringe image-fringe--magenta" aria-hidden="true" />
          <div className="hero-image-caption"><span>NOIRUM / 001</span><span>ENGINEERED DIGITAL PRESENCE</span></div>
        </div>
        <div className="hero-copy-column">
          <div className="hero-copy-inner">
            <div className="credibility-line"><span className="credibility-marks">● ● ● ●</span><span>Web premium para negócios que exigem clareza</span></div>
            <h1 id="hero-title" className="display-heading display-heading--hero">
              Desenvolvimento Web <em>para a Elite Digital.</em>
            </h1>
            <p className="hero-description">
              A Noirum Studios constrói sites institucionais de alta performance e landing pages desenhadas para transformar atenção em movimento.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button--light" onClick={() => trackEvent("hero_cta", { placement: "hero" })}>Solicitar proposta <ArrowUpRight size={16} /></a>
              <a href="#projects" className="button button--ghost" onClick={() => trackEvent("project_view", { placement: "hero" })}>Ver projetos <ArrowRight size={16} /></a>
            </div>
            <div className="hero-trust">
              <span>CAPACIDADES CENTRAIS</span>
              <div className="trust-list"><span>Design sob medida</span><span>Performance</span><span>Segurança</span></div>
            </div>
          </div>
          <a className="hero-scroll" href="#scan" aria-label="Ir para a seção de engenharia"><span>Scroll para explorar</span><ArrowDown size={16} /></a>
        </div>
      </section>

      <div id="scan"><EngineeringScan /></div>

      <section className="credibility-section section-stone" aria-labelledby="credibility-title">
        <div className="stone-grid" aria-hidden="true" />
        <div className="container noirum-container credibility-layout">
          <div className="section-kicker section-kicker--dark"><span>02</span><span>O que muda</span></div>
          <div>
            <h2 id="credibility-title" className="display-heading display-heading--stone">Sites que parecem à altura <span>do negócio que representam.</span></h2>
            <p className="stone-lead">Não entregamos apenas uma camada visual. Organizamos posicionamento, interface, conteúdo e base técnica para que sua presença digital carregue o mesmo peso da sua operação.</p>
          </div>
          <div className="capability-strip" aria-label="Capacidades da Noirum">
            {[
              ["01", "Clareza", "A proposta certa aparece antes do ruído."],
              ["02", "Conversão", "Cada próximo passo tem uma função."],
              ["03", "Performance", "Menos espera. Mais atenção disponível."],
              ["04", "Segurança", "Base preparada para operar com confiança."],
            ].map(([number, title, text]) => <div className="capability-item" key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section section-dark" aria-labelledby="projects-title">
        <div className="container noirum-container">
          <div className="section-heading-row">
            <div><div className="section-kicker"><span>03</span><span>Direções selecionadas</span></div><h2 id="projects-title" className="display-heading display-heading--medium">O trabalho começa <span>na percepção.</span></h2></div>
            <p className="section-aside">Construímos sistemas digitais com intenção editorial, precisão de interface e espaço para o negócio respirar.</p>
          </div>
          <div className="projects-list">
            {projects.map((project, index) => <article className={`project-item project-item--${project.align}`} key={project.id} onMouseEnter={() => trackEvent("project_open", { project: project.id })}>
              <div className="project-visual">
                <img src={project.image} alt={project.alt} loading={index === 0 ? "eager" : "lazy"} />
                <div className="project-overlay" aria-hidden="true" />
                <span className="project-index">{project.id}</span>
                <span className="project-view">Abrir direção <ArrowUpRight size={15} /></span>
              </div>
              <div className="project-copy">
                <span className="micro-label">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta"><span>{project.meta}</span><span>NOIRUM / DEMO</span></div>
              </div>
            </article>)}
          </div>
          <p className="project-disclaimer">As imagens acima apresentam direções visuais demonstrativas. Casos, clientes e resultados publicados entram nesta camada somente após validação.</p>
        </div>
      </section>

      <section id="services" className="services-section section-stone" aria-labelledby="services-title">
        <div className="container noirum-container">
          <div className="section-kicker section-kicker--dark"><span>04</span><span>O que construímos</span></div>
          <div className="services-heading"><h2 id="services-title" className="display-heading display-heading--stone">Duas ofertas.<br /><span>Uma base exigente.</span></h2><p>Você compra clareza, credibilidade e estrutura digital — com cada detalhe de engenharia trabalhando a favor disso.</p></div>
          <div className="service-rows">
            <article className="service-row"><div className="service-number">01</div><div className="service-copy"><span className="micro-label micro-label--dark">Oferta principal</span><h3>Sites Institucionais Premium</h3><p>Uma presença digital sob medida para empresas que precisam explicar o que fazem, sustentar autoridade e abrir espaço para novas conversas.</p><a href="/servicos/site-institucional" className="inline-link inline-link--dark">Conhecer a oferta <ArrowUpRight size={15} /></a></div><div className="service-visual service-visual--architecture"><div className="service-visual-top"><span>CONTENT SYSTEM</span><span>01 / 02</span></div><div className="service-visual-title">A digital<br />headquarters.</div><div className="service-visual-line" /></div></article>
            <article className="service-row service-row--reverse"><div className="service-number">02</div><div className="service-copy"><span className="micro-label micro-label--dark">Oferta principal</span><h3>Landing Pages de Alta Conversão</h3><p>Uma página com mensagem, prova e caminho de decisão organizados para campanhas, ofertas e lançamentos que não podem desperdiçar atenção.</p><a href="/servicos/landing-pages" className="inline-link inline-link--dark">Conhecer a oferta <ArrowUpRight size={15} /></a></div><div className="service-visual service-visual--conversion"><div className="conversion-signal">CONVERSION<br /><strong>PATH</strong></div><div className="conversion-metric"><span>signal / 02</span><b>01 clear next step</b></div><div className="conversion-line" /></div></article>
          </div>
        </div>
      </section>

      <section className="benefits-section section-dark" aria-labelledby="benefits-title">
        <div className="container noirum-container">
          <div className="section-kicker"><span>05</span><span>Por que Noirum</span></div>
          <div className="benefits-heading"><h2 id="benefits-title" className="display-heading display-heading--medium">Engenharia que aparece <span>no resultado.</span></h2><p>O valor de um site bem construído não fica preso no código. Ele aparece na forma como sua marca é percebida e na facilidade de avançar.</p></div>
          <div className="benefits-grid">
            <article className="benefit-card benefit-card--large"><span className="benefit-symbol">↗</span><span className="micro-label">01 / Percepção</span><h3>Mais autoridade antes da primeira conversa.</h3><p>Uma interface precisa reduz dúvidas, organiza complexidade e faz o negócio parecer tão claro quanto ele é por dentro.</p></article>
            <article className="benefit-card"><span className="benefit-symbol">→</span><span className="micro-label">02 / Conversão</span><h3>Menos distração entre interesse e ação.</h3><p>Conteúdo, hierarquia e CTA são desenhados como um único fluxo.</p></article>
            <article className="benefit-card"><span className="benefit-symbol">◌</span><span className="micro-label">03 / Velocidade</span><h3>Mais tempo de atenção disponível.</h3><p>Carregamento, responsividade e arquitetura limpa sustentam a experiência em qualquer tela.</p></article>
            <article className="benefit-card benefit-card--wide"><span className="benefit-symbol">⌁</span><span className="micro-label">04 / Continuidade</span><h3>Uma base que não envelhece no lançamento.</h3><p>O projeto nasce com decisões organizadas para receber novas páginas, integrações e aprendizados sem virar um acúmulo de remendos.</p></article>
          </div>
        </div>
      </section>

      <section id="process" className="process-section section-stone" aria-labelledby="process-title">
        <div className="container noirum-container">
          <div className="section-kicker section-kicker--dark"><span>06</span><span>Metodologia</span></div>
          <div className="process-heading"><h2 id="process-title" className="display-heading display-heading--stone">Precisão em <span>cada fase.</span></h2><p>Um fluxo de trabalho técnico e controlado para transformar uma decisão de negócio em um sistema digital pronto para operar.</p></div>
          <div className="process-line" aria-hidden="true" />
          <div className="process-grid">
            {[
              ["01", "Planejamento Estratégico", "Imersão no cenário, nos objetivos e na experiência ideal antes da concepção visual e técnica."],
              ["02", "Construção Exclusiva", "Uma base sólida e sob medida para a marca, com decisões visuais e técnicas documentadas."],
              ["03", "Retenção e Conversão", "Ajustes de hierarquia, conteúdo e velocidade para manter atenção e facilitar a próxima ação."],
              ["04", "Lançamento e Crescimento", "Entrega polida, responsiva e organizada para acompanhar novas necessidades do negócio."],
            ].map(([number, title, text]) => <article className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="engineering-section section-dark" aria-labelledby="engineering-title">
        <div className="container noirum-container engineering-layout">
          <div><div className="section-kicker"><span>07</span><span>Critérios de engenharia</span></div><h2 id="engineering-title" className="display-heading display-heading--medium">A camada invisível também <span>precisa convencer.</span></h2><p className="engineering-lead">Performance não é um número isolado no rodapé. É a consequência de boas decisões repetidas ao longo do projeto.</p></div>
          <div className="engineering-proof"><div className="proof-word">SEMÂNTICA</div><div className="proof-word">RESPONSIVO</div><div className="proof-word">ACESSÍVEL</div><div className="proof-word">ESCALÁVEL</div><div className="proof-word">SEGURO</div><div className="proof-note"><ShieldCheck size={18} strokeWidth={1.3} /><span>A arquitetura de auditoria está pronta para receber dados reais de cada projeto antes de sua publicação.</span></div></div>
        </div>
      </section>

      <section className="testimonial-section section-stone" aria-labelledby="testimonial-title">
        <div className="container noirum-container testimonial-layout"><div className="quote-mark">“</div><div><div className="section-kicker section-kicker--dark"><span>08</span><span>Prova social</span></div><h2 id="testimonial-title" className="display-heading display-heading--stone">A confiança entra aqui <span>quando for comprovada.</span></h2><p className="testimonial-placeholder">Este espaço está preparado para receber depoimentos reais, com nome, cargo e contexto verificáveis. Nenhuma frase genérica substitui uma experiência publicada com permissão.</p><span className="micro-label micro-label--dark">SISTEMA DE DEPOIMENTOS / AGUARDANDO MATERIAL VALIDADO</span></div></div>
      </section>

      <section id="about" className="about-section section-dark" aria-labelledby="about-title">
        <div className="container noirum-container about-layout"><div className="about-image"><img src="/visuals/brutalist-night.jpg" alt="Geometria de um edifício brutalista em preto e branco" loading="lazy" /><div className="about-image-note">NOIRUM STUDIOS / DIGITAL ENGINEERING</div></div><div className="about-copy"><div className="section-kicker"><span>09</span><span>Sobre Noirum</span></div><h2 id="about-title" className="display-heading display-heading--medium">Uma unidade de engenharia para marcas que <span>não aceitam o básico.</span></h2><p>A Noirum Studios trabalha na intersecção entre direção visual e desenvolvimento web. O foco é construir presenças digitais premium para negócios que entendem que o site não é um adereço: é parte da operação.</p><p>Somos seletivos no detalhe, diretos no processo e cuidadosos com o que colocamos no ar. O resultado precisa ser bonito, rápido, explicável e pronto para evoluir.</p><a href="#contact" className="inline-link">Falar sobre um projeto <ArrowUpRight size={15} /></a></div></div>
      </section>

      <section className="faq-section section-dark" aria-labelledby="faq-title"><div className="container noirum-container"><div className="section-kicker"><span>10</span><span>Perguntas frequentes</span></div><div className="faq-layout"><h2 id="faq-title" className="display-heading display-heading--medium">Clareza antes <span>do contrato.</span></h2><div className="faq-list">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <div className="faq-item" key={faq.question}><button className="faq-button" type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{faq.question}</span><span className={`faq-icon ${isOpen ? "is-open" : ""}`}><Plus size={18} strokeWidth={1.4} /></span></button><div className={`faq-answer ${isOpen ? "is-open" : ""}`}><p>{faq.answer}</p></div></div> })}</div></div></div></section>

      <section id="contact" className="contact-section section-stone" aria-labelledby="contact-title"><div className="container noirum-container contact-layout"><div className="contact-copy"><div className="section-kicker section-kicker--dark"><span>11</span><span>Próximo passo</span></div><h2 id="contact-title" className="display-heading display-heading--stone">Seu próximo site pode começar <span>aqui.</span></h2><p>Conte sobre o projeto. A Noirum entra em contato para entender escopo, objetivo e próximos passos.</p><div className="contact-fallback"><span>Prefere conversar direto?</span><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { placement: "contact" })}>Abrir WhatsApp <ArrowUpRight size={15} /></a></div></div><form className="lead-form" onSubmit={handleSubmit} noValidate><div className="form-row"><label>Nome <input name="name" placeholder="Seu nome" autoComplete="name" /></label><label>Empresa <input name="company" placeholder="Nome da empresa" autoComplete="organization" /></label></div><div className="form-row"><label>E-mail <input name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" /></label><label>Tipo de projeto <select name="projectType" defaultValue=""><option value="" disabled>Selecione</option><option>Site institucional premium</option><option>Landing page de alta conversão</option><option>Ainda avaliando</option></select></label></div><div className="form-row"><label>Objetivo <input name="objective" placeholder="O que precisa mudar?" /></label><label>Prazo <input name="timeline" placeholder="Existe uma data importante?" /></label></div><label>Mensagem <textarea name="message" rows={4} placeholder="Contexto, desafio e o que você espera do projeto." /></label>{formState === "error" && <p className="form-feedback form-feedback--error" role="alert">Preencha nome, e-mail e tipo de projeto para continuar.</p>}{formState === "success" && <p className="form-feedback form-feedback--success" role="status">WhatsApp aberto. Se preferir, você também pode continuar por e-mail.</p>}<button className="button button--ink form-submit" type="submit" onClick={() => trackEvent("form_start", { placement: "contact" })}>Enviar briefing <Send size={15} /></button></form></div></section>

      <section className="final-line section-dark" aria-label="Fechamento"><div className="container noirum-container final-line-inner"><span>NOIRUM STUDIOS</span><span>DESIGN / ENGINEERING / CONVERSION</span><span>2026</span></div></section>
    </main>
  )
}
