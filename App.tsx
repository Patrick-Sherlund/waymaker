import { useState, useEffect } from 'react';
import { ModeProvider } from './contexts/ModeContext';
import { SplashPage } from './components/SplashPage';
import { SearchGroupPage } from './components/search-group/SearchGroupPage';
import { Navigation } from './components/Navigation';
import { ProgressRail } from './components/ProgressRail';
import { Hero } from './components/Hero';
import { WhyWayMaker } from './components/WhyWayMaker';
import { RolesWeOffer } from './components/RolesWeOffer';
import { Process } from './components/Process';
import { Founders } from './components/Founders';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState<'splash' | 'defense' | 'search'>('splash');
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'why', 'roles', 'process', 'founders', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnterDefense = () => {
    setCurrentPage('defense');
    window.scrollTo(0, 0);
  };

  const handleEnterSearch = () => {
    setCurrentPage('search');
    window.scrollTo(0, 0);
  };

  // Show splash page first
  if (currentPage === 'splash') {
    return <SplashPage onEnterDefense={handleEnterDefense} onEnterSearch={handleEnterSearch} />;
  }

  // Show Waymaker Search Group page
  if (currentPage === 'search') {
    return <SearchGroupPage onBackToSplash={() => setCurrentPage('splash')} />;
  }

  // Show main Waymaker Defense site
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0B0B10] to-[#050505] text-[#F9FAFB]">
      <ModeProvider>
        <Navigation onBackToSplash={() => setCurrentPage('splash')} />
        
        <main>
          <section id="overview">
            <Hero />
          </section>
          
          <section id="why">
            <WhyWayMaker />
          </section>
          
          <section id="roles">
            <RolesWeOffer />
          </section>
          
          <section id="process">
            <Process />
          </section>
          
          <section id="founders">
            <Founders />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </ModeProvider>
    </div>
  );
}