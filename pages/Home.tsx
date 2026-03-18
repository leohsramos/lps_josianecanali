import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

interface LPCard {
    title: string;
    subtitle: string;
    description: string;
    href: string;
    tag: string;
    image: string;
    accentColor: string;
}

const lps: LPCard[] = [
    {
        title: 'Imersão',
        subtitle: 'O Fim da Dependência dos Convênios',
        description: 'Construa um consultório 100% particular e escale sua rentabilidade no high-ticket, sem sacrificar família ou paz mental.',
        href: '/imersao',
        tag: 'Exclusivo para Médicos',
        image: 'https://img.ampulloo.com/josiane_canali/imersao-hero.webp',
        accentColor: '#D4AF37',
    },
    {
        title: 'Imersão LP2',
        subtitle: 'Método Comprovado · Implant & Inject 360',
        description: 'A segunda via de acesso à imersão. Conteúdo idêntico ao original, com uma jornada de apresentação diferenciada.',
        href: '/imersao2',
        tag: 'Exclusivo para Médicos',
        image: 'https://img.ampulloo.com/josiane_canali/imersao-hero.webp',
        accentColor: '#D4AF37',
    },
    {
        title: 'Sexualidade',
        subtitle: 'Curso de Sexualidade Médica',
        description: 'Aprofunde-se no universo da medicina sexual com protocolos exclusivos e posicionamento premium para consultórios.',
        href: '/sexualidade',
        tag: 'Curso Online',
        image: 'https://img.ampulloo.com/josiane_canali/imersao-dra.webp',
        accentColor: '#c084fc',
    },
    {
        title: 'Menopausa',
        subtitle: 'Curso de Menopausa & Terapia Hormonal',
        description: 'Domine a terapia hormonal na menopausa e crie uma linha de receita recorrente altamente valorizada por pacientes.',
        href: '/menopausa',
        tag: 'Curso Online',
        image: 'https://img.ampulloo.com/josiane_canali/imersao-dra.webp',
        accentColor: '#f472b6',
    },
    {
        title: 'Anatomia do Corpo',
        subtitle: 'Curso de Anatomia Aplicada',
        description: 'Conteúdo avançado sobre anatomia corporal para médicos que desejam ampliar sua expertise clínica e cirúrgica.',
        href: '/anatomia',
        tag: 'Curso Online',
        image: 'https://img.ampulloo.com/josiane_canali/imersao-dra.webp',
        accentColor: '#34d399',
    },
];

const Home: React.FC = () => {
    return (
        <div className="min-h-screen w-full font-sans bg-[#080808] text-stone-100 overflow-hidden selection:bg-[#D4AF37] selection:text-black">
            <SEO
                title="Instituto Canali | Programas para Médicos"
                description="Selecione o programa do Instituto Josiane Canali ideal para você e transforme sua carreira médica."
                image="https://img.ampulloo.com/josiane_canali/imersao-hero.webp"
                url="https://lp.institutocanali.com"
            />

            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[180px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[180px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.025]" />
            </div>

            {/* Header */}
            <header className="relative z-10 flex justify-center pt-14 pb-2 px-6">
                <img
                    src="https://img.ampulloo.com/josiane_canali/logo-i%26i.webp"
                    alt="Instituto Canali"
                    className="h-12 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                    loading="eager"
                    decoding="async"
                />
            </header>

            {/* Hero text */}
            <div className="relative z-10 text-center px-6 pt-10 pb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#D4AF37]">Bem-vindo ao Instituto Canali</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                    Você pode estar{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
                        procurando por:
                    </span>
                </h1>
                <p className="text-stone-400 font-light text-base sm:text-lg max-w-xl mx-auto">
                    Selecione o programa que melhor se encaixa na sua jornada médica.
                </p>
            </div>

            {/* Cards grid */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lps.map((lp) => (
                        <Link
                            key={lp.href}
                            to={lp.href}
                            className="group relative flex flex-col rounded-2xl overflow-hidden border border-stone-800 bg-[#111] hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Image area */}
                            <div className="relative h-52 overflow-hidden bg-gradient-to-b from-stone-900 to-black flex-shrink-0">
                                <img
                                    src={lp.image}
                                    alt={lp.title}
                                    className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
                                {/* Tag badge */}
                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-sm">
                                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-stone-300">{lp.tag}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-6">
                                <div
                                    className="w-8 h-[2px] mb-4 rounded-full transition-all duration-300 group-hover:w-14"
                                    style={{ backgroundColor: lp.accentColor }}
                                />
                                <h2 className="text-xl font-black text-white uppercase tracking-tight mb-1">{lp.title}</h2>
                                <p
                                    className="text-xs font-bold uppercase tracking-widest mb-3"
                                    style={{ color: lp.accentColor }}
                                >
                                    {lp.subtitle}
                                </p>
                                <p className="text-stone-400 font-light text-sm leading-relaxed flex-grow">{lp.description}</p>

                                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-stone-300 group-hover:text-white transition-colors">
                                    <span>Acessar</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <div
                                className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                                style={{ backgroundColor: lp.accentColor }}
                            />
                        </Link>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 text-center py-8 border-t border-stone-800/50 text-stone-600 text-xs font-light">
                © {new Date().getFullYear()} Instituto Josiane Canali. Todos os direitos reservados.
            </footer>
        </div>
    );
};

export default Home;
