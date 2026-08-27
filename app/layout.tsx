import type { Metadata } from "next"
import { Geist, Geist_Mono, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-body" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const sora = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["400", "600", "700", "800"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://noirum-studios.vercel.app"),
  title: "Noirum Studios — Desenvolvimento Web para a Elite Digital.",
  description: "Sites institucionais premium e landing pages de alta conversão, construídos com direção visual e engenharia web.",
  generator: "Noirum Studios",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Noirum Studios — Desenvolvimento Web para a Elite Digital.",
    description: "Presenças digitais premium, precisas e prontas para operar.",
    url: "https://noirum-studios.vercel.app",
    siteName: "Noirum Studios",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noirum Studios — Desenvolvimento Web para a Elite Digital.",
    description: "Sites institucionais premium e landing pages de alta conversão.",
  },
  icons: { icon: "/logo-mini.webp" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} ${sora.variable} bg-[#181818] scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
