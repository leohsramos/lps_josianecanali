import React, { useState, useEffect, useRef } from 'react';
import { Check, CheckCheck, Send, Shield, X, ArrowDown, Phone, Video } from 'lucide-react';
import SEO from '../components/SEO';
import { trackViewContent, trackInitiateCheckout } from '../components/track';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/vouQr4v';
// ATENÇÃO: troque pelo número real de atendimento da equipe (formato wa.me/55DDDNUMERO)
const WHATSAPP_URL = 'https://wa.me/5500000000000';
const DRA_JOSI_PHOTO = 'https://i.postimg.cc/26Q0fGqj/HDS-9361-2.jpg';

const DEPOIMENTOS_BASE = 'https://pub-9928dd4f81074a80bf263d6f5ead726e.r2.dev/josiane_canali/comunidade/depoimentos/';
const DEPOIMENTOS = [
    'PHOTO-2026-05-11-18-30-05.jpg',
    'PHOTO-2026-05-11-18-30-05 2.jpg',
    'PHOTO-2026-05-11-18-30-05 3.jpg',
    'PHOTO-2026-05-11-18-30-05 4.jpg',
    'PHOTO-2026-05-11-18-30-05 5.jpg',
    'PHOTO-2026-05-11-18-30-05 6.jpg',
    'PHOTO-2026-05-11-18-30-05 7.jpg'
].map((file) => DEPOIMENTOS_BASE + encodeURIComponent(file));

// Revela o elemento quando entra na viewport (efeito de mensagem chegando).
const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) { setShown(true); obs.unobserve(e.target); } }),
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return (
        <div ref={ref} className={`transition-all duration-500 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} ${className}`}>
            {children}
        </div>
    );
};

const Comunidade5: React.FC = () => {
    const [lightbox, setLightbox] = useState<string | null>(null);

    // Meta Pixel: marca a visualização da página da Comunidade.
    useEffect(() => { trackViewContent(); }, []);

    const goCheckout = () => {
        const el = document.getElementById('oferta');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Comunidade Frequência Feminina',
        description: 'Acesso direto a uma ginecologista especialista em menopausa, ao vivo todo mês, mais conteúdo e comunidade de mulheres.',
        provider: { '@type': 'Organization', name: 'Instituto Canali', sameAs: 'https://www.drajosianecanali.com.br' }
    };

    // Bolha da Dra. (lado esquerdo)
    const Bubble: React.FC<{ children: React.ReactNode; time?: string }> = ({ children, time = '09:14' }) => (
        <Reveal className="flex justify-start mb-2.5">
            <div className="relative max-w-[82%] bg-white text-stone-800 rounded-2xl rounded-tl-md px-4 py-2.5 shadow-sm">
                <div className="text-[15px] leading-relaxed">{children}</div>
                <span className="block text-[10px] text-stone-400 text-right mt-1">{time}</span>
            </div>
        </Reveal>
    );

    return (
        <div className="w-full min-h-screen bg-stone-200 font-sans selection:bg-orange-500 selection:text-white">
            <SEO
                title="Uma conversa com a Dra. Josiane Canali | Frequência Feminina"
                description="Posso te falar uma coisa, de médica para mulher? Se você anda exausta, com calorões e sem dormir, leia até o fim. A menopausa tem medicina por trás."
                image="https://i.postimg.cc/dV8Yx0gw/CAPAS_DE_CURSO_10.png"
                url="https://lp.institutocanali.com/comunidade-5"
                structuredData={courseSchema}
            />

            {/* Coluna do "celular" */}
            <div className="max-w-md mx-auto min-h-screen flex flex-col bg-[#ece5dd] shadow-2xl relative">

                {/* Header do chat */}
                <div className="sticky top-0 z-30 flex items-center gap-3 px-3 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md">
                    <div className="relative shrink-0">
                        <img src={DRA_JOSI_PHOTO} alt="Dra. Josiane Canali" className="w-10 h-10 rounded-full object-cover object-top border-2 border-white/30" />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-orange-600"></span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm leading-tight truncate">Dra. Josiane Canali</p>
                        <p className="text-white/80 text-[11px] leading-tight">online agora</p>
                    </div>
                    <Phone size={18} className="opacity-90" />
                    <Video size={18} className="opacity-90" />
                </div>

                {/* Área de mensagens */}
                <div
                    className="flex-1 px-3 py-5"
                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
                >
                    {/* Selo de criptografia, igual WhatsApp */}
                    <Reveal className="flex justify-center mb-5">
                        <p className="bg-[#fdf4c9] text-stone-600 text-[11px] text-center px-3 py-1.5 rounded-lg max-w-[88%] shadow-sm">
                            As mensagens são pessoais. A Dra. Josiane preparou esta conversa para você.
                        </p>
                    </Reveal>

                    <Bubble>Oi. Posso te falar uma coisa, de médica para mulher?</Bubble>
                    <Bubble>Se você anda exausta, com calorões, sem dormir e sem vontade de nada, eu preciso que você leia até o fim.</Bubble>
                    <Bubble>
                        Isso que você sente não é da idade. Não é frescura. E não é da sua cabeça. <strong>É a menopausa, e ela tem medicina por trás.</strong>
                    </Bubble>
                    <Bubble>Eu sou a Dra. Josiane Canali, ginecologista especialista em menopausa.</Bubble>
                    <Bubble>
                        Todo dia eu atendo mulheres que chegaram até mim depois de ouvir "vai passar" de vários médicos. Deixa eu te mostrar o que elas me mandam.
                    </Bubble>

                    {/* Fotos encaminhadas (depoimentos) */}
                    <Reveal className="flex justify-start mb-2.5">
                        <div className="max-w-[82%] bg-white rounded-2xl rounded-tl-md p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-1.5">
                                {DEPOIMENTOS.map((src, i) => (
                                    <button key={i} type="button" onClick={() => setLightbox(src)} className="block cursor-zoom-in">
                                        <img src={src} alt={`Depoimento de paciente da Dra. Josiane Canali ${i + 1}`} loading="lazy" decoding="async" className="w-full h-24 object-cover rounded-lg" />
                                    </button>
                                ))}
                            </div>
                            <span className="block text-[10px] text-stone-400 text-right mt-1.5 pr-1">Toque para ampliar · 09:15</span>
                        </div>
                    </Reveal>

                    <Bubble time="09:16">São pacientes reais. É esse mesmo cuidado que eu quero te entregar agora.</Bubble>
                    <Bubble time="09:16">
                        Eu criei a <strong>Comunidade Frequência Feminina</strong> pra estar do seu lado de verdade. Não é um curso pra você assistir sozinha.
                    </Bubble>

                    {/* O que recebe */}
                    <Reveal className="flex justify-start mb-2.5">
                        <div className="max-w-[82%] bg-white text-stone-800 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                            <p className="text-[13px] font-bold text-orange-600 uppercase tracking-wide mb-2">O que você recebe</p>
                            <ul className="space-y-2 text-[14px]">
                                {[
                                    'Consultório Aberto ao vivo comigo, todo mês',
                                    'Aulas curtas, no seu ritmo, feitas pro seu corpo',
                                    'Exercícios práticos pro dia a dia',
                                    'Uma comunidade de mulheres que te entende',
                                    'Acesso permanente ao conteúdo da temporada'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check size={16} className="text-green-600 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <span className="block text-[10px] text-stone-400 text-right mt-2">09:17</span>
                        </div>
                    </Reveal>

                    <Bubble time="09:17">A parte mais importante: você fala comigo ao vivo, pelo seu nome. Não em dez minutos de consulta corrida.</Bubble>

                    {/* Indicador de digitando */}
                    <Reveal className="flex justify-start mb-2.5">
                        <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                    </Reveal>

                    {/* Mensagem da oferta */}
                    <div id="oferta">
                        <Reveal className="flex justify-start mb-2.5">
                            <div className="max-w-[86%] bg-white text-stone-800 rounded-2xl rounded-tl-md p-1.5 shadow-md">
                                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 text-center border border-orange-100">
                                    <p className="text-[12px] text-stone-500 uppercase tracking-widest font-bold mb-1">Turma fundadora</p>
                                    <p className="text-[13px] text-stone-500">Tudo isso valeria</p>
                                    <p className="text-stone-400 line-through decoration-red-500 text-lg font-bold mb-1">R$ 5.797</p>
                                    <p className="text-[13px] text-stone-600">Entrando agora</p>
                                    <p className="text-4xl font-black text-orange-600 leading-tight">12x R$ 59,88</p>
                                    <p className="text-[13px] text-stone-600">ou R$ 579 à vista</p>
                                </div>
                                <span className="block text-[10px] text-stone-400 text-right mt-1 pr-1">09:18</span>
                            </div>
                        </Reveal>
                    </div>

                    <Bubble time="09:18">
                        E se em <strong>7 dias</strong> você sentir que não é pra você, eu devolvo cada centavo. Sem perguntas. O risco é meu, não seu.
                    </Bubble>

                    {/* Botão CTA estilo resposta */}
                    <Reveal className="flex justify-end mb-2.5">
                        <a href={CHECKOUT_URL} onClick={trackInitiateCheckout} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl rounded-tr-md px-5 py-3 shadow-lg font-bold text-[15px] flex items-center gap-2 hover:from-green-500 hover:to-emerald-500 transition-colors">
                            Quero entrar na comunidade <Check size={16} className="opacity-80" />
                        </a>
                    </Reveal>

                    <Reveal className="flex justify-end mb-2.5">
                        <div className="bg-green-600 text-white rounded-2xl rounded-tr-md px-4 py-2.5 shadow-sm max-w-[82%]">
                            <p className="text-[15px]">Pode contar comigo. Quero começar agora.</p>
                            <span className="flex items-center justify-end gap-1 text-[10px] text-green-100 mt-1">09:19 <CheckCheck size={13} /></span>
                        </div>
                    </Reveal>

                    <Bubble time="09:19">Que alegria ler isso. Te espero lá dentro. A partir de hoje, você não enfrenta mais isso sozinha.</Bubble>

                    {/* Perguntas rápidas */}
                    <Reveal className="flex justify-center my-6">
                        <span className="bg-white/70 text-stone-500 text-[11px] px-3 py-1 rounded-full">Perguntas que sempre me fazem</span>
                    </Reveal>

                    {[
                        { q: 'Já estou na menopausa há anos. Ainda serve?', a: 'Serve, sim. Acolho todas as fases, e depois da menopausa cuidar de cérebro, ossos e coração fica ainda mais importante.' },
                        { q: 'Isso substitui a consulta?', a: 'Não. É educação e acolhimento. Te oriento e te preparo, mas exames e prescrição seguem com o seu médico.' },
                        { q: 'Moro fora do Brasil, funciona?', a: 'Funciona. Os encontros ficam gravados e já temos mulheres em vários países.' }
                    ].map((item, i) => (
                        <React.Fragment key={i}>
                            <Reveal className="flex justify-end mb-2.5">
                                <div className="bg-green-600 text-white rounded-2xl rounded-tr-md px-4 py-2.5 shadow-sm max-w-[82%]">
                                    <p className="text-[15px]">{item.q}</p>
                                </div>
                            </Reveal>
                            <Bubble time={`09:2${i}`}>{item.a}</Bubble>
                        </React.Fragment>
                    ))}

                    <Reveal className="flex justify-center mt-6">
                        <button onClick={goCheckout} className="text-orange-700 text-sm font-semibold flex items-center gap-1 animate-bounce">
                            <ArrowDown size={15} /> Voltar para a oferta
                        </button>
                    </Reveal>

                    <p className="text-stone-500 text-[10px] leading-relaxed text-center mt-8 px-2">
                        A Comunidade Frequência Feminina é uma jornada educativa e de acolhimento. Não substitui consulta médica, diagnóstico, prescrição ou tratamento individual.
                    </p>
                </div>

                {/* Barra de "responder" fixa (CTA) */}
                <div className="sticky bottom-0 z-30 bg-[#f0f0f0] border-t border-stone-300 px-3 py-2.5">
                    <a href={CHECKOUT_URL} onClick={trackInitiateCheckout} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <div className="flex-1 bg-white rounded-full px-4 py-2.5 text-stone-400 text-sm shadow-inner">
                            Responder à Dra. Josiane...
                        </div>
                        <span className="w-11 h-11 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white shadow-lg shrink-0">
                            <Send size={18} />
                        </span>
                    </a>
                    <p className="text-center text-stone-500 text-[10px] mt-1.5 flex items-center justify-center gap-1">
                        <Shield size={10} className="text-green-600" /> 7 dias de garantia · Pagamento 100% seguro
                    </p>
                </div>

            </div>

            {/* Lightbox */}
            {lightbox && (
                <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-fade-in" role="dialog" aria-modal="true">
                    <button type="button" onClick={() => setLightbox(null)} aria-label="Fechar" className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors">
                        <X size={32} />
                    </button>
                    <img src={lightbox} alt="Depoimento ampliado" className="max-h-[90vh] max-w-full w-auto rounded-2xl shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default Comunidade5;
