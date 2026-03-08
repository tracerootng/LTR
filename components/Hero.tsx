
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Info, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  'https://www.ltrnigeria.org/img/1.jpg',
  'https://www.ltrnigeria.org/img/2.jpg',
  'https://www.ltrnigeria.org/img/3.jpg',
  'https://www.ltrnigeria.org/img/4.jpg',
  'https://www.ltrnigeria.org/img/5.jpg'
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Clean Green Background Cut */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#008753] to-[#005a36] -z-10 hidden lg:block"
        style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 40% 100%)' }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-br from-[#008753] to-[#005a36] -z-10 lg:hidden"
        style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-[#008753] px-3 py-1 rounded-full text-sm font-bold mb-6">
              <ShieldCheck size={16} />
              <span>Certified NGO since 2018</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Restoring <span className="text-[#008753]">Hope</span> & Dignity.
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Leprosy and TB Relief Initiative Nigeria is dedicated to creating a world free of Leprosy and Tuberculosis.
              Join us in our mission to save lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-[#008753] hover:bg-[#006e43] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 group transition-all">
                Get Involved
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="border-2 border-gray-200 hover:border-[#008753] hover:text-[#008753] px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Our Projects
              </Link>
            </div>

            {/* ED Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-5 max-w-md relative z-10"
            >
              <img
                src="https://picsum.photos/id/1012/120/120"
                alt="Dr. Tahir Dahiru"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-lg leading-tight">Dr. Tahir Dahiru</h4>
                <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Executive Director, LTR Nigeria</p>
                <p className="text-[#008753] text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                  <Info size={14} /> Read ED's message
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Graphic Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:pl-8"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 aspect-[4/5] bg-gray-100 ring-8 ring-white/20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={SLIDES[currentSlide]}
                  alt="LTR Nigeria Community"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white z-20">
                <p className="text-2xl font-bold mb-2">Impact in Action</p>
                <p className="text-sm opacity-90">Supporting over 13 states in North Central, West, and East Nigeria since our inception.</p>

                {/* Slide Indicators */}
                <div className="flex gap-2 mt-6">
                  {SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-[#008753]' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E67E22] rounded-full blur-3xl opacity-40 -z-10"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white rounded-full blur-[80px] opacity-20 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
