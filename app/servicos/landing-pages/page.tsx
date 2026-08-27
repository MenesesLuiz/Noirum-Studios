import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { ServicePage } from "@/components/sections/service-page"

export default function LandingPagesPage() {
  return (
    <>
      <Header />
      <ServicePage kind="landing" />
      <Footer />
    </>
  )
}
