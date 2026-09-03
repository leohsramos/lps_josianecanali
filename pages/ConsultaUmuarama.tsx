import React from 'react';
import { MessageCircle, CheckCircle2, Ear, ShieldCheck, HeartHandshake } from 'lucide-react';
import SEO from '../components/SEO';
import { trackLeadWhatsappConsultaUmuarama } from '../components/track';

const WHATSAPP_URL = 'https://tintim.link/whatsapp/aa08a155-4c5e-4e18-a3b4-83239c6908d2/23b4dcae-674c-4cca-9e34-29d49b541a83';

const CTAButton: React.FC<{ origin: string; className?: string }> = ({ origin, className = '' }) => (
    <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        data-track-origin={origin}
        onClick={trackLeadWhatsappConsultaUmuarama}
        className={`inline-flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap bg-[#25D366] text-white font-bold px-6 sm:px-9 py-4 sm:py-5 rounded-2xl shadow-xl shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:scale-[1.03] active:scale-[0.97] transition-all text-[clamp(13px,3.6vw,18px)] ${className}`}
    >
        <MessageCircle size={20} className="shrink-0" />
        Quero agendar minha consulta
    </a>
);

const ConsultaUmuarama: React.FC = () => {
    return (
        <div className="w-full font-sans bg-[#FBF6EC]">
            <SEO
                title="Consulta Particular com Dra. Josiane Canali | Umuarama, PR"
                description="Consulta particular, individualizada e aprofundada com a Dra. Josiane Canali, ginecologista, em Umuarama, PR. Saúde da mulher, menopausa, climatério e sexualidade feminina."
                url="https://www.josianecanali.com.br/consulta-umuarama"
                image="https://img.ampulloo.com/josiane_canali/imersao-hero.webp"
            />

            {/* HERO */}
            <section className="relative px-4 pt-14 pb-12 overflow-hidden bg-gradient-to-b from-[#830E17]/5 via-[#FBF6EC] to-[#FBF6EC]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#830E17]/5 rounded-full blur-3xl opacity-70 pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto w-full text-center flex flex-col items-center">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-6">
                        <span className="text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase text-[#830E17]">
                            Consulta particular em Umuarama, PR
                        </span>
                    </div>

                    <h1 className="font-display font-black text-stone-900 mb-6 leading-[1.15] tracking-tight text-[clamp(26px,7vw,44px)]">
                        Você sente que seu corpo mudou e ninguém te dá uma resposta de verdade?
                    </h1>

                    <p className="text-stone-600 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-light">
                        Cansaço constante, queda de libido, sono ruim, humor instável ou desconforto na relação podem estar relacionados a mudanças hormonais. Cada caso precisa ser investigado com atenção, não com respostas prontas.
                    </p>

                    <img
                        src="/josiane-canali-aula-menopausa.webp"
                        alt="Dra. Josiane Canali, ginecologista, sorrindo sentada"
                        width={800}
                        height={1000}
                        className="w-full max-w-xs aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white mb-8"
                        loading="eager"
                        // @ts-expect-error fetchpriority ainda não está tipado em React 18, mas é um atributo HTML válido
                        fetchpriority="high"
                        decoding="async"
                    />

                    <div>
                        <CTAButton origin="consulta-umuarama-hero" />
                        <p className="text-stone-400 text-xs mt-4 font-medium">As informações estão disponíveis no botão acima.</p>
                    </div>
                </div>
            </section>

            {/* VALIDAÇÃO DA DOR */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-center font-display font-bold text-stone-900 text-2xl sm:text-3xl mb-10">
                        Isso pode ter explicação, e merece ser investigado
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {[
                            'Queda de libido e desejo sexual',
                            'Cansaço constante e sono ruim',
                            'Irritabilidade e oscilação de humor',
                            'Ganho de peso sem explicação aparente',
                            'Secura ou desconforto na relação',
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3 bg-[#FBF6EC] border border-stone-100 rounded-2xl p-4">
                                <CheckCircle2 size={20} className="text-[#830E17] shrink-0" />
                                <p className="text-stone-700 text-sm font-medium leading-snug">{text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-stone-800 text-lg sm:text-xl font-display italic leading-relaxed">
                        Isso não é falta de força de vontade, não é frescura e não é só a idade. Pode ter relação com mudanças hormonais e precisa ser avaliado individualmente.
                    </p>
                </div>
            </section>

            {/* AUTORIDADE */}
            <section className="py-16 sm:py-20 bg-[#1c1917]">
                <div className="max-w-2xl mx-auto px-4 text-center text-stone-100">
                    <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6">
                        Quem vai te <span className="text-[#D4AF37]">ouvir</span>
                    </h2>
                    <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8">
                        Dra. Josiane Canali é ginecologista, com atuação em saúde da mulher, menopausa, climatério e sexualidade feminina. Atende em consulta particular, individualizada e aprofundada, presencialmente em Umuarama, PR.
                    </p>
                    <div className="inline-block">
                        <p className="font-bold text-white">Dra. Josiane Canali | Ginecologista</p>
                        <p className="text-stone-400 text-sm">CRM PR 40.088 | RQE 4.382</p>
                    </div>
                </div>
            </section>

            {/* O QUE ESPERAR DA CONSULTA */}
            <section className="py-16 sm:py-20 bg-[#FBF6EC]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-center font-display font-bold text-stone-900 text-2xl sm:text-3xl mb-12">
                        O que esperar da consulta
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Ear, text: 'Escuta real, sem pressa e sem julgamento.' },
                            { icon: ShieldCheck, text: 'Investigação individualizada, sem respostas prontas como "é da idade".' },
                            { icon: HeartHandshake, text: 'Avaliação completa antes de qualquer decisão sobre tratamento, quando indicado.' },
                        ].map((item, i) => (
                            <div key={i} className="h-full bg-white p-6 rounded-[2rem] shadow-sm border border-stone-100 text-center flex flex-col items-center">
                                <div className="w-12 h-12 bg-[#830E17]/10 rounded-full flex items-center justify-center text-[#830E17] mb-4">
                                    <item.icon size={22} />
                                </div>
                                <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 sm:py-24 bg-gradient-to-b from-[#830E17] to-[#5c0a10]">
                <div className="max-w-2xl mx-auto px-4 text-center text-white">
                    <h2 className="font-display font-medium text-2xl sm:text-3xl leading-relaxed mb-10">
                        Você não está louca. Você precisa entender o que o seu corpo está tentando dizer.
                    </h2>
                    <CTAButton origin="consulta-umuarama-final" />
                    <p className="text-white/60 text-xs mt-5">As informações estão disponíveis no botão acima.</p>
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

export default ConsultaUmuarama;
