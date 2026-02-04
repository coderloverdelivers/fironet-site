export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0e27] to-[#060918] border-t border-[#00d4ff]/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#0099ff] flex items-center justify-center">
                <i className="ri-server-line text-xl text-white"></i>
              </div>
              <span className="text-2xl font-bold text-white">FIRONET</span>
            </div>
            <p className="text-base text-[#c5d0e3] leading-relaxed mb-6">
              Professionelle IT-Lösungen für Privatpersonen und Unternehmen in der Schweiz.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: 'ri-linkedin-fill', href: '#' },
                { icon: 'ri-github-fill', href: '#' },
                { icon: 'ri-instagram-fill', href: '#' },
                { icon: 'ri-twitter-x-fill', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-11 h-11 rounded-xl bg-[#131b3a]/60 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] hover:bg-[#00d4ff] hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 cursor-pointer"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Dienstleistungen', href: '#services' },
                { label: 'Fähigkeiten', href: '#technologies' },
                { label: 'Über mich', href: '#about' },
                { label: 'Kontakt', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base text-[#c5d0e3] hover:text-[#00d4ff] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">Dienstleistungen</h3>
            <ul className="space-y-3">
              {[
                'Server & Netzwerk',
                'Smart Home',
                'Automatisierung',
                'IT-Sicherheit',
                'IT-Support'
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-base text-[#c5d0e3] flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-[#00d4ff]"></i>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-mail-line text-[#00d4ff]"></i>
                </div>
                <div>
                  <p className="text-sm text-[#8b9dc3] mb-1">E-Mail</p>
                  <a href="mailto:info@fironet.ch" className="text-base text-[#c5d0e3] hover:text-[#00d4ff] transition-colors break-all">
                    info@fironet.ch
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-phone-line text-[#00d4ff]"></i>
                </div>
                <div>
                  <p className="text-sm text-[#8b9dc3] mb-1">Telefon</p>
                  <a href="tel:+41123456789" className="text-base text-[#c5d0e3] hover:text-[#00d4ff] transition-colors">
                    +41 12 345 67 89
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00d4ff]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-[#c5d0e3]">
              © {currentYear} FIRONET. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-base text-[#c5d0e3] hover:text-[#00d4ff] transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-base text-[#c5d0e3] hover:text-[#00d4ff] transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
