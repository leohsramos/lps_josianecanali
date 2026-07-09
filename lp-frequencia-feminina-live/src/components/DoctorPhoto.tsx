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
        <img
          src="/dra-josiane.jpg"
          alt="Dra. Josiane Canali, ginecologista e obstetra, sorrindo sentada"
          className="absolute inset-0 h-full w-full object-cover object-top"
          width={666}
          height={1000}
          loading="eager"
          decoding="async"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-carvao/50 via-transparent to-transparent" />
      </motion.div>

      <p className="mt-4 text-center font-sans text-sm leading-relaxed text-champagne/70 md:text-left">
        Dra. Josiane Canali <span className="text-champagne/40">|</span> Ginecologista e Obstetra
        <br />
        CRM PR 40.088 <span className="text-champagne/40">|</span> RQE 4.382
      </p>
    </div>
  );
}
