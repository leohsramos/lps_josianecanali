import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ImersaoSuccess: React.FC = () => {
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        window.scrollTo(0, 0);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
            {/* Background Grain/Noise Subtil */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            <div
                className="max-w-2xl w-full text-center relative z-10"
            >
                <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-8 sm:mb-10 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                >
                    <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37]" strokeWidth={1.5} />
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6 uppercase">
                    Aplicação <span className="font-bold text-[#D4AF37]">Recebida</span>
                </h1>

                <p className="text-xl sm:text-2xl font-light text-stone-300 mb-8 sm:mb-12 leading-relaxed">
                    Parabéns por dar este importante primeiro passo na ascensão da sua carreira médica.
                </p>

                <div className="bg-[#111] border border-stone-800 p-8 sm:p-10 rounded-xl relative overflow-hidden group hover:border-[#D4AF37]/30 transition-colors duration-500 text-left">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-transparent opacity-80" />

                    <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                        <span className="w-8 h-px bg-[#D4AF37] block"></span>
                        Próximos Passos
                    </h2>

                    <p className="text-stone-400 font-light text-lg leading-relaxed mb-4">
                        A Dra. Josiane Canali fará uma análise criteriosa do seu perfil e das informações fornecidas para garantir que a Mentoria será o vetor exato de transformação para o seu consultório.
                    </p>

                    <p className="text-stone-400 font-light text-lg leading-relaxed">
                        Em até <strong className="text-white font-medium">24 horas</strong>, nossa equipe de gerência entrará em contato via WhatsApp para o alinhamento exclusivo.
                    </p>
                </div>

                <div className="mt-16 sm:mt-24">
                    <button
                        onClick={() => navigate('/imersao')}
                        className="inline-flex items-center gap-3 text-stone-500 hover:text-[#D4AF37] transition-colors duration-300 font-light tracking-widest uppercase text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar à página inicial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImersaoSuccess;
