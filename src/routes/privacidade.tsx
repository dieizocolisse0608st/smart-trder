import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Smart Trader" },
      {
        name: "description",
        content: "Política de privacidade do Projeto Liberdade da Smart Trader.",
      },
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#26262E] bg-[#0B0B0D]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-[15px] font-bold tracking-[0.22em] text-gold-gradient">
              SMART TRADER
            </span>
          </Link>
          <Link
            to="/"
            className="text-[13px] text-[#A8A29A] hover:text-[#F0D78C]"
          >
            Voltar
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pt-28 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
        <p className="font-mono text-[11px] tracking-[0.3em] text-[#E8C56A]">
          LEGAL
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 font-mono text-[12px] text-[#7A756D]">
          Última atualização: 19/06/2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-[1.8] text-[#D6D1C4]">
          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              1. Responsável pelos dados
            </h2>
            <p className="mt-3">
              O responsável pelo tratamento dos seus dados é{" "}
              <strong className="text-[#F4F1E9]">Dieizo Valeri Colisse dos Santos</strong>,
              CNPJ 43.191.450/0001-11, que pode ser contatado pelo e-mail:{" "}
              <a
                href="mailto:smarttraderprojetoliberdade@gmail.com"
                className="text-[#F0D78C] underline underline-offset-4"
              >
                smarttraderprojetoliberdade@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              2. Quais dados coletamos
            </h2>
            <p className="mt-3">
              Coletamos os dados que você informa na compra e no cadastro, como nome, e-mail e telefone. Os dados de pagamento (como cartão) são processados diretamente pela plataforma Kiwify e não ficam armazenados conosco.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              3. Para que usamos
            </h2>
            <p className="mt-3">
              Usamos seus dados para liberar e gerenciar o seu acesso ao produto, prestar suporte, enviar comunicados sobre a sua compra e, caso você autorize, enviar conteúdos e novidades.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              4. Compartilhamento
            </h2>
            <p className="mt-3">
              Seus dados podem ser compartilhados com plataformas parceiras necessárias para a entrega do produto, como a Kiwify e o processador de pagamento. Não vendemos seus dados a terceiros.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              5. Seus direitos (LGPD)
            </h2>
            <p className="mt-3">
              Conforme a Lei Geral de Proteção de Dados, você pode, a qualquer momento:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Confirmar se tratamos seus dados e acessar eles.</li>
              <li>Corrigir dados incompletos ou desatualizados.</li>
              <li>Solicitar a exclusão dos seus dados, respeitadas as obrigações legais.</li>
              <li>Revogar o consentimento para o envio de comunicações.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer um desses direitos, basta enviar um e-mail para{" "}
              <a
                href="mailto:smarttraderprojetoliberdade@gmail.com"
                className="text-[#F0D78C] underline underline-offset-4"
              >
                smarttraderprojetoliberdade@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              6. Segurança
            </h2>
            <p className="mt-3">
              Adotamos medidas razoáveis para proteger seus dados contra acesso não autorizado, perda ou uso indevido.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              7. Cookies
            </h2>
            <p className="mt-3">
              Este site pode usar cookies para melhorar a sua experiência e entender como a página é usada. Você pode desativar os cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              8. Alterações
            </h2>
            <p className="mt-3">
              Esta política pode ser atualizada periodicamente. A versão vigente será sempre a publicada nesta página.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-[#26262E] bg-[#0A0A0C] pb-12 pt-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <span className="font-display text-[13px] font-bold tracking-[0.22em] text-gold-gradient">
              SMART TRADER
            </span>
            <nav className="flex flex-wrap gap-6 text-[13px] text-[#A8A29A]">
              <Link to="/termos" className="hover:text-[#F0D78C]">Termos de uso</Link>
              <Link to="/privacidade" className="hover:text-[#F0D78C]">Política de privacidade</Link>
              <Link to="/contato" className="hover:text-[#F0D78C]">Contato</Link>
            </nav>
          </div>
          <p className="mt-10 text-[11px] leading-relaxed text-[#5C5851]">
            © Smart Trader 2026. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
