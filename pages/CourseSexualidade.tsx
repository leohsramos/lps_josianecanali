import React, { useState, useEffect } from 'react';

import { Check, ArrowRight, CornerUpLeft, Lock, Heart, Shield, Clock, BookOpen, Quote, HelpCircle, Star, Timer, Zap, AlertOctagon, MousePointerClick, X, FileText, Unlock, Gift, CheckCircle, Copy, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

// Componente visual leve de Confetes (sem dependências externas)
const ConfettiEffect = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 rounded-[2.5rem]">
            {[...Array(40)].map((_, i) => (
                <div
                    key={i}
                    className="absolute animate-confetti"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `-${Math.random() * 20}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        backgroundColor: ['#e11d48', '#FFD700', '#f43f5e', '#fb7185'][Math.floor(Math.random() * 4)],
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        opacity: 0.8,
                        transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                />
            ))}
            <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 4s linear infinite;
        }
      `}</style>
        </div>
    );
};

const CourseSexualidade: React.FC = () => {
    // Estado playVideo removido pois o vídeo carregará direto

    // -- Lógica do Cronômetro Evergreen (2 horas, 46 minutos e 13 segundos) --
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 46, seconds: 13 });
    const [isUrgent, setIsUrgent] = useState(false);
    const [showPriceComparison, setShowPriceComparison] = useState(false);

    // -- LÓGICA DO MODAL DE LEAD & CUPOM (Adicionado) --
    const [showLeadModal, setShowLeadModal] = useState(false);
    const [leadStep, setLeadStep] = useState<'form' | 'success'>('form');
    const [leadData, setLeadData] = useState({ name: '', email: '', whatsapp: '' });
    const [showStickyCoupon, setShowStickyCoupon] = useState(false);
    const [couponCopied, setCouponCopied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Schema.org para Curso Individual
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Sexualidade no Casamento",
        "description": "Resgate a intimidade e o prazer no seu casamento. Um curso que une a visão médica da ginecologia com princípios cristãos.",
        "provider": {
            "@type": "Organization",
            "name": "Instituto Canali",
            "sameAs": "https://www.drajosianecanali.com.br"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "PT8H"
        },
        "offers": {
            "@type": "Offer",
            "category": "Paid",
            "priceCurrency": "BRL",
            "price": "95.30",
            "url": "https://pay.kiwify.com.br/dxt1qaD"
        }
    };

    // Lista de Comparação de Preços
    const comparisonItems = [
        { name: "Pão francês (unid)", price: "R$ 0,70", icon: "🥖" },
        { name: "Ovo branco (unid)", price: "R$ 1,20", icon: "🥚" },
        { name: "Sacola plástica", price: "R$ 0,40", icon: "🛍️" },
        { name: "Xerox (P&B)", price: "R$ 0,50", icon: "📄" },
        { name: "Chiclete (unid)", price: "R$ 0,50", icon: "🍬" },
        { name: "Bala de goma", price: "R$ 1,50", icon: "🍭" },
        { name: "Bombom", price: "R$ 1,50", icon: "🍫" },
        { name: "Cafezinho", price: "R$ 3,00", icon: "☕" },
        { name: "Água (500ml)", price: "R$ 1,50", icon: "💧" },
        { name: "Ônibus (média)", price: "R$ 4,50", icon: "🚌" },
    ];

    useEffect(() => {
        // Abrir modal de lead após 2 segundos
        /* CODIGO COMENTADO A PEDIDO PARA MELHORAR CONVERSAO
        const timerModal = setTimeout(() => {
            setShowLeadModal(true);
        }, 2000);
        */

        // Tenta recuperar um timestamp final do localStorage
        const storedEndTime = localStorage.getItem('canali_offer_end_time');
        const now = new Date().getTime();
        // Duração: 2 horas, 46 minutos e 13 segundos em milissegundos
        const duration = (2 * 60 * 60 * 1000) + (46 * 60 * 1000) + (13 * 1000);
        let endTime: number;

        // Se não existir ou já tiver passado, define o tempo a partir de agora
        if (!storedEndTime || now > parseInt(storedEndTime)) {
            endTime = now + duration;
            localStorage.setItem('canali_offer_end_time', endTime.toString());
        } else {
            endTime = parseInt(storedEndTime);
        }

        // Se faltar menos de 10 minutos (600.000ms), reseta para o tempo original (loop de escassez)
        if (endTime - now < 10 * 60 * 1000) {
            endTime = now + duration;
            localStorage.setItem('canali_offer_end_time', endTime.toString());
        }

        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const distance = endTime - currentTime;

            if (distance < 0) {
                // Reinicia se acabar durante a navegação
                const newEnd = new Date().getTime() + duration;
                localStorage.setItem('canali_offer_end_time', newEnd.toString());
                endTime = newEnd;
            } else {
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ hours, minutes, seconds });

                // Ativa o modo de urgência se faltar menos de 1 hora
                if (hours === 0) {
                    setIsUrgent(true);
                } else {
                    setIsUrgent(false);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
            // clearTimeout(timerModal); // Comentado
        };
    }, []);

    // Formatação com zero à esquerda
    const formatTime = (val: number) => val < 10 ? `0${val}` : val;

    // ID do vídeo principal de vendas (Revertido para o original)
    const videoId = "T3-qe17Trpg";
    const checkoutUrl = "https://pay.kiwify.com.br/dxt1qaD";

    const scrollToCheckout = () => {
        const element = document.getElementById('checkout');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Funções do Modal de Lead - INTEGRADO AO GOOGLE SHEETS
    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (leadData.name && leadData.email && leadData.whatsapp) {
            setIsSubmitting(true);

            try {
                const submissionDate = new Date().toLocaleString('pt-BR');

                // Envio para o Proxy da API (Google Sheets)
                await fetch('https://drajosianecanali.com.br/api/form-submit', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        formName: "curso-sexualidade",
                        Data: submissionDate,
                        nome: leadData.name,
                        email: leadData.email,
                        whatsapp: leadData.whatsapp
                    })
                });
            } catch (error) {
                console.error("Erro ao salvar lead", error);
                // Prossegue mesmo com erro para não travar a experiência do usuário
            } finally {
                setIsSubmitting(false);
                setLeadStep('success');
                setShowStickyCoupon(true);
            }
        }
    };

    const copyCoupon = () => {
        navigator.clipboard.writeText("CLUBEDAJOSI10");
        setCouponCopied(true);
        setTimeout(() => setCouponCopied(false), 3000);
    };

    return (
        <div className="w-full overflow-x-hidden font-sans bg-stone-50 selection:bg-rose-500 selection:text-white">
            <SEO
                title="Curso Sexualidade no Casamento | Dra. Josiane Canali"
                description="Resgate a intimidade e o prazer no seu casamento. Um curso que une a visão médica da ginecologia com princípios cristãos. Acabe com a dor e a falta de libido."
                image="https://i.postimg.cc/8z8G4vXV/CAPAS_DE_CURSO_1.png"
                url="https://www.drajosianecanali.com.br/mais/cursos/sexualidade"
                structuredData={courseSchema}
            />

            {/* --- BARRA FIXA UNIFICADA (VOLTAR + CRONÔMETRO) --- */}
            <div className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 text-white h-[60px] shadow-2xl flex items-center px-2 sm:px-4 justify-between border-b ${isUrgent ? 'bg-red-800 border-red-500 shadow-red-900/50' : 'bg-gradient-to-r from-rose-900 via-rose-600 to-rose-800 border-white/10'}`}>

                {/* Botão Voltar (Esquerda) */}
                <a
                    href="https://drajosianecanali.com.br/mais/cursos"
                    className="flex items-center text-white/80 hover:text-white hover:bg-white/10 p-2 pr-4 rounded-full transition-all group shrink-0"
                    title="Voltar para o site principal"
                >
                    <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors mr-2">
                        <CornerUpLeft size={16} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Voltar</span>
                </a>

                {/* Cronômetro (Centro) */}
                <div className="flex items-center gap-2 sm:gap-4 pointer-events-none whitespace-nowrap">
                    <div className={`flex items-center text-white ${isUrgent ? 'animate-pulse' : ''}`}>
                        {isUrgent ? (
                            <AlertOctagon size={18} className="fill-yellow-500 text-red-900 mr-2 hidden sm:block animate-bounce" />
                        ) : (
                            <Zap size={14} className="fill-white mr-1 hidden sm:block" />
                        )}
                        <span className={`uppercase tracking-wider text-[10px] sm:text-xs font-bold ${isUrgent ? 'text-yellow-300' : 'text-white'}`}>
                            {isUrgent ? "Últimas Vagas:" : "Oferta de Lançamento:"}
                        </span>
                    </div>
                    <div className={`flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-xl border tabular-nums transition-all duration-500 ${isUrgent
                        ? 'bg-red-700 border-yellow-400 text-yellow-300 shadow-[0_0_20px_rgba(255,200,0,0.4)] scale-105'
                        : 'bg-black/30 border-white/10 text-white shadow-inner'
                        }`}>
                        <Timer size={16} className={`mr-2 opacity-80 hidden sm:block ${isUrgent ? 'text-yellow-300' : ''}`} />
                        <span className="text-sm sm:text-xl font-bold font-mono">{formatTime(timeLeft.hours)}</span>
                        <span className="text-xs opacity-70 pb-1">:</span>
                        <span className="text-sm sm:text-xl font-bold font-mono">{formatTime(timeLeft.minutes)}</span>
                        <span className="text-xs opacity-70 pb-1">:</span>
                        <span className="text-sm sm:text-xl font-bold font-mono w-6 sm:w-8">{formatTime(timeLeft.seconds)}</span>
                    </div>
                </div>

                {/* Espaçador ou Botão CTA Pequeno (Direita) */}
                <div className="hidden sm:block shrink-0">
                    <button
                        onClick={scrollToCheckout}
                        className={`text-xs font-bold px-4 py-2 rounded-full transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 border ${isUrgent
                            ? 'bg-[#25D366] hover:bg-[#20bd5a] text-white border-green-400 animate-pulse'
                            : 'bg-[#25D366] hover:bg-[#20bd5a] text-white border-transparent'
                            }`}
                    >
                        {isUrgent ? "Garantir AGORA" : "Garantir Agora"}
                    </button>
                </div>
                <div className="w-8 sm:hidden"></div>
            </div>

            <div className="animate-fade-in-up pt-[60px]">

                <section className="relative py-20 lg:py-32 bg-stone-950 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

                    <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 backdrop-blur-md mb-10 hover:bg-rose-500/10 transition-colors cursor-default">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                            </span>
                            <span className="text-rose-200/90 font-bold tracking-widest uppercase text-[10px] sm:text-xs">Para Casais & Mulheres Cristãs</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight text-balance">
                            Seu Casamento não precisa <br className="hidden md:block" />
                            ser uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600">Guerra Fria.</span>
                        </h1>

                        <p className="text-stone-400 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-14 leading-relaxed text-pretty">
                            A rotina não deve ser o fim da paixão. Descubra como unir a <strong>ciência médica</strong> à <strong>visão bíblica</strong> para viver uma intimidade leve, prazerosa e sem culpas.
                        </p>

                        {/* Video Sales Letter (VSL) - Autoplay com Som */}
                        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2rem] overflow-hidden bg-stone-900 shadow-2xl shadow-rose-900/20 border border-stone-800 group mb-14 hover:border-stone-700 transition-colors duration-500">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1`}
                                title="Vídeo de Vendas"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <a
                                href={checkoutUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-5 rounded-2xl font-bold text-lg md:text-xl shadow-[0_0_40px_-10px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_-15px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center group border border-white/10"
                            >
                                QUERO RESGATAR A INTIMIDADE <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-stone-500 uppercase tracking-widest font-medium">
                                <span className="flex items-center"><Shield size={14} className="mr-2 text-rose-500" /> Ambiente Seguro</span>
                                <span className="flex items-center"><Lock size={14} className="mr-2 text-rose-500" /> Acesso Imediato</span>
                                <span className="flex items-center"><Clock size={14} className="mr-2 text-rose-500" /> No seu ritmo</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-stone-900 border-t border-white/5 relative">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-display font-light text-stone-300 leading-relaxed mb-12 text-balance">
                            Você e seu esposo se amam, mas sentem que vivem no "piloto automático"? <br />
                            <span className="text-white font-bold">Como bons amigos, mas não como amantes?</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                                <Heart className="text-rose-500 w-8 h-8 mb-4" />
                                <p className="text-stone-300 text-lg leading-relaxed">
                                    Muitas mulheres desejam sentir prazer e se entregar, mas travas invisíveis e a falta de diálogo transformam o quarto em um ambiente de ansiedade, não de descanso.
                                </p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                                <Lock className="text-rose-500 w-8 h-8 mb-4" />
                                <p className="text-stone-300 text-lg leading-relaxed">
                                    Existe o desejo de tentar algo novo, de sair da rotina, mas o medo do julgamento ou de "não ser correto" paralisa a ação, mantendo o casamento morno.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 inline-block relative">
                            <p className="text-xl text-stone-400 italic font-serif relative z-10 px-8 max-w-2xl mx-auto">
                                "A intimidade não deveria ser um fardo. Ela foi desenhada para ser o cimento da união."
                            </p>
                            <Quote className="absolute top-0 left-0 text-stone-800 w-8 h-8 -z-0 transform -translate-y-1/2" />
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-100 to-white"></div>

                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="w-full lg:w-1/2">
                                <div className="inline-block px-4 py-1 bg-stone-100 rounded-full text-stone-600 font-bold text-xs uppercase tracking-widest mb-6 border border-stone-200">
                                    Sagrado & Científico
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6 text-balance">
                                    O Prazer não é Proibido.<br />
                                    <span className="text-rose-600">Ele é um Presente.</span>
                                </h2>
                                <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                                    <p>
                                        Por anos, muitas de nós aprendemos, direta ou indiretamente, que a sexualidade era algo "sujo" ou apenas para procriação. <strong className="text-stone-900 font-medium">Isso criou barreiras emocionais profundas.</strong>
                                    </p>
                                    <p>
                                        Neste curso, a Dra. Josiane Canali rompe esse silêncio com elegância e embasamento.
                                    </p>
                                    <ul className="space-y-4 mt-4">
                                        <li className="flex items-start">
                                            <BookOpen className="text-rose-500 w-6 h-6 mr-3 mt-1 shrink-0" />
                                            <span>Baseado na <strong>Bíblia</strong> e na <strong>Catequese Matrimonial</strong>: O sexo como renovação da aliança.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Shield className="text-rose-500 w-6 h-6 mr-3 mt-1 shrink-0" />
                                            <span>Fundamentado na <strong>Ciência</strong>: Entenda sua fisiologia sem mistérios.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Star className="text-rose-500 w-6 h-6 mr-3 mt-1 shrink-0" />
                                            <span>Validado pela <strong>Experiência Clínica</strong>: Anos ouvindo e tratando casais reais.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative">
                                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                                    <img
                                        src="https://i.postimg.cc/y8t9zTzt/HDS-9197.jpg"
                                        alt="Dra Josiane Canali"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8 text-white">
                                        <p className="font-serif italic text-xl">"Desmistificar o sexo é o primeiro passo para santificar o casamento."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-rose-50 border-y border-rose-100">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-end">
                                <div className="relative w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-black hover:scale-[1.02] transition-transform duration-500">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/XtoxOgG6SXQ?rel=0&modestbranding=1&loop=1&playlist=XtoxOgG6SXQ&controls=0&showinfo=0"
                                        title="A Origem do Curso"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full object-cover"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="lg:col-span-7 order-1 lg:order-2">
                                <span className="text-rose-600 font-bold tracking-widest uppercase text-xs mb-4 block">Bastidores</span>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-stone-900 mb-8 text-balance">Não foi planejado.<br />Foi uma Revelação.</h2>

                                <div className="space-y-6 text-stone-700 text-lg font-light leading-relaxed">
                                    <p>
                                        Tudo começou com um convite do <strong>Padre Jean</strong>, da Paróquia Santa Clara de Assis (Umuarama/PR). O pedido parecia simples: uma conversa informal com casais em um encontro na chácara.
                                    </p>
                                    <p>
                                        Mas ao começar a falar, a Dra. Josiane percebeu algo profundo nos olhos daqueles casais. Não era apenas curiosidade; era uma <strong>sede desesperada por respostas</strong>. Havia dúvidas que eles nunca tiveram coragem de perguntar a ninguém.
                                    </p>
                                    <div className="bg-white p-6 rounded-2xl border-l-4 border-rose-400 shadow-sm italic text-stone-600 my-6">
                                        "Ali eu entendi que muitas famílias estavam enfrentando batalhas silenciosas e sofrendo desnecessariamente por falta de orientação segura."
                                    </div>
                                    <p>
                                        A Dra. Josi saiu daquele encontro com uma missão: o assunto não poderia morrer ali. Ela precisava transformar aquele bate-papo em um guia completo, acessível e transformador. Assim nasceu este curso.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16 px-4 md:px-8 max-w-4xl mx-auto">
                            <h2 className="text-4xl font-display font-bold text-stone-900">O Caminho da Restauração</h2>
                            <p className="text-stone-500 mt-4 text-lg">Três passos para sair da estagnação e reacender o amor.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group bg-stone-50 p-8 rounded-[2.5rem] hover:bg-rose-50 transition-colors duration-300 border border-stone-100 hover:border-rose-100">
                                <span className="text-stone-400 font-display text-6xl font-bold opacity-20 mb-4 block group-hover:text-rose-400 transition-colors">01</span>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">Entenda o Propósito</h3>
                                <p className="text-stone-600 leading-relaxed mb-6">
                                    Antes de mudar a prática, precisamos mudar a mente. Desconstrua mitos e descubra o plano original de Deus e da biologia para o prazer do casal.
                                </p>
                                <div className="w-12 h-1 bg-stone-200 group-hover:bg-rose-400 transition-colors rounded-full"></div>
                            </div>

                            <div className="group bg-stone-50 p-8 rounded-[2.5rem] hover:bg-rose-50 transition-colors duration-300 border border-stone-100 hover:border-rose-100">
                                <span className="text-stone-400 font-display text-6xl font-bold opacity-20 mb-4 block group-hover:text-rose-400 transition-colors">02</span>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">Reacenda o Desejo</h3>
                                <p className="text-stone-600 leading-relaxed mb-6">
                                    Ferramentas para "quebrar o gelo". Aprenda a comunicar o que sente, o que gosta e a criar uma atmosfera de romance diário sem constrangimentos.
                                </p>
                                <div className="w-12 h-1 bg-stone-200 group-hover:bg-rose-400 transition-colors rounded-full"></div>
                            </div>

                            <div className="group bg-stone-50 p-8 rounded-[2.5rem] hover:bg-rose-50 transition-colors duration-300 border border-stone-100 hover:border-rose-100">
                                <span className="text-stone-400 font-display text-6xl font-bold opacity-20 mb-4 block group-hover:text-rose-400 transition-colors">03</span>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">Fundamentos Bíblicos</h3>
                                <p className="text-stone-600 leading-relaxed mb-6">
                                    A base que sustenta tudo. Veja como a espiritualidade não anula, mas potencializa a união física, tornando-a um ato de sacramento e entrega mútua.
                                </p>
                                <div className="w-12 h-1 bg-stone-200 group-hover:bg-rose-400 transition-colors rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="checkout" className="py-24 bg-stone-950 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">

                            <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-600 to-rose-700 text-white text-xs font-bold px-8 py-3 rounded-bl-3xl uppercase tracking-widest shadow-lg">
                                Oferta de Lançamento
                            </div>

                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Sexualidade no Casamento</h2>
                            <p className="text-stone-400 text-lg mb-12 max-w-xl mx-auto">Curso Completo + Material de Apoio + Acesso à Comunidade</p>

                            <div className="flex flex-col items-center justify-center mb-12">
                                <div className="relative mb-2 group/price">
                                    <p className="text-stone-500 text-xl font-bold line-through opacity-70 group-hover:opacity-100 transition-opacity">de R$ 149,90</p>
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500/80 -rotate-3"></div>
                                </div>

                                <div className="flex items-baseline gap-2 animate-pulse-slow relative">
                                    <span className="text-2xl md:text-3xl font-medium text-stone-300">12x de</span>
                                    <div className="relative">
                                        <span className="text-8xl md:text-9xl font-black text-[#25D366] tracking-tighter drop-shadow-[0_0_20px_rgba(37,211,102,0.4)]">9,86</span>

                                        {/* Badge de Persuasão - REFATORADO PARA DESTAQUE MÁXIMO E CLIQUE CLARO */}
                                        <button
                                            onClick={() => setShowPriceComparison(true)}
                                            className="absolute -top-12 -right-4 sm:-right-16 bg-[#FFFF00] text-rose-900 font-black px-4 py-2 rounded-full -rotate-6 shadow-[0_0_25px_rgba(255,255,0,0.6)] animate-bounce hover:animate-none hover:scale-110 transition-all duration-300 cursor-pointer z-20 border-4 border-rose-600 flex flex-col items-center leading-none group/badge"
                                        >
                                            <div className="flex items-center gap-1 text-xs sm:text-sm uppercase tracking-tighter">
                                                Menos de R$ 0,33/dia
                                                <MousePointerClick size={16} className="animate-ping absolute right-2 opacity-75" />
                                                <MousePointerClick size={16} className="relative z-10" />
                                            </div>
                                            <span className="text-[8px] bg-rose-900 text-white px-2 py-0.5 rounded-full mt-1 font-bold tracking-wide">
                                                CLIQUE E COMPARE
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <p className="text-stone-300 text-lg mt-6 font-medium">ou apenas <span className="text-white font-bold text-2xl">R$ 95,30</span> à vista</p>
                            </div>

                            <a
                                href={checkoutUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block w-full max-w-md bg-gradient-to-r from-[#25D366] to-[#1ebc57] text-white py-6 rounded-2xl font-black text-xl md:text-2xl uppercase tracking-wide transition-all shadow-[0_10px_40px_-10px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_60px_-10px_rgba(37,211,102,0.6)] hover:scale-[1.03] mb-8 border-b-4 border-[#15803d]"
                            >
                                SIM, QUERO RESTAURAR MEU CASAMENTO
                            </a>

                            {/* NOVO BLOCO DE ACESSO */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-stone-400 text-xs font-bold uppercase tracking-widest mb-8 bg-white/5 p-4 rounded-xl border border-white/5 inline-flex mx-auto">
                                <div className="flex items-center gap-2">
                                    <FileText size={16} className="text-[#25D366]" />
                                    <span>PDF Completo da Aula</span>
                                </div>
                                <div className="hidden sm:block w-px h-4 bg-white/20"></div>
                                <div className="flex items-center gap-2">
                                    <Unlock size={16} className="text-[#25D366]" />
                                    <span>Acesso Permanente</span>
                                </div>
                            </div>

                            <p className="text-xs text-stone-500 uppercase tracking-widest flex items-center justify-center gap-2 font-bold">
                                <Lock size={12} className="text-[#25D366]" /> Compra 100% Segura via Kiwify
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-stone-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">Dúvidas Frequentes</h2>
                        <div className="space-y-4">
                            {[
                                { q: "O curso é focado apenas para mulheres?", a: "A linguagem é acolhedora para a mulher, mas o conteúdo é transformador para o casal. Assistir juntos é o ideal, pois abre portas para diálogos que talvez vocês nunca tiveram coragem de iniciar." },
                                { q: "Serve para quem não é casado?", a: "Sim! É um excelente preparatório para noivos que desejam começar a vida a dois com o fundamento correto, evitando bagagens e traumas desnecessários." },
                                { q: "Meu marido não quer assistir, posso fazer sozinha?", a: "Com certeza. A mudança de um relacionamento sistêmico muitas vezes começa pela mudança de postura de um dos lados. Você aprenderá ferramentas para iniciar esse movimento de cura." },
                                { q: "Tenho vergonha, o curso é explícito?", a: "Não. O curso é médico, didático, elegante e extremamente respeitoso. Não há nudez ou conteúdo constrangedor. Você pode assistir tranquilamente na sala de casa." },
                                { q: "Como recebo o acesso?", a: "Imediatamente após a aprovação do pagamento, você recebe um e-mail da plataforma Kiwify com seus dados de login para começar agora mesmo." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-rose-300 transition-colors shadow-sm">
                                    <h3 className="font-bold text-stone-900 text-lg mb-3 flex items-start">
                                        <HelpCircle size={20} className="text-rose-500 mr-3 shrink-0 mt-0.5" />
                                        {item.q}
                                    </h3>
                                    <p className="text-stone-600 pl-8 leading-relaxed text-base">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>

            {/* MODAL DE COMPARAÇÃO DE PREÇO (NOVO) */}
            {showPriceComparison && (
                <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-up" onClick={() => setShowPriceComparison(false)}>
                    <div className="bg-stone-900 border border-rose-500/30 w-full max-w-md rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-rose-600/20 rounded-full blur-[60px] pointer-events-none"></div>

                        <button
                            onClick={() => setShowPriceComparison(false)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-display font-bold text-white mb-2">A Verdade Chocante</h3>
                            <p className="text-stone-400 text-sm">
                                O investimento para transformar seu casamento é menor que tudo isso:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                            {comparisonItems.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5 hover:border-rose-500/30 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{item.icon}</span>
                                        <span className="text-stone-300 text-sm font-medium group-hover:text-white">{item.name}</span>
                                    </div>
                                    <span className="text-red-400 font-bold text-sm">{item.price}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-4 rounded-2xl flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🎓</span>
                                <span className="text-[#25D366] font-bold text-sm">Curso Sexualidade</span>
                            </div>
                            <span className="text-[#25D366] font-black text-lg">R$ 0,33</span>
                        </div>

                        <a
                            href={checkoutUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full block bg-gradient-to-r from-[#25D366] to-[#1ebc57] text-white text-center py-4 rounded-xl font-bold uppercase tracking-wide transition-all shadow-lg hover:scale-105"
                        >
                            Investir no Amor Agora
                        </a>
                    </div>
                </div>
            )}

            {/* --- MODAL DE CAPTURA DE LEAD (MINI TELINHA) --- */}
            {/* 
      {showLeadModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-stone-900/90 backdrop-blur-md animate-fade-in-up">
            
            <ConfettiEffect />

            <div className="bg-white rounded-[2.5rem] w-full max-w-sm md:max-w-5xl overflow-hidden shadow-2xl relative border-4 border-rose-100 flex flex-col md:flex-row z-10 min-h-[500px]">
                
                <div className="hidden md:block w-1/2 relative bg-stone-100">
                    <img 
                        src="https://i.postimg.cc/631b0pb1/arte-43-visaocrist.png" 
                        alt="Capa Curso Sexualidade" 
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-900/40 to-transparent"></div>
                </div>

                <div className="w-full md:w-1/2 relative flex flex-col">
                    
                    <div className="absolute top-4 right-4 z-20">
                        <button 
                            onClick={() => setShowLeadModal(false)}
                            className="text-[10px] font-bold text-red-500 hover:text-red-700 uppercase tracking-widest bg-red-50 px-3 py-1.5 rounded-full border border-red-100 hover:border-red-300 transition-all hover:bg-red-100"
                        >
                            DISPENSAR DESCONTO
                        </button>
                    </div>

                    {leadStep === 'form' ? (
                        <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                            <div className="text-center mb-8 mt-4 md:mt-0">
                                <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-rose-600 shadow-inner">
                                    <Gift size={32} className="animate-pulse" />
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-display font-bold text-stone-900 mb-2 leading-tight">
                                    Você ganhou um cupom!
                                </h3>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    "O amor é paciente, o amor é bondoso." <br/>
                                    Preencha abaixo para liberar <strong>10% OFF extra</strong>.
                                </p>
                            </div>

                            <form onSubmit={handleLeadSubmit} className="space-y-4">
                                <div className="space-y-3">
                                    <input 
                                        type="text" 
                                        placeholder="Seu Nome" 
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-rose-500 outline-none text-base text-[#333] transition-all focus:bg-white placeholder-stone-400"
                                        value={leadData.name}
                                        onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Seu Melhor E-mail" 
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-rose-500 outline-none text-base text-[#333] transition-all focus:bg-white placeholder-stone-400"
                                        value={leadData.email}
                                        onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                                    />
                                    <input 
                                        type="tel" 
                                        placeholder="Seu WhatsApp" 
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-rose-500 outline-none text-base text-[#333] transition-all focus:bg-white placeholder-stone-400"
                                        value={leadData.whatsapp}
                                        onChange={(e) => setLeadData({...leadData, whatsapp: e.target.value})}
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-rose-600 to-rose-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-rose-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 uppercase tracking-wide text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <><Gift size={18} /> Desbloquear Agora</>}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="p-8 md:p-12 text-center bg-rose-50 h-full flex flex-col justify-center relative">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 shadow-md animate-bounce">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-rose-900 mb-2">Cupom Desbloqueado!</h3>
                            <p className="text-rose-700/80 text-sm mb-6">
                                Use agora e garanta o melhor preço da história.
                            </p>

                            <div className="bg-white border-2 border-dashed border-rose-300 rounded-xl p-6 mb-6 relative group cursor-pointer hover:border-rose-500 transition-colors shadow-sm" onClick={copyCoupon}>
                                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1 font-bold">Seu Código Exclusivo</p>
                                <p className="text-3xl font-black text-rose-600 tracking-wider">CLUBEDAJOSI10</p>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 group-hover:text-rose-500 transition-colors">
                                    {couponCopied ? <Check size={20} /> : <Copy size={20} />}
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-xs text-yellow-800 font-medium mb-6 text-left">
                                ⚠️ Atenção: O e-mail <span className="font-bold">{leadData.email}</span> tem prioridade para usar este cupom pela próxima 1 hora.
                            </div>

                            <button 
                                onClick={() => setShowLeadModal(false)}
                                className="text-stone-400 hover:text-stone-600 text-xs uppercase font-bold tracking-widest hover:underline mt-auto"
                            >
                                Fechar e aproveitar oferta
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )} 
      */}

            {/* --- BARRA FIXA DE CUPOM (STICKY BOTTOM) --- */}
            {/* 
      {showStickyCoupon && (
          <div className="fixed bottom-0 left-0 right-0 z-[190] bg-rose-900 text-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] animate-fade-in-up flex items-center justify-between gap-4 md:justify-center border-t border-rose-700">
              <div className="flex items-center gap-3">
                  <div className="bg-yellow-400 text-rose-900 p-1.5 rounded-full animate-pulse hidden sm:block">
                      <Gift size={16} />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                      <span className="text-[10px] sm:text-xs uppercase font-bold text-rose-200 tracking-widest">Seu desconto ativo:</span>
                      <div 
                        onClick={copyCoupon}
                        className="font-mono font-bold text-yellow-300 text-sm sm:text-base border-b border-dashed border-yellow-300/50 cursor-pointer flex items-center gap-2 hover:text-white transition-colors"
                      >
                          CLUBEDAJOSI10 
                          {couponCopied ? <Check size={14} /> : <Copy size={14} />}
                      </div>
                  </div>
              </div>
              <button 
                onClick={copyCoupon}
                className="bg-white text-rose-900 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-yellow-400 transition-colors shadow-sm"
              >
                  {couponCopied ? "Copiado!" : "Copiar"}
              </button>
          </div>
      )} 
      */}

        </div>
    );
};

export default CourseSexualidade;