import Reveal from './Reveal';

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M20 13.5A8.5 8.5 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M3 15c1.8 0 1.8-3 3.6-3s1.8 3 3.6 3 1.8-3 3.6-3 1.8 3 3.6 3 1.8-3 3.6-3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 3.5c3 4 6 7.4 6 10.9a6 6 0 1 1-12 0c0-3.5 3-6.9 6-10.9Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 20.2s-7.6-4.5-9.6-9.2C1.2 7.8 3 5 6.2 5c2 0 3.4 1.2 5.8 4 2.4-2.8 3.8-4 5.8-4 3.2 0 5 2.8 3.8 6-2 4.7-9.6 9.2-9.6 9.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ITEMS = [
  {
    icon: MoonIcon,
    title: 'Por que você sente que não é mais você.',
    body: 'O climatério e a perimenopausa podem começar bem antes da menstruação parar, e mexem com o corpo, o humor e a identidade ao mesmo tempo. Muita mulher sofre anos sem saber que já está nessa fase.',
  },
  {
    icon: WaveIcon,
    title: 'Por que a libido cai e o sono piora.',
    body: 'Sono, humor, desejo e energia estão mais conectados aos hormônios do que a maioria das mulheres imagina. Entenda essa relação, e por que isso não é falta de amor nem falta de vontade.',
  },
  {
    icon: DropIcon,
    title: 'O que precisa ser avaliado antes de pensar em reposição hormonal.',
    body: 'Reposição hormonal não é receita de bolo. Entenda o que precisa ser investigado, avaliado e acompanhado antes de qualquer decisão sobre o assunto.',
  },
  {
    icon: HeartIcon,
    title: 'Por que dor na relação e ressecamento não são normais.',
    body: 'Muita mulher aprende a conviver com desconforto acreditando que é parte da idade. Não é. Entenda quando esses sinais pedem investigação.',
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="bg-ebano px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-champagne md:text-4xl">
            Nesta aula sobre menopausa, você vai entender
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-dourado/15 bg-dourado/[0.04] p-7 transition-colors duration-300 hover:border-dourado/35 md:p-9">
                <span className="text-dourado">
                  <item.icon />
                </span>
                <h3 className="mt-5 font-serif text-xl leading-snug text-champagne md:text-[1.4rem]">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-champagne/70">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
