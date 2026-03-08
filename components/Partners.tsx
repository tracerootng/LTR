
import React from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  {
    name: "Federal Ministry of Health",
    logo: "https://www.ltrnigeria.org/images/fmh_logo.jpg"
  },
  {
    name: "The Global Fund",
    logo: "https://www.ltrnigeria.org/images/gfatm_logo.png"
  },
  {
    name: "KNCV Tuberculosis Foundation",
    logo: "https://www.ltrnigeria.org/images/kncv_logo.png"
  },
  {
    name: "Light for the World",
    logo: "https://www.ltrnigeria.org/images/lftw_logo_.png"
  },
  {
    name: "NLR",
    logo: "https://www.ltrnigeria.org/images/NLRlogo.png"
  },
  {
    name: "NTBLCP",
    logo: "https://www.ltrnigeria.org/images/ntblcp_logo.png"
  }
];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-[#F9FAFB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Our Partners</h3>
          <p className="text-gray-500 font-medium">Working together for a world free of Leprosy and TB</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {PARTNERS.map((partner) => (
            <motion.div 
              key={partner.name}
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-transparent hover:border-emerald-100 shadow-sm transition-all h-32"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
