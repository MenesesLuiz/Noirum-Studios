import type { Metadata } from "next"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { LegalPage } from "@/components/sections/legal-page"

export const metadata: Metadata = {
  title: "Termos de uso e prestação de serviços — Noirum Studios",
  description: "As condições gerais para a utilização deste site e para a prestação dos meus serviços de desenvolvimento web.",
  alternates: { canonical: "https://noirum-studios.vercel.app/termos" },
  openGraph: {
    title: "Termos de uso e prestação de serviços — Noirum Studios",
    description: "As condições gerais para a utilização deste site e para a prestação dos meus serviços de desenvolvimento web.",
    url: "https://noirum-studios.vercel.app/termos",
    siteName: "Noirum Studios",
    locale: "pt_BR",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalPage
        title="Termos de uso e prestação de serviços"
        summary="As condições gerais para a utilização deste site e para a prestação dos meus serviços de desenvolvimento web."
        updated="21/04/2026"
        sections={[
          {
            title: "Quem sou eu?",
            content: <p>A Noirum Studios é o nome fantasia sob o qual eu, Luiz Felipe Meneses, profissional autônomo e desenvolvedor web, ofereço serviços de criação de sites institucionais e landing pages.</p>,
          },
          {
            title: "Sobre os serviços",
            content: <p>Ofereço serviços focados em design e desenvolvimento web. As especificações exatas, incluindo páginas, funcionalidades, prazos e valores, são definidas em uma proposta formal e/ou contrato específico aprovado antes do início dos trabalhos.</p>,
          },
          {
            title: "Responsabilidades do cliente",
            content: <><p>Para que o projeto avance, você se compromete a:</p><ul><li>Fornecer os textos, imagens, logotipos e demais materiais necessários no prazo combinado.</li><li>Garantir que possui os direitos autorais ou licença de uso dos materiais fornecidos.</li><li>Realizar os pagamentos conforme acordado na proposta comercial.</li></ul></>,
          },
          {
            title: "Minhas responsabilidades",
            content: <><p>Como seu desenvolvedor, comprometo-me a:</p><ul><li>Entregar o projeto conforme o escopo definido na proposta aprovada.</li><li>Garantir o funcionamento técnico do site no momento da entrega.</li><li>Manter a confidencialidade sobre estratégias de negócio e dados sensíveis compartilhados durante a criação do projeto.</li></ul></>,
          },
          {
            title: "Limitação de responsabilidade",
            content: <><p>Como atuo desenvolvendo o software, o código e o layout, não me responsabilizo por:</p><ul><li>Quedas de servidor, instabilidades na hospedagem ou problemas no registro do domínio.</li><li>Invasões ou ataques cibernéticos ao site após a entrega. Manutenção contínua e serviços específicos de segurança podem ser contratados conforme a necessidade.</li><li>Resultados de vendas ou conversões das landing pages, que também dependem de tráfego, anúncios, oferta e operação.</li></ul></>,
          },
          {
            title: "Propriedade intelectual",
            content: <p>Após a quitação integral do valor acordado, os direitos patrimoniais sobre o layout desenvolvido para o projeto são transferidos para você. A Noirum Studios pode exibir capturas de tela e links do projeto concluído em seu portfólio e redes sociais, salvo acordo em contrário.</p>,
          },
          {
            title: "Foro e contato",
            content: <><p>Para dirimir dúvidas oriundas deste documento, fica eleito o foro da comarca de Parauapebas, PA.</p><p>Para dúvidas sobre estes termos, escreva para <a href="mailto:menesesluiz@gmail.com">menesesluiz@gmail.com</a>.</p></>,
          },
        ]}
      />
      <Footer />
    </>
  )
}
