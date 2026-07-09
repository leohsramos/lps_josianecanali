import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function DoctorPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[360px] md:max-w-none">
      <motion.div
        style={shouldReduceMotion ? undefined : { y }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-dourado/25 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]"
      >
        {/*
          TODO: substituir por foto real da Dra. Josiane (formato retrato, alta resolução).
          Placeholder puramente visual: gradiente quente + textura + monograma, sem imagem externa.
        */}
        <div
          role="img"
          aria-label="Foto da Dra. Josiane Canali, ginecologista e obstetra (imagem provisória, a ser substituída)"
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,#D9B87C_0%,#C9A15C_32%,#B98165_66%,#6E4A34_100%)]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(20,16,13,0.5)_0%,rgba(20,16,13,0)_45%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-carvao/65 via-transparent to-transparent" />
          <div aria-hidden="true" className="relative flex h-full flex-col items-center justify-center gap-3">
            <span className="font-serif text-5xl italic text-champagne/80">JC</span>
            <span className="font-sans text-xs uppercase tracking-eyebrow text-champagne/60">
              Foto da Dra. Josiane
            </span>
          </div>
        </div>
      </motion.div>

      <p className="mt-4 text-center font-sans text-sm leading-relaxed text-champagne/70 md:text-left">
        Dra. Josiane Canali <span className="text-champagne/40">|</span> Ginecologista e Obstetra
        <br />
        CRM PR 40.088 <span className="text-champagne/40">|</span> RQE 4.382
      </p>
    </div>
  );
}
