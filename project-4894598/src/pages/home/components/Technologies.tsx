interface TechnologiesProps {
  isVisible: { [key: string]: boolean };
}

export default function Technologies({ isVisible }: TechnologiesProps) {
  const technologies = [
    { name: 'Linux', icon: 'ri-ubuntu-line', color: '#00d4ff' },
    { name: 'Docker', icon: 'ri-stack-line', color: '#00d4ff' },
    { name: 'Windows', icon: 'ri-windows-line', color: '#00d4ff' },
    { name: 'PowerShell/Bash', icon: 'ri-terminal-line', color: '#00d4ff' },
    { name: 'Hardware', icon: 'ri-cpu-line', color: '#00d4ff' },
    { name: 'Netzwerk', icon: 'ri-router-line', color: '#00d4ff' },
    { name: 'Datenbank/MySQL', icon: 'ri-database-2-line', color: '#00d4ff' },
    { name: 'Drucker', icon: 'ri-printer-line', color: '#00d4ff' }
  ];

  return (
    <section
      id="technologies"
      data-animate
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(0,212,255,0.04),transparent_70%)] blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-800 ${isVisible.technologies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-5 px-5 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full">
            <span className="text-sm uppercase tracking-[2px] font-semibold text-[#00d4ff]">Technologien</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Fähigkeiten & Tools
          </h2>
          <p className="text-xl text-[#c5d0e3] max-w-3xl mx-auto leading-relaxed">
            Moderne Technologien und bewährte Tools für zuverlässige IT-Lösungen
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group bg-[#131b3a]/40 backdrop-blur-sm border border-[#00d4ff]/20 rounded-2xl p-8 hover:bg-[#131b3a]/60 hover:border-[#00d4ff]/50 hover:shadow-[0_8px_40px_rgba(0,212,255,0.15)] transition-all duration-500 cursor-pointer ${isVisible.technologies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0099ff]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300">
                  <i className={`${tech.icon} text-4xl`} style={{ color: tech.color }}></i>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-20 text-center transition-all duration-800 delay-300 ${isVisible.technologies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#131b3a]/40 backdrop-blur-sm border border-[#00d4ff]/20 rounded-2xl">
            <div className="w-3 h-3 rounded-full bg-[#00d4ff] animate-pulse"></div>
            <span className="text-base text-[#c5d0e3] font-medium">
              Ständig auf dem neuesten Stand der Technologie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
