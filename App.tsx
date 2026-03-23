import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const ImersaoLP = React.lazy(() => import('./pages/ImersaoLP'));
const ImersaoLPTeste = React.lazy(() => import('./pages/ImersaoLPTeste'));
const ImersaoLP01 = React.lazy(() => import('./pages/ImersaoLP01'));
const ImersaoLP2 = React.lazy(() => import('./pages/ImersaoLP2'));
const ImersaoSuccess = React.lazy(() => import('./pages/ImersaoSuccess'));
const CourseSexualidade = React.lazy(() => import('./pages/CourseSexualidade'));
const CourseMenopausa = React.lazy(() => import('./pages/CourseMenopausa'));
const CourseCorpo = React.lazy(() => import('./pages/CourseCorpo'));
const Home = React.lazy(() => import('./pages/Home'));

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

                    {/* Imersão — com Meta Pixel 4214948072087892 */}
                    <Route path="/imersao" element={<ImersaoLP />} />
                    <Route path="/imersao/teste" element={<ImersaoLPTeste />} />
                    <Route path="/imersao01" element={<ImersaoLP01 />} />
                    <Route path="/imersao/sucesso" element={<ImersaoSuccess />} />

                    {/* Imersão LP2 */}
                    <Route path="/imersao2" element={<ImersaoLP2 />} />

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
