interface AboutProps {
  isVisible: { [key: string]: boolean };
}

export default function About({ isVisible }: AboutProps) {
  return (
    <section
      id="about"
      data-animate
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,255,0.04),transparent_70%)] blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
          {/* Left Column - Profile Image */}
          <div className={`lg:col-span-2 flex justify-center transition-all duration-800 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10 rounded-full blur-2xl"></div>
              <div className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-[#00d4ff]/30 to-[#0099ff]/20 p-1 shadow-[0_0_60px_rgba(0,212,255,0.2)]">
                <div className="w-full h-full rounded-3xl bg-[#131b3a] flex items-center justify-center overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=modern%20data%20center%20server%20room%20with%20rows%20of%20illuminated%20server%20racks%20and%20network%20equipment%20featuring%20blue%20LED%20lights%20and%20organized%20cable%20management%20showing%20professional%20enterprise%20IT%20infrastructure%20and%20technology%20operations%20in%20clean%20organized%20environment&width=400&height=400&seq=about-server-room-fironet&orientation=squarish"
                    alt="IT Server Infrastructure"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`lg:col-span-3 transition-all duration-800 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="mb-5">
              <span className="inline-block px-5 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-sm uppercase tracking-[2px] font-semibold text-[#00d4ff]">
                Über mich
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Ihr lokaler IT-Partner
            </h2>

            <div className="space-y-6 text-lg text-[#c5d0e3] leading-relaxed max-w-2xl">
              <p>
                Als zertifizierter Informatiker Plattformentwicklung biete ich zuverlässige und sichere IT-Lösungen für Privatpersonen und kleine Unternehmen in der Region.
              </p>

              <p>
                Mein Ansatz ist einfach: Ihre Bedürfnisse verstehen, praktische Lösungen umsetzen und sicherstellen, dass alles reibungslos funktioniert. Ob es um die Einrichtung eines neuen Servers, die Automatisierung wiederkehrender Aufgaben oder die Schaffung der perfekten Smart Home Beleuchtung geht – ich bin für Sie da.
              </p>

              <p>
                Mit einem starken Fokus auf Sicherheit und Zuverlässigkeit biete ich persönlichen Support, auf den Sie sich verlassen können. Keine Unternehmensbürokratie – nur direkter, professioneller Service von jemandem, dem es wichtig ist, es richtig zu machen.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-12 space-y-5">
              {[
                'Über 10 Jahre IT-Erfahrung',
                'Lokaler & persönlicher Support',
                'Sicherheitsorientierter Ansatz'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300">
                    <i className="ri-check-line text-[#00d4ff] text-2xl"></i>
                  </div>
                  <span className="text-lg text-white font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
