import Reveal from './Reveal';
import WaveformDivider from './WaveformDivider';

export default function ForYouSection() {
  return (
    <section className="bg-creme">
      <WaveformDivider tone="onLight" className="pt-8 md:pt-10" />

      <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-12 md:py-20">
        <Reveal>
          <h2 className="font-serif text-3xl text-carvao md:text-4xl">
            Essa aula é para você se…
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 font-sans text-lg leading-relaxed text-carvao/80 md:text-xl">
            Você não dorme direito mesmo cansada. Perdeu a vontade de transar e se culpa por
            isso. Ganhou peso sem entender o motivo. Está mais irritada do que gostaria de
            admitir. Sente dor ou ressecamento na relação. Ou simplesmente sente que, de um
            tempo pra cá, virou outra pessoa.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 font-serif text-2xl italic text-terracota md:text-[1.75rem]">
            Você não está exagerando. E não precisa continuar sem entender o motivo.
          </p>
        </Reveal>
      </div>

      <WaveformDivider tone="onLight" flip className="pb-8 md:pb-10" />
    </section>
  );
}
