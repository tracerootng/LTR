
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, History, Users } from 'lucide-react';

const MissionHistory: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-l-8 border-[#008753] pl-6">
                Our Mission & History
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Leprosy and TB Relief Initiative Nigeria (LTR) officially registered with the Corporate Affairs Commission as an indigenous non-profit NGO in March 2018. Formerly a country office of the Netherlands Leprosy Relief (NLR).
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#008753]/5 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center text-[#008753] group-hover:scale-110 transition-transform">
                    <History size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Decades of Support</h4>
                    <p className="text-gray-600 text-sm">Since the late 20th century, we have supported leprosy and TB control in 13 States across Nigeria.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#008753]/5 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center text-[#008753] group-hover:scale-110 transition-transform">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">National Partnerships</h4>
                    <p className="text-gray-600 text-sm">We work directly with the National Tuberculosis and Leprosy Control Programme (NTBLCP).</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#008753]/5 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center text-[#008753] group-hover:scale-110 transition-transform">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Educational Legacy</h4>
                    <p className="text-gray-600 text-sm">Help establish the premier Training Centre in Zaria to build indigenous capacity.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img src="https://picsum.photos/id/247/400/300" alt="Work 1" className="rounded-2xl shadow-md w-full h-48 object-cover" />
              <img src="https://picsum.photos/id/248/400/600" alt="Work 2" className="rounded-2xl shadow-md w-full h-72 object-cover" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/id/249/400/600" alt="Work 3" className="rounded-2xl shadow-md w-full h-72 object-cover" />
              <img src="https://picsum.photos/id/250/400/300" alt="Work 4" className="rounded-2xl shadow-md w-full h-48 object-cover" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default MissionHistory;
