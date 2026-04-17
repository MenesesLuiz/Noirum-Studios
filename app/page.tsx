import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Stats } from "@/components/sections/stats"
import { About } from "@/components/sections/about"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <Process />
      </section>
      <Stats />
      <section id="about">
        <About />
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
