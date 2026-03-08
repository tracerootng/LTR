
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartHandshake, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: 'https://www.ltrnigeria.org/images/collabo.jpg',
    title: 'Leprosy is curable, treatment is FREE.',
    subtitle: "Let's join hands together to restore hope and dignity to our brothers and sisters.",
    accent: 'emerald'
  },
  {
    image: 'https://picsum.photos/id/163/1920/800',
    title: 'Ending the Stigma Through Education',
    subtitle: 'Training healthcare workers across Nigeria to provide dignity-first care.',
    accent: 'blue'
  },
  {
    image: 'https://picsum.photos/id/249/1920/800',
    title: 'A Healthy Future for Every Child',
    subtitle: 'Supporting the families and descendants of those affected by leprosy.',
    accent: 'orange'
  }
];

const ImpactBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={SLIDES[currentIndex].image} 
              alt="Slide background" 
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-[#008753]/20 mix-blend-overlay"></div>
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E67E22] rounded-full flex items-center justify-center text-white shadow-lg">
                  <HeartHandshake size={24} />
                </div>
                <span className="text-white font-bold uppercase tracking-widest text-sm">Vital Information</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                {SLIDES[currentIndex].title}
              </h2>
              <p className="text-xl text-gray-200 mb-10 font-medium max-w-lg">
                {SLIDES[currentIndex].subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-[#008753] hover:bg-[#006e43] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95">
                  Learn How to Help
                </Link>
                <Link to="/projects" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-md transition-all active:scale-95">
                  Our Impact Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-10 flex gap-2 z-20">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-12 bg-[#008753]' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImpactBanner;
