import { useReducedMotion } from 'framer-motion';

function MarqueeContent() {
  return (
    <span className="mx-8 inline-flex shrink-0 items-center gap-2 font-sans text-[11px] uppercase tracking-eyebrow text-champagne/80 md:text-xs">
      <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-dourado" />
      Aula ao vivo e gratuita sobre menopausa <span className="text-champagne/40">·</span> 5 de
      agosto <span className="text-champagne/40">·</span> Horário a confirmar
    </span>
  );
}

export default function AnnouncementBar() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="w-full border-b border-dourado/15 bg-carvao/95 py-2.5 text-center backdrop-blur">
        <MarqueeContent />
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden border-b border-dourado/15 bg-carvao/95 py-2.5 backdrop-blur">
      <div className="flex w-max animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
