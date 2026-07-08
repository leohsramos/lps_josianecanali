import { motion, useReducedMotion } from 'framer-motion';
import { WHATSAPP_LINK } from '../config';
import { pushWhatsappClick, type CtaLocation } from '../lib/analytics';
import WhatsappIcon from './WhatsappIcon';

interface CtaButtonProps {
  location: CtaLocation;
  children: React.ReactNode;
  className?: string;
}

export default function CtaButton({ location, children, className = '' }: CtaButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      /* TODO: substituir pelo link real do grupo de WhatsApp */
      href={WHATSAPP_LINK}
      onClick={() => pushWhatsappClick(location)}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={
        'group inline-flex items-center justify-center gap-3 rounded-full bg-dourado px-8 py-4 ' +
        'font-sans text-[15px] font-semibold uppercase tracking-[0.08em] text-carvao ' +
        'shadow-[0_0_0_0_rgba(201,161,92,0)] transition-shadow duration-300 ' +
        'hover:bg-dourado-soft hover:shadow-[0_0_28px_2px_rgba(201,161,92,0.35)] ' +
        className
      }
    >
      <WhatsappIcon className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </motion.a>
  );
}
