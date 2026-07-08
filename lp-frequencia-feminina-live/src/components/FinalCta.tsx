import Reveal from './Reveal';
import Waveform from './Waveform';
import CtaButton from './CtaButton';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ebano px-6 py-24 text-center md:px-12 md:py-32">
      <Waveform className="absolute inset-x-0 top-1/2 h-32 -translate-y-1/2 opacity-60" />

      <div className="relative mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-champagne md:text-4xl">
            Você não precisa atravessar essa fase sozinha.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 flex justify-center">
          <CtaButton location="final">Quero entrar para o grupo da aula</CtaButton>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-5 font-sans text-sm leading-relaxed text-champagne/55">
            Grupo silencioso. Apenas avisos da Dra. Josiane e conteúdos da aula.
            <br />
            Saída livre a qualquer momento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
