import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Award, Building2 } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#008753]/[0.02] -z-10 rounded-l-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-[#008753] px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Building2 size={16} />
              <span className="uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              A Legacy of <span className="text-[#008753]">Care & Commitment</span>
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
              <p className="mb-4">
                Leprosy and Tuberculosis Relief Initiative Nigeria (LTR), formerly known as Netherlands Leprosy Relief (NLR) Nigeria, is an indigenous non-profit NGO.
              </p>
              <p className="mb-4">
                The organization is passionate and committed to Leprosy and Tuberculosis control in Nigeria. From 1978 to 2017, LTR was a regional office of NLR Amsterdam.
              </p>
              <p className="mb-8">
                The entity LTR was incorporated in 2018 and still partners with NLR in Nigeria, to achieve a leprosy-free world.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Organizational Structure</h3>
              <p className="mb-4">
                LTR is governed by a Board of Trustees. The Board of Trustees is made up of 6 members and meets bi-annually to supervise LTR activities and to guard policy adherence.
              </p>
              <p className="mb-4">
                The office of LTR is managed by the Executive Director, Dr. Tahir Dahiru. Programmatically and administratively he is advised in the LTR Management Team (MT). The MT meets at least one time per quarter to discuss major programme management issues, to hold planning sessions and for quality control issues.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="bg-gray-50 p-4 rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
              <img
                src="https://www.ltrnigeria.org/images/ltr-organogram.jpg"
                alt="LTR Organizational Structure"
                className="w-full h-auto rounded-2xl"
              />
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
