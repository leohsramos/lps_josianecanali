import Reveal from './Reveal';

export default function ExclusivityBox() {
  return (
    <section className="bg-ebano px-6 py-16 md:px-12 md:py-24">
      <Reveal className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-dourado/25 px-7 py-9 text-center md:px-12 md:py-12">
          <p className="font-serif text-xl leading-relaxed text-champagne md:text-2xl">
            A aula acontece ao vivo em 5 de agosto, com espaço para perguntas em tempo real. O
            acesso é exclusivo para quem estiver no grupo oficial da Dra. Josiane no WhatsApp.{' '}
            <span className="text-dourado">Não haverá gravação disponível depois.</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
