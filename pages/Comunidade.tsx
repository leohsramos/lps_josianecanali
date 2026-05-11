import React, { useState, useEffect } from 'react';

import { CornerUpLeft, Check, Lock, Bell, Sun, TrendingUp, Smile, ArrowRight, Play, AlertTriangle, Shield, Leaf, Heart, Loader2, CheckCircle, Flame, BatteryWarning, BrainCircuit, ThermometerSun, Timer, Zap, BookOpen, Utensils, Moon, HelpCircle, Star, Activity, AlertOctagon, Microscope, Hourglass, Video, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Comunidade: React.FC = () => {
    const [playVideo, setPlayVideo] = useState(false);

    // -- Lógica do Cronômetro Evergreen (2 horas, 46 minutos e 13 segundos) --
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 46, seconds: 13 });
    const [isUrgent, setIsUrgent] = useState(false);

    // Schema.org
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Comunidade Frequência Feminina",
        "description": "Jornada de 16 semanas para mulheres entenderem e tratarem o corpo e as emoções no climatério e menopausa.",
        "provider": {
            "@type": "Organization",
            "name": "Instituto Canali",
            "sameAs": "https://www.drajosianecanali.com.br"
        }
    };

    useEffect(() => {
        const storedEndTime = localStorage.getItem('frequencia_feminina_offer');
        const now = new Date().getTime();
        const duration = (2 * 60 * 60 * 1000) + (46 * 60 * 1000) + (13 * 1000);
        let endTime: number;

        if (!storedEndTime || now > parseInt(storedEndTime)) {
            endTime = now + duration;
            localStorage.setItem('frequencia_feminina_offer', endTime.toString());
        } else {
            endTime = parseInt(storedEndTime);
        }

        if (endTime - now < 10 * 60 * 1000) {
            endTime = now + duration;
            localStorage.setItem('frequencia_feminina_offer', endTime.toString());
        }

        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const distance = endTime - currentTime;

            if (distance < 0) {
                const newEnd = new Date().getTime() + duration;
                localStorage.setItem('frequencia_feminina_offer', newEnd.toString());
                endTime = newEnd;
            } else {
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ hours, minutes, seconds });
                setIsUrgent(hours === 0);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (val: number) => val < 10 ? `0${val}` : val;
    const videoId = "uBoRw_-nD68"; // YouTube gratuito como pedido

    const scrollToCheckout = () => {
        const element = document.getElementById('checkout');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="w-full overflow-x-hidden font-sans bg-orange-50/30 selection:bg-orange-500 selection:text-white">
            <SEO
                title="Comunidade Frequência Feminina | Dra. Josiane Canali"
                description="Você mudou e não é impressão sua. Entenda seu corpo, acolha suas emoções e volte a se reconhecer."
                image="https://i.postimg.cc/dV8Yx0gw/CAPAS_DE_CURSO_10.png"
                url="https://www.drajosianecanali.com.br/comunidade"
                structuredData={courseSchema}
            />

            <div className="animate-fade-in-up">

                {/* 1. Hero Section */}
                <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#FDFBF7]">
                    {/* Fogo suave no fundo */}
                    <div className="absolute bottom-[-20%] left-[-10%] w-[120%] h-[80%] bg-gradient-to-t from-orange-600/10 via-red-500/5 to-transparent blur-[120px] pointer-events-none animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[60%] bg-gradient-to-t from-yellow-500/10 via-orange-400/5 to-transparent blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

                    <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-300/50 bg-white/60 backdrop-blur-md mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            <span className="text-orange-800 font-bold tracking-widest uppercase text-[10px] sm:text-xs">Frequência Feminina</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-stone-900 mb-8 leading-[1.1] tracking-tight text-balance">
                            Descubra como voltar a ser <br className="hidden md:block" />
                            a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">sua melhor versão.</span>
                        </h1>

                        <p className="text-stone-600 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
                            Entenda o que está acontecendo com o seu corpo e com as suas emoções. Você não precisa passar por essa fase sozinha.
                        </p>

                        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-orange-900/10 border-4 border-white group mb-12 transform hover:scale-[1.01] transition-transform duration-500">
                            {!playVideo ? (
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-stone-100"
                                    onClick={() => setPlayVideo(true)}
                                >
                                    <img
                                        src="https://i.postimg.cc/dV8Yx0gw/CAPAS_DE_CURSO_10.png"
                                        alt="Capa do Vídeo Frequência Feminina"
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
                                    <p className="relative z-10 mt-6 text-white font-bold text-sm tracking-[0.2em] uppercase drop-shadow-md bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">Assista ao Vídeo</p>
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
                                onClick={scrollToCheckout}
                                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all flex items-center justify-center group"
                            >
                                QUERO ENTRAR NA COMUNIDADE <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="mt-4 text-xs text-stone-500 uppercase tracking-widest font-medium flex items-center">
                                <Shield size={12} className="mr-1 text-orange-500" /> Acolhimento e Orientação Segura
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
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <ThermometerSun className="text-orange-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-orange-100">Vasomotores</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    Ondas de calor (fogachos), suores noturnos excessivos, palpitações e tonturas. Piora durante a noite, afetando o sono.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <BrainCircuit className="text-yellow-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-yellow-100">Neuropsiquiátricos</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    "Brain fog" (neblina mental), falhas de memória, irritabilidade, ansiedade repentina e alterações bruscas de humor.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <Leaf className="text-green-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-green-100">Físicos & Pele</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    Queda de cabelo, pele fina e seca, "boca ardente", olhos secos, dores musculares e câimbras frequentes.
                                </p>
                            </div>

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
                                "Nenhuma mulher merece passar por isso e se contentar. A medicina tem respostas, e eu vou te mostrar o caminho para viver a sua fase de forma plena."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. A Linha do Tempo */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-20">
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-2 block">Educação Médica</span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 px-2">Entenda onde você está</h2>
                            <p className="text-stone-500 mt-4 text-lg">Muitas mulheres confundem as fases. Saber o seu momento é crucial para o acolhimento.</p>
                        </div>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-orange-200 text-orange-800 font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg">1</div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-lg hover:shadow-xl transition-shadow md:group-odd:mr-auto md:group-even:ml-auto">
                                    <h3 className="font-bold text-stone-900 text-xl mb-2 flex flex-wrap items-center gap-2">Climatério <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full whitespace-nowrap">A Transição</span></h3>
                                    <p className="text-stone-600 leading-relaxed font-light">É o período de transição que engloba tudo. Muita gente confunde com menopausa, mas o climatério é a "janela" inteira de envelhecimento reprodutivo.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-orange-400 text-white font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg">2</div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-lg hover:shadow-xl transition-shadow md:group-odd:mr-auto md:group-even:ml-auto">
                                    <h3 className="font-bold text-stone-900 text-xl mb-2 flex flex-wrap items-center gap-2">Perimenopausa <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full whitespace-nowrap">Fase do Caos</span></h3>
                                    <p className="text-stone-600 leading-relaxed font-light">Oscilações hormonais imprevisíveis. Você ainda menstrua, mas o ciclo falha, o humor oscila e os sintomas começam a aparecer. É aqui que os erros de diagnóstico acontecem.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-red-600 text-white font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg">3</div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-lg hover:shadow-xl transition-shadow md:group-odd:mr-auto md:group-even:ml-auto border-l-4 border-l-red-500">
                                    <h3 className="font-bold text-stone-900 text-xl mb-2 flex flex-wrap items-center gap-2">Menopausa <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full whitespace-nowrap">O Evento</span></h3>
                                    <p className="text-stone-600 leading-relaxed font-light">Não é uma fase, é um marco: <strong>12 meses consecutivos sem menstruar</strong>. É o dia oficial em que seus ovários "se aposentam".</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-stone-700 text-white font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg">4</div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-lg hover:shadow-xl transition-shadow md:group-odd:mr-auto md:group-even:ml-auto">
                                    <h3 className="font-bold text-stone-900 text-xl mb-2 flex flex-wrap items-center gap-2">Pós-Menopausa <span className="text-xs bg-stone-200 text-stone-600 px-2 py-1 rounded-full whitespace-nowrap">Resto da Vida</span></h3>
                                    <p className="text-stone-600 leading-relaxed font-light">Níveis hormonais baixos e estáveis. Os sintomas agudos podem passar, mas os riscos silenciosos aumentam. O cuidado aqui é vitalício.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Authority */}
                <section className="py-24 bg-orange-50 relative overflow-hidden border-y border-orange-100">
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
                                    Diariamente, em seu consultório, ela trata mulheres que sofrem por falta de diagnóstico correto ou por medo infundado de tratamentos. A Comunidade Frequência Feminina é a compilação de tudo que você precisa saber para se libertar dessas dores.
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

                {/* 5. A Comunidade */}
                <section className="py-32 bg-stone-950 relative overflow-hidden">
                    {/* Background Ambience */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        {/* Header */}
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-bold uppercase tracking-widest text-xs mb-6 shadow-[0_0_15px_rgba(234,88,12,0.2)]">
                                Experiência Premium
                            </div>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight">
                                A Comunidade<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 italic font-serif pr-2">Por Dentro</span>
                            </h2>
                            <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                                Esqueça os cursos convencionais e grupos rasos. Criamos um ambiente <strong>desenvolvido com rigorosa base científica</strong>, com qualidade de cinema e navegação intuitiva para a sua melhor jornada de transformação.
                            </p>
                        </div>

                        {/* Central Image Showcase */}
                        <div className="relative max-w-5xl mx-auto mb-24 group perspective-1000">
                            {/* Animated Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-1000 animate-pulse-slow"></div>
                            
                            {/* Glass Frame */}
                            <div className="relative rounded-[2rem] bg-stone-900/60 p-2 md:p-4 border border-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:rotate-x-[2deg] hover:scale-[1.01]">
                                <div className="absolute top-4 left-6 flex gap-2 z-20 hidden md:flex">
                                    <div className="w-3 h-3 rounded-full bg-stone-600/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-stone-600/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-stone-600/50"></div>
                                </div>
                                
                                <div className="relative rounded-[1.5rem] overflow-hidden border border-white/5 bg-stone-950">
                                    <img 
                                        src="https://img.ampulloo.com/josiane_canali/comunidade/1.png" 
                                        alt="Plataforma Frequência Feminina por dentro" 
                                        className="w-full h-auto object-cover transform hover:scale-[1.03] transition-transform duration-1000"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bento Grid Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {/* Card 1 */}
                            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
                                <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5 text-orange-400 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
                                    <Heart size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-orange-300 transition-colors">O que é?</h3>
                                <p className="text-stone-400 text-sm leading-relaxed relative z-10">
                                    Uma jornada de 16 semanas com conteúdo de alto nível, estruturada com rigor médico para você se reconectar consigo mesma.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
                                <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5 text-orange-400 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
                                    <Smile size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-orange-300 transition-colors">Para quem é?</h3>
                                <p className="text-stone-400 text-sm leading-relaxed relative z-10">
                                    Para mulheres cansadas de respostas rasas, que precisam de orientação segura e apoio real frente às mudanças do corpo.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
                                <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5 text-orange-400 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
                                    <CheckCircle size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-orange-300 transition-colors">O que resolve?</h3>
                                <p className="text-stone-400 text-sm leading-relaxed relative z-10">
                                    O sentimento de "não ser mais eu". Traz clareza sobre o corpo, sintomas e direcionamento assertivo para tratamentos.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
                                <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5 text-orange-400 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
                                    <MessageCircle size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-orange-300 transition-colors">Como funciona?</h3>
                                <p className="text-stone-400 text-sm leading-relaxed relative z-10">
                                    Aulas cinematográficas, reflexões profundas, exercícios práticos e sessões de "Consultório Aberto" ao vivo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5.5 A Jornada de 16 Semanas */}
                <section className="py-24 bg-stone-950 relative overflow-hidden border-t border-stone-800">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row-reverse items-center gap-16">
                        
                        {/* Textos sobre as 16 Semanas */}
                        <div className="w-full lg:w-5/12">
                            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2 block">Cronologia Científica</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                A Jornada de 16 Semanas
                            </h2>
                            <div className="space-y-6 text-stone-400 font-light leading-relaxed text-lg">
                                <p>
                                    Cada semana da comunidade é desenhada como uma <strong>fogueira de conhecimento</strong>. Os temas seguem uma ordem lógica e progressiva para que você não apenas consuma conteúdo, mas construa uma base forte para se reconectar com seu corpo.
                                </p>
                                <ul className="space-y-5">
                                    <li className="flex items-start">
                                        <div className="bg-orange-500/10 p-2 rounded-full mr-4 shrink-0 mt-1">
                                            <TrendingUp className="text-orange-500" size={20} />
                                        </div>
                                        <div>
                                            <strong className="text-white block mb-1">Evolução Contínua</strong>
                                            <span className="text-sm">Passo a passo cientificamente guiado para mapear, entender e contornar cada um dos seus sintomas.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-orange-500/10 p-2 rounded-full mr-4 shrink-0 mt-1">
                                            <Sun className="text-orange-500" size={20} />
                                        </div>
                                        <div>
                                            <strong className="text-white block mb-1">Resultados Concretos</strong>
                                            <span className="text-sm">Os exercícios semanais são o mapa. Ao final da 16ª semana, a clareza e a vitalidade voltam a fazer parte de você.</span>
                                        </div>
                                    </li>
                                </ul>
                                <p className="pt-4 italic text-orange-200/80 font-serif text-xl border-l-2 border-orange-500/30 pl-4">
                                    "A transformação não acontece da noite para o dia. Acontece semana a semana."
                                </p>
                            </div>
                        </div>

                        {/* Imagem das 16 Semanas (Placeholder) */}
                        <div className="w-full lg:w-7/12 relative">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-400/20 blur-3xl rounded-full transform translate-x-10 translate-y-10"></div>
                            
                            <div className="relative p-2 bg-stone-900/50 rounded-[2.5rem] border border-stone-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:scale-[1.02] backdrop-blur-sm">
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-orange-500/50 to-red-600/50 opacity-20 blur rounded-[2.5rem]"></div>
                                
                                {/* Imagem Vertical das 16 Semanas */}
                                <img 
                                    src="https://img.ampulloo.com/josiane_canali/comunidade/2.jpg" 
                                    alt="Módulos da Jornada de 16 Semanas" 
                                    className="relative w-full h-auto object-cover rounded-[2rem] shadow-inner"
                                />
                            </div>
                        </div>

                    </div>
                </section>

                {/* 6. Identificação */}
                <section className="py-32 bg-stone-950 relative overflow-hidden border-t border-white/5">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-900/10 to-transparent pointer-events-none"></div>
                    
                    <div className="max-w-5xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Você se <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">identifica?</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Bloco 1 */}
                            <div className="relative p-10 rounded-[2.5rem] bg-gradient-to-br from-stone-900 to-stone-900/50 border border-white/5 shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors"></div>
                                <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center border border-white/10 mb-8 shadow-inner">
                                    <AlertTriangle className="w-8 h-8 text-orange-400" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Exausta</h3>
                                <p className="text-stone-400 text-lg font-light leading-relaxed">
                                    Acorda cansada, passa o dia se arrastando e sente que a memória está falhando. No fundo, uma voz diz que você "está ficando velha" rápido demais.
                                </p>
                            </div>

                            {/* Bloco 2 */}
                            <div className="relative p-10 rounded-[2.5rem] bg-gradient-to-br from-stone-900 to-stone-900/50 border border-white/5 shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors"></div>
                                <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center border border-white/10 mb-8 shadow-inner">
                                    <Flame className="w-8 h-8 text-red-400" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Em Chamas</h3>
                                <p className="text-stone-400 text-lg font-light leading-relaxed">
                                    Sofre com fogachos incontroláveis que atrapalham o trabalho, o sono e a vida social. Evita situações por puro medo do constrangimento de suar do nada.
                                </p>
                            </div>
                        </div>

                        <div className="mt-20 text-center max-w-3xl mx-auto">
                            <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10"></div>
                            <p className="text-2xl md:text-3xl text-stone-300 italic font-serif leading-relaxed">
                                "Independentemente da intensidade do seu sintoma, existe um caminho de volta para você mesma. E ele começa com <span className="text-orange-400 font-bold">conhecimento</span>."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. CHECKOUT / PRICING */}
                <section id="checkout" className="py-24 bg-gradient-to-br from-orange-50 to-white relative">
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        <div className="bg-stone-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>
                            
                            {/* Conteúdo Oferta */}
                            <div className="w-full p-10 md:p-16 relative z-10 text-center">
                                <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/50 bg-orange-500/10 text-orange-400 font-bold uppercase text-xs mb-6">
                                    Inscrições Abertas
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                    1ª Temporada:<br className="hidden md:block"/> Jornada de 16 Semanas
                                </h2>
                                
                                <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
                                    Não espere "passar" para voltar a viver bem. Faça parte da Comunidade Frequência Feminina e tenha o direcionamento e acolhimento que você merece.
                                </p>

                                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10 max-w-xl mx-auto backdrop-blur-sm">
                                    <p className="text-stone-400 font-bold uppercase tracking-widest text-sm mb-4">Investimento</p>
                                    
                                    <div className="flex flex-row justify-center items-baseline gap-1 sm:gap-2 mb-2 whitespace-nowrap">
                                        <span className="text-lg sm:text-xl md:text-2xl text-stone-400 font-medium">12x de</span>
                                        <span className="text-5xl sm:text-6xl md:text-7xl font-black text-orange-500 leading-none tracking-tight">R$ 59,88</span>
                                    </div>
                                    <p className="text-stone-400 text-lg">ou R$ 579,00 à vista</p>
                                </div>

                                <div className="max-w-md mx-auto">
                                    <a
                                        href="https://pay.kiwify.com.br/vouQr4v"
                                        target="_blank" rel="noopener noreferrer"
                                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-6 rounded-2xl transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_50px_rgba(234,88,12,0.5)] transform hover:scale-[1.02] flex items-center justify-center text-xl uppercase tracking-wide"
                                    >
                                        QUERO ENTRAR AGORA
                                    </a>
                                </div>

                                <div className="mt-8 flex items-center justify-center gap-6 text-stone-400 text-sm">
                                    <span className="flex items-center"><Shield size={16} className="text-green-500 mr-2" /> Pagamento 100% Seguro</span>
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
                                { q: "Já entrei na menopausa há anos, a comunidade ainda serve?", a: "Com certeza. A comunidade acolhe e orienta sobre todas as fases, incluindo a pós-menopausa, para que você proteja seu cérebro, ossos e coração." },
                                { q: "O conteúdo substitui uma consulta médica?", a: "Não. A comunidade é focada em educação em saúde e acolhimento. Ela te empodera com conhecimento para que você entenda seu corpo e possa discutir melhores opções com seu médico, mas não prescreve tratamentos individuais." },
                                { q: "Eu tenho acesso à comunidade para sempre?", a: "Você terá acesso completo a esta temporada por 6 meses para assistir, revisar todo o conteúdo no seu próprio ritmo e participar da comunidade." },
                                { q: "Como recebo o acesso?", a: "Imediatamente após a matrícula e confirmação do pagamento, você recebe um e-mail com as instruções para acessar a plataforma." }
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
                
                <footer className="bg-stone-950 py-12 border-t border-stone-900 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-stone-500 text-sm leading-relaxed mb-6">
                            <strong>Aviso Importante:</strong> A Comunidade Frequência Feminina é uma jornada educativa e de acolhimento. Ela <strong>não substitui consulta médica, diagnóstico, prescrição ou tratamento individual.</strong> O objetivo é oferecer informação, orientação geral e educação em saúde feminina.
                        </p>
                        <p className="text-stone-600 text-sm">
                            &copy; {new Date().getFullYear()} Comunidade Frequência Feminina. Todos os direitos reservados.
                        </p>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Comunidade;