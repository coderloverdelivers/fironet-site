interface ServicesProps {
  isVisible: { [key: string]: boolean };
}

export default function Services({ isVisible }: ServicesProps) {
  const services = [
    {
      icon: 'ri-server-line',
      title: 'Server & Netzwerk',
      description: 'Professionelles Setup und Wartung von Servern, NAS-Systemen und Netzwerkinfrastruktur für zuverlässige Leistung.'
    },
    {
      icon: 'ri-home-smile-line',
      title: 'Smart Home',
      description: 'Intelligente Beleuchtungssysteme und Heimautomatisierung, die Komfort und Energieeffizienz vereinen.'
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'Automatisierung',
      description: 'Benutzerdefinierte Skripte und Automatisierungslösungen zur Optimierung wiederkehrender Aufgaben und Workflows.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'IT-Sicherheit',
      description: 'Umfassende Sicherheitslösungen zum Schutz Ihrer Daten und Systeme vor Bedrohungen.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'IT-Support',
      description: 'Schneller und zuverlässiger technischer Support für alle Ihre IT-Bedürfnisse, vor Ort oder remote.'
    },
    {
      icon: 'ri-computer-line',
      title: 'Hardware-Beratung',
      description: 'Expertenberatung für die Auswahl, Beschaffung und Installation von Computern und IT-Geräten.'
    }
  ];

  return (
    <section
      id="services"
      data-animate
      className="relative py-32 px-6"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(0,212,255,0.04),transparent_70%)] blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-800 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-5 px-5 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full">
            <span className="text-sm uppercase tracking-[2px] font-semibold text-[#00d4ff]">Dienstleistungen</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Meine Dienstleistungen
          </h2>
          <p className="text-xl text-[#c5d0e3] max-w-3xl mx-auto leading-relaxed">
            Profitieren Sie von meinem breiten Angebot an IT- und webbasierten Dienstleistungen.
          </p>
          <p className="text-lg text-[#b8c5db] max-w-3xl mx-auto mt-4 leading-relaxed">
            Ich biete professionelle Beratung zu IT-Fragen und helfe gerne bei technischen Problemen. Wenn Sie einen veralteten Computer oder Laptop ersetzen möchten, kann ich ein auf Ihre Anforderungen zugeschnittenes Gerät empfehlen, bestellen und direkt bei Ihnen zu Hause installieren.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-[#131b3a]/40 backdrop-blur-sm border border-[#00d4ff]/20 rounded-2xl p-8 hover:bg-[#131b3a]/60 hover:border-[#00d4ff]/50 hover:shadow-[0_8px_40px_rgba(0,212,255,0.15)] transition-all duration-500 cursor-pointer ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300">
                <i className={`${service.icon} text-3xl text-[#00d4ff]`}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-base text-[#b8c5db] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className={`transition-all duration-800 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Pricing Header */}
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Preise & Stundensätze
            </h3>
            <p className="text-lg text-[#c5d0e3] max-w-3xl mx-auto leading-relaxed">
              Da ich kein physisches Geschäft betreibe und Support direkt vor Ort oder remote anbiete, kann ich die folgenden fairen und wettbewerbsfähigen Stundensätze anbieten.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Hourly Rates Card */}
            <div className="bg-[#131b3a]/40 backdrop-blur-sm border border-[#00d4ff]/20 rounded-3xl p-10 hover:border-[#00d4ff]/50 hover:shadow-[0_8px_40px_rgba(0,212,255,0.15)] transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10 flex items-center justify-center">
                  <i className="ri-time-line text-2xl text-[#00d4ff]"></i>
                </div>
                <h4 className="text-2xl font-bold text-white">Stundensätze</h4>
              </div>
              <div className="space-y-5">
                <div className="flex justify-between items-center py-4 border-b border-[#00d4ff]/10">
                  <span className="text-base text-[#c5d0e3]">Privatpersonen</span>
                  <span className="text-xl font-bold text-[#00d4ff]">CHF 100.00</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-[#00d4ff]/10">
                  <span className="text-base text-[#c5d0e3]">Unternehmen</span>
                  <span className="text-xl font-bold text-[#00d4ff]">CHF 140.00</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-base text-[#c5d0e3]">Mindestgebühr vor Ort</span>
                  <span className="text-xl font-bold text-[#00d4ff]">CHF 50.00</span>
                </div>
              </div>
            </div>

            {/* Remote Support Card */}
            <div className="bg-[#131b3a]/40 backdrop-blur-sm border border-[#00d4ff]/20 rounded-3xl p-10 hover:border-[#00d4ff]/50 hover:shadow-[0_8px_40px_rgba(0,212,255,0.15)] transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10 flex items-center justify-center">
                  <i className="ri-phone-line text-2xl text-[#00d4ff]"></i>
                </div>
                <h4 className="text-2xl font-bold text-white">Remote Support</h4>
              </div>
              <p className="text-base text-[#c5d0e3] mb-6 leading-relaxed">
                Telefonsupport oder Remote-Wartung pro angefangene 15 Minuten:
              </p>
              <div className="space-y-5">
                <div className="flex justify-between items-center py-4 border-b border-[#00d4ff]/10">
                  <span className="text-base text-[#c5d0e3]">Privatpersonen</span>
                  <span className="text-xl font-bold text-[#00d4ff]">CHF 25.00</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-base text-[#c5d0e3]">Unternehmen</span>
                  <span className="text-xl font-bold text-[#00d4ff]">CHF 35.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Pricing Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Travel Costs */}
            <div className="bg-[#131b3a]/40 backdrop-blur-sm border border-[#00d4ff]/20 rounded-3xl p-10 hover:border-[#00d4ff]/50 hover:shadow-[0_8px_40px_rgba(0,212,255,0.15)] transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10 flex items-center justify-center">
                  <i className="ri-map-pin-line text-2xl text-[#00d4ff]"></i>
                </div>
                <h4 className="text-2xl font-bold text-white">Fahrtkosten</h4>
              </div>
              <p className="text-base text-[#c5d0e3] mb-6 leading-relaxed">
                Fahrtkosten werden basierend auf der Entfernung von Thun berechnet:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                  <span className="text-base text-[#c5d0e3]">Bis 5 km: <span className="font-semibold text-white">CHF 10.00</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                  <span className="text-base text-[#c5d0e3]">Bis 10 km: <span className="font-semibold text-white">CHF 20.00</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                  <span className="text-base text-[#c5d0e3]">Über 10 km: <span className="font-semibold text-white">CHF 50.00</span></span>
                </div>
              </div>
            </div>

            {/* Weekend Surcharge */}
            <div className="bg-[#131b3a]/40 backdrop-blur-sm border border-[#00d4ff]/20 rounded-3xl p-10 hover:border-[#00d4ff]/50 hover:shadow-[0_8px_40px_rgba(0,212,255,0.15)] transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10 flex items-center justify-center">
                  <i className="ri-calendar-line text-2xl text-[#00d4ff]"></i>
                </div>
                <h4 className="text-2xl font-bold text-white">Wochenend-Zuschlag</h4>
              </div>
              <p className="text-base text-[#c5d0e3] mb-8 leading-relaxed">
                Für kurzfristige Wochenend-Einsätze wird ein Wochenend-Zuschlag zur Gesamtbestellung hinzugefügt.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-xl">
                <i className="ri-add-line text-2xl text-[#00d4ff]"></i>
                <span className="text-2xl font-bold text-[#00d4ff]">CHF 50.00</span>
              </div>
            </div>
          </div>

          {/* Swisscom Reference Prices */}
          <div className="mt-8 bg-[#131b3a]/40 backdrop-blur-sm border border-[#00d4ff]/20 rounded-3xl p-10 hover:border-[#00d4ff]/50 hover:shadow-[0_8px_40px_rgba(0,212,255,0.15)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10 flex items-center justify-center">
                <i className="ri-service-line text-2xl text-[#00d4ff]"></i>
              </div>
              <h4 className="text-2xl font-bold text-white">Swisscom Referenzpreise (inkl. Fahrtkosten)</h4>
            </div>
            <p className="text-base text-[#c5d0e3] mb-8 leading-relaxed">
              Für Swisscom-Aufträge werden Referenzpreise verwendet, die je nach Arbeitsumfang variieren können:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-5 bg-[#0a0e27]/40 rounded-xl border border-[#00d4ff]/10">
                <i className="ri-router-line text-2xl text-[#00d4ff]"></i>
                <div>
                  <p className="text-base text-white font-semibold mb-1">Swisscom Installation</p>
                  <p className="text-sm text-[#b8c5db]">Internet, TV, Telefon</p>
                  <p className="text-lg font-bold text-[#00d4ff] mt-2">CHF 99.00 – CHF 149.00</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-[#0a0e27]/40 rounded-xl border border-[#00d4ff]/10">
                <i className="ri-tools-line text-2xl text-[#00d4ff]"></i>
                <div>
                  <p className="text-base text-white font-semibold mb-1">Swisscom Fehlerbehebung</p>
                  <p className="text-sm text-[#b8c5db]">Technischer Support</p>
                  <p className="text-lg font-bold text-[#00d4ff] mt-2">CHF 79.00 – CHF 129.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
