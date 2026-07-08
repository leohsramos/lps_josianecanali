import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import ForYouSection from './components/ForYouSection';
import ExclusivityBox from './components/ExclusivityBox';
import WhatYouGet from './components/WhatYouGet';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-carvao">
      <AnnouncementBar />
      <main>
        <Hero />
        <WhatYouWillLearn />
        <ForYouSection />
        <ExclusivityBox />
        <WhatYouGet />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
