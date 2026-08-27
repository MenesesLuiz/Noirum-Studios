"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const footerGroups = [
  {
    title: "Agência",
    links: [
      ["Sobre", "/#about"],
      ["Processo", "/#process"],
    ],
  },
  {
    title: "Serviços",
    links: [
      ["Sites institucionais", "/servicos/site-institucional"],
      ["Landing pages", "/servicos/landing-pages"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacidade", "/privacidade"],
      ["Termos", "/termos"],
      ["Segurança", "/seguranca"],
    ],
  },
  {
    title: "Contato",
    links: [
      ["WhatsApp", "https://wa.me/5594992810971"],
      ["E-mail", "mailto:menesesluizf@gmail.com"],
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer section-dark">
      <div className="container noirum-container">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="footer-top">
          <div className="footer-statement"><span className="micro-label">Noirum Studios</span><p>Presença digital com direção, engenharia e intenção.</p></div>
          <div className="footer-links-grid">
            {footerGroups.map((group) => <div key={group.title}><span className="footer-group-title">{group.title}</span><ul>{group.links.map(([label, href]) => <li key={label}><a href={href} target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{label}<span aria-hidden="true">↗</span></a></li>)}</ul></div>)}
          </div>
        </motion.div>
        <div className="footer-bottom"><Image src="/logo-header.webp" alt="Noirum Studios" width={200} height={60} /><div><span>© {currentYear} Noirum Studios</span><span>Todos os sistemas operacionais</span></div></div>
      </div>
    </footer>
  )
}
