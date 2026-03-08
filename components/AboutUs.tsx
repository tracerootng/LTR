import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Award, Building2 } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#008753]/[0.02] -z-10 rounded-l-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-[#008753] px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Building2 size={16} />
              <span className="uppercase tracking-wider">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              A Legacy of <span className="text-[#008753]">Care & Commitment</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Leprosy and Tuberculosis Relief Initiative Nigeria (LTR), formerly known as Netherlands Leprosy Relief (NLR) Nigeria, is an indigenous non-profit NGO.
              </p>
              <p className="mb-4">
                The organization is passionate and committed to Leprosy and Tuberculosis control in Nigeria. From 1978 to 2017, LTR was a regional office of NLR Amsterdam.
              </p>
              <p>
                The entity LTR was incorporated in 2018 and still partners with NLR in Nigeria, to achieve a leprosy-free world.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#008753]/30 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#008753] mb-4 group-hover:scale-110 transition-transform">
                  <Shield size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Board of Trustees</h4>
                <p className="text-sm text-gray-600">
                  Governed by a 6-member Board of Trustees meeting bi-annually to supervise activities and guard policy adherence.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#008753]/30 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#008753] mb-4 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Management Team</h4>
                <p className="text-sm text-gray-600">
                  Led by Executive Director Dr. Tahir Dahiru, advised by the MT which meets quarterly for planning and quality control.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <img src="https://picsum.photos/id/447/400/500" alt="LTR Team" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
                <div className="bg-[#008753] p-8 rounded-3xl shadow-lg text-white flex flex-col justify-center h-48">
                  <Award size={32} className="mb-4 opacity-80" />
                  <h3 className="text-3xl font-bold mb-1">40+</h3>
                  <p className="text-emerald-100 text-sm font-medium">Years of combined experience in Nigeria</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/id/449/400/600" alt="LTR Field Work" className="rounded-3xl shadow-lg w-full h-80 object-cover" />
                <img src="https://picsum.photos/id/450/400/300" alt="LTR Community" className="rounded-3xl shadow-lg w-full h-32 object-cover" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#008753]/10 to-transparent rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
