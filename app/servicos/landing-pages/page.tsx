import type { Metadata } from "next"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { ServicePage } from "@/components/sections/service-page"

export const metadata: Metadata = {
  title: "Landing pages — Noirum Studios",
  description: "Landing pages para organizar uma oferta específica, reduzir ruído e dar contexto à decisão.",
  alternates: { canonical: "https://noirum-studios.vercel.app/servicos/landing-pages" },
  openGraph: {
    title: "Landing pages — Noirum Studios",
    description: "Landing pages para organizar uma oferta específica, reduzir ruído e dar contexto à decisão.",
    url: "https://noirum-studios.vercel.app/servicos/landing-pages",
    siteName: "Noirum Studios",
    locale: "pt_BR",
    type: "website",
  },
}

export default function LandingPagesPage() {
  return (
    <>
      <Header />
      <ServicePage kind="landing" />
      <Footer />
    </>
  )
}
