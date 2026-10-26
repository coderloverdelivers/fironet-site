interface TechnologiesProps {
  isVisible: { [key: string]: boolean };
}

export default function Technologies({ isVisible }: TechnologiesProps) {
  const technologies = [
    { name: 'Linux', icon: 'ri-ubuntu-line', color: '#2463d4' },
    { name: 'Docker', icon: 'ri-stack-line', color: '#2463d4' },
    { name: 'Windows', icon: 'ri-windows-line', color: '#2463d4' },
    { name: 'PowerShell/Bash', icon: 'ri-terminal-line', color: '#2463d4' },
    { name: 'Hardware', icon: 'ri-cpu-line', color: '#2463d4' },
    { name: 'Netzwerk', icon: 'ri-router-line', color: '#2463d4' },
    { name: 'Datenbank/MySQL', icon: 'ri-database-2-line', color: '#2463d4' },
    { name: 'Drucker', icon: 'ri-printer-line', color: '#2463d4' }
  ];

  return (
    <section
      id="technologies"
      data-animate
      className="technologies-section relative py-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible.technologies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-5 px-5 py-2 bg-[#2463d4]/10 border border-[#2463d4]/30 rounded-full">
            <span className="text-sm uppercase tracking-[2px] font-semibold text-[#2463d4]">Technologien</span>
          </div>
          <h2 className="text-3xl md:text-3xl font-bold mb-6 text-[#152b46]">
            Fähigkeiten & Tools
          </h2>
          <p className="text-xl text-[#52647b] max-w-3xl mx-auto leading-relaxed">
            Moderne Technologien und bewährte Tools für zuverlässige IT-Lösungen
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group bg-white backdrop-blur-sm border border-[#dce5ef] rounded-xl p-5 hover:bg-white hover:border-[#2463d4]/50 hover:shadow-sm transition-all duration-500  ${isVisible.technologies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#edf3ff] flex items-center justify-center mb-3 group-hover:shadow-sm transition-all duration-300">
                  <i className={`${tech.icon} text-3xl`} style={{ color: tech.color }}></i>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#152b46] group-hover:text-[#2463d4] transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-10 text-center transition-all duration-800 delay-300 ${isVisible.technologies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white backdrop-blur-sm border border-[#dce5ef] rounded-2xl">
            <div className="w-3 h-3 rounded-full bg-[#2463d4] animate-pulse"></div>
            <span className="text-base text-[#52647b] font-medium">
              Ständig auf dem neuesten Stand der Technologie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
