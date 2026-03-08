import React from 'react';
import { motion } from 'framer-motion';

const PartnersPage: React.FC = () => {
  const partners = [
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
      name: "National Tuberculosis and Leprosy Control Programme (NTBLCP)",
      logo: "https://www.ltrnigeria.org/images/ntblcp_logo.png"
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Partners Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our Partners
          </h1>
          <div className="w-24 h-1 bg-[#008753] rounded-full mx-auto"></div>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mb-24"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-[280px] h-48 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-8 hover:shadow-md transition-shadow"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default PartnersPage;
