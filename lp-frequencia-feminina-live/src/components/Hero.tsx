import Reveal from './Reveal';
import Waveform from './Waveform';
import DoctorPhoto from './DoctorPhoto';
import CtaButton from './CtaButton';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-carvao px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
      <Waveform className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 opacity-80" />

      <div className="relative mx-auto max-w-6xl md:grid md:grid-cols-[1.3fr_1fr] md:items-start md:gap-x-16">
        <div>
          <Reveal>
            <span className="inline-block font-sans text-xs uppercase tracking-eyebrow text-dourado">
              Menopausa, identidade e o que ninguém te explicou
            </span>
          </Reveal>

          <Reveal delay={0.08} className="mt-6">
            <h1 className="font-serif text-[2.15rem] leading-[1.15] text-champagne md:text-[3.25rem] lg:text-[3.75rem]">
              Você não perdeu quem você é.
              <br />
              Seu corpo só está tentando te dizer alguma coisa.
            </h1>
          </Reveal>

          <Reveal delay={0.16} className="mt-6">
            <p className="max-w-xl font-sans text-base leading-relaxed text-champagne/80 md:text-lg">
              Uma aula ao vivo e gratuita com a Dra. Josiane Canali para você entender por que o
              sono piorou, a libido caiu, o humor mudou, o peso não sai do lugar e você sente que
              não consegue mais ser você. Isso tem explicação. Não é frescura, não é falta de força
              de vontade e não é coisa da sua cabeça.
            </p>
          </Reveal>

          {/* Foto aparece aqui apenas no mobile: entre o subtítulo e o CTA, para não competir
              com o gancho do título nos primeiros segundos de scroll (tráfego vem de anúncio). */}
          <Reveal delay={0.1} className="mt-10 md:hidden">
            <DoctorPhoto />
          </Reveal>

          <Reveal delay={0.24} className="mt-10">
            <CtaButton location="hero">Quero entrar para o grupo da aula</CtaButton>
          </Reveal>

          <Reveal delay={0.3} className="mt-4">
            <p className="font-sans text-sm text-champagne/55">
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
