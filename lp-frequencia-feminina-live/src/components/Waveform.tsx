const UNIT_PATH =
  'M0,60 C40,60 40,20 80,20 C120,20 120,100 160,100 C200,100 200,50 240,50 C280,50 280,70 320,70 C360,70 360,10 400,10 C440,10 440,110 480,110 C520,110 520,55 560,55 C600,55 600,75 640,75 C680,75 680,30 720,30 C760,30 760,60 800,60';

/**
 * Assinatura visual "Frequência Feminina": uma linha de onda sonora contínua,
 * baixíssima opacidade, com drift horizontal lento e respiração de amplitude.
 * Puramente decorativa (aria-hidden) e desativada via motion-safe: quando
 * prefers-reduced-motion está ativo.
 */
export default function Waveform({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <div className="h-full w-full motion-safe:animate-breathe">
        <svg
          viewBox="0 0 1600 120"
          preserveAspectRatio="none"
          className="h-full w-[200%] motion-safe:animate-drift-slow"
        >
          <path d={UNIT_PATH} transform="translate(0,0)" fill="none" stroke="#C9A15C" strokeOpacity={0.14} strokeWidth={1.5} />
          <path d={UNIT_PATH} transform="translate(800,0)" fill="none" stroke="#C9A15C" strokeOpacity={0.14} strokeWidth={1.5} />
        </svg>
      </div>
    </div>
  );
}
