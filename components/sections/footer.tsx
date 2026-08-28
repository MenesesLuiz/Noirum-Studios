import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerGroups = [
  {
    title: "Explorar",
    links: [["Work", "/#work"], ["Offers", "/#offers"], ["How we build", "/#build"], ["Studio", "/#studio"]],
  },
  {
    title: "Serviços",
    links: [["Sites institucionais", "/servicos/site-institucional"], ["Landing pages", "/servicos/landing-pages"]],
  },
  {
    title: "Transparência",
    links: [["Privacidade", "/privacidade"], ["Termos", "/termos"], ["Segurança", "/seguranca"]],
  },
  {
    title: "Contato",
    links: [["WhatsApp", "https://wa.me/5594992810971"], ["E-mail", "mailto:menesesluiz@gmail.com"]],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer section-dark">
      <div className="container noirum-container">
        <div className="footer-top">
          <div className="footer-statement">
            <span className="footer-overline">Noirum Studios</span>
            <p>Experiências digitais com direção, design e desenvolvimento.</p>
            <Link href="/#contact" className="footer-primary-link">Conversar sobre um projeto <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </div>
          <div className="footer-links-grid">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <span className="footer-group-title">{group.title}</span>
                <ul>
                  {group.links.map(([label, href]) => {
                    const isExternal = href.startsWith("http") || href.startsWith("mailto")
                    return <li key={label}>{isExternal ? <a href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={13} aria-hidden="true" /></a> : <Link href={href}>{label}<ArrowUpRight size={13} aria-hidden="true" /></Link>}</li>
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <Image src="/logo-header.webp" alt="Noirum Studios" width={200} height={60} />
          <div><span>© {currentYear} Noirum Studios</span><span>Luiz Felipe Meneses / desenvolvedor independente</span></div>
        </div>
      </div>
    </footer>
  )
}
