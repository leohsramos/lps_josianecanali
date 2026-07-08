export default function AnnouncementBar() {
  return (
    <div className="w-full border-b border-dourado/15 bg-carvao/95 py-2.5 text-center backdrop-blur">
      <p className="font-sans text-[11px] uppercase tracking-eyebrow text-champagne/80 md:text-xs">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-dourado align-middle" />
        Aula ao vivo e gratuita <span className="text-champagne/40">·</span> 5 de agosto{' '}
        <span className="text-champagne/40">·</span> Horário a confirmar
      </p>
    </div>
  );
}
