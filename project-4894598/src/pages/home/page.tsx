
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#1a2847] text-[#e8edf5] min-h-screen overflow-x-hidden relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a2847] via-[#243a5e] to-[#1a2847] animate-gradient"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(0,212,255,0.06),transparent_70%)] blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(0,180,255,0.05),transparent_70%)] blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero isVisible={isVisible} />
        <Services isVisible={isVisible} />
        <Technologies isVisible={isVisible} />
        <About isVisible={isVisible} />
        <Contact isVisible={isVisible} />
        <Footer />
      </div>
    </div>
  );
}
