import type { Metadata } from "next"
import { Geist, Geist_Mono, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-body" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const sora = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["400", "600", "700", "800"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://noirum-studios.vercel.app"),
  title: "Noirum Studios — Desenvolvimento web com direção",
  description: "Sites institucionais e landing pages construídos por Luiz Felipe Meneses com direção visual, conteúdo claro e desenvolvimento web cuidadoso.",
  generator: "Noirum Studios",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Noirum Studios — Desenvolvimento web com direção",
    description: "Presença digital clara, sob medida e pronta para ser entendida.",
    url: "https://noirum-studios.vercel.app",
    siteName: "Noirum Studios",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noirum Studios — Desenvolvimento web com direção",
    description: "Sites institucionais e landing pages construídos por Luiz Felipe Meneses.",
  },
  icons: { icon: "/logo-mini.webp" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        {/*
          THESIS: A Noirum traduz complexidade em presença digital clara e recusa a agência genérica que só decora superfícies.
          OWN-WORLD: preto, pedra e ciano pontual; Sora em títulos, Geist no corpo, linhas finas, imagem documental e componentes sem ornamento.
          STORY: o visitante entende quem conduz o trabalho, conhece as duas ofertas, vê como elas são construídas e inicia uma conversa com contexto.
          FIRST VIEWPORT: imagem documental à esquerda, headline em duas linhas à direita, subtexto curto e a ação primária visível no primeiro momento.
          FORM: composição split assimétrica, posição 1 de 7, seed key noirum-v3-global-human-01.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
        */}
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
