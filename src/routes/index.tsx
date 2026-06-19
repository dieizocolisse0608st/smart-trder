import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  Wallet,
  ShieldCheck,
  LineChart,
  Target,
  Brain,
  PlayCircle,
  BookOpen,
  Monitor,
  Calculator,
  Table2,
  MessageCircle,
  LifeBuoy,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { CandlestickDivider } from "@/components/CandlestickDivider";
import { HeroCandles } from "@/components/HeroCandles";
import logoAsset from "@/assets/smart-trader-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projeto Liberdade | Smart Trader" },
      {
        name: "description",
        content:
          "Aprenda a operar a bolsa americana em 40 minutos por dia. Método claro, disciplina e liberdade. Curso completo da Smart Trader.",
      },
      { property: "og:title", content: "Projeto Liberdade | Smart Trader" },
      {
        property: "og:description",
        content:
          "Aprenda a operar a bolsa americana em 40 minutos por dia. Método, disciplina e liberdade.",
      },
    ],
  }),
  component: LandingPage,
});

const CHECKOUT_URL = "https://pay.kiwify.com.br/PEfGC5G?coupon=LIBERDADE15";

function LandingPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Mirror />
        <Proposal />
        <AboutMe />
        <Method />
        <Package />
        <ForWho />
        <FAQ />
        
        <Offer />
        <PostScript />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

/* ------------------- HEADER ------------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0B0B0D]/75 border-b border-[#26262E]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-[15px] font-bold tracking-[0.22em] text-gold-gradient">
            SMART TRADER
          </span>
        </a>
        <a
          href={CHECKOUT_URL}
          className="group inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2 font-display text-[13px] font-semibold text-[#0B0B0D] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0D78C]"
        >
          Quero entrar
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ------------------- HERO ------------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 pb-24 sm:pt-32 sm:pb-32">
      <HeroCandles />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <img
          src={logoAsset}
          alt="Smart Trader — Projeto Liberdade"
          className="mx-auto w-48 sm:w-64 md:w-72 rounded-full aspect-square object-cover animate-fade-up drop-shadow-[0_0_40px_rgba(184,134,47,0.25)]"
          style={{ animationDelay: "80ms" }}
        />
        <p
          className="mt-2 font-mono text-[11px] tracking-[0.3em] text-[#F0D78C] sm:text-xs animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          MÉTODO • DISCIPLINA • LIBERDADE
        </p>
        <h1
          className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          Aprenda um método claro e objetivo para operar a bolsa americana em{" "}
          <span className="text-gold-gradient">cerca de 40 minutos</span> por dia.
        </h1>
        <p
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#A8A29A] sm:text-lg animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          Um método claro e objetivo pra você operar em poucos minutos por dia e ter o resto do tempo livre. Mesmo que você nunca tenha visto um gráfico.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-up"
          style={{ animationDelay: "480ms" }}
        >
          <a
            href={CHECKOUT_URL}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-8 py-4 font-display text-base font-semibold text-[#0B0B0D] shadow-[0_20px_50px_-15px_rgba(184,134,47,0.6)] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0D78C] sm:text-lg"
          >
            <span className="relative z-10">Quero começar agora</span>
            <ArrowRight className="relative z-10 size-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[11px] tracking-wider text-[#A8A29A]">
            <span className="flex items-center gap-1"><span className="size-1 rounded-full bg-[#1FA971]" />Conteúdo vitalício</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------- PILLARS ------------------- */
function Pillars() {
  const items = [
    {
      icon: TrendingUp,
      title: "Bolsa americana.",
      text: "As empresas mais sólidas do mundo, num mercado que movimenta trilhões de dólares todos os dias.",
    },
    {
      icon: Clock,
      title: "40 minutos por dia.",
      text: "Você analisa uma vez por dia, perto da hora do fechamento do mercado e fecha seu computador.",
    },
    {
      icon: Wallet,
      title: "Comece com pouco.",
      text: "O foco é a técnica, não o tamanho da conta.",
    },
  ];
  return (
    <section className="border-y border-[#26262E] bg-[#0E0E12]/60">
      <div className="mx-auto grid max-w-6xl gap-px bg-[#26262E] px-0 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-[#0E0E12] p-8 sm:p-10">
            <Icon className="size-6 text-[#E8C56A]" strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-lg font-semibold text-[#F4F1E9]">
              {title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#A8A29A]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------- MIRROR ------------------- */
function Mirror() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
      <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
        Talvez você já tenha pensado nisso.
      </h2>
      <div className="mt-8 space-y-6 text-[17px] leading-[1.75] text-[#D6D1C4]">
        <p>
          Talvez você já tenha pensado nisso. Operar a bolsa parece coisa de quem tem muito dinheiro, muito tempo e seis telas na frente. Eu também já enxerguei assim. Mas depois de anos operando o mercado americano, eu aprendi uma verdade simples: operar é uma habilidade, e como toda habilidade, se aprende. Não é talento nem dom. É método. Um caminho claro, com regras objetivas pra seguir. É isso que transforma o jogo, e é exatamente isso que eu te ensino aqui, do começo e no seu tempo.
        </p>
      </div>
    </section>
  );
}

/* ------------------- PROPOSAL ------------------- */
function Proposal() {
  return (
    <section className="relative">
      <CandlestickDivider />
      <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8 sm:pb-32">
        <p className="font-mono text-[11px] tracking-[0.3em] text-[#E8C56A]">
          A VIRADA
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
          Existe um outro caminho. E ele cabe na sua rotina.
        </h2>
        <div className="mt-8 space-y-6 text-[17px] leading-[1.75] text-[#D6D1C4]">
          <p>
            O nosso estilo é o swing trade no gráfico diário. Você analisa o
            mercado uma vez por dia, com calma, nos últimos minutos do pregão.
            Se o sistema der o sinal, você faz a sua entrada ali mesmo. Fechou
            o pregão, fechou o computador.
          </p>
          <p>
            <span className="font-mono text-[#F0D78C]">Quarenta minutos</span>{" "}
            por dia, e o resto do dia é seu. Por isso o projeto se chama
            Liberdade. Liberdade não é só sobre dinheiro. É sobre o seu tempo.
          </p>
          <p>
            Aqui a gente opera CFDs, Contratos por Diferença, uma modalidade
            que permite começar com pouco capital e controlar o risco de cada
            operação. O ponto de partida do curso é uma conta de{" "}
            <span className="font-mono text-[#F0D78C]">US$ 100</span>. Não
            porque o valor importa, mas porque quem aprende a operar bem com
            pouco, opera bem com qualquer valor.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------- ABOUT ME ------------------- */
function AboutMe() {
  return (
    <section className="border-t border-[#26262E] bg-[#0E0E12]/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-[#E8C56A]">
            AUTORIDADE
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Quem tá te falando isso?
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.75] text-[#D6D1C4]">
            <p>
              Meu nome é Dieizo Colisse, criador da Smart Trader. A minha
              trajetória foi simples, e é por isso que eu consigo te ensinar de
              um jeito que faz sentido. Foi com estudo, dedicação e prática.
              Aprendendo todo dia, e seguindo com disciplina, foco e
              persistência até dominar o método.
            </p>
            <p>
              Hoje eu vivo do mercado, e resolvi ensinar exatamente o caminho
              que eu trilho no meu dia a dia em uma linguagem simples. O que me
              move é formar gente que opera com autonomia e tranquilidade, dona
              do próprio tempo.
            </p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="border-gold-gradient relative aspect-[4/5] overflow-hidden rounded-2xl">
            <div className="flex h-full w-full items-center justify-center bg-[#15151A]">
              <PlayCircle className="size-16 text-[#E8C56A]/60" strokeWidth={1.2} />
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[12px] tracking-wider text-[#A8A29A]">
            Dieizo Colisse, criador do Smart Trader
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------- METHOD ------------------- */
function Method() {
  const items = [
    {
      icon: LineChart,
      title: "Ler o gráfico com os seus olhos.",
      text: "Suporte, resistência, tendência, a linguagem do candle.",
    },
    {
      icon: ShieldCheck,
      title: "Os 3 sinais de entrada.",
      text: "As três travas de segurança que precisam estar alinhadas. Faltou uma, não tem entrada.",
    },
    {
      icon: Target,
      title: "Gerenciamento de risco de verdade.",
      text: "Stop técnico, ditado pelo gráfico, e a regra de nunca arriscar mais do que você pode perder.",
    },
    {
      icon: Sparkles,
      title: "Onde fica o seu alvo.",
      text: "A hora certa de sair com o resultado, ou de cair fora quando o movimento cansou.",
    },
    {
      icon: Brain,
      title: "A cabeça acima de tudo.",
      text: "A disciplina vale mais que qualquer indicador na tela.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.3em] text-[#E8C56A]">
          O MÉTODO
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
          O que você vai aprender é um sistema, com regras claras e objetivas.
        </h2>
        <p className="mt-6 text-[17px] leading-[1.75] text-[#D6D1C4]">
          Operamos com um sistema de ferramentas que, quando se alinham, mostram
          de forma visual e objetiva a hora de agir. Você aprende tudo, na ordem
          certa.
        </p>
      </div>
      <ul className="mt-14 grid gap-4 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, text }, i) => (
          <li
            key={title}
            className={`group relative rounded-xl border border-[#26262E] bg-[#15151A] p-7 transition-all hover:border-[#B8862F]/60 hover:bg-[#1A1A20] ${
              i === items.length - 1 && items.length % 2 === 1 ? "sm:col-span-2" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#B8862F]/30 bg-[#0B0B0D]">
                <Icon className="size-5 text-[#E8C56A]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#F4F1E9]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[#A8A29A]">
                  {text}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-12 max-w-3xl text-[17px] leading-[1.75] text-[#D6D1C4]">
        No fim, o método inteiro cabe numa rotina simples. Um momento por dia. O
        resto é repetição.
      </p>
    </section>
  );
}

/* ------------------- PACKAGE ------------------- */
function Package() {
  const items = [
    { icon: PlayCircle, title: "Curso completo em vídeo.", text: "Aulas passo a passo, do primeiro olhar no gráfico até conduzir uma operação. Acesso vitalício." },
    { icon: BookOpen, title: "Apostila do método.", text: "Todo o conteúdo organizado e por escrito, pra consultar sempre que bater a dúvida. Acesso vitalício." },
    { icon: Monitor, title: "Sistema pronto na sua tela.", text: "O template e os indicadores já configurados. Você instala, e a sua tela fica idêntica à das aulas." },
    { icon: Calculator, title: "App calculadora de risco e lote.", text: "A ferramenta pra dimensionar a operação na hora, respeitando o seu limite de risco, sem fazer conta de cabeça." },
    { icon: Table2, title: "Planilha de controle.", text: "Pra registrar as suas operações e enxergar a sua evolução com clareza." },
    { icon: Brain, title: 'Ebook "A Mente do Trader".', text: "O livro sobre o jogo que acontece dentro da sua cabeça: medo, ganância, ansiedade e disciplina." },
    { icon: MessageCircle, title: "Grupo no Telegram (3 meses).", text: "Pra tirar dúvidas sobre o método e o sistema. Não é grupo de sinais." },
    { icon: LifeBuoy, title: "Suporte técnico (3 meses).", text: "Ajuda por e-mail e WhatsApp pra deixar tudo rodando certinho." },
  ];
  return (
    <section className="border-y border-[#26262E] bg-[#0E0E12]/60">
      <CandlestickDivider />
      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.3em] text-[#E8C56A]">
            O QUE VOCÊ RECEBE
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Projeto Liberdade: o caminho completo, montado pra você não se
            perder.
          </h2>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group rounded-xl border border-[#26262E] bg-[#15151A] p-6 transition-all hover:-translate-y-0.5 hover:border-[#B8862F]/60"
            >
              <div className="flex size-10 items-center justify-center rounded-lg border border-[#B8862F]/30 bg-[#0B0B0D]">
                <Icon className="size-5 text-[#E8C56A]" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug text-[#F4F1E9]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A8A29A]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------- FOR WHO ------------------- */
function ForWho() {
  const yes = [
    "Você tem pouco tempo no dia e quer um método que respeite a sua rotina.",
    "Você quer começar com pouco e aprender a técnica antes de pensar em conta grande.",
    "Você nunca viu um gráfico e quer um passo a passo simples.",
  ];
  const no = [
    "Você espera resultado sem estudar e sem seguir um processo. O método pede dedicação, e é isso que faz ele funcionar.",
    "Você não tem paciência pra aprender uma habilidade nova com calma.",
    "Você não aceita que o mercado tem risco. Ele tem, e aqui você aprende a respeitar isso com gerenciamento.",
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#1FA971]/25 bg-[#101512] p-8 sm:p-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-[#1FA971]" strokeWidth={1.5} />
            <h3 className="font-display text-xl font-semibold text-[#F4F1E9]">
              É pra você se:
            </h3>
          </div>
          <ul className="mt-6 space-y-4">
            {yes.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-[#D6D1C4]">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#1FA971]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[#D9433F]/25 bg-[#151010] p-8 sm:p-10">
          <div className="flex items-center gap-2">
            <XCircle className="size-5 text-[#D9433F]" strokeWidth={1.5} />
            <h3 className="font-display text-xl font-semibold text-[#F4F1E9]">
              NÃO é pra você se:
            </h3>
          </div>
          <ul className="mt-6 space-y-4">
            {no.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-[#D6D1C4]">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#D9433F]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------- FAQ ------------------- */
function FAQ() {
  const items = [
    {
      q: '"Eu tenho pouco tempo."',
      a: "O método foi feito pra você olhar o mercado uma vez por dia, em cerca de 40 minutos. Sem análise de madrugada, sem celular o dia todo.",
    },
    {
      q: '"Eu tenho pouco dinheiro."',
      a: "O ponto de partida é uma conta de cem dólares. O foco é a técnica. Você aprende a errar pequeno e a controlar o risco.",
    },
    {
      q: '"Eu nunca operei na vida."',
      a: "Melhor ainda. O curso assume que você nunca viu um gráfico e te leva pela mão, na linguagem mais simples possível.",
    },
    {
      q: '"E se eu travar no meio do caminho?"',
      a: "Você não fica sozinho. Tem grupo no Telegram e suporte por e-mail e WhatsApp por 3 meses pra te ajudar com o método e com o sistema.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-[#26262E] bg-[#0E0E12]/60">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="font-mono text-[11px] tracking-[0.3em] text-[#E8C56A]">
          FAQ
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
          Perguntas frequentes.
        </h2>
        <div className="mt-12 divide-y divide-[#26262E] border-y border-[#26262E]">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-[#F0D78C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0D78C]"
                >
                  <span className="font-display text-lg font-semibold">{it.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-[#E8C56A] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] leading-relaxed text-[#A8A29A]">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ------------------- OFFER ------------------- */
function Offer() {
  return (
    <section id="offer" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, color-mix(in oklab, #B8862F 15%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl">
        <div className="border-gold-gradient relative rounded-3xl p-8 shadow-[0_30px_80px_-30px_rgba(184,134,47,0.55)] sm:p-12">
          <div className="absolute inset-x-0 -top-3 flex justify-center">
            <span className="rounded-full bg-gold-gradient px-4 py-1 font-mono text-[11px] tracking-[0.25em] text-[#0B0B0D]">
              OFERTA DE LANÇAMENTO
            </span>
          </div>
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Projeto Liberdade
              <span className="block text-gold-gradient">Pacote Completo</span>
            </h2>
            <p className="mt-3 text-[15px] text-[#A8A29A]">
              Curso + App (calculadora) + Planilha + Ebook, tudo junto.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="font-mono text-xs tracking-wider text-[#A8A29A]">
              <span className="line-through opacity-60">de R$ 599,00</span>
              {" "}por R$ 509,15
            </p>
            <div className="mt-3 font-display text-[#F4F1E9]">
              <span className="text-gold-gradient font-mono text-4xl font-bold sm:text-5xl">
                15% de desconto
              </span>
            </div>
            <p className="mt-2 font-mono text-sm text-[#A8A29A]">no lançamento</p>
            <p className="mt-4 font-mono text-[13px] text-[#F0D78C]">
              em até 12x no cartão
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            className="group mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-display text-base font-semibold text-[#0B0B0D] shadow-[0_20px_50px_-15px_rgba(184,134,47,0.6)] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0D78C] sm:text-lg"
          >
            Quero entrar no Projeto Liberdade
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-[#A8A29A]">
            Acesso imediato • Conteúdo vitalício • Suporte e grupo por 3
            meses
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------- PS ------------------- */
function PostScript() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-28 sm:px-8 sm:pb-36">
      <CandlestickDivider />
      <div className="rounded-2xl border border-[#26262E] bg-[#15151A] p-8 sm:p-10">
        <p className="text-[17px] leading-[1.8] text-[#D6D1C4]">
          <span className="font-display font-bold text-gold-gradient">P.S.</span>{" "}
          No fim, o que faz a diferença é simples: um método claro e a disciplina pra seguir ele todos os dias. É isso que você constrói aqui, passo a passo, no seu tempo. Te espero lá dentro.
        </p>
      </div>
    </section>
  );
}

/* ------------------- FOOTER ------------------- */
function Footer() {
  return (
    <footer className="border-t border-[#26262E] bg-[#0A0A0C] pb-28 pt-16 sm:pb-12">
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

        <div className="mt-10 space-y-4 text-[11px] leading-relaxed text-[#7A756D]">
          <p>
            O Projeto Liberdade é um curso de educação. O conteúdo tem caráter
            exclusivamente educativo e informativo, e não constitui recomendação
            ou consultoria de investimento. Operar no mercado financeiro envolve
            riscos, inclusive o de perda do capital investido. Este material não
            garante nenhum resultado financeiro. Resultados passados não
            garantem resultados futuros. Qualquer decisão de investimento é de
            responsabilidade exclusiva do aluno.
          </p>
          <p>
            Este produto está em conformidade com o Código de Defesa do
            Consumidor (Lei nº 8.078/1990).
          </p>
          <p className="pt-4 font-mono tracking-wider text-[#5C5851]">
            © Smart Trader 2026. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------- MOBILE CTA ------------------- */
function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#26262E] bg-[#0B0B0D]/90 px-4 py-3 backdrop-blur-xl sm:hidden">
      <a
        href={CHECKOUT_URL}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 font-display text-[15px] font-semibold text-[#0B0B0D]"
      >
        Quero entrar no Projeto Liberdade
        <ArrowRight className="size-4" />
      </a>
    </div>
  );
}
