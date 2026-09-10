import type { Metadata } from "next"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { LegalPage } from "@/components/sections/legal-page"

export const metadata: Metadata = {
  title: "Política de segurança — Noirum Studios",
  description: "Como trato a segurança da navegação, das informações compartilhadas e das bases digitais que desenvolvo.",
  alternates: { canonical: "https://noirum-studios.vercel.app/seguranca" },
  openGraph: {
    title: "Política de segurança — Noirum Studios",
    description: "Como trato a segurança da navegação, das informações compartilhadas e das bases digitais que desenvolvo.",
    url: "https://noirum-studios.vercel.app/seguranca",
    siteName: "Noirum Studios",
    locale: "pt_BR",
    type: "website",
  },
}

export default function SecurityPage() {
  return (
    <>
      <Header />
      <LegalPage
        title="Política de segurança"
        summary="Como trato a segurança da navegação, das informações compartilhadas e das bases digitais que desenvolvo."
        updated="21/04/2026"
        sections={[
          {
            title: "Navegação segura",
            content: <p>Este site utiliza tecnologia de criptografia SSL, evidenciada pelo cadeado na barra de endereços e pelo prefixo “https”. Dados inseridos nos formulários são criptografados antes de serem transmitidos pela internet.</p>,
          },
          {
            title: "Segurança no desenvolvimento",
            content: <p>Ao criar um site ou landing page, aplico práticas de desenvolvimento limpo e seguro. A segurança contínua também depende de uma boa hospedagem, senhas fortes e atualizações constantes. Manutenção e serviços específicos de segurança podem ser combinados quando fizerem sentido para o projeto.</p>,
          },
          {
            title: "Armazenamento de dados",
            content: <p>Os e-mails, arquivos e informações de projetos que você me envia são armazenados em dispositivos protegidos por senha e antivírus, além de serviços de nuvem com suas próprias medidas de segurança.</p>,
          },
          {
            title: "Limites de segurança",
            content: <p>Adoto práticas comercialmente aceitas para proteger informações pessoais e arquivos de projeto, mas nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro. Não prometo segurança absoluta, e me comprometo a agir rapidamente caso uma vulnerabilidade seja identificada.</p>,
          },
          {
            title: "Contato sobre segurança",
            content: <p>Se você identificar uma vulnerabilidade neste site ou tiver dúvidas sobre como seus dados são protegidos, avise-me pelo e-mail <a href="mailto:menesesluiz@gmail.com">menesesluiz@gmail.com</a>.</p>,
          },
        ]}
      />
      <Footer />
    </>
  )
}
