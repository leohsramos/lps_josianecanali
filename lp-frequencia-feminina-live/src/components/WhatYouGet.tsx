import Reveal from './Reveal';

const ITEMS = [
  'O link de acesso à aula ao vivo, no dia 5 de agosto.',
  'Avisos antecipados com os temas que serão abordados.',
  'Conteúdos exclusivos da Dra. Josiane nos dias que antecedem a aula.',
];

export default function WhatYouGet() {
  return (
    <section className="bg-carvao px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-champagne md:text-4xl">
            Entre no grupo agora e você vai receber:
          </h2>
        </Reveal>

        <ul className="mt-10 flex flex-col gap-6">
          {ITEMS.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <li className="flex items-start gap-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-dourado" aria-hidden="true" />
                <span className="font-sans text-base leading-relaxed text-champagne/85 md:text-lg">
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
