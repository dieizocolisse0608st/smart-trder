export function HeroCandles() {
  // Coluna de candles dourados que sobem ao carregar a página, sutil, no fundo do herói
  const cols = Array.from({ length: 56 }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const tall = 30 + Math.floor(rand * 140);
    const wick = tall + 20 + Math.floor(rand * 40);
    const up = (i % 4) !== 2;
    const delay = i * 35;
    const baseline = 60 + Math.floor(((i * 53) % 100));
    return { tall, wick, up, delay, baseline, i };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 100%, color-mix(in oklab, #B8862F 18%, transparent), transparent 70%)"
      }} />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-[8px] px-6 opacity-[0.35]">
        {cols.map((c) => (
          <div
            key={c.i}
            className="relative flex flex-col items-center"
            style={{
              transform: "scaleY(0)",
              transformOrigin: "bottom",
              animation: `candle-rise 1.2s cubic-bezier(.2,.7,.2,1) ${c.delay}ms forwards`,
              marginBottom: c.baseline,
            }}
          >
            <div
              className="w-px"
              style={{
                height: c.wick,
                background: "linear-gradient(180deg, transparent, #E8C56A, #B8862F)",
              }}
            />
            <div
              className="w-[4px] rounded-[1px] -mt-2"
              style={{
                height: c.tall,
                background: c.up
                  ? "linear-gradient(180deg, #F0D78C, #B8862F)"
                  : "linear-gradient(180deg, #B8862F, #6e4f1a)",
                boxShadow: c.up ? "0 0 12px rgba(232,197,106,0.25)" : "none",
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-[#0B0B0D]/90" />
    </div>
  );
}
