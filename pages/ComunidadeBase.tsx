import React, { useState } from 'react';
import { Check, ArrowRight, Play, Shield, Loader2, CheckCircle, Flame, ThermometerSun, Brain, Sparkles, HeartPulse, Smile, BookOpen, Users, Infinity as InfinityIcon, HelpCircle, Quote, Stethoscope, MessageCircle, PenLine } from 'lucide-react';
import SEO from '../components/SEO';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/vouQr4v';
// ATENÇÃO: troque pelo número real de atendimento da equipe (formato wa.me/55DDDNUMERO)
const WHATSAPP_URL = 'https://wa.me/5500000000000';

const DRA_JOSI_PHOTO = 'https://i.postimg.cc/26Q0fGqj/HDS-9361-2.jpg';
const VIDEO_THUMB = 'https://i.postimg.cc/dV8Yx0gw/CAPAS_DE_CURSO_10.png';

interface ComunidadeBaseProps {
    /** Exibe a foto da Dra. Josi no hero. */
    heroPhoto?: boolean;
    /** Exibe o vídeo de vendas no hero. */
    heroVideo?: boolean;
    /** URL canônica desta variação (para SEO). */
    canonicalUrl: string;
}

const ComunidadeBase: React.FC<ComunidadeBaseProps> = ({ heroPhoto = true, heroVideo = true, canonicalUrl }) => {
    const [playVideo, setPlayVideo] = useState(false);
    const videoId = 'uBoRw_-nD68';

    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Comunidade Frequência Feminina',
        description: 'Acesso direto à Dra. Josiane Canali, ginecologista especialista em menopausa, em encontros ao vivo, mais uma jornada de 16 semanas em vídeo e uma comunidade de mulheres na mesma fase.',
        provider: {
            '@type': 'Organization',
            name: 'Instituto Canali',
            sameAs: 'https://www.drajosianecanali.com.br'
        }
    };

    const scrollToCheckout = () => {
        const element = document.getElementById('checkout');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const greenBtn = 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-xl shadow-green-600/30 hover:shadow-green-500/50';

    // Conteúdo da Sessão 2 (Você se identifica) reescrito na linguagem da mulher.
    const sintomas = [
        {
            icon: <ThermometerSun className="w-8 h-8 text-orange-400" />,
            title: 'O calor que vem do nada',
            text: 'Você está numa reunião e, de repente, o suor escorre pela nuca. À noite, acorda com o lençol encharcado. O ar-condicionado vira refém da sua cama. Você evita roupas justas, evita situações sociais, evita o constrangimento de explicar que "não é nada, é só calor".'
        },
        {
            icon: <Loader2 className="w-8 h-8 text-yellow-400" />,
            title: 'O cansaço que dormir não resolve',
            text: 'Você dorme oito horas e acorda mais cansada do que deitou. Passa o dia se arrastando. No fim da tarde, parece que carregou pedra. Café não resolve. Açúcar não resolve. E uma voz no fundo diz que você está ficando velha rápido demais.'
        },
        {
            icon: <Brain className="w-8 h-8 text-purple-400" />,
            title: 'A memória que falha',
            text: 'Você entra num cômodo e esquece o que foi buscar. Esquece nomes. Trava no meio de uma frase. Lê a mesma página três vezes. E pensa, em silêncio: "isso é o começo de algo pior?"'
        },
        {
            icon: <HeartPulse className="w-8 h-8 text-red-400" />,
            title: 'As emoções fora do lugar',
            text: 'Você chora vendo propaganda. Explode com quem ama por motivo nenhum. A ansiedade chega sem aviso. O humor desliga e liga sozinho. Você não se reconhece, e quem vive com você também não.'
        },
        {
            icon: <Sparkles className="w-8 h-8 text-pink-400" />,
            title: 'O corpo que mudou de regra',
            text: 'A barriga apareceu sem você comer diferente. A pele ficou fina. O cabelo cai no banho. O sexo dói. A libido sumiu. Infecções urinárias viraram rotina. E ninguém te avisou que ia ser assim.'
        }
    ];

    // Sessão 4 (A Comunidade por dentro). Consultório Aberto é o primeiro entregável.
    const entregaveis = [
        {
            icon: <Stethoscope size={26} />,
            title: 'Consultório Aberto ao vivo com a Dra. Josi',
            tag: 'O coração da comunidade',
            text: 'Todo mês você entra num encontro ao vivo, faz a sua pergunta e recebe uma orientação pensada para o seu momento. Não é vídeo gravado, nem robô. É a Dra. Josiane do outro lado, te escutando de verdade.'
        },
        {
            icon: <BookOpen size={26} />,
            title: 'Aulas no seu ritmo, do seu jeito',
            tag: '16 semanas em vídeo',
            text: 'Aulas curtas e diretas, na ordem que faz sentido para o seu corpo. Você aprende a entender os seus exames e a conversar com qualquer médico de igual para igual.'
        },
        {
            icon: <PenLine size={26} />,
            title: 'Exercícios práticos para o dia a dia',
            tag: 'Simples de aplicar',
            text: 'Pequenas práticas guiadas para você colocar em ação no seu dia. São elas que transformam o que você aprende em mudança de verdade, semana após semana.'
        },
        {
            icon: <Users size={26} />,
            title: 'Mulheres que vivem o mesmo que você',
            tag: 'Sem julgamento',
            text: 'Um espaço fechado para trocar com quem entende de verdade o que você sente. Aqui ninguém minimiza a sua dor, e você se sente normal de novo.'
        },
        {
            icon: <InfinityIcon size={26} />,
            title: 'O conteúdo fica com você para sempre',
            tag: 'Sem prazo',
            text: 'Você entra uma vez e leva o conteúdo da temporada com você. Sem assinatura e sem pressa: pode rever sempre que precisar, no seu tempo.'
        }
    ];

    // Sessão 6 (Antes e Depois)
    const antesDepois = [
        { antes: 'Achar que está ficando louca.', depois: 'Entender exatamente o que está acontecendo no seu corpo e por quê.' },
        { antes: 'Sair de consulta sem resposta e com receita genérica.', depois: 'Conversar com o seu médico em pé de igualdade, sabendo o que perguntar.' },
        { antes: 'Sentir-se invisível para o sistema de saúde depois dos 40.', depois: 'Ter acesso direto a uma especialista em menopausa, ao vivo, todo mês.' },
        { antes: 'Carregar sozinha o medo de envelhecer mal.', depois: 'Estar numa comunidade de mulheres no mesmo momento, sem julgamento.' },
        { antes: 'Aceitar que essa é a sua vida agora.', depois: 'Voltar a dormir, voltar a desejar, voltar a se reconhecer no espelho.' }
    ];

    // Sessão 7 (Ancoragem de valor)
    const ancoragem = [
        { item: 'Consultório Aberto com a Dra. Josi, ao vivo e mensal', desc: 'Acesso direto a uma ginecologista especialista em menopausa, com respostas para o seu caso.', valor: 'R$ 3.800,00' },
        { item: 'Jornada de 16 semanas em vídeo', desc: 'Conteúdo organizado em ordem clínica para você entender corpo, exames e tratamentos.', valor: 'R$ 997,00' },
        { item: 'Comunidade fechada de mulheres', desc: 'Espaço de troca permanente com outras mulheres no mesmo momento de vida.', valor: 'R$ 600,00' },
        { item: 'Acesso permanente ao conteúdo da temporada', desc: 'Reveja quando quiser, no seu ritmo, sem prazo de expiração.', valor: 'R$ 400,00' }
    ];

    // Sessão 11 (FAQ)
    const faq = [
        { q: 'Eu já entrei na menopausa há anos. A comunidade ainda serve para mim?', a: 'Sim. A comunidade acolhe mulheres em todas as fases: climatério, perimenopausa, menopausa e pós-menopausa. Inclusive porque, depois da menopausa, os cuidados com cérebro, ossos e coração se tornam ainda mais importantes.' },
        { q: 'Isso substitui uma consulta médica?', a: 'Não. A comunidade é um espaço de educação em saúde e acolhimento. O Consultório Aberto te dá orientação geral e te prepara para fazer as perguntas certas, mas tratamento individual, exames e prescrição continuam sendo feitos no consultório, com o seu médico.' },
        { q: 'Quanto tempo eu tenho de acesso?', a: 'O conteúdo da 1ª temporada fica com você de forma permanente. A comunidade ativa e os Consultórios Abertos seguem enquanto a temporada estiver rolando, e quando a 2ª temporada abrir, você decide se quer continuar.' },
        { q: 'Como recebo o acesso?', a: 'Imediatamente após a confirmação do pagamento, você recebe um e-mail com as instruções de acesso à plataforma e ao grupo da comunidade.' },
        { q: 'Funciona se eu não moro no Brasil?', a: 'Sim. Os Consultórios Abertos são ao vivo e ficam gravados, então você assiste no horário que conseguir. A comunidade é online. Já temos mulheres em Portugal, Espanha, Estados Unidos, Peru e outros países.' }
    ];

    return (
        <div className="w-full overflow-x-hidden font-sans bg-orange-50/30 selection:bg-orange-500 selection:text-white">
            <SEO
                title="Comunidade Frequência Feminina | Dra. Josiane Canali"
                description="Você não tem que aceitar viver assim. Existe medicina por trás da menopausa, e uma médica do seu lado em encontros ao vivo. Conheça a Comunidade Frequência Feminina."
                image={VIDEO_THUMB}
                url={canonicalUrl}
                structuredData={courseSchema}
            />

            <div className="animate-fade-in-up">

                {/* SESSÃO 1 - HERO */}
                <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-[#FDFBF7]">
                    <div className="absolute bottom-[-20%] left-[-10%] w-[120%] h-[80%] bg-gradient-to-t from-orange-600/10 via-red-500/5 to-transparent blur-[120px] pointer-events-none animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[60%] bg-gradient-to-t from-yellow-500/10 via-orange-400/5 to-transparent blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

                    <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-300/50 bg-white/60 backdrop-blur-md mb-8 shadow-sm">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            <span className="text-orange-800 font-bold tracking-widest uppercase text-[10px] sm:text-xs">Comunidade Frequência Feminina</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-stone-900 mb-8 leading-[1.1] tracking-tight text-balance">
                            Você não tem que <br className="hidden md:block" />
                            aceitar viver assim. <br className="hidden md:block" />
                            Existe medicina por trás da <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">menopausa.</span>
                        </h1>

                        <p className="text-stone-600 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-6 leading-relaxed text-pretty">
                            E você não precisa atravessar isso sozinha. Aqui você conversa direto com a Dra. Josiane Canali, ginecologista especialista em menopausa, em encontros ao vivo. As suas dúvidas são ouvidas e respondidas, pelo seu nome, com a ciência mais atual.
                        </p>
                        <p className="text-stone-700 text-base md:text-xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
                            Se você anda exausta, com calorões, sem libido e sem dormir, e já tentou de tudo, é aqui que o seu corpo finalmente vai ser levado a sério.
                        </p>

                        {/* Vídeo (variação heroVideo) */}
                        {heroVideo && (
                            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-orange-900/10 border-4 border-white group mb-10 transform hover:scale-[1.01] transition-transform duration-500">
                                {!playVideo ? (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-stone-100" onClick={() => setPlayVideo(true)}>
                                        <img src={VIDEO_THUMB} alt="Vídeo da Comunidade Frequência Feminina" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" loading="lazy" decoding="async" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent"></div>
                                        <div className="relative z-10 w-24 h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/60 shadow-[0_0_40px_rgba(255,165,0,0.4)] group-hover:scale-110 transition-transform duration-300">
                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                                <Play className="w-6 h-6 text-orange-600 fill-orange-600 ml-1" />
                                            </div>
                                        </div>
                                        <p className="relative z-10 mt-6 text-white font-bold text-sm tracking-[0.2em] uppercase drop-shadow-md bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">Assista ao vídeo</p>
                                    </div>
                                ) : (
                                    <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Vídeo de Vendas" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                )}
                            </div>
                        )}

                        {/* Foto da Dra. Josi (variação heroPhoto) */}
                        {heroPhoto && (
                            heroVideo ? (
                                // Quando há vídeo, a foto entra como cartão de credibilidade compacto.
                                <div className="inline-flex items-center gap-4 bg-white border border-orange-100 rounded-full pl-2 pr-6 py-2 shadow-lg mb-10">
                                    <img src={DRA_JOSI_PHOTO} alt="Dra. Josiane Canali" className="w-14 h-14 rounded-full object-cover object-top border-2 border-orange-200" loading="lazy" decoding="async" />
                                    <div className="text-left">
                                        <p className="text-stone-900 font-bold text-sm leading-tight">Quem fala com você: Dra. Josiane Canali</p>
                                        <p className="text-stone-500 text-xs leading-tight">Ginecologista especialista em menopausa</p>
                                    </div>
                                </div>
                            ) : (
                                // Sem vídeo, a foto vira a mídia principal do hero.
                                <div className="relative w-full max-w-md mx-auto mb-10">
                                    <div className="absolute inset-0 bg-white rounded-[2.5rem] rotate-3 transform translate-y-3 shadow-lg"></div>
                                    <img src={DRA_JOSI_PHOTO} alt="Dra. Josiane Canali, ginecologista especialista em menopausa" className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5]" loading="lazy" decoding="async" />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full shadow-md whitespace-nowrap">
                                        <p className="text-stone-900 font-bold text-sm">Dra. Josiane Canali</p>
                                    </div>
                                </div>
                            )
                        )}

                        <div className="flex flex-col items-center">
                            <button onClick={scrollToCheckout} className={`${greenBtn} px-12 py-5 rounded-full font-bold text-lg md:text-xl hover:-translate-y-1 transition-all flex items-center justify-center group`}>
                                QUERO ENTRAR NA COMUNIDADE <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="mt-4 text-xs text-stone-500 uppercase tracking-widest font-medium flex items-center">
                                <Shield size={12} className="mr-1 text-green-600" /> Acolhimento e orientação segura
                            </p>
                        </div>
                    </div>
                </section>

                {/* SESSÃO 2 - VOCÊ SE IDENTIFICA */}
                <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                                Você acorda e <span className="text-orange-500 italic font-serif">não se reconhece</span> mais?
                            </h2>
                            <p className="text-stone-300 text-xl max-w-2xl mx-auto font-medium">
                                Não é frescura. Não é idade. Não é da sua cabeça.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sintomas.map((s, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                    <div className="mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-orange-100">{s.title}</h3>
                                    <p className="text-stone-400 text-sm leading-relaxed">{s.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-gradient-to-r from-orange-900/50 to-red-900/50 p-8 rounded-2xl border border-orange-500/30 text-center max-w-3xl mx-auto backdrop-blur-sm">
                            <p className="text-xl italic text-white font-serif">
                                "Nenhuma mulher merece passar por isso e se contentar. A medicina tem respostas, e eu vou te mostrar o caminho para viver a sua fase de forma plena."
                            </p>
                        </div>
                    </div>
                </section>

                {/* SESSÃO 3 - DPS (Dor, Problema, Solução) */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-2 block">A verdade que poucos dizem</span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 leading-tight">
                                Por que você ainda está sofrendo, mesmo já tendo procurado ajuda
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                            <p>Se você chegou até aqui, essa provavelmente não é a primeira vez que você tenta resolver isso.</p>
                            <p>Você já ouviu que "é da idade e vai passar". Já tomou anticoncepcional "pra regular". Já tentou chá, suplemento, dieta, ioga. E, em algum momento, já pensou em desistir e aceitar que a sua vida vai ser assim daqui pra frente.</p>

                            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-2xl">
                                <p className="font-bold text-stone-900 text-xl mb-2">Mas existe uma verdade que poucos te contam:</p>
                                <p>A menopausa não é uma fase que você atravessa sozinha esperando passar. Ela mexe com o seu sono, o seu humor, os seus ossos, a sua pele e a sua cabeça, tudo ao mesmo tempo. E o que você sente não é "normal da idade": é o seu corpo pedindo um cuidado feito para você.</p>
                            </div>

                            <p>O problema é que a maioria dos médicos foi formada para cuidar de mulheres em idade fértil. Quando você sai dessa fase, muitos simplesmente não sabem o que fazer, e você acaba saindo do consultório com a sensação de que ninguém te escutou de verdade.</p>

                            <div className="bg-stone-900 text-white p-8 rounded-3xl mt-8">
                                <p className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-3">A solução</p>
                                <p className="text-2xl font-display font-bold mb-4">Tem um nome simples e raro: acesso.</p>
                                <p className="text-stone-300 font-light">Acesso a uma médica que escuta, que responde e que entende que o seu corpo e a sua história são únicos. É exatamente isso que a Comunidade Frequência Feminina coloca na sua mão.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SESSÃO 4 - A COMUNIDADE POR DENTRO */}
                <section className="py-28 bg-stone-950 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-bold uppercase tracking-widest text-xs mb-6">
                                A Comunidade por dentro
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                                O que você recebe ao entrar
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {entregaveis.map((e, i) => (
                                <div key={i} className={`bg-white/5 p-8 rounded-[2rem] border transition-all duration-300 group relative overflow-hidden backdrop-blur-sm ${i === 0 ? 'border-orange-500/50 bg-orange-500/5 md:col-span-2' : 'border-white/10 hover:border-orange-500/40 hover:bg-white/10'}`}>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
                                    <div className="flex items-start gap-5 relative z-10">
                                        <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center border border-white/5 text-orange-400 shrink-0 shadow-lg">
                                            {e.icon}
                                        </div>
                                        <div>
                                            <span className="text-orange-400 font-bold uppercase tracking-widest text-[10px] block mb-1">{e.tag}</span>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{e.title}</h3>
                                            <p className="text-stone-400 leading-relaxed">{e.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SESSÃO 5 - PROVA SOCIAL */}
                <section className="py-24 bg-orange-50 border-y border-orange-100">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-4">Mulheres como você</h2>
                            <p className="text-stone-500 text-lg max-w-2xl mx-auto">Histórias de quem já esteve exatamente onde você está hoje.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* TODO equipe: substituir pelos depoimentos reais (vídeo ou print) antes de subir a página. */}
                            {[
                                'Voltei a dormir a noite inteira e os calorões quase sumiram. Pela primeira vez em meses, me sinto eu de novo.',
                                'Eu achava que estava ficando louca de tanto esquecimento e choro. Entender o que estava acontecendo me deu paz.',
                                'Foi a primeira vez que uma médica me escutou de verdade e respondeu o que eu precisava saber.'
                            ].map((depoimento, i) => (
                                <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 flex flex-col">
                                    <Quote className="w-10 h-10 text-orange-300 mb-4" />
                                    <p className="text-stone-600 italic leading-relaxed flex-1">"{depoimento}"</p>
                                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-stone-100">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-400 font-bold">
                                            <Smile size={22} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-stone-700 text-sm">Aluna da Comunidade</p>
                                            <p className="text-stone-400 text-xs">Frequência Feminina</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SESSÃO 6 - ANTES E DEPOIS */}
                <section className="py-24 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-4">O que muda quando você entra</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="text-center mb-2">
                                    <span className="inline-block px-5 py-2 rounded-full bg-stone-100 text-stone-500 font-bold uppercase tracking-widest text-xs">Antes</span>
                                </div>
                                {antesDepois.map((row, i) => (
                                    <div key={i} className="bg-stone-50 border border-stone-100 rounded-2xl p-5 text-stone-600 font-light min-h-[88px] flex items-center">
                                        {row.antes}
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4">
                                <div className="text-center mb-2">
                                    <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-bold uppercase tracking-widest text-xs">Depois</span>
                                </div>
                                {antesDepois.map((row, i) => (
                                    <div key={i} className="bg-green-50 border border-green-100 rounded-2xl p-5 text-stone-800 font-medium min-h-[88px] flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-600 shrink-0" />
                                        {row.depois}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SESSÃO 7 - ANCORAGEM DE VALOR */}
                <section className="py-24 bg-stone-950 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                    <div className="max-w-3xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Tudo que está incluso</h2>
                            <p className="text-stone-400 text-lg">Antes de você ver o preço, veja o que está dentro.</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            {ancoragem.map((row, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-bold">{row.item}</p>
                                            <p className="text-stone-400 text-sm font-light">{row.desc}</p>
                                        </div>
                                    </div>
                                    <span className="text-orange-400 font-bold text-lg whitespace-nowrap sm:text-right pl-10 sm:pl-0">{row.valor}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-2xl p-6 flex items-center justify-between">
                            <span className="text-white font-bold uppercase tracking-widest text-sm">Valor total</span>
                            <span className="text-white font-black text-2xl md:text-3xl">R$ 5.797,00</span>
                        </div>
                    </div>
                </section>

                {/* SESSÃO 8 - OFERTA E CTA */}
                <section id="checkout" className="py-24 bg-gradient-to-br from-orange-50 to-white relative">
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        <div className="bg-stone-900 rounded-[3rem] shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>

                            <div className="w-full p-10 md:p-16 relative z-10 text-center">
                                <div className="flex flex-col items-center gap-3 mb-6">
                                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                                        <Flame size={14} className="shrink-0" />
                                        Oferta de lançamento, 1ª temporada
                                        <Flame size={14} className="shrink-0" />
                                    </div>
                                    <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/50 bg-orange-500/10 text-orange-400 font-bold uppercase text-xs">
                                        Turma fundadora
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                    Entre pelo menor valor <br className="hidden md:block" /> que esta oferta vai ter
                                </h2>

                                <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
                                    Este é o valor de quem entra agora, na primeira turma. Nas próximas temporadas, o preço sobe. Entrando hoje, você garante o menor valor que esta oferta vai ter.
                                </p>

                                <div className="relative bg-white/5 border border-amber-500/30 rounded-3xl p-8 mb-10 max-w-xl mx-auto backdrop-blur-sm shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                                        90% de desconto
                                    </div>

                                    <div className="flex items-center justify-center gap-2 mb-3 mt-2">
                                        <span className="text-stone-500 text-sm uppercase tracking-widest">De</span>
                                        <span className="text-stone-500 text-2xl font-bold line-through decoration-red-500 decoration-2">R$ 5.797</span>
                                    </div>

                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <span className="text-stone-400 text-base uppercase tracking-widest">Por apenas</span>
                                    </div>
                                    <div className="flex flex-row justify-center items-baseline gap-1 sm:gap-2 mb-3 whitespace-nowrap">
                                        <span className="text-lg sm:text-xl md:text-2xl text-stone-300 font-medium">12x de</span>
                                        <span className="text-5xl sm:text-6xl md:text-7xl font-black text-orange-500 leading-none tracking-tight drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]">R$ 59,88</span>
                                    </div>
                                    <p className="text-stone-300 text-lg font-semibold">ou <span className="text-white">R$ 579,00</span> à vista</p>
                                </div>

                                <div className="max-w-md mx-auto">
                                    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={`${greenBtn} w-full font-bold py-6 rounded-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center text-xl uppercase tracking-wide`}>
                                        QUERO ENTRAR AGORA
                                    </a>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-stone-400 text-sm">
                                    <span className="flex items-center"><Shield size={16} className="text-green-500 mr-2" /> Pagamento 100% seguro</span>
                                    <span className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Acesso imediato após a confirmação</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SESSÃO 9 - GARANTIA */}
                <section className="py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="bg-green-50 border-2 border-green-200 rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border border-green-100">
                                <Shield className="w-10 h-10 text-green-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6">7 dias para experimentar sem risco</h2>
                            <div className="space-y-4 text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
                                <p>Você tem 7 dias a partir da matrícula para acessar a comunidade, participar de um Consultório Aberto, assistir as primeiras aulas e sentir se este é o lugar para você.</p>
                                <p>Se em qualquer momento desses 7 dias você sentir que não é, basta chamar nossa equipe no WhatsApp. Devolvemos cada centavo. Sem perguntas, sem formulário, sem burocracia.</p>
                                <p className="font-bold text-stone-900 text-xl">O risco é nosso, não seu.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SESSÃO 10 - BIO DA DRA. JOSI */}
                <section className="py-24 bg-orange-50 relative overflow-hidden border-y border-orange-100">
                    <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-white rounded-[3rem] rotate-3 transform translate-y-4 shadow-lg"></div>
                            <img src={DRA_JOSI_PHOTO} alt="Dra. Josiane Canali" className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[3/4]" loading="lazy" decoding="async" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1 bg-white text-orange-700 rounded-full font-bold text-xs uppercase tracking-widest mb-6 border border-orange-200 shadow-sm">
                                Quem é a Dra. Josiane Canali
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6">Dra. Josiane Canali</h2>
                            <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                                <p>
                                    Ginecologista, especialista em menopausa e longevidade hormonal. Atende em consultório próprio mulheres que chegam, na maioria das vezes, depois de já terem passado por outros profissionais sem resposta.
                                </p>
                                <p>
                                    Acredita em uma frase simples e incômoda: o envelhecimento é inevitável, mas o declínio é opcional. E que cada mulher tem direito a uma medicina que olhe para ela como indivíduo, não como estatística.
                                </p>
                                <div className="bg-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-sm">
                                    <p className="font-serif italic text-stone-800 text-xl">
                                        "A Comunidade Frequência Feminina é a compilação de tudo que eu ensino, semana após semana, no consultório, agora num formato em que eu posso alcançar muito mais mulheres do que caberia na minha agenda."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SESSÃO 11 - FAQ */}
                <section className="py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold text-stone-900 mb-4">Antes de decidir, talvez você esteja se perguntando</h2>
                        </div>

                        <div className="space-y-4">
                            {faq.map((item, i) => (
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

                {/* SESSÃO 12 - CTA FINAL */}
                <section className="py-28 bg-stone-950 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                    <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                            Você não tem que aceitar viver assim.
                        </h2>
                        <p className="text-stone-300 text-xl md:text-2xl font-light mb-12 leading-relaxed">
                            A medicina tem resposta. A Dra. Josi tem resposta. E essa resposta está a um clique de distância.
                        </p>
                        <div className="flex flex-col items-center">
                            <button onClick={scrollToCheckout} className={`${greenBtn} px-12 py-6 rounded-full font-bold text-lg md:text-2xl hover:-translate-y-1 transition-all flex items-center justify-center group`}>
                                QUERO ENTRAR NA COMUNIDADE <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 text-stone-400 hover:text-green-400 transition-colors flex items-center gap-2 text-sm">
                                <MessageCircle size={16} /> Ainda em dúvida? Chame nossa equipe no WhatsApp.
                            </a>
                        </div>
                    </div>
                </section>

                <footer className="bg-stone-950 py-12 border-t border-stone-900 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-stone-500 text-sm leading-relaxed mb-6">
                            <strong>Aviso importante:</strong> A Comunidade Frequência Feminina é uma jornada educativa e de acolhimento. Ela <strong>não substitui consulta médica, diagnóstico, prescrição ou tratamento individual.</strong> O objetivo é oferecer informação, orientação geral e educação em saúde feminina.
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

export default ComunidadeBase;
