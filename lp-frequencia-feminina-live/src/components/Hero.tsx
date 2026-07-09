import Reveal from './Reveal';
import Waveform from './Waveform';
import DoctorPhoto from './DoctorPhoto';
import CtaButton from './CtaButton';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-carvao px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
      <Waveform className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 opacity-80" />

      <div className="relative mx-auto max-w-6xl md:grid md:grid-cols-[1.3fr_1fr] md:items-start md:gap-x-16">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-dourado/15 blur-[110px]"
          />

          <Reveal>
            <span className="relative inline-block font-sans text-xs font-semibold uppercase tracking-eyebrow text-dourado">
              Menopausa, identidade e o que ninguém te explicou
            </span>
          </Reveal>

          <Reveal delay={0.08} className="relative mt-8">
            <h1 className="font-serif text-[2.35rem] font-normal leading-[1.35] text-champagne md:text-[3.5rem] md:leading-[1.3] lg:text-[4rem]">
              Você não está ficando louca.
              <br />
              Pode ser menopausa.
            </h1>
          </Reveal>

          <Reveal delay={0.16} className="relative mt-8">
            <p className="max-w-xl font-sans text-base leading-relaxed text-champagne/80 md:text-lg">
              Aula ao vivo e gratuita com a Dra. Josiane Canali sobre climatério e menopausa.
              Entenda por que o sono piorou, a libido caiu, o humor mudou e você sente que não é
              mais você. Dia 5 de agosto.
            </p>
          </Reveal>

          {/* Foto aparece aqui apenas no mobile: entre o subtítulo e o CTA, para não competir
              com o gancho do título nos primeiros segundos de scroll (tráfego vem de anúncio). */}
          <Reveal delay={0.1} className="mt-12 md:hidden">
            <DoctorPhoto />
          </Reveal>

          <Reveal delay={0.24} className="mt-12">
            <CtaButton location="hero">Quero entrar para o grupo da aula</CtaButton>
          </Reveal>

          <Reveal delay={0.3} className="mt-4">
            <p className="font-sans text-sm tracking-wide text-champagne/55">
              Vagas limitadas. Entrada via grupo no WhatsApp.
            </p>
          </Reveal>
        </div>

        {/* No desktop a foto ocupa a coluna direita, ao lado do texto. */}
        <Reveal delay={0.1} className="hidden md:block">
          <DoctorPhoto />
        </Reveal>
      </div>
    </section>
  );
}
