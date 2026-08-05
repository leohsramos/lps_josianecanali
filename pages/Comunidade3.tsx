import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Plus, Minus, Shield, X } from 'lucide-react';
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

const CHECKLIST = [
    'Acordo no meio da noite encharcada de suor',
    'Durmo a noite toda e mesmo assim acordo sem energia',
    'Esqueço palavras no meio da frase',
    'Choro ou perco a paciência por qualquer coisa',
    'A minha libido simplesmente sumiu',
    'Ganhei barriga sem mudar nada na alimentação',
    'O sexo passou a doer',
    'Sinto que não sou mais eu'
];

// Método nomeado (PDF Reescrita das Sessões): 3 pilares que tornam o conteúdo proprietário.
const PILARES = [
    { n: '01', t: 'Entender', d: 'A medicina real dessa fase: o que está acontecendo com seus hormônios, seu cérebro, seus ossos e seu coração. Você para de adivinhar e passa a saber.' },
    { n: '02', t: 'Ler', d: 'Você aprende a interpretar seus próprios exames e sinais. Nunca mais sai de uma consulta sem entender, nem depende de quem não te escuta. Você passa a falar de igual para igual com qualquer médico.' },
    { n: '03', t: 'Aplicar', d: 'Pequenas ações guiadas para o seu dia, sustentadas pelo consultório aberto ao vivo e pela comunidade. É o que transforma o que você entende em mudança de verdade.' }
];

const ENTREGAVEIS = [
    { n: '01', t: 'Consultório Aberto ao vivo', d: '4 encontros ao vivo comigo. Você entra, faz a sua pergunta e a Dra. Josiane responde pelo seu nome. Não é gravação. É a médica do outro lado, te escutando.' },
    { n: '02', t: 'Aulas curtas, no seu ritmo', d: '16 semanas de aulas gravadas, na ordem que faz sentido para o seu corpo. Você aprende a ler os seus exames e a falar de igual para igual com qualquer médico.' },
    { n: '03', t: 'Exercícios e reflexão semanal', d: 'Toda semana, ações práticas guiadas e um momento de reflexão para aplicar na sua rotina. É o que transforma o que você entende em mudança de verdade.' },
    { n: '04', t: 'Grupo de WhatsApp com a comunidade', d: 'Um espaço fechado com vídeos, áudios e interações minhas, onde ninguém minimiza o que você sente. Aqui você volta a se sentir normal.' },
    { n: '05', t: '3 Cursos bônus da Academia Digital', d: 'Sexualidade no Casamento, Anatomia Sexual Feminina e Menopausa com Saúde: três cursos completos, inclusos sem custo extra.' },
    { n: '06', t: 'Descontos e novidades em primeira mão', d: 'Descontos e benefícios exclusivos em produtos "by Josiane Canali", e acesso antecipado a todos os lançamentos da clínica.' },
    { n: '07', t: 'Acesso que fica com você', d: 'Entra uma vez e leva o conteúdo da temporada. Sem assinatura, sem pressa, no seu tempo.' }
];

const ANCORAGEM = [
    { item: 'Consultório Aberto ao vivo, 4 encontros', valor: 'R$ 4.400' },
    { item: 'Jornada de 16 semanas em vídeo', valor: 'R$ 997' },
    { item: 'Grupo de WhatsApp com a comunidade', valor: 'R$ 530' },
    { item: '3 Cursos bônus da Academia Digital', valor: 'R$ 291' }
];

const FAQ = [
    { q: 'Já estou na menopausa há anos. Ainda serve pra mim?', a: 'Serve. A comunidade acolhe todas as fases: climatério, perimenopausa, menopausa e pós-menopausa. Depois da menopausa, cuidar de cérebro, ossos e coração fica ainda mais importante.' },
    { q: 'Isso substitui a consulta médica?', a: 'Não. É educação em saúde e acolhimento. O Consultório Aberto te orienta e te prepara para fazer as perguntas certas. Exames, prescrição e tratamento individual seguem com o seu médico.' },
    { q: 'Por quanto tempo tenho acesso?', a: 'O conteúdo da 1ª temporada fica com você de forma permanente. A comunidade e os encontros ao vivo seguem enquanto a temporada estiver rolando.' },
    { q: 'Como recebo o acesso?', a: 'Assim que o pagamento é confirmado, você recebe um e-mail com tudo: plataforma e grupo da comunidade.' },
    { q: 'Moro fora do Brasil. Funciona?', a: 'Funciona. Os encontros são ao vivo e ficam gravados, então você assiste no seu horário. Já temos mulheres em Portugal, Espanha, Estados Unidos, Peru e outros países.' }
];

const Comunidade3: React.FC = () => {
    const [checked, setChecked] = useState<number[]>([]);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [lightbox, setLightbox] = useState<string | null>(null);
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowSticky(window.scrollY > 700);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Meta Pixel: marca a visualização da página da Comunidade.
    useEffect(() => { trackViewContent(); }, []);

    const toggle = (i: number) =>
        setChecked((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

    const goCheckout = () => {
        const el = document.getElementById('oferta');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Comunidade Frequência Feminina',
        description: 'Acesso direto a uma ginecologista especialista em menopausa, ao vivo, mais jornada em vídeo e comunidade de mulheres.',
        provider: { '@type': 'Organization', name: 'Instituto Canali', sameAs: 'https://www.drajosianecanali.com.br' }
    };

    const accent = 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600';
    const greenBtn = 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-xl shadow-green-600/30 hover:shadow-green-500/40';

    return (
        <div className="w-full overflow-x-hidden bg-stone-950 text-stone-200 font-sans selection:bg-orange-500 selection:text-white">
            <SEO
                title="Comunidade Frequência Feminina | Dra. Josiane Canali"
                description="Vão te dizer que é da idade. Estão errados. Existe medicina por trás da menopausa, e uma médica pronta para te escutar ao vivo."
                image="https://i.postimg.cc/dV8Yx0gw/CAPAS_DE_CURSO_10.png"
                url="https://lp.institutocanali.com/comunidade-3"
                structuredData={courseSchema}
            />

            {/* ===== HERO / HOOK ===== */}
            <section className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-white/5">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] bg-gradient-to-bl from-orange-600/20 via-red-600/10 to-transparent blur-[130px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-red-700/15 to-transparent blur-[130px] pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-5 py-24 relative z-10">
                    <p className="text-orange-400 font-bold tracking-[0.25em] uppercase text-xs mb-8">
                        Carta aberta de uma ginecologista
                    </p>

                    <h1 className="font-display font-bold leading-[0.98] tracking-tight text-balance mb-8">
                        <span className="block text-4xl md:text-6xl lg:text-7xl text-stone-400">
                            Vão te dizer que é da idade.
                        </span>
                        <span className="block text-4xl md:text-6xl lg:text-7xl text-stone-400">
                            Que é normal. Que é só esperar passar.
                        </span>
                        <span className={`block text-5xl md:text-7xl lg:text-8xl mt-4 ${accent}`}>
                            Estão todos errados.
                        </span>
                    </h1>

                    <p className="text-stone-300 text-lg md:text-2xl font-light max-w-2xl leading-relaxed mb-6">
                        Existe medicina por trás da menopausa. E existe uma médica pronta para te escutar ao vivo, pelo seu nome, com a ciência que o seu médico talvez não conheça.
                    </p>
                    <p className="text-stone-400 text-base md:text-lg italic max-w-2xl leading-relaxed mb-10 border-l-2 border-orange-500/40 pl-4">
                        Na Comunidade Frequência Feminina você entra para 4 encontros ao vivo comigo, uma jornada em vídeo no seu ritmo e um grupo de mulheres que vivem exatamente o que você vive.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <button onClick={goCheckout} className={`${greenBtn} px-9 py-5 rounded-full font-bold text-lg flex items-center justify-center group`}>
                            Quero entrar na comunidade
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <span className="text-stone-400 text-sm flex items-center gap-2">
                            <Shield size={15} className="text-green-500" /> 7 dias de garantia. O risco é nosso.
                        </span>
                    </div>
                </div>
            </section>

            {/* ===== AUTODIAGNÓSTICO ===== */}
            <section className="py-24 bg-[#FDFBF7] text-stone-900">
                <div className="max-w-3xl mx-auto px-5">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 text-center">Seja honesta com você por um minuto.</h2>
                    <p className="text-stone-500 text-lg text-center mb-12">Marque o que você sente hoje.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CHECKLIST.map((item, i) => {
                            const on = checked.includes(i);
                            return (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => toggle(i)}
                                    className={`flex items-center gap-3 text-left p-4 rounded-2xl border-2 transition-all ${on ? 'border-orange-500 bg-orange-50' : 'border-stone-200 bg-white hover:border-orange-200'}`}
                                >
                                    <span className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors ${on ? 'bg-orange-500 text-white' : 'bg-stone-100 text-transparent'}`}>
                                        <Check size={15} />
                                    </span>
                                    <span className={`text-sm md:text-base ${on ? 'text-stone-900 font-medium' : 'text-stone-600'}`}>{item}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className={`mt-10 text-center transition-all duration-500 ${checked.length >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                        <p className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-2">
                            Você marcou {checked.length} {checked.length === 1 ? 'item' : 'itens'}.
                        </p>
                        <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto">
                            {checked.length >= 3
                                ? 'Isso não é frescura e não é da idade. É o seu corpo na menopausa pedindo um cuidado feito para você.'
                                : 'Mesmo um único sinal já merece atenção. O seu corpo está falando, e poucos médicos estão ouvindo.'}
                        </p>
                        <button onClick={goCheckout} className={`${greenBtn} px-9 py-4 rounded-full font-bold text-base inline-flex items-center group`}>
                            Quero ser ouvida
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== A VERDADE INCÔMODA ===== */}
            <section className="py-28 bg-stone-950 relative">
                <div className="max-w-3xl mx-auto px-5">
                    <p className="text-orange-400 font-bold tracking-[0.25em] uppercase text-xs mb-10">A verdade incômoda</p>
                    <div className="space-y-8 text-2xl md:text-4xl font-display font-bold leading-tight tracking-tight">
                        <p className="text-stone-500">Você já ouviu que era da idade.</p>
                        <p className="text-stone-500">Já tomou anticoncepcional pra regular.</p>
                        <p className="text-stone-500">Já tentou chá, suplemento, dieta.</p>
                        <p className="text-white">A maioria dos médicos foi formada para cuidar de mulheres em idade fértil.</p>
                        <p className="text-white">Quando você sai dessa fase, o sistema simplesmente não sabe o que fazer com você.</p>
                        <p className={accent}>O problema nunca foi você. Foi a falta de quem te escute.</p>
                    </div>
                </div>
            </section>

            {/* ===== MÉTODO FREQUÊNCIA + ENTREGAS ===== */}
            <section className="py-28 bg-[#FDFBF7] text-stone-900">
                <div className="max-w-5xl mx-auto px-5">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-orange-600 font-bold tracking-[0.25em] uppercase text-xs mb-4">O que faltava em tudo que você tentou</p>
                        <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-5">
                            Não existe fórmula mágica. <span className={accent}>Existe método.</span>
                        </h2>
                        <p className="text-stone-600 text-lg">
                            Tudo na Comunidade Frequência Feminina segue o <strong>Método Frequência</strong>, o caminho que leva você de "não sei mais o que está acontecendo comigo" para "eu entendo o meu corpo e decido com ele".
                        </p>
                    </div>

                    {/* 3 pilares do método */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
                        {PILARES.map((p, i) => (
                            <div key={i} className="bg-white rounded-[1.75rem] border border-stone-200 p-7 shadow-sm">
                                <div className="flex items-baseline gap-3 mb-3">
                                    <span className={`text-3xl font-display font-bold ${accent}`}>{p.n}</span>
                                    <h3 className="text-2xl font-bold">{p.t}</h3>
                                </div>
                                <p className="text-stone-600 leading-relaxed">{p.d}</p>
                            </div>
                        ))}
                    </div>

                    {/* Como acontece na prática */}
                    <div className="mb-10 max-w-2xl">
                        <h3 className="text-2xl md:text-4xl font-display font-bold mb-3">Como o Método Frequência acontece na prática</h3>
                        <p className="text-stone-600 text-lg">Não é mais um curso pra você assistir sozinha. É acesso de verdade, ao vivo.</p>
                    </div>
                    <div className="divide-y divide-stone-200 border-t border-stone-200">
                        {ENTREGAVEIS.map((e, i) => (
                            <div key={i} className="flex gap-6 md:gap-10 py-8 group">
                                <span className="text-3xl md:text-5xl font-display font-bold text-orange-500/30 group-hover:text-orange-500 transition-colors shrink-0">{e.n}</span>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-2">{e.t}</h3>
                                    <p className="text-stone-600 leading-relaxed max-w-2xl">{e.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROVA SOCIAL (scroll horizontal) ===== */}
            <section className="py-24 bg-stone-950 overflow-hidden">
                <div className="max-w-5xl mx-auto px-5 mb-10">
                    <p className="text-orange-400 font-bold tracking-[0.25em] uppercase text-xs mb-3">Pacientes da Dra. Josiane</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Não acredite em mim. Acredite nelas.</h2>
                    <p className="text-stone-400 mt-3">Mensagens reais de mulheres que a Dra. Josiane já atende. Esse é o cuidado que vem com você.</p>
                </div>
                <div className="flex gap-5 overflow-x-auto px-5 pb-6 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {DEPOIMENTOS.map((src, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setLightbox(src)}
                            className="snap-center shrink-0 w-[78%] sm:w-[44%] lg:w-[30%] cursor-zoom-in group"
                        >
                            <img
                                src={src}
                                alt={`Depoimento de paciente da Dra. Josiane Canali ${i + 1}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full rounded-2xl border border-white/10 shadow-lg group-hover:border-orange-500/40 transition-colors"
                            />
                        </button>
                    ))}
                </div>
                <p className="text-center text-stone-500 text-sm mt-4">Arraste para o lado. Toque para ampliar.</p>
            </section>

            {/* ===== OFERTA ===== */}
            <section id="oferta" className="py-28 bg-gradient-to-b from-stone-950 to-stone-900 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-2xl mx-auto px-5 relative z-10">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 font-bold uppercase text-xs tracking-widest mb-6">
                            Turma fundadora, 1ª temporada
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Tudo isto, por menos de um café por dia.</h2>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-9 backdrop-blur-sm">
                        <div className="space-y-3 mb-6">
                            {ANCORAGEM.map((row, i) => (
                                <div key={i} className="flex items-center justify-between gap-4 text-stone-300">
                                    <span className="flex items-center gap-3 text-sm md:text-base">
                                        <Check size={16} className="text-green-500 shrink-0" /> {row.item}
                                    </span>
                                    <span className="text-stone-500 line-through whitespace-nowrap text-sm">{row.valor}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-white/10 pt-5 mb-7">
                            <span className="text-stone-400 uppercase tracking-widest text-xs font-bold">Valor total</span>
                            <span className="text-stone-400 text-xl font-bold line-through decoration-red-500">R$ 6.218</span>
                        </div>

                        <div className="text-center mb-7">
                            <p className="text-stone-400 uppercase tracking-widest text-xs mb-2">Entrando hoje</p>
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-xl text-stone-300 font-medium">12x de</span>
                                <span className="text-6xl md:text-7xl font-black text-orange-500 leading-none drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]">R$ 29,68</span>
                            </div>
                            <p className="text-stone-300 mt-2">ou <span className="text-white font-semibold">R$ 287</span> à vista</p>
                        </div>

                        <a href={CHECKOUT_URL} onClick={trackInitiateCheckout} target="_blank" rel="noopener noreferrer" className={`${greenBtn} w-full py-5 rounded-2xl font-bold text-lg uppercase tracking-wide flex items-center justify-center`}>
                            Quero entrar agora
                        </a>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 text-stone-400 text-sm">
                            <span className="flex items-center gap-2"><Shield size={15} className="text-green-500" /> Pagamento 100% seguro</span>
                            <span className="flex items-center gap-2"><Check size={15} className="text-green-500" /> Acesso imediato</span>
                        </div>
                    </div>

                    {/* Garantia */}
                    <div className="mt-8 flex items-start gap-4 bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
                        <Shield className="w-8 h-8 text-green-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-white font-bold mb-1">7 dias para experimentar sem risco.</p>
                            <p className="text-stone-400 text-sm leading-relaxed">Entre, participe de um Consultório Aberto, assista as primeiras aulas. Se não for pra você, devolvemos cada centavo. Sem perguntas, sem burocracia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BIO DRA JOSI ===== */}
            <section className="py-24 bg-stone-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
                    <img src={DRA_JOSI_PHOTO} alt="Dra. Josiane Canali" className="w-44 h-44 md:w-56 md:h-56 rounded-3xl object-cover object-top shrink-0 shadow-2xl" loading="lazy" decoding="async" />
                    <div>
                        <p className="text-orange-400 font-bold tracking-[0.25em] uppercase text-xs mb-3">Quem vai te acompanhar</p>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Dra. Josiane Canali</h2>
                        <p className="text-stone-400 leading-relaxed mb-3">
                            Ginecologista, especialista em menopausa e longevidade hormonal. Atende mulheres que chegam, quase sempre, depois de já terem passado por outros médicos sem resposta.
                        </p>
                        <p className="text-stone-300 font-serif italic text-lg border-l-2 border-orange-500/40 pl-4">
                            "O envelhecimento é inevitável. O declínio é opcional."
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="py-24 bg-[#FDFBF7] text-stone-900">
                <div className="max-w-2xl mx-auto px-5">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">Ainda em dúvida?</h2>
                    <div className="space-y-3">
                        {FAQ.map((item, i) => {
                            const open = openFaq === i;
                            return (
                                <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(open ? null : i)}
                                        className="w-full flex items-center justify-between gap-4 text-left p-5 font-bold text-stone-900"
                                    >
                                        {item.q}
                                        <span className="shrink-0 text-orange-500">{open ? <Minus size={20} /> : <Plus size={20} />}</span>
                                    </button>
                                    <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <p className="px-5 pb-5 text-stone-600 leading-relaxed">{item.a}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== CTA FINAL ===== */}
            <section className="py-28 bg-stone-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                        Você não tem que <span className={accent}>aceitar viver assim.</span>
                    </h2>
                    <p className="text-stone-400 text-xl mb-10">A resposta existe. E está a um clique de distância.</p>
                    <button onClick={goCheckout} className={`${greenBtn} px-12 py-6 rounded-full font-bold text-xl inline-flex items-center group`}>
                        Quero entrar na comunidade
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="mt-6">
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-green-400 transition-colors text-sm">
                            Prefere falar com a gente antes? Chame no WhatsApp.
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg-stone-950 py-10 border-t border-white/5 px-5">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-stone-600 text-xs leading-relaxed mb-4">
                        A Comunidade Frequência Feminina é uma jornada educativa e de acolhimento. Não substitui consulta médica, diagnóstico, prescrição ou tratamento individual.
                    </p>
                    <p className="text-stone-700 text-xs">&copy; {new Date().getFullYear()} Comunidade Frequência Feminina. Todos os direitos reservados.</p>
                </div>
            </footer>

            {/* ===== CTA FIXO ===== */}
            <div className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${showSticky && !lightbox ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="bg-stone-900/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
                    <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
                        <div className="hidden sm:block">
                            <p className="text-white font-bold text-sm leading-tight">12x de R$ 29,68 <span className="text-stone-400 font-normal">ou R$ 287 à vista</span></p>
                            <p className="text-stone-500 text-xs">Turma fundadora, 7 dias de garantia</p>
                        </div>
                        <button onClick={goCheckout} className={`${greenBtn} flex-1 sm:flex-none px-8 py-3.5 rounded-full font-bold text-base inline-flex items-center justify-center group`}>
                            Quero entrar
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ===== LIGHTBOX ===== */}
            {lightbox && (
                <div
                    onClick={() => setLightbox(null)}
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fade-in"
                    role="dialog"
                    aria-modal="true"
                >
                    <button type="button" onClick={() => setLightbox(null)} aria-label="Fechar" className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors">
                        <X size={32} />
                    </button>
                    <img src={lightbox} alt="Depoimento ampliado" className="max-h-[90vh] max-w-full w-auto rounded-2xl shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default Comunidade3;
