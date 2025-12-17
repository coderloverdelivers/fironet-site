import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Dienstleistungen', href: '#services' },
    { label: 'Fähigkeiten', href: '#technologies' },
    { label: 'Über mich', href: '#about' },
    { label: 'Kontakt', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0e27]/95 backdrop-blur-xl border-b border-[#00d4ff]/20 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#0099ff] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all duration-300">
              <i className="ri-server-line text-xl text-white"></i>
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
              FIRONET
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-5 py-2.5 text-base font-medium text-[#c5d0e3] hover:text-white hover:bg-[#131b3a]/60 rounded-xl transition-all duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-7 py-3 bg-gradient-to-r from-[#00d4ff] to-[#0099ff] rounded-xl text-base font-semibold text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
            >
              Kontakt aufnehmen
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-xl bg-[#131b3a]/60 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] hover:bg-[#131b3a] hover:border-[#00d4ff] transition-all duration-300 cursor-pointer"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-[#00d4ff]/20 animate-[slideDown_0.3s_ease-out]">
            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-5 py-3 text-base font-medium text-[#c5d0e3] hover:text-white hover:bg-[#131b3a]/60 rounded-xl transition-all duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 px-7 py-3 bg-gradient-to-r from-[#00d4ff] to-[#0099ff] rounded-xl text-base font-semibold text-white text-center hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
