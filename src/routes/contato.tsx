import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Instagram, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Smart Trader" },
      {
        name: "description",
        content: "Entre em contato com a Smart Trader — Projeto Liberdade.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
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
          FALE COM A GENTE
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
          Contato
        </h1>
        <p className="mt-6 text-[17px] leading-[1.75] text-[#D6D1C4]">
          Tem dúvida, precisa de suporte ou quer falar com a gente? É só chamar pelos canais abaixo. A gente responde.
        </p>

        <div className="mt-12 space-y-6">
          <a
            href="mailto:smarttraderprojetoliberdade@gmail.com"
            className="flex items-center gap-4 rounded-xl border border-[#26262E] bg-[#15151A] p-6 transition-all hover:border-[#B8862F]/60"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#B8862F]/30 bg-[#0B0B0D]">
              <Mail className="size-5 text-[#E8C56A]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#F4F1E9]">
                E-mail
              </h3>
              <p className="mt-1 text-[15px] text-[#F0D78C]">
                smarttraderprojetoliberdade@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://instagram.com/dieizosamartrader"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-[#26262E] bg-[#15151A] p-6 transition-all hover:border-[#B8862F]/60"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#B8862F]/30 bg-[#0B0B0D]">
              <Instagram className="size-5 text-[#E8C56A]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#F4F1E9]">
                Instagram
              </h3>
              <p className="mt-1 text-[15px] text-[#F0D78C]">
                @dieizosamartrader
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/554896672858"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-[#26262E] bg-[#15151A] p-6 transition-all hover:border-[#B8862F]/60"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#B8862F]/30 bg-[#0B0B0D]">
              <MessageCircle className="size-5 text-[#E8C56A]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#F4F1E9]">
                WhatsApp
              </h3>
              <p className="mt-1 text-[15px] text-[#F0D78C]">
                (48) 96672-858
              </p>
            </div>
          </a>
        </div>

        <div className="mt-12 rounded-2xl border border-[#26262E] bg-[#15151A] p-8 sm:p-10">
          <h2 className="font-display text-lg font-semibold text-[#F4F1E9]">
            Responsável
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#A8A29A]">
            <strong className="text-[#D6D1C4]">Dieizo Valeri Colisse dos Santos</strong>
            <br />
            CNPJ 43.191.450/0001-11
          </p>
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
