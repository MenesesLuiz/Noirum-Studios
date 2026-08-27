import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export type LegalSection = {
  title: string
  content: React.ReactNode
}

type LegalPageProps = {
  title: string
  summary: string
  updated: string
  sections: LegalSection[]
}

export function LegalPage({ title, summary, updated, sections }: LegalPageProps) {
  return (
    <main className="legal-page section-dark">
      <section className="legal-hero">
        <div className="container noirum-container legal-hero-inner">
          <div>
            <Link href="/" className="back-link"><ArrowLeft size={14} /> Voltar para a home</Link>
            <p className="legal-kicker">Noirum Studios / transparência</p>
            <h1 className="display-heading display-heading--service">{title}</h1>
            <p className="legal-summary">{summary}</p>
          </div>
          <div className="legal-meta"><span>Última atualização</span><strong>{updated}</strong><span>Responsável</span><strong>Luiz Felipe Meneses</strong></div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container noirum-container legal-content-grid">
          <aside className="legal-index" aria-label="Navegação do documento">
            <span className="legal-index-label">Neste documento</span>
            <ol>{sections.map((section, index) => <li key={section.title}><a href={`#legal-${index + 1}`}>{String(index + 1).padStart(2, "0")} <span>{section.title}</span></a></li>)}</ol>
          </aside>
          <article className="legal-article">
            {sections.map((section, index) => <section id={`legal-${index + 1}`} className="legal-article-section" key={section.title}><p className="legal-section-number">{String(index + 1).padStart(2, "0")}</p><h2>{section.title}</h2><div>{section.content}</div></section>)}
            <div className="legal-contact"><p>Se algo não estiver claro, escreva para mim.</p><a href="mailto:menesesluiz@gmail.com">menesesluiz@gmail.com <ArrowUpRight size={14} aria-hidden="true" /></a></div>
          </article>
        </div>
      </section>
    </main>
  )
}
