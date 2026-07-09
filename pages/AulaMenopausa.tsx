import React, { useLayoutEffect, useRef, useState } from 'react';
import { MessageCircle, Moon, HeartCrack, ShieldCheck, Flame, Radio, Lock, Bell, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/JAM6mnlMVMaDO8vMxAL9Oz?mode=gi_t';

// Encolhe o(s) texto(s) marcado(s) com data-fit-line até caberem em uma única linha dentro
// da largura real do container (medida via ResizeObserver, não em vw — que ignora colunas/grid).
function useFitFontSize({ maxPx, minPx, step = 1, chrome = 0 }: { maxPx: number; minPx: number; step?: number; chrome?: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [fontSize, setFontSize] = useState(maxPx);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const fit = () => {
            const available = container.clientWidth - chrome;
            const lines = Array.from(container.querySelectorAll<HTMLElement>('[data-fit-line]'));
            if (lines.length === 0) return;
            let size = maxPx;
            const widest = () => Math.max(...lines.map((l) => l.scrollWidth));
            lines.forEach((l) => { l.style.fontSize = `${size}px`; });
            while (widest() > available && size > minPx) {
                size -= step;
                lines.forEach((l) => { l.style.fontSize = `${size}px`; });
            }
            setFontSize(size);
        };

        fit();
        const ro = new ResizeObserver(fit);
        ro.observe(container);
        return () => ro.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { containerRef, fontSize };
}

const CTAButton: React.FC<{ origin: string; className?: string }> = ({ origin, className = '' }) => (
    <a
        href={WHATSAPP_GROUP_LINK}
        target="_blank"
        rel="noreferrer"
        data-track-origin={origin}
        className={`inline-flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap bg-[#25D366] text-white font-bold px-4 sm:px-8 py-3.5 sm:py-5 rounded-2xl shadow-xl shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:scale-[1.03] active:scale-[0.97] transition-all text-[clamp(12px,3.6vw,18px)] ${className}`}
    >
        <MessageCircle size={20} className="shrink-0" />
        Quero entrar para o grupo da aula
    </a>
);

// Encolhe o texto do badge até caber em uma única linha, sem cortar nas telas mais estreitas.
const EventBadge: React.FC = () => {
    const { containerRef, fontSize } = useFitFontSize({ maxPx: 14, minPx: 6, step: 0.5, chrome: 40 });

    return (
        <div ref={containerRef} className="w-full flex justify-center">
            <div className="inline-flex items-center justify-center px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-rose-200 bg-rose-50 text-rose-600 font-bold uppercase whitespace-nowrap">
                <span data-fit-line style={{ fontSize }} className="whitespace-nowrap">
                    <span>Aula ao vivo e <strong>gratuita</strong> sobre menopausa</span>
                    <span className="opacity-50 mx-1.5">·</span>
                    <strong>5 de agosto</strong>
                    <span className="opacity-50 mx-1.5">·</span>
                    <span>Às 20h</span>
                </span>
            </div>
        </div>
    );
};

// Encolhe as duas linhas do título com base na largura real da coluna (não do viewport),
// para não invadir a coluna da foto em layouts de duas colunas no desktop.
const Headline: React.FC = () => {
    const { containerRef, fontSize } = useFitFontSize({ maxPx: 96, minPx: 22, step: 1 });

    return (
        <div ref={containerRef} className="w-full">
            <h1 className="font-display font-black text-stone-900 mb-6 leading-[1.05] tracking-tight">
                <span data-fit-line style={{ fontSize }} className="block whitespace-nowrap">Você não está ficando louca.</span>
                <span data-fit-line style={{ fontSize }} className="block whitespace-nowrap">
                    <span className="text-rose-500">Pode ser a </span>
                    <span className="bg-gradient-to-r from-[rgb(244,63,94)] to-[rgb(184,71,80)] bg-clip-text text-transparent">MENOPAUSA.</span>
                </span>
            </h1>
        </div>
    );
};

const AulaMenopausa: React.FC = () => {
    return (
        <div className="w-full font-sans bg-stone-50">
            <SEO
                title="Aula ao vivo e gratuita sobre Menopausa | Dra. Josiane Canali"
                description="Aula ao vivo e gratuita com a Dra. Josiane Canali sobre climatério e menopausa, no dia 5 de agosto. Entenda sono, libido, humor e identidade nessa fase. Entrada via grupo no WhatsApp."
                url="https://www.josianecanali.com.br/aula-menopausa"
                image="https://www.josianecanali.com.br/josiane-canali-aula-menopausa.webp"
            />

            {/* HERO */}
            <section className="relative min-h-screen flex flex-col justify-center px-4 pt-[2.8rem] pb-16 overflow-hidden bg-gradient-to-b from-rose-50 via-stone-50 to-stone-50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <div className="relative z-10 w-full flex justify-center mb-10">
                    <EventBadge />
                </div>

                {/* Mobile order: título, foto, texto/CTA. Desktop: título+texto numa coluna, foto na outra. */}
                <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-y-0 items-center [grid-template-areas:'headline'_'photo'_'text'] lg:[grid-template-areas:'headline_photo'_'text_photo']">
                    {/* Headline */}
                    <div className="[grid-area:headline] min-w-0 w-full text-center lg:text-left">
                        <Headline />
                    </div>

                    {/* Photo column */}
                    <div className="[grid-area:photo] flex flex-col items-center -mt-10 lg:mt-0">
                        <img
                            src="/josiane-canali-aula-menopausa.webp"
                            alt="Dra. Josiane Canali, ginecologista e obstetra, sorrindo sentada"
                            width={800}
                            height={1000}
                            className="w-full max-w-sm aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                        />
                        <div className="text-center mt-5">
                            <p className="font-bold text-stone-900 text-lg">Dra. Josiane Canali | Ginecologista</p>
                            <p className="text-stone-500 text-sm">CRM PR 40.088 | RQE 4.382</p>
                        </div>
                    </div>

                    {/* Text + CTA */}
                    <div className="[grid-area:text] min-w-0 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <p className="text-stone-600 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                            Aula ao vivo e <strong className="font-semibold text-stone-800">gratuita</strong> com a <strong className="font-semibold text-stone-800">Dra. Josiane Canali</strong> sobre climatério e menopausa. Entenda por que o sono piorou, a libido caiu, o humor mudou e você sente que não é mais você. Dia <strong className="font-semibold text-stone-800">5 de agosto</strong>.
                        </p>

                        <div>
                            <CTAButton origin="aula-menopausa-hero" />
                            <p className="text-stone-400 text-xs mt-4 font-medium">Vagas limitadas. Entrada via grupo no WhatsApp.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* O QUE VOCÊ VAI ENTENDER */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900">
                            Nesta aula sobre <span className="text-rose-500">menopausa</span>, você vai entender
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Sparkles,
                                title: 'Por que você sente que não é mais você.',
                                text: 'O climatério e a perimenopausa podem começar bem antes da menstruação parar, e mexem com o corpo, o humor e a identidade ao mesmo tempo. Muita mulher sofre anos sem saber que já está nessa fase.',
                            },
                            {
                                icon: Moon,
                                title: 'Por que a libido cai e o sono piora.',
                                text: 'Sono, humor, desejo e energia estão mais conectados aos hormônios do que a maioria das mulheres imagina. Entenda essa relação, e por que isso não é falta de amor nem falta de vontade.',
                            },
                            {
                                icon: ShieldCheck,
                                title: 'O que precisa ser avaliado antes de pensar em reposição hormonal.',
                                text: 'Reposição hormonal não é receita de bolo. Entenda o que precisa ser investigado, avaliado e acompanhado antes de qualquer decisão sobre o assunto.',
                            },
                            {
                                icon: HeartCrack,
                                title: 'Por que dor na relação e ressecamento não são normais.',
                                text: 'Muita mulher aprende a conviver com desconforto acreditando que é parte da idade. Não é. Entenda quando esses sinais pedem investigação.',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="h-full bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1.5 transition-all"
                            >
                                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 mb-5">
                                    <item.icon size={22} />
                                </div>
                                <h3 className="font-bold text-stone-900 text-lg mb-3 leading-snug">{item.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-14">
                        <CTAButton origin="aula-menopausa-entenda" />
                    </div>
                </div>
            </section>

            {/* ESSA AULA É PARA VOCÊ SE... */}
            <section className="bg-rose-400 py-24">
                <div className="max-w-3xl mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-display font-medium mb-12">Essa aula é para você se…</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 text-left mb-12">
                        {[
                            'Você não dorme direito mesmo cansada.',
                            'Perdeu a vontade de transar e se culpa por isso.',
                            'Ganhou peso sem entender o motivo.',
                            'Está mais irritada do que gostaria de admitir.',
                            'Sente dor ou ressecamento na relação.',
                            'Sente que, de um tempo pra cá, virou outra pessoa.',
                        ].map((text, i) => (
                            <div key={i} className="h-full flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                                <Flame size={18} className="text-rose-100 shrink-0" />
                                <p className="font-medium leading-snug">{text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-xl md:text-2xl font-display italic mb-12">
                        Você não está exagerando. E não precisa continuar sem entender o motivo.
                    </p>

                    <CTAButton origin="aula-menopausa-e-pra-voce" />
                </div>
            </section>

            {/* DETALHES DO EVENTO + O QUE VOCÊ RECEBE */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900">
                            Entre no grupo agora e você vai receber:
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                        {[
                            { icon: Radio, text: <>O link de acesso à aula ao vivo, no dia <strong className="font-semibold text-stone-800">5 de agosto</strong>.</> },
                            { icon: Bell, text: 'Avisos antecipados com os temas que serão abordados.' },
                            { icon: Lock, text: 'Conteúdos exclusivos da Dra. Josiane nos dias que antecedem a aula.' },
                        ].map((item, i) => (
                            <div key={i} className="h-full bg-white p-6 rounded-[2rem] shadow-sm border border-stone-100 text-center flex flex-col items-center">
                                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 mb-4">
                                    <item.icon size={22} />
                                </div>
                                <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center flex flex-col items-center">
                        <p className="text-stone-900 font-display text-xl md:text-2xl mb-8">
                            Você não precisa atravessar essa fase sozinha.
                        </p>
                        <CTAButton origin="aula-menopausa-meio" />
                        <p className="text-stone-400 text-xs mt-5 leading-relaxed">
                            <span className="whitespace-nowrap">Grupo silencioso. Apenas avisos da Dra. Josiane e conteúdos da aula.</span><br />
                            Saída livre a qualquer momento.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER LEGAL */}
            <footer className="bg-[#1c1917] py-10 text-center">
                <div className="max-w-3xl mx-auto px-4 text-stone-400 text-xs leading-relaxed space-y-3">
                    <p>Este conteúdo é educativo e não substitui consulta médica.</p>
                    <p className="font-semibold text-stone-300">Dra. Josiane Canali | CRM PR 40.088 | RQE 4.382</p>
                </div>
            </footer>
        </div>
    );
};

export default AulaMenopausa;
