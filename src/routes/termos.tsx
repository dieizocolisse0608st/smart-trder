import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Smart Trader" },
      {
        name: "description",
        content: "Termos de uso do Projeto Liberdade da Smart Trader.",
      },
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
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
          Termos de Uso
        </h1>
        <p className="mt-2 font-mono text-[12px] text-[#7A756D]">
          Última atualização: 19/06/2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-[1.8] text-[#D6D1C4]">
          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              1. Quem somos
            </h2>
            <p className="mt-3">
              Este site e o produto Projeto Liberdade são de responsabilidade de{" "}
              <strong className="text-[#F4F1E9]">Dieizo Valeri Colisse dos Santos</strong>,
              inscrito no CNPJ 43.191.450/0001-11. O contato oficial é o e-mail:{" "}
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
              2. O que é o produto
            </h2>
            <p className="mt-3">
              O Projeto Liberdade é um produto de conteúdo educacional digital, voltado ao ensino de um método de operação no mercado financeiro. O acesso ao conteúdo é feito pela área de membros, após a confirmação do pagamento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              3. Aceitação
            </h2>
            <p className="mt-3">
              Ao comprar e acessar o conteúdo, você concorda com estes Termos de Uso. Se não concordar, não realize a compra.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              4. Acesso e uso
            </h2>
            <p className="mt-3">
              O acesso é pessoal e intransferível. O conteúdo é licenciado para o seu uso individual. É proibido copiar, gravar, distribuir, revender, compartilhar login ou divulgar qualquer parte do material, de forma gratuita ou paga. O descumprimento pode levar ao bloqueio do acesso, sem reembolso, além das medidas legais cabíveis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              5. Propriedade intelectual
            </h2>
            <p className="mt-3">
              Todo o conteúdo, incluindo vídeos, textos, planilhas, aplicativo, marca e logotipo, pertence a Dieizo Valeri Colisse dos Santos (CNPJ 43.191.450/0001-11) e é protegido por lei. A compra dá acesso, mas não transfere a propriedade do material.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              6. Pagamento e reembolso
            </h2>
            <p className="mt-3">
              O pagamento é processado pela plataforma Kiwify. Conforme o Código de Defesa do Consumidor, você tem o direito de arrependimento em até 7 dias corridos a contar da compra, podendo solicitar o reembolso integral pelo e-mail de contato ou pela própria plataforma.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              7. Natureza educacional e aviso de risco
            </h2>
            <p className="mt-3">
              O Projeto Liberdade ensina método, disciplina e gestão de risco. O conteúdo tem finalidade exclusivamente educacional e não é recomendação de compra ou venda de nenhum ativo, nem promessa de ganho ou rentabilidade. Operar no mercado financeiro envolve riscos, e resultados passados não garantem resultados futuros. As decisões e os resultados de cada aluno são de responsabilidade individual dele.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              8. Limitação de responsabilidade
            </h2>
            <p className="mt-3">
              Dieizo Valeri Colisse dos Santos (CNPJ 43.191.450/0001-11) não se responsabiliza por perdas financeiras, decisões de investimento ou resultados obtidos pelo aluno a partir do uso do conteúdo. O material entrega conhecimento, a aplicação é a responsabilidade de quem aprende.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              9. Alterações
            </h2>
            <p className="mt-3">
              Estes termos podem ser atualizados a qualquer momento. A versão vigente será sempre a publicada nesta página.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
              10. Foro
            </h2>
            <p className="mt-3">
              Para resolver qualquer questão oriunda destes termos, fica eleito o foro da comarca de Florianópolis/SC, com renúncia a qualquer outro.
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
