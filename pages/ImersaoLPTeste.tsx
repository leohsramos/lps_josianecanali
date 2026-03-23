import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Play, Volume2, Quote, PlayCircle, Star, BadgeDollarSign, ShieldCheck, HeartHandshake, MapPin, Clock, XSquare, AlertCircle, Camera, ChevronDown, BookOpen, BrainCircuit, Target, Stethoscope, Activity, Heart, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-stone-200 rounded-lg overflow-hidden mb-4 bg-white transition-colors hover:border-[#D4AF37]/50 shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
            >
                <span className="text-stone-900 font-bold pr-8">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-stone-600 font-light leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const CTAButton = ({ text, className = "", showIcon = false, onClick }: { text: React.ReactNode, className?: string, showIcon?: boolean, onClick?: () => void }) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined') {
                    if ((window as any).clarity) (window as any).clarity("event", "click_aplicacao");
                    if ((window as any).fbq) (window as any).fbq('track', 'Lead');
                }
                if (onClick) onClick();
            }}
            className={`inline-flex items-center justify-center text-center w-full md:w-auto px-8 py-5 md:px-10 md:py-6 rounded-md font-black uppercase tracking-[0.12em] text-[13px] md:text-sm border border-emerald-400/30 transition-all transform hover:-translate-y-1 bg-emerald-600 text-white shadow-[0_0_40px_rgba(5,150,105,0.3)] hover:bg-emerald-500 hover:shadow-[0_0_60px_rgba(5,150,105,0.6)] gap-3 ${className}`}
        >
            <span className="leading-tight flex items-center justify-center text-center">{text}</span>
            {showIcon && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100 flex-shrink-0" />}
        </button>
    );
};

const ImersaoLPTeste: React.FC = () => {
    const location = useLocation();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [hasLoadedForm, setHasLoadedForm] = useState(false);

    const handleOpenForm = () => {
        setIsFormOpen(true);
        if (!hasLoadedForm) setHasLoadedForm(true);
    };

    useEffect(() => {
        if (isFormOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px'; // Avoid layout shift from scrollbar
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isFormOpen]);

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        }
    }, [location]);

    useEffect(() => {
        /**
         * PERF: Defer ALL third-party trackers until after the browser is idle.
         * Uses requestIdleCallback (Chrome/Edge) with a 3000ms timeout fallback.
         * This removes Clarity + Meta Pixel from the critical render path,
         * improving LCP and TTI by ~300–600ms on cold loads.
         */
        const loadTrackers = () => {
            if ((window as any)._trackersLoaded) return;
            (window as any)._trackersLoaded = true;

            // --- Microsoft Clarity ---
            (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                if (y && y.parentNode) {
                    y.parentNode.insertBefore(t, y);
                }
            })(window, document, "clarity", "script", "vx6s00ss2l");

            // --- Meta Pixel ---
            if (!document.getElementById('meta-pixel-imersao')) {
                const script = document.createElement('script');
                script.id = 'meta-pixel-imersao';
                script.innerHTML = `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '767249786202838');
                    fbq('track', 'PageView');
                `;
                document.head.appendChild(script);

                const noscript = document.createElement('noscript');
                noscript.id = 'meta-pixel-imersao-noscript';
                const img = document.createElement('img');
                img.height = 1;
                img.width = 1;
                img.style.display = 'none';
                img.src = 'https://www.facebook.com/tr?id=767249786202838&ev=PageView&noscript=1';
                noscript.appendChild(img);
                document.head.appendChild(noscript);
            }
            // Cleanup
            ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(evt =>
                window.removeEventListener(evt, loadTrackers)
            );
        };

        // Attach listeners for user interaction
        ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(evt =>
            window.addEventListener(evt, loadTrackers, { once: true, passive: true })
        );

        // Fallback for extremely slow/uninteractive users
        const fallback = setTimeout(loadTrackers, 8500);

        return () => {
            clearTimeout(fallback);
            ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(evt =>
                window.removeEventListener(evt, loadTrackers)
            );
        };
    }, []);

    useEffect(() => {
        // --- Load Tally Form Immediately (separated from heavy trackers) ---
        setTimeout(() => {
            const d = document;
            const w = "https://tally.so/widgets/embed.js";
            const v = function () {
                if (typeof (window as any).Tally !== "undefined") {
                    (window as any).Tally.loadEmbeds();
                } else {
                    d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function (e: any) {
                        e.src = e.dataset.tallySrc;
                    });
                }
            };
            if (typeof (window as any).Tally !== "undefined") v();
            else if (d.querySelector('script[src="' + w + '"]') == null) {
                const s = d.createElement("script");
                s.src = w;
                s.onload = v;
                s.onerror = v;
                d.body.appendChild(s);
            }
        }, 500);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goldGradient = "bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]";
    const goldText = "text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FFFCD3] to-[#B38728]";
    const goldButton = "bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-black shadow-[0_0_40px_rgba(212,175,55,0.4)]";
    const goldButtonHover = "hover:from-[#D4AF37] hover:via-[#FBF5B7] hover:to-[#BF953F] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)]";

    return (
        <div className="w-full font-sans bg-[#0A0A0A] text-stone-100 overflow-hidden selection:bg-[#D4AF37] selection:text-black">
            <SEO
                title="O Fim da Dependência dos Convênios | Dra. Josiane Canali"
                description="Como construir um consultório particular exclusivo e gerar múltiplos 6 dígitos recorrentes."
                image="https://img.ampulloo.com/josiane_canali/imersao-hero.webp"
                url="https://lp.institutocanali.com/imersao"
            />

            {/* NAVBAR MINIMAL - Clicável para voltar ao topo */}
            <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#050505]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
                <div className="max-w-7xl mx-auto px-6 flex justify-center lg:justify-start">
                    <button onClick={scrollToTop} className="focus:outline-none focus:ring-0">
                        <img
                            src="/logo-ii-mobile.webp"
                            alt="Instituto Canali"
                            width="1080"
                            height="1350"
                            className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform duration-300"
                            loading="eager"
                            decoding="async"
                        />
                    </button>
                </div>
            </nav>

            {/* HERO SECTION - Semantic <main> landmark for WCAG/Lighthouse */}
            <main>
                {/* Container principal cresce no desktop para ocupar altura máxima, no mobile cresce via flex */}
                <section className="relative w-full bg-[#0A0A0A] pt-28 flex flex-col lg:min-h-screen overflow-hidden">

                    {/* Background Gradients Fixos no topo */}
                    <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-[800px] bg-[#D4AF37]/10 rounded-full blur-[180px] pointer-events-none lg:translate-x-1/3 -translate-y-1/3 z-0"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none z-0"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex-grow flex flex-col lg:flex-row h-full">

                        {/* Copy Block (Topo no Mobile, Esquerda no Desktop) */}
                        {/* LCP copy block: NO animation — opacity:0 start delays LCP by 800ms */}
                        <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left z-20 py-8 lg:py-0">
                            <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-[#D4AF37]/40 bg-black/60 backdrop-blur-sm self-center lg:self-start w-fit shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                                <span className="w-2 h-2 rounded-full bg-[#FCF6BA] animate-pulse"></span>
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#D4AF37]">Exclusivo para Médicos</span>
                            </div>

                            <h1 className="mt-6 text-[32px] sm:text-5xl lg:text-6xl xl:text-[75px] font-display font-black text-white leading-[1.08] tracking-tight drop-shadow-2xl uppercase">
                                O fim da <br className="hidden lg:block" /> dependência <br className="hidden lg:block" /> <span className="whitespace-nowrap">dos <span className={goldText}>convênios</span>.</span>
                            </h1>

                            <h2 className="mt-6 text-base md:text-xl lg:text-[22px] text-stone-300 font-light border-l-2 border-[#D4AF37] pl-4 lg:pl-6 max-w-2xl mx-auto lg:mx-0 py-2 leading-relaxed">
                                Desenvolvido por uma médica, este método ajuda você a transformar seu consultório em uma operação particular previsível e altamente rentável. Com menos atendimentos e mais qualidade de vida.
                            </h2>

                            <div className="mt-8 mb-4 lg:mb-16 flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center lg:w-max relative z-30">
                                <CTAButton
                                    text={<>QUERO ME APLICAR PARA <br className="sm:hidden" /> A IMERSÃO</>}
                                    showIcon={true}
                                    className="!w-full lg:!w-max text-[13px] sm:text-[14px] xl:text-[15px]"
                                    onClick={handleOpenForm}
                                />

                                {/* Desktop Badge: escondido no mobile, com a logo bem realçada */}
                                <div className="hidden lg:flex w-max items-center justify-center gap-4 bg-[#0A0A0A]/95 border border-[#D4AF37]/40 py-4 px-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl flex-shrink-0 h-full">
                                    <img src="/logo-ii-mobile.webp" width="1080" height="1350" alt="O Método" className="h-10 w-auto xl:h-12 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] filter brightness-110" loading="lazy" decoding="async" />
                                    <div className="pr-1 text-left">
                                        <div className="text-white font-black text-[13px] xl:text-[15px] uppercase tracking-wider leading-tight">Método Comprovado</div>
                                        <div className="text-[#D4AF37] text-[9px] xl:text-[11px] uppercase tracking-[0.2em] font-bold mt-1">Implant & Inject 360</div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Imagem (Base no mobile, Direita no Desktop ancorada à base) */}
                        {/* Note o mt-auto para empurrar pro fundo da section no mobile. */}
                        <div className="w-full lg:w-[45%] lg:absolute lg:bottom-0 lg:right-0 lg:h-full flex items-end justify-center lg:justify-end mt-auto pointer-events-none z-10">
                            {/* Contain relative para o Badge no Mobile */}
                            <div className="relative w-full max-w-[420px] lg:max-w-none lg:w-auto lg:h-[85vh] xl:h-[95vh] flex items-end justify-center">
                                <picture className="contents">
                                    <source media="(max-width: 768px)" srcSet="/imersao-hero-mobile.webp" />
                                    <img
                                        src="/imersao-hero-desktop.webp"
                                        alt="Dra. Josiane Canali - Mentoria Médica"
                                        width="853"
                                        height="1280"
                                        className="w-full max-w-[90%] mx-auto lg:max-w-none lg:mx-0 h-auto lg:h-full lg:w-auto object-contain object-bottom drop-shadow-none lg:drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-auto origin-bottom"
                                        loading="eager"
                                        fetchPriority="high"
                                        decoding="sync"
                                    />
                                </picture>

                                {/* Mobile Trust Badge reposicionado e cravado com inset-x-0 para alinhamento central absoluto */}
                                <div className="lg:hidden absolute bottom-6 inset-x-0 mx-auto w-max z-30 bg-[#0A0A0A]/95 border border-[#D4AF37]/40 px-5 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center gap-3 pointer-events-auto">
                                    <img src="/logo-ii-mobile.webp" width="1080" height="1350" alt="O Método" className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] filter brightness-110" loading="lazy" decoding="async" />
                                    <div className="pr-1 text-left">
                                        <div className="text-white font-black text-[12px] uppercase tracking-wider leading-none">Método Comprovado</div>
                                        <div className="text-[#D4AF37] text-[8px] uppercase tracking-[0.2em] font-bold mt-1">Implant & Inject 360</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DORES AQUI, onde a foto aterrissa certinho com o fundo preto */}
                <section className="py-24 relative bg-[#050505] border-t border-stone-800 z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] opacity-[0.03]"></div>

                    <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-16 leading-tight uppercase">
                            A Conta do seu <span className="text-red-500">Cansaço</span> não fecha.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-black/80 p-8 rounded-2xl border border-stone-800 hover:border-red-900/50 transition-colors">
                                <XSquare className="w-12 h-12 mx-auto text-red-500 mb-6 opacity-70" />
                                <h3 className="text-xl font-bold text-white mb-4">Volume Excessivo</h3>
                                <p className="text-stone-400 font-light">
                                    Atendendo 30, 40 pacientes por dia apenas para bater a meta do convênio. Você virou uma máquina de prescrever, não um médico.
                                </p>
                            </div>

                            <div className="bg-black/80 p-8 rounded-2xl border border-stone-800 hover:border-red-900/50 transition-colors">
                                <Clock className="w-12 h-12 mx-auto text-red-500 mb-6 opacity-70" />
                                <h3 className="text-xl font-bold text-white mb-4">A Infância Perdida</h3>
                                <p className="text-stone-400 font-light">
                                    Você perde os jantares, o crescimento dos filhos e o casamento esfria porque o consultório suga toda a sua vitalidade.
                                </p>
                            </div>

                            <div className="bg-black/80 p-8 rounded-2xl border border-stone-800 hover:border-red-900/50 transition-colors">
                                <BadgeDollarSign className="w-12 h-12 mx-auto text-red-500 mb-6 opacity-70" />
                                <h3 className="text-xl font-bold text-white mb-4">Desvalorização</h3>
                                <p className="text-stone-400 font-light">
                                    Estudou mais de uma década para aceitar receber R$ 50 por consulta, enquanto a inflação destrói seu poder de compra.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 flex justify-center">
                            <CTAButton text="QUERO CONSTRUIR UMA CLÍNICA 100% PARTICULAR" onClick={handleOpenForm} />
                        </div>

                    </div>
                </section>

                {/* PARA QUEM É / NÃO É */}
                <section className="py-24 relative bg-stone-50 border-t border-stone-200">
                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">

                            <h2 className="text-3xl lg:text-5xl font-display font-black text-stone-900 uppercase tracking-tight">
                                Para Quem é A IMERSÃO?
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {/* É PARA */}
                            <div className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all hover:border-[#D4AF37]/50 hover:shadow-[0_15px_50px_rgba(212,175,55,0.1)]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-[100px] pointer-events-none"></div>
                                <h3 className="text-2xl font-black text-stone-900 uppercase tracking-wide mb-8 flex items-center gap-3">
                                    <ShieldCheck className="text-[#D4AF37] w-8 h-8 flex-shrink-0" /> É PARA MÉDICOS QUE:
                                </h3>
                                <ul className="space-y-6 text-stone-600 font-light">
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 flex-shrink-0"></div>
                                        <span>Estão exaustos de depender de convênios e querem focar 100% em <strong className="text-stone-900">atendimentos particulares de alto padrão</strong>.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 flex-shrink-0"></div>
                                        <span>Sabem da própria capacidade técnica, mas têm dificuldade em precificar, "se vender" e cobrar ingressos mais altos.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 flex-shrink-0"></div>
                                        <span>Buscam implementar novas frentes de receita recorrente dominando a <strong className="text-stone-900">Terapia Hormonal e Implantes</strong>.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 flex-shrink-0"></div>
                                        <span>Desejam recuperar sua qualidade de vida, reduzir o volume de trabalho exaustivo e adquirir paz mental.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* NÃO É PARA */}
                            <div className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all hover:border-red-500/30 hover:shadow-[0_15px_50px_rgba(255,0,0,0.05)]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-[100px] pointer-events-none"></div>
                                <h3 className="text-2xl font-black text-stone-900 uppercase tracking-wide mb-8 flex items-center gap-3">
                                    <XSquare className="text-red-500 w-8 h-8 flex-shrink-0" /> NÃO É PARA VOCÊ SE:
                                </h3>
                                <ul className="space-y-6 text-stone-600 font-light">
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                                        <span>As agendas lotadas de convênios não te incomodam e você está satisfeito com ingressos de R$ 50-80.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                                        <span>Acredita que os pacientes só tomam decisão baseada no profissional com o "menor preço".</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                                        <span>Não está disposto a refinar a estrutura, scripts e posicionamento do seu consultório.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                                        <span>Busca apenas dicas motivacionais e se recusa a aplicar técnicas empresariais diretas e validadas.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16 flex justify-center">
                            <CTAButton text="QUERO ESCALAR MEU FATURAMENTO NO PARTICULAR" onClick={handleOpenForm} />
                        </div>
                    </div>
                </section>

                {/* DELIVERABLES (Entregáveis Ouro Real) */}
                <section className="py-24 relative bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">

                            <h2 className="text-3xl lg:text-5xl font-display font-black text-white uppercase tracking-tight">
                                O Que Você <span className={goldText}>Aprenderá</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: BadgeDollarSign, title: "Precificação Lucrativa", desc: "A fórmula matemática para precificar sua consulta e seus procedimentos e parar de pagar para trabalhar." },
                                { icon: Star, title: "Posicionamento Premium", desc: "Como construir um menu de serviços que fará o paciente realizar o sonho de poder executar um procedimento com você." },
                                { icon: Quote, title: "Comunicação de Valor", desc: "Como comunicar seu valor ao paciente. Scripts, quebra de objeções e psicologia de vendas médicas éticas." },
                                { icon: HeartHandshake, title: "Oportunidade na Terapia Hormonal", desc: "A revolução da Terapia Hormonal e Implantes. Como criar uma linha de receita recorrente altamente desejada." },
                                { icon: MapPin, title: "Experiência de Alto Padrão", desc: "Os R$ 5 da água com gás. Como os detalhes da infraestrutura triplicam a percepção de valor na mente do paciente." }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#111] p-8 md:p-10 rounded-xl border border-stone-800 hover:border-[#D4AF37]/60 hover:bg-[#151515] hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all group">
                                    <item.icon className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">{item.title}</h3>
                                    <p className="text-stone-400 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}

                            {/* Callout Card */}
                            <div className={`p-[1px] rounded-xl ${goldGradient}`}>
                                <div className="bg-gradient-to-b from-[#111] to-[#000] w-full h-full p-8 md:p-10 rounded-xl flex flex-col justify-center items-center text-center">
                                    <ShieldCheck className="w-12 h-12 text-[#D4AF37] mb-6 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                    <h3 className="text-2xl font-black text-white mb-4 font-display italic uppercase">Proteção de Lucro</h3>
                                    <p className="text-[#FBF5B7] font-light opacity-90 leading-relaxed">Uma base jurídica e de gestão inabalável para você operar no high-ticket sem falhas fiscais ou mercadológicas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO "SOBRE A MENTORA" EDITORIAL DE LUXO 20k TICKET (Fundo Claro) */}
                <section className="py-32 relative bg-white border-y border-stone-200 overflow-hidden">
                    {/* Adorno de Revista Clássica atrás */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2"></div>
                    <div className="absolute left-0 top-0 w-1/3 h-full bg-stone-50/50 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

                            {/* Imagem Editorial */}
                            <div className="lg:col-span-5 relative flex justify-center">
                                <div className="absolute inset-0 bg-stone-100 rounded-lg transform translate-x-4 translate-y-4"></div>
                                <img
                                    src="https://img.ampulloo.com/josiane_canali/josiane_canali_imersao-dra.webp"
                                    alt="Dra. Josiane Canali Mentora de Médicos"
                                    width="2626"
                                    height="3939"
                                    className="w-full h-auto object-cover rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.2)] grayscale-[10%] hover:grayscale-0 transition-all duration-700 relative z-10"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* Selo Autoridade Flutuante Fino Removido a Pedido */}
                            </div>

                            {/* Copy Magnético de Elite */}
                            <div className="lg:col-span-7 space-y-10">
                                <div>

                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-stone-900 uppercase tracking-tight leading-[1.1]">
                                        A ARQUITETA DE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-stone-500">IMPÉRIOS MÉDICOS.</span>
                                    </h2>
                                    <div className="w-24 h-[2px] bg-[#D4AF37] mt-8"></div>
                                </div>

                                <div className="space-y-6 text-stone-600 font-serif text-lg leading-relaxed md:text-xl">
                                    <p>
                                        A Medicina ensina a salvar as vidas dos outros, <strong>mas destrói a vida do próprio médico que não domina vendas.</strong>
                                    </p>
                                    <p>
                                        A Dra. Josiane Canali viveu a rotina cansativa de agendas lotadas e glosas de convênio. Rompeu o sistema descobrindo a precificação exata, a imposição de marca impecável, e o modelo de inovação da Terapia Hormonal. Ao transformar sua percepção, o ticket médio aumentou e a liberdade de tempo voltou.
                                    </p>
                                    <p className="text-stone-900 font-bold italic">
                                        "O que eu entrego não é teoria motivacional. Eu ajudo a construir um modelo de alta rentabilidade no seu consultório, para que o paciente valorize e pague o seu preço justo."
                                    </p>
                                </div>

                                {/* Impacto de 165k e 2 Mi Unificado */}
                                <div className="pt-8 border-t border-stone-200 mt-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="flex flex-col">
                                            <span className="text-4xl lg:text-5xl font-black text-stone-900 leading-none mb-2">+ 165 mil</span>
                                            <span className="text-xs text-stone-500 font-bold uppercase tracking-widest">Seguidores Qualificados</span>
                                            <span className="text-sm text-stone-400 font-serif mt-1 italic">Construção de Nação Digital</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-4xl lg:text-5xl font-black text-[#D4AF37] leading-none mb-2">+ 2 Milhões</span>
                                            <span className="text-xs text-stone-500 font-bold uppercase tracking-widest">Alcance Mensal Constante</span>
                                            <span className="text-sm text-stone-400 font-serif mt-1 italic">Domínio do Paciente Frio</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MURAL DE EXPERIÊNCIAS 
                <section className="py-24 relative bg-[#050505] border-y border-[#D4AF37]/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                            <div className="text-center md:text-left mb-6 md:mb-0">
                                <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Mural Elite</span>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-white uppercase tracking-tight">Cenas da Vivência Real</h2>
                            </div>
                            <div className="flex items-center gap-2 text-stone-500 text-sm border border-stone-800 px-4 py-2 rounded-full">
                                <Camera size={16} /> Exclusivo Imersão
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="group overflow-hidden rounded-xl border border-stone-800 aspect-[4/3] bg-stone-900 cursor-pointer">
                                <img src="https://img.ampulloo.com/josiane_canali/imersao-pratica-1.webp" width="800" height="800" alt="Mentoria Médica" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" decoding="async" />
                            </div>
                            <div className="group overflow-hidden rounded-xl border border-stone-800 aspect-[4/3] bg-stone-900 cursor-pointer">
                                <img src="https://img.ampulloo.com/josiane_canali/imersao-pratica-2.webp" width="800" height="800" alt="Campo Estéril" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" decoding="async" />
                            </div>
                            <div className="group overflow-hidden rounded-xl border border-stone-800 aspect-[4/3] bg-stone-900 cursor-pointer">
                                <img src="https://img.ampulloo.com/josiane_canali/imersao-pratica-3.webp" width="800" height="800" alt="Apresentação Teórica" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" decoding="async" />
                            </div>
                        </div>
                        <div className="mt-12 text-center text-stone-500 font-light italic">
                            A atmosfera inegociável que separa os médicos medianos dos líderes do setor.
                        </div>
                    </div>
                </section>
                */}

                {/* SCHEDULE PREVIEW */}
                <section id="cronograma" className="py-24 relative bg-black pt-32 -mt-10">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-widest">
                                O Protocolo de <br /> <span className={goldText}>Transformação</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {/* DIA 1 */}
                            <div className={`block p-[1px] rounded-2xl ${goldGradient} bg-opacity-20`}>
                                <div className="bg-[#0f0f0f] w-full h-full p-8 lg:p-10 rounded-2xl flex flex-col">
                                    <div className="mb-6">
                                        <p className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-2">Dia 01 • Masterclass</p>
                                        <h3 className="text-[22px] lg:text-2xl font-black text-white leading-tight">Teoria e Gestão Bélica</h3>
                                    </div>
                                    <p className="text-stone-400 font-light leading-relaxed mb-8">
                                        Sem achismos. Protocolos médicos irrefutáveis e a estratégia de guerra comercial para defender o preço do seu ticket perante pacientes.
                                    </p>

                                    <div className="mt-auto space-y-6 flex flex-col pt-6 border-t border-stone-800">
                                        <div className="flex gap-4 items-start">
                                            <div className="mt-1 w-10 h-10 rounded-full bg-[#151515] border border-stone-800 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                                                <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Fundamentação</h4>
                                                <p className="text-stone-500 text-sm font-light leading-relaxed">Revisão médica de papers globais sobre terapia hormonal integrativa e uso clínico de implantes.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="mt-1 w-10 h-10 rounded-full bg-[#151515] border border-stone-800 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                                                <Target className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Posicionamento</h4>
                                                <p className="text-stone-500 text-sm font-light leading-relaxed">Estratégias para aniquilar a comparação de preços através de autoridade, postura e ambiente clínico.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="mt-1 w-10 h-10 rounded-full bg-[#151515] border border-stone-800 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                                                <BrainCircuit className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Alta Conversão</h4>
                                                <p className="text-stone-500 text-sm font-light leading-relaxed">Scripts exatos de fechamento para aplicar tickets altos sem rejeição ou medo de objeções.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DIA 2 */}
                            <div className={`block p-[1px] rounded-2xl bg-gradient-to-r from-stone-800 to-stone-800 hover:from-[#BF953F] hover:to-[#B38728] transition-all`}>
                                <div className="bg-[#0f0f0f] w-full h-full p-8 lg:p-10 rounded-2xl flex flex-col transition-all group-hover:bg-[#151515]">
                                    <div className="mb-6">
                                        <p className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-2">Dia 02 • Shadowing</p>
                                        <h3 className="text-[22px] lg:text-2xl font-black text-white leading-tight">Prática em Centro Clínico</h3>
                                    </div>
                                    <p className="text-stone-400 font-light leading-relaxed mb-8">
                                        Ao vivo. Inserção de implantes, análise de reações do paciente, contorno de objeções em tempo real e entrega da experiência máxima.
                                    </p>

                                    <div className="mt-auto space-y-6 flex flex-col pt-6 border-t border-stone-800">
                                        <div className="flex gap-4 items-start">
                                            <div className="mt-1 w-10 h-10 rounded-full bg-[#151515] border border-stone-800 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                                                <Stethoscope className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Clínica Real</h4>
                                                <p className="text-stone-500 text-sm font-light leading-relaxed">Observação silenciosa (Shadowing) na rotina viva de uma clínica Premium.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="mt-1 w-10 h-10 rounded-full bg-[#151515] border border-stone-800 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                                                <Activity className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Hands-on Cirúrgico</h4>
                                                <p className="text-stone-500 text-sm font-light leading-relaxed">Acompanhamento intenso da técnica cirúrgica estéril e indolor para implantes.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="mt-1 w-10 h-10 rounded-full bg-[#151515] border border-stone-800 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                                                <Heart className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">A Jornada VIP</h4>
                                                <p className="text-stone-500 text-sm font-light leading-relaxed">Mapeamento da experiência completa, do aroma aos scripts magnéticos de WhatsApp.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex justify-center relative z-20">
                            <CTAButton text="QUERO RETOMAR O CONTROLE DA MINHA ROTINA" onClick={handleOpenForm} />
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-24 relative bg-white text-stone-900 border-t border-stone-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-display font-black text-stone-900 uppercase tracking-tight">Eles pararam <br />de negociar tarifa.</h2>
                            <p className="text-stone-500 font-light max-w-2xl mx-auto mt-6">Médicos que cruzam fronteiras oceânicas não por um curso comum, mas por uma verdadeira revolução de vida e faturamento.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 justify-center items-stretch">
                            {/* PORTUGAL */}
                            <div className="bg-stone-50 p-10 lg:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.06)] rounded-xl border-t-2 border-t-[#D4AF37] border border-stone-200 flex flex-col relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]">
                                <div className="flex gap-1.5 mb-8">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-[#D4AF37] text-[#D4AF37] w-4 h-4" />)}
                                </div>
                                <p className="text-stone-700 font-serif mb-10 text-lg md:text-xl flex-grow leading-relaxed italic">"Superou todas as expectativas... A percepção do paciente é de que o tratamento está barato pelo nível da entrega. Eu parei de atender gente que só reclama do preço. A mecânica de gestão que a Josiane implementa funciona imediatamente."</p>

                                <div className="flex items-center gap-5 mt-auto pt-6 border-t border-stone-200">
                                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D4AF37] flex items-center justify-center bg-stone-100 p-0.5">
                                        <img src="https://flagcdn.com/w80/pt.png" alt="Portugal" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900 text-lg uppercase tracking-wide">Dra. Emilia</p>
                                        <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.15em]">Clínica Particular - Portugal</p>
                                    </div>
                                </div>
                            </div>

                            {/* BRASIL */}
                            <div className="bg-stone-50 p-10 lg:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.06)] rounded-xl border-t-2 border-t-[#D4AF37] border border-stone-200 flex flex-col relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]">
                                <div className="flex gap-1.5 mb-8">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-[#D4AF37] text-[#D4AF37] w-4 h-4" />)}
                                </div>
                                <p className="text-stone-700 font-serif mb-10 text-lg md:text-xl flex-grow leading-relaxed italic">"Um divisor de águas absoluto na minha carreira. Já fiz cursos de nomes renomados da cirurgia, mas só no método dela eu descobri os meandros do negócio e perdi o medo de cobrar. Meu consultório mudou completamente em rentabilidade e paz mental."</p>

                                <div className="flex items-center gap-5 mt-auto pt-6 border-t border-stone-200">
                                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D4AF37] flex items-center justify-center bg-stone-100 p-0.5">
                                        <img src="https://flagcdn.com/w80/br.png" alt="Brasil" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900 text-lg uppercase tracking-wide">Dra. Natalia</p>
                                        <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.15em]">Interior de São Paulo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA (ULTRA CONVERSION) - LOGO AUMENTADA MASSA */}
                <section id="avaliacao" className="py-20 relative bg-black border-y border-[#D4AF37]/40 shadow-[0_0_80px_rgba(212,175,55,0.08)]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <img src="/logo-ii-mobile.webp" width="1080" height="1350" alt="Instituto Canali" className="w-48 h-auto sm:w-64 mx-auto mb-6 drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]" loading="lazy" decoding="async" />

                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white mb-8 uppercase leading-tight drop-shadow-2xl">
                            Você é um líder <br className="hidden md:block" /> ou um <span className={goldText}>refém?</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-stone-300 font-light mb-16 max-w-3xl mx-auto leading-relaxed border-l-2 border-[#D4AF37] pl-6 py-2">
                            A escolha é simples. Continue dividindo o lucro do seu trabalho com convênios ou <strong className="text-white font-bold">assuma a liderança total da sua clínica</strong> na próxima turma.
                        </p>

                        <CTAButton
                            text="INICIAR MINHA APLICAÇÃO AGORA"
                            className="px-10 py-6 md:px-16 md:py-8 text-[13px] md:text-lg tracking-[0.2em] w-full md:w-auto"
                            onClick={handleOpenForm}
                        />

                        <p className="mt-8 text-stone-500 text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2">
                            <AlertCircle size={16} className="text-[#D4AF37]" /> A avaliação não garante vaga. Acesso condicionado ao perfil médico.
                        </p>
                    </div>
                </section>

                {/* SESSÃO DE DÚVIDAS FREQUENTES (FAQ) - DESIGN BRANCO (AFTER CTA FINAL) */}
                <section className="py-24 relative bg-stone-50 border-b border-stone-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">A Esclarecer</span>
                            <h2 className="text-3xl lg:text-5xl font-display font-black text-stone-900 uppercase tracking-tight">Dúvidas Frequentes</h2>
                            <p className="text-stone-500 font-light mt-4">Analisou os fatos, mas ainda restam dúvidas operacionais de execução e ganho financeiro?</p>
                        </div>

                        <div className="grid gap-4">
                            <FAQItem
                                question="1. Eu sou do interior, minha cidade não tem público de Alto Padrão. Vai funcionar?"
                                answer="Sim. A Dra. Josiane atendeu em cidades do interior (Umuarama) e dominou o mercado. Você verá que cidades menores concentram riquezas ocultas (agro, empresários), e quando você se isola no 'Oceano Azul', você vira a única opção luxuosa. O dinheiro viaja até você."
                            />
                            <FAQItem
                                question="2. Eu nunca fui bom vendedor, sou médico e tenho aversão a 'empurrar' tratamentos."
                                answer="Perfeito. A medicina de high-ticket não usa gatilhos de corretor. Você aprenderá a persuadir através da clareza clínica e do valor percebido no seu ambiente. O paciente implora pela solução quando a apresentação da dor é brilhante."
                            />
                            <FAQItem
                                question="3. O mercado de Implantes não está saturado?"
                                answer="Saturado de prescritores genéricos. O que ensinamos é o modelo premium e íntegro. A demanda de pacientes com deficiências hormonais que buscam médicos experientes, éticos e que resolvem o problema é virtualmente infinita e hiper lucrativa."
                            />
                            <FAQItem
                                question="4. Será que eu não devo esperar terminar minha pós/especialização?"
                                answer="O tempo que você passa 'esperando' no convênio afunda a sua reputação diária, pois os pacientes se acostumam a te ver de forma barata. O resgate comercial da sua marca pessoal deve começar ontem, antes mesmo da sua próxima qualificação teórica acabar."
                            />
                            <FAQItem
                                question="5. Preciso descredenciar de todos os convênios na mesma semana?"
                                answer="De forma alguma. O aprendizado da mentoria ensina uma transição 'Phase-Out', reduzindo agendas de convênio enquanto os blocos da nova agenda particular escalam e explodem o seu faturamento com lucro absoluto, blindando você do medo."
                            />
                            <FAQItem
                                question="6. Eu não tenho grandes verbas para investir em reformas ou marketing caríssimo."
                                answer="O jogo do 'Premium' não nasce no Mármore Carrara de vitrine. Nasce no script imperativo da secretária, na forma como o café é arquitetado e na precificação cirúrgica. Os custos de ajustes iniciais são ínfimos comparados com o aumento do volume de caixa direto de apenas um bom paciente particular captado no novo escopo."
                            />
                            <FAQItem
                                question="7. O tempo da mentoria vai caber numa rotina caótica de plantões diários?"
                                answer="A mentoria existe exatamente para você GANHAR O DIREITO DE SAIR dos plantões sem falir. É formatada cirurgicamente de forma intensiva e objetiva para gerar o máximo de alavancagem executória comercial já na sua próxima semana em consultório."
                            />
                            <FAQItem
                                question="8. A prática da Dra. é focada só em Implantes Hormonais?"
                                answer="Os implantes e terapias hormonais são a 'vaca leiteira' da geração de receita recorrente de altíssimo ticket, mas não, a Mentoria não é só sobre isso. Toda a base financeira e os scripts ensinados irão elevar também (e vertiginosamente) o ticket médio e a aceitação das suas consultas cirúrgicas, ginecológicas e de rotina padrão."
                            />
                            <FAQItem
                                question="9. De verdade, vou conseguir ver o retorno financeiro do alto valor investido?"
                                answer="A matemática do High-Ticket é inegociável. Se os ajustes indicados no seu ticket final forem aplicados em 3 ou 4 novos grandes pacientes nos meses seguintes à mentoria, não apenas o retorno do investimento se cobrirá como começará a margem exponencial de lucro."
                            />
                            <FAQItem
                                question="10. Eu já tenho 20+ anos de medicina nas costas, tenho receio de recomeçar a me reposicionar na idade atual."
                                answer="Anos de experiência clínica irrefutável + Posicionamento e precificação das Clínicas do Séc 21 = Explosão da margem de lucro. Sua experiência guardada é valiosíssima, o que te falta é apenas a inteligência comercial aguda para cobrá-la como a Elite cobra, parando de se exaurir com o volume irracional e conquistando, agora, o tempo de paz final que você merece."
                            />
                        </div>
                    </div>
                </section>

            </main>

            {/* MODAL OVERLAY PARA O FORMULÁRIO TALLY */}
            {/* O iframe é renderizado APENAS no click (hasLoadedForm) para que o disparo Tally.FormPageView aconteça EXATAMENTE na intenção de preenchimento, preservando a saúde do tráfego do Pixel Pai. */}
            <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ${isFormOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* BACKDROP SÓLIDO NO MOBILE (Anti-bug Safari iOS) e BLUR NO DESKTOP */}
                <div className="absolute inset-0 bg-black md:bg-black/90 md:backdrop-blur-md" onClick={() => setIsFormOpen(false)}></div>

                {/* MODAL: FULL SCREEN MOBILE, FLOATING NO DESKTOP */}
                <div className={`relative w-full h-full md:w-[95%] max-w-4xl bg-[#080808] md:rounded-2xl border-0 md:border md:border-[#D4AF37]/50 shadow-none md:shadow-[0_0_100px_rgba(212,175,55,0.2)] p-2 pt-10 md:p-6 max-h-[100dvh] md:max-h-[90vh] overflow-y-hidden z-10 transition-transform duration-500 flex flex-col ${isFormOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>

                    <button
                        onClick={() => setIsFormOpen(false)}
                        className="absolute top-3 right-3 md:top-4 md:right-4 text-stone-500 hover:text-white z-[9999] bg-[#111] md:bg-black/50 border border-stone-800 rounded-full p-2 backdrop-blur-sm transition-colors shadow-lg"
                        aria-label="Fechar formulário"
                    >
                        <XSquare className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    <div className="w-full flex-grow overflow-y-auto overflow-x-hidden pt-4 custom-scrollbar relative min-h-[400px]" style={{ WebkitOverflowScrolling: 'touch' }}>
                        {/* SPINNER ELEGANTE ENQUANTO O TALLY É BAIXADO NO PRIMEIRO CLICK */}
                        {!hasLoadedForm ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-0 bg-[#080808]">
                                <Loader2 className="w-8 h-8 text-[#D4AF37] animate-spin mb-4" />
                                <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold animate-pulse text-center px-4">Iniciando ambiente seguro...</p>
                            </div>
                        ) : null}

                        {/* TALLY IFRAME LAZY MOUNT */}
                        {hasLoadedForm && (
                            <iframe
                                src="https://tally.so/embed/442VZk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                                loading="lazy"
                                width="100%"
                                height="650"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                                title="Aplicação Mentoria | Implant & Inject 360"
                                className="w-full bg-[#080808] min-h-[85vh] md:min-h-[650px] border-none relative z-10"
                                onLoad={() => {
                                    // Garante que os embeds ajustem a altura quando a network terminar
                                    if (typeof (window as any).Tally !== 'undefined') {
                                        (window as any).Tally.loadEmbeds();
                                    }
                                }}
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>

            {/* FOOTER LP - A JUSTE DE CRÉDITO VISÍVEL */}
            <footer className="bg-[#050505] py-10 border-t border-stone-800 text-center text-sm font-light z-10 relative">
                <p className="text-stone-500">© {new Date().getFullYear()} Instituto Josiane Canali. Todos os direitos reservados.</p>
                <p className="mt-3 text-[11px] font-bold text-stone-400 uppercase tracking-widest hover:text-[#D4AF37] transition-colors cursor-pointer inline-block">Desenvolvido por Ampulloo Studio</p>
            </footer>

        </div>
    );
};

export default ImersaoLPTeste;
