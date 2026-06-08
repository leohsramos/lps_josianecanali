import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Plus, Minus, Shield, Star, Lock, Brain, Stethoscope, Users } from 'lucide-react';
import SEO from '../components/SEO';

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

// Mecanismo único: As 3 Frequências
const FREQUENCIAS = [
    { icon: <Brain size={24} />, n: '1', t: 'Entender', d: 'Você aprende a ler o seu corpo e os seus exames, na ordem que faz sentido para você. Sai da confusão e entra no controle.' },
    { icon: <Stethoscope size={24} />, n: '2', t: 'Acessar', d: 'Todo mês, ao vivo, você fala direto com a Dra. Josiane. As suas dúvidas respondidas pelo seu nome, não em dez minutos de consulta.' },
    { icon: <Users size={24} />, n: '3', t: 'Pertencer', d: 'Você entra para um grupo de mulheres que vivem o mesmo que você. Ninguém minimiza o que você sente, e você deixa de estar sozinha.' }
];

// Comparação de alternativas
const COMPARA = [
    {
        titulo: 'Continuar como está',
        destaque: false,
        linhas: [
            { ok: false, t: 'Chá e suplemento no escuro' },
            { ok: false, t: '"É da idade, vai passar"' },
            { ok: false, t: 'Noites sem dormir' },
            { ok: false, t: 'Sozinha com o medo' }
        ]
    },
    {
        titulo: 'Consultório comum',
        destaque: false,
        linhas: [
            { ok: false, t: 'Dez minutos de consulta' },
            { ok: false, t: 'Receita genérica' },
            { ok: false, t: 'Sem retorno até a próxima' },
            { ok: false, t: 'Dúvidas que você esquece de perguntar' }
        ]
    },
    {
        titulo: 'Comunidade Frequência Feminina',
        destaque: true,
        linhas: [
            { ok: true, t: 'Especialista em menopausa ao vivo, todo mês' },
            { ok: true, t: 'Conteúdo feito para o seu corpo' },
            { ok: true, t: 'Comunidade que acolhe, sem julgamento' },
            { ok: true, t: 'Acesso permanente, no seu ritmo' }
        ]
    }
];

const ANCORAGEM = [
    { item: 'Consultório Aberto ao vivo, mensal, com a Dra. Josi', valor: 'R$ 3.800', bonus: false },
    { item: 'Jornada de 16 semanas em vídeo', valor: 'R$ 997', bonus: false },
    { item: 'Comunidade fechada de mulheres', valor: 'R$ 600', bonus: false },
    { item: 'Acesso permanente ao conteúdo da temporada', valor: 'R$ 400', bonus: true }
];

const FAQ = [
    { q: 'Já estou na menopausa há anos. Ainda serve pra mim?', a: 'Serve. A comunidade acolhe todas as fases: climatério, perimenopausa, menopausa e pós-menopausa. Depois da menopausa, cuidar de cérebro, ossos e coração fica ainda mais importante.' },
    { q: 'Isso substitui a consulta médica?', a: 'Não. É educação em saúde e acolhimento. O Consultório Aberto te orienta e te prepara para fazer as perguntas certas. Exames, prescrição e tratamento individual seguem com o seu médico.' },
    { q: 'Tenho pouco tempo. Vou conseguir acompanhar?', a: 'Sim. As aulas são curtas e os encontros ao vivo ficam gravados. Você assiste no seu horário e revê quando precisar, sem pressa.' },
    { q: 'Por quanto tempo tenho acesso?', a: 'O conteúdo da 1ª temporada fica com você de forma permanente. A comunidade e os encontros ao vivo seguem enquanto a temporada estiver rolando.' },
    { q: 'Moro fora do Brasil. Funciona?', a: 'Funciona. Os encontros são ao vivo e ficam gravados. Já temos mulheres em Portugal, Espanha, Estados Unidos, Peru e outros países.' },
    { q: 'E se eu entrar e não for pra mim?', a: 'Você tem 7 dias para experimentar tudo. Se não for pra você, devolvemos cada centavo, sem perguntas e sem burocracia.' }
];

const Comunidade4: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [lightbox, setLightbox] = useState<string | null>(null);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowHeader(window.scrollY > 600);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const goCheckout = () => {
        const el = document.getElementById('oferta');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Comunidade Frequência Feminina',
        description: 'O método das 3 Frequências: entender o seu corpo, acessar uma médica ao vivo e pertencer a uma comunidade de mulheres na menopausa.',
        provider: { '@type': 'Organization', name: 'Instituto Canali', sameAs: 'https://www.drajosianecanali.com.br' }
    };

    const accent = 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600';
    const greenBtn = 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-xl shadow-green-600/30 hover:shadow-green-500/40';

    return (
        <div className="w-full overflow-x-hidden bg-[#FDFBF7] text-stone-900 font-sans selection:bg-orange-500 selection:text-white">
            <SEO
                title="Comunidade Frequência Feminina | Dra. Josiane Canali"
                description="O método das 3 Frequências para viver bem a menopausa: entender o seu corpo, acessar uma médica ao vivo todo mês e pertencer a uma comunidade de mulheres."
                image="https://i.postimg.cc/dV8Yx0gw/CAPAS_DE_CURSO_10.png"
                url="https://lp.institutocanali.com/comunidade-4"
                structuredData={courseSchema}
            />

            {/* ===== HEADER STICKY ===== */}
            <div className={`fixed top-0 inset-x-0 z-40 transition-transform duration-300 ${showHeader && !lightbox ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="bg-white/90 backdrop-blur-md border-b border-stone-200 px-4 py-3 shadow-sm">
                    <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
                        <span className="font-display font-bold text-stone-900 text-sm sm:text-base">Frequência Feminina</span>
                        <button onClick={goCheckout} className={`${greenBtn} px-6 py-2.5 rounded-full font-bold text-sm inline-flex items-center group`}>
                            Quero entrar
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ===== HERO ===== */}
            <section className="relative pt-20 pb-20 lg:pt-28 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[60%] bg-gradient-to-bl from-orange-300/30 via-red-200/20 to-transparent blur-[120px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-white shadow-sm mb-8">
                        <span className="flex -space-x-1">
                            {[0, 1, 2, 3].map((s) => <Star key={s} size={13} className="text-orange-500 fill-orange-500" />)}
                            <Star size={13} className="text-orange-500 fill-orange-500" />
                        </span>
                        <span className="text-stone-700 text-xs font-semibold">Cuidado conduzido por ginecologista especialista em menopausa</span>
                    </div>

                    <h1 className="font-display font-bold leading-[1.04] tracking-tight text-balance mb-7">
                        <span className="block text-4xl md:text-6xl lg:text-7xl text-stone-900">
                            Você não precisa de mais um tratamento.
                        </span>
                        <span className={`block text-4xl md:text-6xl lg:text-7xl mt-2 ${accent}`}>
                            Precisa de uma médica que não te largue.
                        </span>
                    </h1>

                    <p className="text-stone-600 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
                        A menopausa tem medicina por trás. Na Comunidade Frequência Feminina, você fala ao vivo com a Dra. Josiane Canali todo mês, entende o seu corpo e para de enfrentar isso sozinha.
                    </p>

                    <div className="flex flex-col items-center gap-3">
                        <button onClick={goCheckout} className={`${greenBtn} px-10 py-5 rounded-full font-bold text-lg inline-flex items-center group`}>
                            Quero entrar na comunidade
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-stone-500 text-sm flex items-center gap-2">
                            <Shield size={14} className="text-green-600" /> 7 dias de garantia. Pagamento 100% seguro.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== IDENTIFICAÇÃO ===== */}
            <section className="py-20 bg-white border-y border-stone-100">
                <div className="max-w-3xl mx-auto px-5 text-center">
                    <p className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-8">Se você já se pegou pensando isto</p>
                    <div className="space-y-5">
                        {[
                            'Eu durmo, mas acordo exausta.',
                            'Acho que estou ficando louca.',
                            'Já fui a vários médicos e ninguém me escutou de verdade.',
                            'Eu simplesmente não me reconheço mais.'
                        ].map((frase, i) => (
                            <p key={i} className="text-2xl md:text-3xl font-display font-medium text-stone-800 leading-snug">
                                <span className="text-orange-400">“</span>{frase}<span className="text-orange-400">”</span>
                            </p>
                        ))}
                    </div>
                    <p className="text-stone-600 text-lg mt-10 font-light">
                        Então respira. Não é frescura, não é da idade, e definitivamente não é da sua cabeça.
                    </p>
                </div>
            </section>

            {/* ===== MECANISMO: AS 3 FREQUÊNCIAS ===== */}
            <section className="py-28 bg-stone-950 text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-5xl mx-auto px-5 relative z-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <p className="text-orange-400 font-bold tracking-widest uppercase text-xs mb-4">O que faltava em tudo que você tentou</p>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-5">O método das 3 Frequências</h2>
                        <p className="text-stone-400 text-lg">Remédio sozinho não resolve, porque o problema nunca foi só hormônio. É a combinação destas três coisas que muda o jogo.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {FREQUENCIAS.map((f, i) => (
                            <div key={i} className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                                        {f.icon}
                                    </div>
                                    <span className="text-5xl font-display font-bold text-white/10">{f.n}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{f.t}</h3>
                                <p className="text-stone-400 leading-relaxed">{f.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMPARAÇÃO ===== */}
            <section className="py-28 bg-[#FDFBF7]">
                <div className="max-w-5xl mx-auto px-5">
                    <div className="text-center mb-14 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Por que isto funciona quando o resto falhou</h2>
                        <p className="text-stone-600 text-lg">Você já tentou as duas primeiras. Olhe a diferença.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
                        {COMPARA.map((col, i) => (
                            <div
                                key={i}
                                className={`rounded-[2rem] p-7 border ${col.destaque ? 'bg-stone-950 text-white border-orange-500/40 shadow-2xl md:-translate-y-3' : 'bg-white text-stone-900 border-stone-200'}`}
                            >
                                {col.destaque && (
                                    <span className="inline-block px-3 py-1 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest mb-4">A escolha certa</span>
                                )}
                                <h3 className={`font-display font-bold text-xl mb-6 ${col.destaque ? 'text-white' : 'text-stone-700'}`}>{col.titulo}</h3>
                                <ul className="space-y-4">
                                    {col.linhas.map((l, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            {l.ok ? (
                                                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5"><Check size={12} className="text-white" /></span>
                                            ) : (
                                                <span className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center shrink-0 mt-0.5"><X size={12} className="text-stone-500" /></span>
                                            )}
                                            <span className={`text-sm leading-relaxed ${col.destaque ? 'text-stone-200' : 'text-stone-600'}`}>{l.t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROVA SOCIAL ===== */}
            <section className="py-24 bg-white border-y border-stone-100">
                <div className="max-w-5xl mx-auto px-5">
                    <div className="text-center mb-12">
                        <p className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-3">Quem já vive isto por aqui</p>
                        <h2 className="text-3xl md:text-5xl font-display font-bold">Elas chegaram exaustas. Olha o que mudou.</h2>
                        <p className="text-stone-500 text-lg mt-4">Mensagens reais de mulheres da comunidade. Toque para ampliar.</p>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                        {DEPOIMENTOS.map((src, i) => (
                            <button key={i} type="button" onClick={() => setLightbox(src)} className="mb-4 block w-full break-inside-avoid group cursor-zoom-in focus:outline-none">
                                <img src={src} alt={`Depoimento de aluna ${i + 1}`} loading="lazy" decoding="async" className="w-full rounded-2xl border border-stone-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all duration-300" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== OFERTA ===== */}
            <section id="oferta" className="py-28 bg-gradient-to-b from-orange-50 to-[#FDFBF7]">
                <div className="max-w-2xl mx-auto px-5">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-orange-300 bg-white text-orange-700 font-bold uppercase text-xs tracking-widest mb-5">
                            Turma fundadora, 1ª temporada
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900">Tudo isto, por menos de um café por dia</h2>
                    </div>

                    <div className="bg-white rounded-[2rem] border border-stone-200 shadow-xl p-7 md:p-9">
                        <div className="space-y-3 mb-6">
                            {ANCORAGEM.map((row, i) => (
                                <div key={i} className="flex items-center justify-between gap-4">
                                    <span className="flex items-start gap-3 text-stone-700 text-sm md:text-base">
                                        <Check size={17} className="text-green-600 shrink-0 mt-0.5" />
                                        <span>
                                            {row.item}
                                            {row.bonus && <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-widest align-middle">Bônus</span>}
                                        </span>
                                    </span>
                                    <span className="text-stone-400 line-through whitespace-nowrap text-sm">{row.valor}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-stone-200 pt-5 mb-6">
                            <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">Valor total</span>
                            <span className="text-stone-400 text-xl font-bold line-through decoration-red-500">R$ 5.797</span>
                        </div>

                        <div className="text-center bg-orange-50 rounded-2xl py-6 mb-6">
                            <p className="text-stone-500 uppercase tracking-widest text-xs mb-2">Entrando hoje</p>
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-lg text-stone-600 font-medium">12x de</span>
                                <span className="text-6xl md:text-7xl font-black text-orange-600 leading-none">R$ 59,88</span>
                            </div>
                            <p className="text-stone-600 mt-2">ou <span className="text-stone-900 font-bold">R$ 579</span> à vista</p>
                        </div>

                        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={`${greenBtn} w-full py-5 rounded-2xl font-bold text-lg uppercase tracking-wide flex items-center justify-center`}>
                            Quero entrar agora
                        </a>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-5 text-stone-500 text-sm">
                            <span className="flex items-center gap-2"><Lock size={14} className="text-green-600" /> Pagamento 100% seguro</span>
                            <span className="flex items-center gap-2"><Check size={14} className="text-green-600" /> Acesso imediato</span>
                        </div>
                    </div>

                    {/* Garantia */}
                    <div className="mt-6 flex items-start gap-4 bg-white border border-green-200 rounded-2xl p-6 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-stone-900 font-bold mb-1">7 dias para experimentar sem risco</p>
                            <p className="text-stone-600 text-sm leading-relaxed">Entre, participe de um Consultório Aberto, assista as primeiras aulas. Se não for pra você, devolvemos cada centavo. O risco é nosso, não seu.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BIO ===== */}
            <section className="py-24 bg-white border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
                    <img src={DRA_JOSI_PHOTO} alt="Dra. Josiane Canali" className="w-44 h-44 md:w-56 md:h-56 rounded-3xl object-cover object-top shrink-0 shadow-xl" loading="lazy" decoding="async" />
                    <div>
                        <p className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-3">Quem vai te acompanhar</p>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-4">Dra. Josiane Canali</h2>
                        <p className="text-stone-600 leading-relaxed mb-3">
                            Ginecologista, especialista em menopausa e longevidade hormonal. Atende mulheres que chegam, quase sempre, depois de já terem passado por outros médicos sem resposta.
                        </p>
                        <p className="text-stone-800 font-serif italic text-lg border-l-2 border-orange-500 pl-4">
                            "O envelhecimento é inevitável. O declínio é opcional."
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="py-24 bg-[#FDFBF7]">
                <div className="max-w-2xl mx-auto px-5">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">Perguntas que talvez você esteja se fazendo</h2>
                    <div className="space-y-3">
                        {FAQ.map((item, i) => {
                            const open = openFaq === i;
                            return (
                                <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
                                    <button type="button" onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center justify-between gap-4 text-left p-5 font-bold text-stone-900">
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

            {/* ===== CARTA P.S. DA FUNDADORA ===== */}
            <section className="py-24 bg-white border-t border-stone-100">
                <div className="max-w-2xl mx-auto px-5">
                    <div className="bg-orange-50/60 border border-orange-100 rounded-[2rem] p-8 md:p-12">
                        <p className="text-stone-700 leading-relaxed text-lg mb-5">
                            Eu poderia te encher de promessas. Mas você já ouviu promessas demais, não foi?
                        </p>
                        <p className="text-stone-700 leading-relaxed text-lg mb-5">
                            Então vou ser direta. Eu vejo, todos os dias no consultório, mulheres incríveis se apagando porque ninguém parou para escutá-las. A Comunidade Frequência Feminina nasceu para que isso pare de acontecer com você.
                        </p>
                        <p className="text-stone-700 leading-relaxed text-lg mb-8">
                            Entra comigo. Se em 7 dias você sentir que não é pra você, eu devolvo o seu dinheiro. O único risco real é continuar mais um ano se sentindo assim.
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={DRA_JOSI_PHOTO} alt="Dra. Josiane Canali" className="w-14 h-14 rounded-full object-cover object-top" loading="lazy" decoding="async" />
                            <div>
                                <p className="font-serif italic text-xl text-stone-900">Dra. Josiane Canali</p>
                                <p className="text-stone-500 text-sm">Ginecologista especialista em menopausa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA FINAL ===== */}
            <section className="py-28 bg-stone-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                        O próximo ano pode ser <span className={accent}>completamente diferente.</span>
                    </h2>
                    <p className="text-stone-400 text-xl mb-10">Voltar a dormir, voltar a desejar, voltar a se reconhecer. Começa agora.</p>
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

            {/* ===== LIGHTBOX ===== */}
            {lightbox && (
                <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fade-in" role="dialog" aria-modal="true">
                    <button type="button" onClick={() => setLightbox(null)} aria-label="Fechar" className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors">
                        <X size={32} />
                    </button>
                    <img src={lightbox} alt="Depoimento ampliado" className="max-h-[90vh] max-w-full w-auto rounded-2xl shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default Comunidade4;
