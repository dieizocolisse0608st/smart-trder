export function CandlestickDivider({ className = "" }: { className?: string }) {
  // Sutil fileira de mini candles dourados
  const candles = Array.from({ length: 24 }, (_, i) => {
    const tall = 14 + ((i * 37) % 18);
    const wick = tall + 8;
    const up = i % 3 !== 1;
    return { tall, wick, up, i };
  });
  return (
    <div className={`flex items-center justify-center gap-3 py-12 opacity-60 ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B8862F]/50" />
      <div className="flex items-end gap-[6px]">
        {candles.map((c) => (
          <div key={c.i} className="relative flex items-center justify-center" style={{ height: 28 }}>
            <div
              className="absolute w-px"
              style={{
                height: c.wick,
                background: "linear-gradient(180deg, #B8862F, #E8C56A, #B8862F)",
              }}
            />
            <div
              className="relative w-[3px] rounded-[1px]"
              style={{
                height: c.tall,
                background: c.up
                  ? "linear-gradient(180deg, #E8C56A, #B8862F)"
                  : "linear-gradient(180deg, #B8862F, #8a6420)",
              }}
            />
          </div>
        ))}
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B8862F]/50" />
    </div>
  );
}
