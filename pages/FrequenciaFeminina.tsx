import React, { useState, useEffect } from 'react';
import { CheckCircle, Heart, Moon, Smile, ShieldCheck, Lock, PlayCircle, Star, ArrowRight, Video, Calendar, BookOpen, MessageCircle } from 'lucide-react';

const CheckoutLink = "https://checkout.perfectpay.com.br/pay/PPU38CQ9IQB"; // Placeholder ou real if known, using a placeholder if not provided

const FrequenciaFeminina: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToCheckout = () => {
        const element = document.getElementById('checkout-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-[#D4AF37] selection:text-stone-950">
            {/* Header / Hero Section */}
            <header className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden px-4">
                <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-sm">
                            <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">1ª Temporada: Jornada de 16 Semanas</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Você mudou… e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-rose-400">não é impressão sua.</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            A Frequência Feminina é uma jornada de 16 semanas para mulheres que estão vivendo o climatério ou a menopausa e querem entender melhor o corpo, as emoções, o sono, a libido e essa nova fase da vida.
                        </p>
                    </div>

                    {/* Video Area */}
                    <div className={`w-full max-w-3xl mx-auto mt-8 relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="aspect-video bg-stone-900 relative">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/uBoRw_-nD68?si=Z6W5rYqg0oO9qBZb&autoplay=0" 
                                title="Frequência Feminina Video" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                    
                    <div className={`mt-12 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <button 
                            onClick={scrollToCheckout}
                            className="bg-gradient-to-r from-[#D4AF37] to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-stone-950 text-lg md:text-xl font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center mx-auto"
                        >
                            Quero entrar na Frequência Feminina
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <p className="text-stone-500 text-sm mt-4 flex items-center justify-center gap-2">
                            <Lock className="w-4 h-4" /> Pagamento 100% seguro e acesso imediato
                        </p>
                    </div>
                </div>
            </header>

            {/* Pain Points / Identification Section */}
            <section className="py-20 bg-stone-900 border-y border-stone-800 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            Para quem é a Frequência Feminina?
                        </h2>
                        <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                            Essa comunidade é para você que sente que algo mudou no seu corpo, no humor, no sono, na libido ou na forma como se enxerga. É para você que quer entender essa fase com mais carinho, sem se sentir julgada, perdida ou sozinha.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Moon className="text-rose-400" />, text: "Vive cansaço constante, irritação ou insônia." },
                            { icon: <Heart className="text-rose-400" />, text: "Sente queda na libido ou desconexão com o próprio corpo." },
                            { icon: <Smile className="text-rose-400" />, text: "Quer viver essa fase com mais consciência e leveza." },
                            { icon: <CheckCircle className="text-[#D4AF37]" />, text: "Está confusa sobre climatério, menopausa ou pós-menopausa." },
                            { icon: <MessageCircle className="text-[#D4AF37]" />, text: "Quer entender os sintomas com mais clareza." },
                            { icon: <Star className="text-[#D4AF37]" />, text: "Quer se sentir acolhida e menos sozinha nessa jornada." },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-stone-950 border border-stone-800 hover:border-stone-700 transition-colors">
                                <div className="mt-1 bg-stone-900 p-2 rounded-full">
                                    {item.icon}
                                </div>
                                <p className="text-stone-300 text-lg leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables Section */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="absolute top-40 left-0 w-72 h-72 bg-rose-900/10 rounded-full blur-3xl" />
                
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            O que você vai encontrar dentro da Comunidade?
                        </h2>
                        <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                            Ao entrar na 1ª Temporada, você recebe acesso a uma jornada completa de 16 semanas, com 32 conteúdos principais, exercícios semanais e encontros de dúvidas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Conteúdos Semanais Gravados", desc: "Vídeos curtos, diretos e acolhedores, com linguagem simples, como se a Dra. estivesse conversando com você.", icon: <Video className="w-8 h-8 text-[#D4AF37]" /> },
                            { title: "Reflexões Emocionais", desc: "Cada semana traz uma reflexão para ajudar você a olhar para si mesma com mais cuidado e menos julgamento.", icon: <Heart className="w-8 h-8 text-[#D4AF37]" /> },
                            { title: "Conteúdos Práticos", desc: "Explicações simples sobre sintomas, sono, libido, exames, emoções, longevidade e saúde feminina.", icon: <BookOpen className="w-8 h-8 text-[#D4AF37]" /> },
                            { title: "Exercícios Semanais", desc: "Uma tarefa, quiz ou checklist para ajudar a aplicar o conteúdo na própria vida e gerar consciência real.", icon: <CheckCircle className="w-8 h-8 text-[#D4AF37]" /> },
                            { title: "Consultório Aberto", desc: "Encontros para dúvidas e orientações gerais. As lives são gravadas e ficam disponíveis na plataforma.", icon: <MessageCircle className="w-8 h-8 text-[#D4AF37]" /> },
                            { title: "No seu próprio ritmo", desc: "Todo o conteúdo fica organizado na plataforma para você assistir de onde quiser e quando puder.", icon: <Calendar className="w-8 h-8 text-[#D4AF37]" /> },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-stone-900 border border-stone-800 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-6 bg-stone-950 inline-block p-4 rounded-2xl border border-stone-800">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-stone-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Grid */}
            <section className="py-20 bg-stone-900 border-y border-stone-800 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-4 block">A Estrutura</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            A Jornada de 16 Semanas
                        </h2>
                        <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                            Cada semana foi pensada para conduzir você em uma evolução real. Veja o que preparamos:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { num: 1, title: "Boas-vindas e Consciência" },
                            { num: 2, title: "Aprendendo a Ler Seu Corpo" },
                            { num: 3, title: "Consultório Aberto" },
                            { num: 4, title: "Sintomas e Autoavaliação" },
                            { num: 5, title: "Entendendo Seu Resultado" },
                            { num: 6, title: "Sono: A Base de Tudo" },
                            { num: 7, title: "Sono e Libido" },
                            { num: 8, title: "Consultório Aberto" },
                            { num: 9, title: "Conhecendo Seu Corpo" },
                            { num: 10, title: "Sexualidade" },
                            { num: 11, title: "Relacionamento" },
                            { num: 12, title: "Consultório Aberto" },
                            { num: 13, title: "Longevidade" },
                            { num: 14, title: "Emoções" },
                            { num: 15, title: "Realidade" },
                            { num: 16, title: "Encerramento" },
                        ].map((module) => (
                            <div key={module.num} className="bg-stone-950 border border-stone-800 p-6 rounded-2xl flex flex-col hover:border-[#D4AF37]/50 transition-colors">
                                <span className="text-stone-500 font-medium mb-2 text-sm">Semana {module.num}</span>
                                <h4 className="text-white font-bold text-lg">{module.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offer / Pricing Section */}
            <section id="checkout-section" className="py-24 px-4 relative">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="max-w-3xl mx-auto">
                    <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        
                        <div className="text-center mb-10 relative z-10">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Faça parte da 1ª Temporada
                            </h2>
                            <p className="text-lg text-stone-400">
                                Você não precisa esperar “passar”. Você não precisa normalizar tudo. Você não precisa viver essa fase sozinha.
                            </p>
                        </div>

                        <div className="bg-stone-950/50 border border-stone-800 rounded-2xl p-8 mb-8 relative z-10">
                            <div className="mb-6 pb-6 border-b border-stone-800">
                                <h3 className="text-xl text-white font-semibold mb-4">O que está incluído:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "16 semanas de jornada guiada",
                                        "32 vídeos principais com a Dra.",
                                        "1 exercício prático por semana",
                                        "Lives de Consultório Aberto",
                                        "Acesso completo à plataforma gravada",
                                        "Liberdade para assistir no próprio ritmo",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-stone-300">
                                            <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-center">
                                <p className="text-stone-400 mb-2">Investimento:</p>
                                <div className="flex justify-center items-end gap-2 mb-2">
                                    <span className="text-2xl text-stone-400 font-medium">12x de</span>
                                    <span className="text-5xl md:text-6xl font-bold text-[#D4AF37]">R$59,88</span>
                                </div>
                                <p className="text-stone-500">ou R$579 à vista</p>
                            </div>
                        </div>

                        <div className="text-center relative z-10">
                            <button 
                                onClick={() => window.location.href = CheckoutLink}
                                className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-stone-950 text-xl font-bold py-5 px-8 rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                            >
                                Quero começar minha jornada
                            </button>
                            
                            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-stone-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-green-500" />
                                    <span>Pagamento Seguro</span>
                                </div>
                                <div className="hidden md:block w-1 h-1 bg-stone-700 rounded-full"></div>
                                <div className="flex items-center gap-2">
                                    <Lock className="w-5 h-5 text-green-500" />
                                    <span>Seus dados protegidos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Disclaimer */}
            <footer className="bg-stone-950 py-12 border-t border-stone-900 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-6">
                        <strong>Aviso Importante:</strong> A Comunidade Frequência Feminina é uma jornada educativa e de acolhimento. Ela <strong>não substitui consulta médica, diagnóstico, prescrição ou tratamento individual.</strong> O objetivo é oferecer informação, orientação geral e educação em saúde feminina. Para condutas individuais, exames ou tratamentos, é necessário passar por consulta médica.
                    </p>
                    <p className="text-stone-600 text-sm">
                        &copy; {new Date().getFullYear()} Comunidade Frequência Feminina. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default FrequenciaFeminina;
