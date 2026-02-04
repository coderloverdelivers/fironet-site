
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2847] via-[#243a5e] to-[#1a2847]">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(0,212,255,0.08),transparent_70%)] blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(0,180,255,0.06),transparent_70%)] blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-[#1a2d52]/60 backdrop-blur-sm border border-[#00d4ff]/30 rounded-full animate-fade-in">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.6)]"></div>
          <span className="text-sm font-semibold text-[#00d4ff] tracking-wide">Professionelle IT-Lösungen</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="block text-white mb-3">Willkommen bei</span>
          <span className="block bg-gradient-to-r from-[#00d4ff] via-[#00b8ff] to-[#0099ff] bg-clip-text text-transparent">
            FIRONET
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-[#d4dce8] mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Ihr zuverlässiger Partner für Server, Netzwerke, Smart Home und IT-Support in der Schweiz
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => scrollToSection('services')}
            className="group px-10 py-5 bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-white text-lg font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <span className="flex items-center gap-3">
              Dienstleistungen ansehen
              <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
            </span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-5 bg-[#1a2d52]/60 backdrop-blur-sm border-2 border-[#00d4ff]/40 text-[#00d4ff] text-lg font-bold rounded-xl hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Kontakt aufnehmen
          </button>
        </div>

        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a2d52]/40 backdrop-blur-sm border border-[#00d4ff]/20 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff]/30 to-[#0099ff]/20 border-2 border-[#1a2847] flex items-center justify-center">
                <i className="ri-user-line text-[#00d4ff] text-sm"></i>
              </div>
            ))}
          </div>
          <span className="text-base text-[#d4dce8] font-medium">Vertraut von 50+ lokalen Kunden</span>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('services')}
            className="flex flex-col items-center gap-2 text-[#00d4ff]/60 hover:text-[#00d4ff] transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium tracking-wide">Scrollen</span>
            <i className="ri-arrow-down-line text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-[#00d4ff]/20 rounded-2xl rotate-45 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-[#00d4ff]/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}
