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
          Placeholder puramente visual: gradiente + monograma, sem imagem externa.
        */}
        <div
          role="img"
          aria-label="Foto da Dra. Josiane Canali, ginecologista e obstetra (imagem provisória, a ser substituída)"
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_30%,#3a2c1c_0%,#1f1811_55%,#14100d_100%)]"
        >
          <div aria-hidden="true" className="flex flex-col items-center gap-4">
            <span className="font-serif text-6xl italic text-dourado/70">JC</span>
            <span className="font-sans text-xs uppercase tracking-eyebrow text-champagne/50">
              Foto da Dra. Josiane
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-carvao/70 via-transparent to-transparent" />
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
