import Reveal from './Reveal';

const ITEMS = [
  {
    title: 'Por que você sente que não é mais você.',
    body: 'O climatério e a perimenopausa podem começar bem antes da menstruação parar, e mexem com o corpo, o humor e a identidade ao mesmo tempo. Muita mulher sofre anos sem saber que já está nessa fase.',
  },
  {
    title: 'Por que a libido cai e o sono piora.',
    body: 'Sono, humor, desejo e energia estão mais conectados aos hormônios do que a maioria das mulheres imagina. Entenda essa relação, e por que isso não é falta de amor nem falta de vontade.',
  },
  {
    title: 'O que precisa ser avaliado antes de pensar em reposição hormonal.',
    body: 'Reposição hormonal não é receita de bolo. Entenda o que precisa ser investigado, avaliado e acompanhado antes de qualquer decisão sobre o assunto.',
  },
  {
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
            Nesta aula você vai entender
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:mt-20 md:grid-cols-2">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <span className="font-serif text-sm text-dourado">{`0${index + 1}`}</span>
              <h3 className="mt-3 font-serif text-xl leading-snug text-champagne md:text-[1.4rem]">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-champagne/70">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
