import React, { useState } from 'react';
import { CheckCircle, Lock, AlertTriangle, Shield, Heart, Flame, BrainCircuit, ThermometerSun, ArrowRight, CornerUpLeft } from 'lucide-react';
import SEO from '../components/SEO';

const FrequenciaFeminina: React.FC = () => {
    const videoId = "uBoRw_-nD68"; // Vídeo gratuito YouTube

    const scrollToCheckout = () => {
        const element = document.getElementById('checkout');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Comunidade Frequência Feminina",
        "description": "Jornada online para mulheres viverem o climatério e a menopausa com mais clareza, leveza e cuidado.",
        "provider": {
            "@type": "Organization",
            "name": "Instituto Canali",
            "sameAs": "https://www.drajosianecanali.com.br"
        }
    };

    return (
        <div className="w-full overflow-x-hidden font-sans bg-orange-50/30 selection:bg-orange-500 selection:text-white">
            <SEO
                title="Frequência Feminina | Dra. Josiane Canali"
                description="Você mudou... e não é impressão sua. Uma jornada de 16 semanas para mulheres que querem viver melhor a menopausa."
                image="https://i.postimg.cc/26Q0fGqj/HDS-9361-2.jpg"
                url="https://www.drajosianecanali.com.br/frequencia-feminina"
                structuredData={courseSchema}
            />

            {/* BARRA FIXA */}
            <div className="fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 text-white h-[60px] shadow-2xl flex items-center px-2 sm:px-4 justify-between border-b bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 border-white/10">
                <a
                    href="/"
                    className="flex items-center text-white/80 hover:text-white hover:bg-white/10 p-2 pr-4 rounded-full transition-all group shrink-0"
                >
                    <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors mr-2">
                        <CornerUpLeft size={16} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Voltar</span>
                </a>

                <div className="flex items-center font-bold text-xs sm:text-sm tracking-wider uppercase">
                    Frequência Feminina
                </div>

                <div className="shrink-0">
                    <button
                        onClick={scrollToCheckout}
                        className="text-xs font-bold px-4 py-2 rounded-full transition-all shadow-lg transform hover:-translate-y-0.5 border bg-white text-orange-700 hover:bg-orange-50 border-orange-100"
                    >
                        Quero Entrar
                    </button>
                </div>
            </div>

            <div className="animate-fade-in-up pt-[60px]">
                {/* 1. Hero Section */}
                <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-orange-100/50 to-stone-50">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-300/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-200/30 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-300/50 bg-white/60 backdrop-blur-md mb-8 shadow-sm cursor-default">
                            <span className="text-orange-800 font-bold tracking-widest uppercase text-[10px] sm:text-xs">Jornada de 16 Semanas</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-stone-900 mb-8 leading-[1.1] tracking-tight text-balance">
                            Você mudou...<br className="hidden md:block" />
                            e <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">não é impressão sua.</span>
                        </h1>

                        <p className="text-stone-600 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
                            Você não precisa normalizar o sofrimento. Entenda seu corpo, acolha suas emoções e volte a se reconhecer nesta fase que precisa de tanto cuidado.
                        </p>

                        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-stone-900 shadow-2xl shadow-orange-900/10 border-4 border-white mb-12 transform hover:scale-[1.01] transition-transform duration-500">
                             <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="Vídeo Frequência Feminina"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="flex flex-col items-center">
                            <button
                                onClick={scrollToCheckout}
                                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all flex items-center justify-center group w-full max-w-md"
                            >
                                QUERO ENTRAR AGORA <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="mt-4 text-xs text-stone-500 uppercase tracking-widest font-medium flex items-center">
                                <Shield size={12} className="mr-1 text-orange-500" /> Acesso imediato
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Dores e Sofrimento */}
                <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                                Você não está louca.<br className="md:hidden" />
                                <span className="text-orange-500 italic font-serif">Você está exausta.</span>
                            </h2>
                            <p className="text-stone-400 text-lg max-w-3xl mx-auto font-light">
                                Você olha no espelho e já não reconhece a mulher que está lá. A irritação surge do nada, o cansaço é constante e as noites mal dormidas parecem nunca reparar as suas energias. A menopausa não precisa ser vivida no escuro.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <AlertTriangle className="text-orange-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-orange-100">Cansaço e Irritação</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    O pavio ficou curto. Pequenas coisas que antes você relevava agora são motivos para explosões emocionais. E junto disso, uma falta de energia devastadora que drena sua vida.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <BrainCircuit className="text-yellow-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-yellow-100">Desconexão com o Corpo</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    A libido desapareceu. O corpo mudou, a pele afinou, o cabelo cai e você sente uma desconexão profunda, como se morasse em uma casa que já não é mais familiar.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <ThermometerSun className="text-red-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 text-red-100">Sofrimento Silencioso</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    A insônia tomou conta. Calorões que te fazem transpirar em público ou te acordam no meio da noite. Você não quer mais "aguentar firme", você quer voltar a viver bem.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 bg-gradient-to-r from-orange-900/50 to-red-900/50 p-8 rounded-2xl border border-orange-500/30 text-center max-w-3xl mx-auto backdrop-blur-sm">
                            <p className="text-xl italic text-white font-serif">
                                "Quantas vezes você se sentiu sozinha no meio de tudo isso? Achando que era frescura sua ou que precisava apenas aceitar o envelhecimento? Você não precisa passar por essa fase sozinha."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. A Comunidade e o Sentimento */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16 px-4">
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-2 block">O Seu Acolhimento</span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                                Volte a se reconhecer
                            </h2>
                            <p className="text-stone-500 text-lg max-w-3xl mx-auto font-light">
                                A Comunidade Frequência Feminina não é apenas um curso. É um espaço seguro e humano onde você vai finalmente entender o que se passa dentro de você e encontrar os caminhos para o alívio.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0 text-orange-600">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2">Acolhimento e Clareza</h3>
                                        <p className="text-stone-600 font-light">Vamos nomear seus sintomas e tirar o peso da culpa. Entenda suas emoções e seu corpo com conversas francas e acolhedoras.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0 text-orange-600">
                                        <Flame size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2">Consciência Diária</h3>
                                        <p className="text-stone-600 font-light">Ao longo de 16 semanas, você constrói sua nova consciência sobre sono, libido e qualidade de vida no seu próprio ritmo, sem pressões.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-stone-50 rounded-[3rem] p-8 border border-stone-200 relative shadow-sm">
                                <div className="absolute top-4 left-4 text-orange-200">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                                    </svg>
                                </div>
                                <p className="relative z-10 text-stone-700 text-lg md:text-xl leading-relaxed font-light italic mt-6">
                                    "A transformação verdadeira acontece quando paramos de lutar contra o nosso corpo e passamos a entender o que ele está tentando nos dizer. Você não é mais a mesma... e isso pode ser incrível se você tiver a orientação certa."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Authority (Copiado da Menopausa) */}
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
                                    Diariamente, em seu consultório, ela trata mulheres que sofrem por falta de diagnóstico correto ou por medo infundado de tratamentos. A Frequência Feminina é a compilação desse olhar humano e médico, criado para acolher você.
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

                {/* 5. Checkout / Pricing */}
                <section id="checkout" className="py-24 bg-stone-900 relative">
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        <div className="bg-gradient-to-br from-stone-800 to-stone-950 rounded-[3rem] shadow-2xl overflow-hidden border border-stone-700/50 p-8 md:p-16 relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>
                            
                            <div className="text-center relative z-10 mb-10">
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                    Faça parte da 1ª Temporada
                                </h2>
                                <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                                    Você não precisa esperar "passar". Você não precisa normalizar tudo. Volte a se reconhecer com o apoio da Frequência Feminina.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-sm">
                                <div className="text-center">
                                    <p className="text-stone-400 mb-4 uppercase tracking-widest text-sm font-bold">Acesso Completo (16 Semanas)</p>
                                    
                                    <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-2 mb-4">
                                        <span className="text-2xl text-stone-400 font-medium mb-1 md:mb-2">12x de</span>
                                        <span className="text-7xl md:text-8xl font-black text-orange-500 leading-none">R$ 59,88</span>
                                    </div>
                                    <p className="text-stone-400 text-lg">ou R$ 579,00 à vista</p>
                                </div>
                                
                                <ul className="mt-10 space-y-3 max-w-md mx-auto">
                                    <li className="flex items-center text-stone-300 text-sm">
                                        <CheckCircle className="text-orange-500 w-5 h-5 mr-3 shrink-0" />
                                        <span>32 vídeos principais com a Dra. Josiane</span>
                                    </li>
                                    <li className="flex items-center text-stone-300 text-sm">
                                        <CheckCircle className="text-orange-500 w-5 h-5 mr-3 shrink-0" />
                                        <span>Lives de Consultório Aberto</span>
                                    </li>
                                    <li className="flex items-center text-stone-300 text-sm">
                                        <CheckCircle className="text-orange-500 w-5 h-5 mr-3 shrink-0" />
                                        <span>Exercícios e reflexões emocionais</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center relative z-10">
                                <a
                                    href="#"
                                    className="inline-flex w-full max-w-md bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-lg hover:shadow-orange-600/40 transform hover:-translate-y-1 text-xl items-center justify-center"
                                >
                                    QUERO ENTRAR NA COMUNIDADE
                                </a>
                                <div className="mt-6 flex flex-row items-center justify-center gap-6 text-stone-400 text-sm">
                                    <span className="flex items-center"><Shield size={16} className="text-green-500 mr-2" /> Pagamento Seguro</span>
                                    <span className="flex items-center"><Lock size={16} className="text-green-500 mr-2" /> Privacidade Garantida</span>
                                </div>
                            </div>
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

export default FrequenciaFeminina;
