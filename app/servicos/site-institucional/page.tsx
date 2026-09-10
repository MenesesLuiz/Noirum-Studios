import type { Metadata } from "next"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { ServicePage } from "@/components/sections/service-page"

export const metadata: Metadata = {
  title: "Site institucional premium — Noirum Studios",
  description: "Um site institucional para explicar sua empresa com clareza, organizar autoridade e sustentar a próxima conversa.",
  alternates: { canonical: "https://noirum-studios.vercel.app/servicos/site-institucional" },
  openGraph: {
    title: "Site institucional premium — Noirum Studios",
    description: "Um site institucional para explicar sua empresa com clareza, organizar autoridade e sustentar a próxima conversa.",
    url: "https://noirum-studios.vercel.app/servicos/site-institucional",
    siteName: "Noirum Studios",
    locale: "pt_BR",
    type: "website",
  },
}

export default function SiteInstitucionalPage() {
  return (
    <>
      <Header />
      <ServicePage kind="institutional" />
      <Footer />
    </>
  )
}
