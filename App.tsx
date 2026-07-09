import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const ImersaoLP = React.lazy(() => import('./pages/ImersaoLP'));
const ImersaoLPTeste = React.lazy(() => import('./pages/ImersaoLPTeste'));
const ImersaoLPBackup = React.lazy(() => import('./pages/ImersaoLPBackup'));
const ImersaoLP01 = React.lazy(() => import('./pages/ImersaoLP01'));
const ImersaoLP2 = React.lazy(() => import('./pages/ImersaoLP2'));
const ImersaoSuccess = React.lazy(() => import('./pages/ImersaoSuccess'));
const CourseSexualidade = React.lazy(() => import('./pages/CourseSexualidade'));
const CourseMenopausa = React.lazy(() => import('./pages/CourseMenopausa'));
const CourseCorpo = React.lazy(() => import('./pages/CourseCorpo'));
const Home = React.lazy(() => import('./pages/Home'));
const Comunidade = React.lazy(() => import('./pages/Comunidade'));
const Comunidade1 = React.lazy(() => import('./pages/Comunidade1'));
const Comunidade2 = React.lazy(() => import('./pages/Comunidade2'));
const Comunidade3 = React.lazy(() => import('./pages/Comunidade3'));
const Comunidade4 = React.lazy(() => import('./pages/Comunidade4'));
const Comunidade5 = React.lazy(() => import('./pages/Comunidade5'));
const AulaMenopausa = React.lazy(() => import('./pages/AulaMenopausa'));

const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen bg-stone-950">
        <Loader2 className="w-8 h-8 text-[#D4AF37] animate-spin opacity-60" />
    </div>
);

const ScrollToTop = () => {
    const { pathname } = window.location;
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {/* Home — Seleção de LPs */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Comunidade Frequência Feminina LP */}
                    <Route path="/comunidade" element={<Comunidade />} />
                    {/* Variação de hero sem foto da Dra. Josi */}
                    <Route path="/comunidade-1" element={<Comunidade1 />} />
                    {/* Variação sem vídeo no hero */}
                    <Route path="/comunidade-2" element={<Comunidade2 />} />
                    {/* Variação editorial / conceito totalmente diferente */}
                    <Route path="/comunidade-3" element={<Comunidade3 />} />
                    {/* Variação mecanismo + comparação + carta da fundadora */}
                    <Route path="/comunidade-4" element={<Comunidade4 />} />
                    {/* Variação conversa de WhatsApp com a Dra. Josiane */}
                    <Route path="/comunidade-5" element={<Comunidade5 />} />

                    {/* Imersão — com Meta Pixel 4214948072087892 */}
                    <Route path="/imersao" element={<ImersaoLPTeste />} />
                    <Route path="/imersao1" element={<ImersaoLP />} />
                    <Route path="/imersao/backup" element={<ImersaoLPBackup />} />
                    <Route path="/imersao01" element={<ImersaoLP01 />} />
                    <Route path="/imersao/sucesso" element={<ImersaoSuccess />} />

                    {/* Imersão LP2 */}
                    <Route path="/imersao2" element={<ImersaoLP2 />} />

                    {/* Aula ao vivo e gratuita sobre Menopausa (5 de agosto) */}
                    <Route path="/aula-menopausa" element={<AulaMenopausa />} />

                    {/* Cursos */}
                    <Route path="/sexualidade" element={<CourseSexualidade />} />
                    <Route path="/menopausa" element={<CourseMenopausa />} />
                    <Route path="/anatomia" element={<CourseCorpo />} />

                    {/* Fallback */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
