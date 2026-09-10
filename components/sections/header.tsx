"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Offers", href: "/#offers" },
  { label: "How we build", href: "/#build" },
  { label: "Studio", href: "/#studio" },
]

const proposalUrl = "/#contact"
const primaryLabel = "Conversar sobre um projeto"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuTriggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
    window.requestAnimationFrame(() => menuTriggerRef.current?.focus())
  }

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const menu = menuRef.current
    if (!menu) return

    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const getFocusableElements = () => Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector))
    const focusFrame = window.requestAnimationFrame(() => getFocusableElements()[0]?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key !== "Tab") return

      const focusableElements = getFocusableElements()
      if (!focusableElements.length) return

      const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)
      const isFirst = currentIndex <= 0
      const isLast = currentIndex === focusableElements.length - 1

      if (event.shiftKey && isFirst) {
        event.preventDefault()
        focusableElements[focusableElements.length - 1]?.focus()
      } else if (!event.shiftKey && (isLast || currentIndex === -1)) {
        event.preventDefault()
        focusableElements[0]?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <LazyMotion features={domAnimation}>
      <>
      <m.header
        initial={{ y: -12 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="container noirum-container site-header-inner">
          <Link href="/" className="site-logo" aria-label="Noirum Studios, início">
            <Image src="/logo-header.webp" alt="Noirum Studios" width={300} height={90} priority />
          </Link>

          <nav className="site-nav" aria-label="Navegação principal">
            {navLinks.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}
          </nav>

          <Link href={proposalUrl} className="header-cta">{primaryLabel} <ArrowUpRight size={14} /></Link>

          <button ref={menuTriggerRef} type="button" className="mobile-menu-toggle" aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu" onClick={isMobileMenuOpen ? closeMenu : () => setIsMobileMenuOpen(true)}>
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
          </button>
        </div>
      </m.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div ref={menuRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu principal">
            <nav aria-label="Navegação mobile">
              {navLinks.map((link, index) => <m.div key={link.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05, duration: 0.35 }}><Link href={link.href} onClick={closeMenu}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></Link></m.div>)}
            </nav>
            <Link href={proposalUrl} className="button button--light mobile-menu-cta" onClick={closeMenu}>{primaryLabel} <ArrowUpRight size={16} /></Link>
            <div className="mobile-menu-foot"><span>NOIRUM STUDIOS</span><span>LUIZ FELIPE MENESES</span></div>
          </m.div>
        )}
      </AnimatePresence>
      </>
    </LazyMotion>
  )
}
