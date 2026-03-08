import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Activity, Navigation } from 'lucide-react';

const WhereWeWork: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#008753]/[0.02] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-emerald-50 text-[#008753] px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <MapPin size={16} />
            <span className="uppercase tracking-wider">Our Reach</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Where We Work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1.5 bg-[#008753] mx-auto rounded-full mb-8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Currently, LTR is implementing activities in <span className="text-[#008753] font-bold">11 States in Nigeria</span>.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#008753] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="flex gap-5">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-[#008753] shrink-0 h-fit">
                    <Activity className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Global Fund PPM Grant</h3>
                    <p className="text-gray-600 leading-relaxed">
                      In <strong className="text-gray-900">Kaduna, Nasarawa and Plateau States</strong> LTR is a sub recipient to the Global Fund Public Private Mix grant (PPM), which is implemented in Nigeria by the Institute for Human Virology Nigeria.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#008753] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="flex gap-5">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-[#008753] shrink-0 h-fit">
                    <Navigation className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Specimen Movement & Testing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      LTR supports these and other States shown on the map below with the movement of specimens of persons who show symptoms of TB for testing and diagnosis of TB.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Map Visualization Container */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden relative border border-gray-100 shadow-lg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Map of Nigeria</h3>
                <p className="text-gray-500 text-sm mt-1">Highlighting our operational presence across 11 states</p>
              </div>
              <img
                src="https://www.ltrnigeria.org/images/ltr-operations-map.jpg"
                alt="Map of Nigeria showing LTR operational states"
                className="w-full h-auto rounded-2xl object-contain"
              />
            </div>

            {/* Accents */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#008753] rounded-full blur-[80px] opacity-10 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWork;
