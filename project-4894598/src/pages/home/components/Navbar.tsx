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
      className={`site-nav fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#dce5ef] shadow-sm'
          : 'bg-white/95 border-b border-[#e4ebf3]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-[#2463d4] flex items-center justify-center group-hover:shadow-sm transition-all duration-300">
              <i className="ri-server-line text-xl text-white"></i>
            </div>
            <span className="text-2xl font-bold text-[#152b46] group-hover:text-[#2463d4] transition-colors duration-300">
              FIRONET
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-5 py-2.5 text-base font-medium text-[#52647b] hover:text-[#152b46] hover:bg-[#edf3ff] rounded-xl transition-all duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-7 py-3 bg-[#2463d4] rounded-xl text-base font-semibold text-white hover:shadow-sm transition-all duration-300 whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
            >
              Kontakt aufnehmen
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-white border border-[#dce5ef] flex items-center justify-center text-[#2463d4] hover:bg-[#edf3fb] hover:border-[#2463d4] transition-all duration-300 cursor-pointer"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-[#dce5ef] animate-[slideDown_0.3s_ease-out]">
            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-5 py-3 text-base font-medium text-[#52647b] hover:text-[#152b46] hover:bg-[#edf3ff] rounded-xl transition-all duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 px-7 py-3 bg-[#2463d4] rounded-xl text-base font-semibold text-white text-center hover:shadow-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
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
