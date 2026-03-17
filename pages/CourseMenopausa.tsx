import React, { useState, useEffect } from 'react';

import { CornerUpLeft, Check, Lock, Bell, Sun, TrendingUp, Smile, ArrowRight, Play, AlertTriangle, Shield, Leaf, Heart, Loader2, CheckCircle, Flame, BatteryWarning, BrainCircuit, ThermometerSun, Timer, Zap, BookOpen, Utensils, Moon, HelpCircle, Star, Activity, AlertOctagon, Microscope, Hourglass } from 'lucide-react';
import SEO from '../components/SEO';

const CourseMenopausa: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [playVideo, setPlayVideo] = useState(false);

    // -- Lógica do Cronômetro Evergreen (2 horas, 46 minutos e 13 segundos) --
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 46, seconds: 13 });
    const [isUrgent, setIsUrgent] = useState(false);

    // Schema.org para Curso Menopausa
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Menopausa com Saúde",
        "description": "Curso online com protocolo médico integrativo para tratamento de sintomas da menopausa, climatério e reposição hormonal segura.",
        "provider": {
            "@type": "Organization",
            "name": "Instituto Canali",
            "sameAs": "https://www.drajosianecanali.com.br"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "PT12H"
        }
    };

    useEffect(() => {
        const storedEndTime = localStorage.getItem('canali_offer_end_time');
        const now = new Date().getTime();
        // Duração: 2 horas, 46 minutos e 13 segundos em milissegundos
        const duration = (2 * 60 * 60 * 1000) + (46 * 60 * 1000) + (13 * 1000);
        let endTime: number;

        if (!storedEndTime || now > parseInt(storedEndTime)) {
            endTime = now + duration;
            localStorage.setItem('canali_offer_end_time', endTime.toString());
        } else {
            endTime = parseInt(storedEndTime);
        }

        if (endTime - now < 10 * 60 * 1000) {
            endTime = now + duration;
            localStorage.setItem('canali_offer_end_time', endTime.toString());
        }

        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const distance = endTime - currentTime;

            if (distance < 0) {
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

        return () => clearInterval(interval);
    }, []);

    const formatTime = (val: number) => val < 10 ? `0${val}` : val;
    const videoId = "UtwnHdwCOyU";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !whatsapp) return;

        setStatus('loading');

        // Data formatada para a planilha (dd/mm/aaaa hh:mm:ss)
        const submissionDate = new Date().toLocaleString('pt-BR');

        try {
            // NOVO ENVIO: JSON Plano para Google Apps Script via Proxy
            const response = await fetch('https://drajosianecanali.com.br/api/form-submit', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "lista-espera-menopausa",
                    Data: submissionDate,
                    nome: name.trim(),
                    email: email.trim(),
                    whatsapp: whatsapp.trim(),
                    stage: 'waitlist_menopausa'
                })
            });

            if (!response.ok) {
                throw new Error('Falha no envio para o servidor.');
            }

            setStatus('success');
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const scrollToWaitlist = () => {
        const element = document.getElementById('waitlist');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full overflow-x-hidden font-sans bg-orange-50/30 selection:bg-orange-500 selection:text-white">
            <SEO
                title="Curso Menopausa Sem Dor | Dra. Josiane Canali"
                description="Aprenda a controlar os calorões, recuperar a libido e proteger sua saúde na menopausa. Protocolo médico integrativo e reposição hormonal segura."
                image="https://i.postimg.cc/dV8Yx0gw/CAPAS_DE_CURSO_10.png"
                url="https://www.drajosianecanali.com.br/mais/cursos/menopausa"
                structuredData={courseSchema}
            />

            {/* --- BARRA FIXA UNIFICADA --- */}
            <div className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 text-white h-[60px] shadow-2xl flex items-center px-2 sm:px-4 justify-between border-b ${isUrgent ? 'bg-red-800 border-red-500 shadow-red-900/50' : 'bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 border-white/10'}`}>

                {/* Botão Voltar */}
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

                {/* Cronômetro (Centro) - IMPACTANTE */}
                <div className="flex items-center gap-2 sm:gap-4 pointer-events-none whitespace-nowrap">
                    <div className={`flex items-center text-white ${isUrgent ? 'animate-pulse' : ''}`}>
                        {isUrgent ? (
                            <AlertOctagon size={18} className="fill-yellow-500 text-red-900 mr-2 hidden sm:block animate-bounce" />
                        ) : (
                            <Zap size={14} className="fill-white mr-1 hidden sm:block" />
                        )}
                        <span className={`uppercase tracking-wider text-[10px] sm:text-xs font-bold ${isUrgent ? 'text-yellow-300' : 'text-white'}`}>
                            {isUrgent ? "Últimas Vagas:" : "Oferta Especial:"}
                        </span>
                    </div>

                    <div className={`flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-xl border tabular-nums transition-all duration-500 ${isUrgent
                        ? 'bg-red-700 border-yellow-400 text-yellow-300 shadow-[0_0_20px_rgba(255,200,0,0.4)] scale-105'
                        : 'bg-black/20 border-white/10 text-white shadow-inner'
                        }`}>
                        <Timer size={16} className={`mr-2 opacity-80 hidden sm:block ${isUrgent ? 'text-yellow-300' : ''}`} />
                        <span className="text-sm sm:text-xl font-bold font-mono">{formatTime(timeLeft.hours)}</span>
                        <span className="text-xs opacity-70 pb-1">:</span>
                        <span className="text-sm sm:text-xl font-bold font-mono">{formatTime(timeLeft.minutes)}</span>
                        <span className="text-xs opacity-70 pb-1">:</span>
                        <span className="text-sm sm:text-xl font-bold font-mono w-6 sm:w-8">{formatTime(timeLeft.seconds)}</span>
                    </div>
                </div>

                {/* Botão CTA Pequeno */}
                <div className="hidden sm:block shrink-0">
                    <button
                        onClick={scrollToWaitlist}
                        className={`text-xs font-bold px-4 py-2 rounded-full transition-all shadow-lg transform hover:-translate-y-0.5 border ${isUrgent
                            ? 'bg-yellow-400 text-red-900 hover:bg-yellow-300 border-yellow-200 animate-pulse'
                            : 'bg-white text-orange-700 hover:bg-orange-50 border-orange-100'
                            }`}
                    >
                        {isUrgent ? "Entrar AGORA" : "Entrar na Lista"}
                    </button>
                </div>
                {/* Mobile Spacer */}
                <div className="w-8 sm:hidden"></div>
            </div>

            {/* Conteúdo da Página */}
            <div className="animate-fade-in-up pt-[60px]">

                {/* 1. Hero Section */}
                <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-b from-orange-100/50 to-stone-50">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-300/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-200/30 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-300/50 bg-white/60 backdrop-blur-md mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            <span className="text-orange-800 font-bold tracking-widest uppercase text-[10px] sm:text-xs">Menopausa & Climatério</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-stone-900 mb-8 leading-[1.1] tracking-tight text-balance">
                            Existem mais de 100 sintomas.<br className="hidden md:block" />
                            Porém, você não precisa <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">aceitar nenhum deles.</span>
                        </h1>

                        <p className="text-stone-600 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
                            Não aceite que "é normal da idade". Descubra a verdade médica sobre a queda hormonal, o impacto no cérebro e no corpo, e os caminhos para viver sua <strong>segunda juventude</strong>.
                        </p>

                        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-orange-900/10 border-4 border-white group mb-12 transform hover:scale-[1.01] transition-transform duration-500">
                            {!playVideo ? (
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-stone-100"
                                    onClick={() => setPlayVideo(true)}
                                >
                                    <img
                                        src="https://i.postimg.cc/dV8Yx0gw/CAPAS_DE_CURSO_10.png"
                                        alt="Capa do Vídeo Menopausa"
                                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent"></div>

                                    <div className="relative z-10 w-24 h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/60 shadow-[0_0_40px_rgba(255,165,0,0.4)] group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                            <Play className="w-6 h-6 text-orange-600 fill-orange-600 ml-1" />
                                        </div>
                                    </div>
                                    <p className="relative z-10 mt-6 text-white font-bold text-sm tracking-[0.2em] uppercase drop-shadow-md bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">Assista ao Trailer</p>
                                </div>
                            ) : (
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                    title="Vídeo de Vendas"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>

                        <div className="flex flex-col items-center">
                            <button
                                onClick={scrollToWaitlist}
                                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all flex items-center justify-center group"
                            >
                                QUERO VIVER SEM DOR <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="mt-4 text-xs text-stone-500 uppercase tracking-widest font-medium flex items-center">
                                <Shield size={12} className="mr-1 text-orange-500" /> Protocolo Baseado em Evidências
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. The Symptoms */}
                <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                                O Calorão é só a <br className="md:hidden" />
                                <span className="text-orange-500 italic font-serif">ponta do iceberg</span>.
                            </h2>
                            <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light">
                                Muitas mulheres tratam a menopausa como algo passageiro, mas ela é um estado metabólico complexo. Você reconhece esses grupos de sintomas?
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Ep 8: Vasomotor/Cardíaco */}
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <ThermometerSun className="text-orange-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-orange-100">Vasomotores</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    Ondas de calor (fogachos), suores noturnos excessivos, palpitações e tonturas. Piora durante a noite, afetando o sono.
                                </p>
                            </div>

                            {/* Ep 9: Emocional/Cognitivo */}
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <BrainCircuit className="text-yellow-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-yellow-100">Neuropsiquiátricos</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    "Brain fog" (neblina mental), falhas de memória, irritabilidade, ansiedade repentina e alterações bruscas de humor.
                                </p>
                            </div>

                            {/* Ep 10: Físico/Dermatológico */}
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <Leaf className="text-green-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-green-100">Físicos & Pele</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    Queda de cabelo, pele fina e seca, "boca ardente", olhos secos, dores musculares e câimbras frequentes.
                                </p>
                            </div>

                            {/* Ep 11/12: Urogenital/Metabólico */}
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <BatteryWarning className="text-red-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-red-100">Metabólico & Íntimo</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    Ganho de peso abdominal, atrofia vaginal, dor na relação, infecções urinárias e queda drástica da libido.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 bg-gradient-to-r from-orange-900/50 to-red-900/50 p-8 rounded-2xl border border-orange-500/30 text-center max-w-3xl mx-auto backdrop-blur-sm">
                            <p className="text-xl italic text-white font-serif">
                                "Nenhuma mulher merece passar por isso e se contentar. A medicina tem respostas, e eu vou te mostrar o caminho para prevenir os riscos a longo prazo."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. A Linha do Tempo */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-20">
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-2 block">Educação Médica</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900">Entenda onde você está</h2>
                            <p className="text-stone-500 mt-4 text-lg">Muitas mulheres confundem as fases. Saber o seu momento é crucial para o tratamento.</p>
                        </div>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">

                            {/* Climatério */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-orange-200 text-orange-800 font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg">
                                    1
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-lg hover:shadow-xl transition-shadow md:group-odd:mr-auto md:group-even:ml-auto">
                                    <h3 className="font-bold text-stone-900 text-xl mb-2 flex items-center gap-2">
                                        Climatério <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">A Transição</span>
                                    </h3>
                                    <p className="text-stone-600 leading-relaxed font-light">
                                        É o período de transição que engloba tudo. Muita gente confunde com menopausa, mas o climatério é a "janela" inteira de envelhecimento reprodutivo.
                                    </p>
                                </div>
                            </div>

                            {/* Perimenopausa */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-orange-400 text-white font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg">
                                    2
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-lg hover:shadow-xl transition-shadow md:group-odd:mr-auto md:group-even:ml-auto">
                                    <h3 className="font-bold text-stone-900 text-xl mb-2 flex items-center gap-2">
                                        Perimenopausa <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Fase do Caos</span>
                                    </h3>
                                    <p className="text-stone-600 leading-relaxed font-light">
                                        Oscilações hormonais imprevisíveis. Você ainda menstrua, mas o ciclo falha, o humor oscila e os sintomas começam a aparecer. É aqui que os erros de diagnóstico acontecem.
                                    </p>
                                </div>
                            </div>

                            {/* Menopausa */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-red-600 text-white font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg">
                                    3
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-lg hover:shadow-xl transition-shadow md:group-odd:mr-auto md:group-even:ml-auto border-l-4 border-l-red-500">
                                    <h3 className="font-bold text-stone-900 text-xl mb-2 flex items-center gap-2">
                                        Menopausa <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">O Evento</span>
                                    </h3>
                                    <p className="text-stone-600 leading-relaxed font-light">
                                        Não é uma fase, é um marco: <strong>12 meses consecutivos sem menstruar</strong>. É o dia oficial em que seus ovários "se aposentam".
                                    </p>
                                </div>
                            </div>

                            {/* Pós-Menopausa */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-stone-700 text-white font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg">
                                    4
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-lg hover:shadow-xl transition-shadow md:group-odd:mr-auto md:group-even:ml-auto">
                                    <h3 className="font-bold text-stone-900 text-xl mb-2 flex items-center gap-2">
                                        Pós-Menopausa <span className="text-xs bg-stone-200 text-stone-600 px-2 py-1 rounded-full">Resto da Vida</span>
                                    </h3>
                                    <p className="text-stone-600 leading-relaxed font-light">
                                        Níveis hormonais baixos e estáveis. Os sintomas agudos podem passar, mas os riscos silenciosos (osteoporose, cardiovascular) aumentam. O cuidado aqui é vitalício.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 4. Authority */}
                <section className="py-24 bg-orange-50 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-white rounded-[3rem] rotate-3 transform translate-y-4 shadow-lg"></div>
                            <img
                                src="https://i.postimg.cc/26Q0fGqj/HDS-9361-2.jpg"
                                alt="Dra Josiane Canali"
                                className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[3/4]"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1 bg-white text-orange-700 rounded-full font-bold text-xs uppercase tracking-widest mb-6 border border-orange-200 shadow-sm">
                                Sua Médica & Mentora
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6">Dra. Josiane Canali</h2>
                            <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                                <p>
                                    Especialista em Ginecologia, Menopausa e Longevidade. A Dra. Josiane acredita que a menopausa não é o fim da linha, mas um portal para uma fase de sabedoria e liberdade - <strong>desde que o corpo acompanhe a mente.</strong>
                                </p>
                                <p>
                                    Diariamente, em seu consultório, ela trata mulheres que sofrem por falta de diagnóstico correto ou por medo infundado de tratamentos. Este curso é a compilação desse conhecimento clínico.
                                </p>
                                <div className="bg-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-sm mt-4">
                                    <p className="font-serif italic text-stone-800 text-xl">
                                        "O envelhecimento é inevitável, mas o declínio é opcional. Vamos reescrever essa história juntas."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. CURRÍCULO COM 4 CARDS (SOLICITADO) */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                                A Jornada de Libertação
                            </h2>
                            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">
                                Um conteúdo profundo, organizado em 4 pilares essenciais para transformar sua saúde física, mental e emocional.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {/* Pilar 1: Conceito */}
                            <div className="bg-stone-50 p-6 lg:p-8 rounded-[2.5rem] border border-stone-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group shadow-sm hover:shadow-lg flex flex-col">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md text-orange-500 group-hover:scale-110 transition-transform">
                                    <BookOpen size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-orange-700">1. O Conceito</h3>
                                <p className="text-stone-600 leading-relaxed mb-6 text-sm flex-grow">
                                    Entenda definitivamente o que está acontecendo com seu corpo. Diferencie Climatério, Perimenopausa e Menopausa e compreenda a fisiologia por trás das mudanças hormonais.
                                </p>
                                <ul className="space-y-2 text-xs text-stone-500 font-medium">
                                    <li className="flex items-center"><Check size={14} className="text-orange-500 mr-2 shrink-0" /> Fisiologia Ovariana</li>
                                    <li className="flex items-center"><Check size={14} className="text-orange-500 mr-2 shrink-0" /> A História dos Folículos</li>
                                </ul>
                            </div>

                            {/* Pilar 2: Diagnóstico */}
                            <div className="bg-stone-50 p-6 lg:p-8 rounded-[2.5rem] border border-stone-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group shadow-sm hover:shadow-lg flex flex-col">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md text-orange-500 group-hover:scale-110 transition-transform">
                                    <Microscope size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-orange-700">2. O Diagnóstico</h3>
                                <p className="text-stone-600 leading-relaxed mb-6 text-sm flex-grow">
                                    Como saber se chegou a hora? Aprenda a identificar os sinais clínicos e laboratoriais corretos, diferenciando a menopausa natural de causas cirúrgicas ou secundárias.
                                </p>
                                <ul className="space-y-2 text-xs text-stone-500 font-medium">
                                    <li className="flex items-center"><Check size={14} className="text-orange-500 mr-2 shrink-0" /> Interpretação de Sinais</li>
                                    <li className="flex items-center"><Check size={14} className="text-orange-500 mr-2 shrink-0" /> Causas Secundárias</li>
                                </ul>
                            </div>

                            {/* Pilar 3: Controle e Tratamento */}
                            <div className="bg-stone-50 p-6 lg:p-8 rounded-[2.5rem] border border-stone-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group shadow-sm hover:shadow-lg relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200/20 rounded-full blur-2xl pointer-events-none"></div>
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md text-orange-500 group-hover:scale-110 transition-transform relative z-10">
                                    <ThermometerSun size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-orange-700 relative z-10">3. Controle e Tratamento</h3>
                                <p className="text-stone-600 leading-relaxed mb-6 text-sm relative z-10 flex-grow">
                                    Não sofra em silêncio. Descubra as opções terapêuticas modernas para dominar os calorões, a insônia e as alterações de humor, retomando sua qualidade de vida.
                                </p>
                                <ul className="space-y-2 text-xs text-stone-500 font-medium relative z-10">
                                    <li className="flex items-center"><Check size={14} className="text-orange-500 mr-2 shrink-0" /> Alívio dos Sintomas</li>
                                    <li className="flex items-center"><Check size={14} className="text-orange-500 mr-2 shrink-0" /> Reposição Hormonal Segura</li>
                                </ul>
                            </div>

                            {/* Pilar 4: Longevidade */}
                            <div className="bg-stone-50 p-6 lg:p-8 rounded-[2.5rem] border border-stone-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group shadow-sm hover:shadow-lg flex flex-col">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md text-orange-500 group-hover:scale-110 transition-transform">
                                    <Heart size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-orange-700">4. A Longevidade</h3>
                                <p className="text-stone-600 leading-relaxed mb-6 text-sm flex-grow">
                                    Proteção para o futuro. Cuide da saúde óssea, cardiovascular e cognitiva. Prepare-se para viver a fase mais longa da vida com plena vitalidade e independência.
                                </p>
                                <ul className="space-y-2 text-xs text-stone-500 font-medium">
                                    <li className="flex items-center"><Check size={14} className="text-orange-500 mr-2 shrink-0" /> Prevenção de Riscos</li>
                                    <li className="flex items-center"><Check size={14} className="text-orange-500 mr-2 shrink-0" /> Saúde Íntima Duradoura</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 6. Identificação */}
                <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
                            Você se identifica?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                                <div className="flex items-center mb-4 text-orange-300">
                                    <AlertTriangle className="mr-3" />
                                    <h3 className="font-bold text-lg">Exausta</h3>
                                </div>
                                <p className="text-stone-300 font-light">
                                    Acorda cansada, passa o dia se arrastando e sente que a memória está falhando. Acha que "está ficando velha" rápido demais.
                                </p>
                            </div>
                            <div className="bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                                <div className="flex items-center mb-4 text-orange-300">
                                    <Flame className="mr-3" />
                                    <h3 className="font-bold text-lg">Em Chamas</h3>
                                </div>
                                <p className="text-stone-300 font-light">
                                    Sofre com calores que atrapalham o trabalho e o sono. Evita situações sociais por medo de suar e se sentir constrangida.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <p className="text-xl text-orange-100 italic font-serif">
                                "Independentemente do seu sintoma, existe um caminho de volta para você mesma. E ele começa com conhecimento."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. WAITLIST FORM */}
                <section id="waitlist" className="py-24 bg-gradient-to-br from-orange-50 to-white relative">
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <div className="bg-stone-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">

                            {/* Coluna Esquerda: Benefícios */}
                            <div className="lg:w-1/2 p-10 lg:p-16 relative overflow-hidden text-white flex flex-col justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-900/40 z-0"></div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>

                                <div className="relative z-10">
                                    <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/50 bg-orange-500/10 text-orange-400 font-bold uppercase text-xs mb-6">
                                        Lista de Espera VIP
                                    </div>
                                    <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                                        Entre para o Círculo de <span className="text-orange-500">Mulheres Seguras</span>
                                    </h2>
                                    <p className="text-stone-400 text-lg mb-8 font-light">
                                        As vagas para a próxima turma são limitadas para garantir o suporte. Ao entrar na lista, você garante:
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center text-lg">
                                            <CheckCircle className="text-orange-500 w-6 h-6 mr-4 shrink-0" />
                                            <span>Aviso antecipado de abertura;</span>
                                        </li>
                                        <li className="flex items-center text-lg">
                                            <CheckCircle className="text-orange-500 w-6 h-6 mr-4 shrink-0" />
                                            <span>Condição especial de lançamento;</span>
                                        </li>
                                        <li className="flex items-center text-lg">
                                            <CheckCircle className="text-orange-500 w-6 h-6 mr-4 shrink-0" />
                                            <span>Materiais complementares exclusivos.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Coluna Direita: Formulário */}
                            <div className="lg:w-1/2 bg-white p-10 lg:p-16 flex flex-col justify-center">
                                {status !== 'success' ? (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <h3 className="text-2xl font-bold text-stone-900 mb-2">Preencha seus dados</h3>
                                        <p className="text-stone-500 text-sm mb-6">Prometemos não enviar spam. Apenas o essencial.</p>

                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Seu Nome Completo"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-orange-500 outline-none transition-all focus:bg-white focus:ring-4 focus:ring-orange-50"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Seu Melhor E-mail"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-orange-500 outline-none transition-all focus:bg-white focus:ring-4 focus:ring-orange-50"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Seu WhatsApp (com DDD)"
                                                required
                                                value={whatsapp}
                                                onChange={(e) => setWhatsapp(e.target.value)}
                                                className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-orange-500 outline-none transition-all focus:bg-white focus:ring-4 focus:ring-orange-50"
                                            />
                                        </div>

                                        <button
                                            disabled={status === 'loading'}
                                            className="w-full bg-stone-900 hover:bg-orange-600 text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-orange-600/30 transform hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center text-lg uppercase tracking-wide mt-4"
                                        >
                                            {status === 'loading' ? <Loader2 className="animate-spin" /> : "QUERO SER AVISADA"}
                                        </button>
                                        {status === 'error' && <p className="text-red-500 text-center text-sm">Erro ao enviar. Tente novamente.</p>}
                                    </form>
                                ) : (
                                    <div className="bg-green-50 border border-green-200 p-10 rounded-[2rem] text-center animate-fade-in-up h-full flex flex-col justify-center items-center">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle className="text-green-600 w-10 h-10" />
                                        </div>
                                        <h3 className="text-green-700 font-bold text-3xl mb-4">
                                            Você está na lista!
                                        </h3>
                                        <p className="text-stone-600 text-lg">
                                            Fique de olho no e-mail: <strong className="text-stone-900 block mt-2 text-xl">{email}</strong>
                                        </p>
                                        <p className="text-sm text-stone-400 mt-8">Em breve traremos novidades incríveis.</p>
                                    </div>
                                )}

                                <div className="mt-8 flex items-center justify-center text-stone-400 text-xs">
                                    <Lock size={12} className="mr-1" /> Seus dados estão 100% seguros.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. FAQ */}
                <section className="py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold text-stone-900 mb-4">Dúvidas Frequentes</h2>
                            <p className="text-stone-500">Tiramos o peso das suas perguntas.</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { q: "Já entrei na menopausa há anos, o curso ainda serve?", a: "Com certeza. O Episódio 5 e 12 são dedicados exclusivamente à pós-menopausa e riscos a longo prazo. Nunca é tarde para proteger seu cérebro, ossos e coração." },
                                { q: "Tenho medo de hormônios por causa de câncer. O curso aborda isso?", a: "Sim. Abordamos a diferença crucial entre hormônios sintéticos antigos e a terapia moderna baseada em evidências, desmistificando medos com dados científicos atualizados." },
                                { q: "O curso substitui uma consulta médica?", a: "Não. O curso é educativo. Ele te empodera com conhecimento para que você entenda seu corpo e possa discutir melhores opções com seu médico, mas não prescreve tratamentos individuais." },
                                { q: "Serve para quem fez histerectomia (retirou o útero)?", a: "Sim! Mulheres que retiraram o útero também sofrem com a queda hormonal ovariana e precisam de cuidados específicos, abordados no módulo de 'Causas Secundárias' (Episódio 7)." },
                                { q: "Como recebo o acesso?", a: "Imediatamente após a matrícula, você recebe um e-mail da plataforma Kiwify com seu login e senha. O acesso é vitalício para esta turma." }
                            ].map((item, i) => (
                                <div key={i} className="bg-stone-50 border border-stone-100 rounded-2xl p-6 hover:border-orange-200 transition-colors shadow-sm group">
                                    <h3 className="font-bold text-stone-900 text-lg mb-3 flex items-start group-hover:text-orange-700 transition-colors">
                                        <HelpCircle size={20} className="text-orange-500 mr-3 shrink-0 mt-0.5" />
                                        {item.q}
                                    </h3>
                                    <p className="text-stone-600 pl-8 leading-relaxed text-base font-light">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default CourseMenopausa;