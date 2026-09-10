import type { Metadata } from "next"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { LegalPage } from "@/components/sections/legal-page"

export const metadata: Metadata = {
  title: "Política de privacidade — Noirum Studios",
  description: "Como eu, Luiz Felipe Meneses, desenvolvedor independente e criador da Noirum Studios, trato as informações compartilhadas neste site.",
  alternates: { canonical: "https://noirum-studios.vercel.app/privacidade" },
  openGraph: {
    title: "Política de privacidade — Noirum Studios",
    description: "Como eu, Luiz Felipe Meneses, desenvolvedor independente e criador da Noirum Studios, trato as informações compartilhadas neste site.",
    url: "https://noirum-studios.vercel.app/privacidade",
    siteName: "Noirum Studios",
    locale: "pt_BR",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <LegalPage
        title="Política de privacidade"
        summary="Como eu, Luiz Felipe Meneses, desenvolvedor independente e criador da Noirum Studios, trato as informações compartilhadas neste site."
        updated="21/04/2026"
        sections={[
          {
            title: "Quem trata seus dados",
            content: <><p>A Noirum Studios é conduzida por mim, Luiz Felipe Meneses, desenvolvedor independente. Esta política explica como coleto, uso e protejo informações ao receber contatos sobre os meus serviços.</p><p>Mesmo atuando como profissional autônomo, comprometo-me a seguir as diretrizes da Lei Geral de Proteção de Dados Pessoais, a LGPD.</p></>,
          },
          {
            title: "Quais dados posso solicitar",
            content: <><p>Para que possamos conversar sobre o seu projeto, posso solicitar:</p><ul><li>Seu nome ou o nome da empresa.</li><li>Endereço de e-mail.</li><li>Número de telefone ou WhatsApp.</li><li>Informações sobre o projeto que você deseja desenvolver.</li></ul></>,
          },
          {
            title: "Para que uso as informações",
            content: <><p>As informações são usadas para finalidades profissionais específicas:</p><ul><li>Responder às suas mensagens e pedidos de orçamento.</li><li>Elaborar propostas comerciais personalizadas.</li><li>Manter contato durante o desenvolvimento do site ou landing page.</li><li>Enviar cobranças e recibos referentes aos serviços prestados.</li></ul></>,
          },
          {
            title: "Com quem compartilho",
            content: <p>Não vendo, alugo ou repasso seus dados para terceiros para fins de marketing. Eles podem ser compartilhados apenas quando necessário para executar o trabalho, por exemplo com provedores de e-mail, serviços de hospedagem solicitados por você ou ferramentas de gestão financeira, cada qual sujeito às suas próprias políticas.</p>,
          },
          {
            title: "Retenção",
            content: <p>Mantenho seus dados apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, inclusive para atender obrigações legais, contratuais ou de prestação de contas.</p>,
          },
          {
            title: "Seus direitos",
            content: <><p>Você pode solicitar a confirmação da existência de tratamento, o acesso, a correção, a atualização ou a exclusão dos seus dados, desde que não haja pendências financeiras ou legais que exijam a retenção.</p><p>Para exercer seus direitos, escreva para <a href="mailto:menesesluiz@gmail.com">menesesluiz@gmail.com</a>.</p></>,
          },
          {
            title: "Alterações nesta política",
            content: <p>Posso atualizar esta política para refletir mudanças na forma como opero. A data da última atualização ficará indicada no topo desta página.</p>,
          },
        ]}
      />
      <Footer />
    </>
  )
}
