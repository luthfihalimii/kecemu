import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            Solusi Digital Terbaik untuk Bisnis Anda
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Bangun Website <br />
          <span className="gradient-text">Profesional</span> untuk <br />
          Bisnis Anda
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Dari company profile hingga e-commerce kompleks, kami siap mewujudkan website impian Anda dengan teknologi modern dan desain yang memukau.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="/contact" className="btn-primary inline-block w-full sm:w-auto text-center">
            Konsultasi Gratis
          </a>
          <a href="/portfolio" className="btn-secondary inline-block w-full sm:w-auto text-center">
            Lihat Portfolio
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600 text-sm">Project Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">40+</div>
            <div className="text-gray-600 text-sm">Klien Puas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">5+</div>
            <div className="text-gray-600 text-sm">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-600 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
