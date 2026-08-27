import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { ServicePage } from "@/components/sections/service-page"

export default function SiteInstitucionalPage() {
  return (
    <>
      <Header />
      <ServicePage kind="institutional" />
      <Footer />
    </>
  )
}
