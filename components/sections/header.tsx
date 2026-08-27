"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Projetos", href: "/#projects" },
  { label: "Serviços", href: "/#services" },
  { label: "Processo", href: "/#process" },
  { label: "Sobre", href: "/#about" },
]

const proposalUrl = "/#contact"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="container noirum-container site-header-inner">
          <Link href="/" className="site-logo" aria-label="Noirum Studios — início">
            <Image src="/logo-header.webp" alt="Noirum Studios" width={300} height={90} priority />
          </Link>

          <nav className="site-nav" aria-label="Navegação principal">
            {navLinks.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}
          </nav>

          <Link href={proposalUrl} className="header-cta">Solicitar proposta <span aria-hidden="true">↗</span></Link>

          <button type="button" className="mobile-menu-toggle" aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((open) => !open)}>
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu principal">
            <nav aria-label="Navegação mobile">
              {navLinks.map((link, index) => <motion.div key={link.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05, duration: 0.35 }}><Link href={link.href} onClick={closeMenu}>{link.label}<span aria-hidden="true">↗</span></Link></motion.div>)}
            </nav>
            <Link href={proposalUrl} className="button button--light mobile-menu-cta" onClick={closeMenu}>Solicitar proposta <span aria-hidden="true">↗</span></Link>
            <div className="mobile-menu-foot"><span>NOIRUM STUDIOS</span><span>DESIGN / ENGINEERING</span></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
