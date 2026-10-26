import { useState, FormEvent } from 'react';

interface ContactProps {
  isVisible: { [key: string]: boolean };
}

export default function Contact({ isVisible }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      data-animate
      className="contact-section relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-5 px-5 py-2 bg-[#2463d4]/10 border border-[#2463d4]/30 rounded-full">
            <span className="text-sm uppercase tracking-[2px] font-semibold text-[#2463d4]">Kontakt aufnehmen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#152b46]">
            Kontakt
          </h2>
          <p className="text-xl text-[#52647b] max-w-2xl mx-auto leading-relaxed">
            Bereit, Ihre IT-Bedürfnisse zu besprechen? Lassen Sie uns reden!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className={`lg:col-span-1 space-y-6 transition-all duration-800 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Email Card */}
            <div className="group bg-white backdrop-blur-sm border border-[#dce5ef] rounded-2xl p-8 hover:bg-white hover:border-[#2463d4]/50 hover:shadow-sm transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#edf3ff] flex items-center justify-center mb-5 group-hover:shadow-sm transition-all duration-300">
                <i className="ri-mail-line text-2xl text-[#2463d4]"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#152b46] mb-3">E-Mail</h3>
              <a href="mailto:info@fironet.ch" className="text-base text-[#52647b] hover:text-[#2463d4] transition-colors break-all">
                info@fironet.ch
              </a>
            </div>

            {/* Phone Card */}
            <div className="group bg-white backdrop-blur-sm border border-[#dce5ef] rounded-2xl p-8 hover:bg-white hover:border-[#2463d4]/50 hover:shadow-sm transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#edf3ff] flex items-center justify-center mb-5 group-hover:shadow-sm transition-all duration-300">
                <i className="ri-phone-line text-2xl text-[#2463d4]"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#152b46] mb-3">Telefon</h3>
              <a href="tel:+41123456789" className="text-base text-[#52647b] hover:text-[#2463d4] transition-colors">
                +41 12 345 67 89
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-800 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white backdrop-blur-sm border border-[#dce5ef] rounded-2xl p-6 sm:p-10 relative hover:border-[#2463d4]/50 hover:shadow-sm transition-all duration-500">
              {/* Success Message */}
              {showSuccess && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 rounded-t-3xl p-5 flex items-center justify-center gap-3 animate-[slideDown_0.3s_ease-out] backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                    <i className="ri-check-line text-xl text-green-800"></i>
                  </div>
                  <span className="text-green-800 font-semibold text-base">Nachricht erfolgreich gesendet!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#52647b] mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#f5f8fc] border border-[#2463d4]/30 rounded-lg text-base text-[#152b46] placeholder-[#64748b] focus:outline-none focus:border-[#2463d4] focus:bg-[#f5f8fc] focus:shadow-sm transition-all duration-300"
                    placeholder="Ihr Name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#52647b] mb-3">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#f5f8fc] border border-[#2463d4]/30 rounded-lg text-base text-[#152b46] placeholder-[#64748b] focus:outline-none focus:border-[#2463d4] focus:bg-[#f5f8fc] focus:shadow-sm transition-all duration-300"
                    placeholder="ihre.email@beispiel.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#52647b] mb-3">
                    Betreff
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#f5f8fc] border border-[#2463d4]/30 rounded-lg text-base text-[#152b46] placeholder-[#64748b] focus:outline-none focus:border-[#2463d4] focus:bg-[#f5f8fc] focus:shadow-sm transition-all duration-300"
                    placeholder="Wie kann ich Ihnen helfen?"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#52647b] mb-3">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#f5f8fc] border border-[#2463d4]/30 rounded-lg text-base text-[#152b46] placeholder-[#64748b] focus:outline-none focus:border-[#2463d4] focus:bg-[#f5f8fc] focus:shadow-sm transition-all duration-300 resize-none"
                    placeholder="Erzählen Sie mir von Ihrem Projekt..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-10 py-5 bg-[#2463d4] rounded-xl text-lg font-semibold text-white hover:scale-[1.02] hover:shadow-sm transition-all duration-300 whitespace-nowrap cursor-pointer relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Nachricht senden
                    <i className="ri-send-plane-fill group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
