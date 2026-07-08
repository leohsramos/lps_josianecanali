const UNIT_PATH =
  'M0,60 C40,60 40,20 80,20 C120,20 120,100 160,100 C200,100 200,50 240,50 C280,50 280,70 320,70 C360,70 360,10 400,10 C440,10 440,110 480,110 C520,110 520,55 560,55 C600,55 600,75 640,75 C680,75 680,30 720,30 C760,30 760,60 800,60';

interface WaveformDividerProps {
  /** 'onDark' para uso sobre fundo carvão/ébano, 'onLight' para uso sobre o creme */
  tone?: 'onDark' | 'onLight';
  flip?: boolean;
  className?: string;
}

/**
 * Versão "congelada" (sem animação) da onda de assinatura, usada como
 * costura visual entre seções de fundo claro e escuro.
 */
export default function WaveformDivider({ tone = 'onDark', flip = false, className = '' }: WaveformDividerProps) {
  const color = tone === 'onLight' ? '#B98165' : '#C9A15C';
  const opacity = tone === 'onLight' ? 0.28 : 0.16;

  return (
    <div
      className={`pointer-events-none w-full overflow-hidden ${flip ? 'scale-y-[-1]' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 800 120" preserveAspectRatio="none" className="h-10 w-full md:h-14">
        <path d={UNIT_PATH} fill="none" stroke={color} strokeOpacity={opacity} strokeWidth={1.5} />
      </svg>
    </div>
  );
}
