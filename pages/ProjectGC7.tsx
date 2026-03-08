import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectGC7: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to="/projects" className="inline-flex items-center text-[#008753] hover:underline mb-6 font-medium">
            <ArrowRight className="rotate-180 mr-2" size={16} />
            Back to All Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Global Fund Grant Cycle 7 (N-THRIP)
          </h1>
          <div className="w-24 h-1 bg-[#008753] rounded-full mb-8"></div>
        </motion.div>

        <div className="space-y-12">
          {/* Overview & Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview & Introduction</h2>
            <div className="prose prose-lg text-gray-600 max-w-none text-justify">
              <p>
                The Global Fund Grant Cycle 7 (GC7) is designed to expand Tuberculosis (TB) and HIV services by actively engaging the private sector. This includes patent medicine vendors (PMVs), community pharmacies (CPs), private health facilities (PHFs), and community-based organizations. The goal is to ensure that TB, HIV, and integrated leprosy services are easily accessible within communities.
              </p>
            </div>
          </motion.section>

          {/* Objectives */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Objectives</h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="text-gray-900">Expand Services:</strong> Scale up and integrate gender-sensitive TB and HIV services across facilities and communities to drive epidemic control.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="text-gray-900">Strengthen Health Systems:</strong> Enhance the resilience and sustainability of healthcare service delivery.
                </div>
              </li>
            </ul>
          </motion.section>

          {/* Implementation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation</h2>
            <p className="text-lg text-gray-600 mb-6">
              LTR is a sub-recipient of the grant, with the Institute of Human Virology Nigeria (IHVN) as the principal recipient. LTR is implementing the Community-Private Partnership Model (CPPM) for the TB/HIV component of GC7 in:
            </p>
            <div className="flex flex-wrap gap-3">
              {['Adamawa', 'Borno', 'Gombe', 'Plateau', 'Yobe'].map((state) => (
                <span key={state} className="bg-white px-4 py-2 rounded-full border border-gray-200 text-[#008753] font-semibold shadow-sm">
                  {state}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Key Focus Areas */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#008753] mb-3">1. Prevention & Care</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reduce new TB and HIV infections.</li>
                  <li>• Ensure early diagnosis and comprehensive care for affected individuals.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#008753] mb-3">2. Community Engagement</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expand TB service coverage within communities and the private sector.</li>
                  <li>• Increase national TB case notifications.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#008753] mb-3">3. HIV Testing Expansion</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Increase HIV testing among pregnant women to prevent mother-to-child transmission.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Activities Conducted */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Activities Conducted</h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                <div><strong className="text-gray-900">Advocacy & Integration:</strong> Engaging stakeholders to drive policy support and service integration.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                <div><strong className="text-gray-900">Facility Mapping & Assessment:</strong> Identifying and activating Private-Public Mix (PPM) facilities.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                <div>
                  <strong className="text-gray-900">Capacity Building & Training:</strong>
                  <ul className="mt-2 space-y-2 pl-4 border-l-2 border-gray-100">
                    <li>• Training private for-profit entities, faith-based organizations, PMVs, traditional healers, birth attendants, CPs, and labs on TB case detection and Directly Observed Treatment (DOT) services.</li>
                    <li>• Training community implementers on Active Case Finding (ACF) and Community HIV Testing Services (HTS).</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                <div><strong className="text-gray-900">Digital Innovations:</strong> Utilizing digital tools to enhance service delivery and data management.</div>
              </li>
            </ul>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#008753]/10 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-lg text-gray-800 text-justify">
              The Global Fund Grant Cycle 7 (N-THRIP) is a transformative initiative enhancing TB and HIV services through community participation and private sector collaboration. LTR remains committed to ensuring prevention, early diagnosis, and comprehensive care, ultimately contributing to epidemic control and improved health outcomes in the targeted states.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProjectGC7;
