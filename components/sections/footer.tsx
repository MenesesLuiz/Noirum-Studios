"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const footerLinks = {
  agency: [
    { label: "Sobre", href: "#" },
    { label: "Processo", href: "#" },
    { label: "Carreiras", href: "#" },
  ],
  services: [
    { label: "Plataformas Web", href: "#" },
    { label: "Landing Pages", href: "#" },
    { label: "Integração com IA", href: "#" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos", href: "#" },
    { label: "Segurança", href: "#" },
  ],
  contact: [
    { label: "ola@mns.dev", href: "mailto:ola@mns.dev" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16"
        >
          {/* Agency */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Agência</h4>
            <ul className="mt-6 space-y-4">
              {footerLinks.agency.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Serviços</h4>
            <ul className="mt-6 space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Legal</h4>
            <ul className="mt-6 space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Contato</h4>
            <ul className="mt-6 space-y-4">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Image 
              src="/logo-header.webp" 
              alt="Norium Studios Logo" 
              width={200} 
              height={60} 
              className="w-32 md:w-40 h-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-6 text-xs text-zinc-600">
            <span>© {currentYear} Norium Studios</span>
            <span className="hidden md:inline text-zinc-800">•</span>
            <span className="hidden md:inline">Todos os sistemas operacionais</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
