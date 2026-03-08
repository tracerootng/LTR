import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Target, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectHackathon: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Training on Hackathon Audiopedia in Bauchi and Plateau States
          </h1>
          <div className="w-24 h-1 bg-[#008753] rounded-full mb-8"></div>
        </motion.div>

        <div className="space-y-16">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg text-gray-600 max-w-none text-justify"
          >
            <p>
              Recently, The REDAID Nigeria, Enugu partnered with LTR Nigeria to implement the Hackathon Audiopedia Project. The project will focus on 10 NTDs endemic States for which LTR is championing the implementation of the project in Plateau and Bauchi States. In each of the two LTR States (Plateau & Bauchi), the project will be implemented in 12 LGAs making a total of 24 LGAs.
            </p>
            <p>
              The project aims to have 12 Primary Ambassadors per state representing the 12 LGAs in the state (s) who will be attached with 20 Secondary ambassadors each; making a total of 240 Secondary Ambassadors per state.
            </p>
          </motion.section>

          {/* Project Title & Aim */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-lg shadow-sm text-[#008753]">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Project Title</h2>
              </div>
              <p className="text-lg text-gray-700 font-medium">
                Mainstreaming Audiopedia as a tool to improve knowledge and access to health and development information in Nigeria
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#008753]/5 p-8 rounded-2xl border border-[#008753]/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-lg shadow-sm text-[#008753]">
                  <Activity size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Project Aim</h2>
              </div>
              <ul className="space-y-3 text-gray-700 text-justify">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                  <span>The project aims at bridging the health and development information gap among illiterate women and girls including other members of the community in Nigeria through the use of various audio enabling devices to access audio messages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                  <span>The project will focus on 10 NTDs endemic States in Nigeria.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                  <span>Selected health facilities and radio stations will be engaged for the dissemination of these audio messages.</span>
                </li>
              </ul>
            </motion.section>
          </div>

          {/* Project Activities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Expand advocacy to the Federal and State Ministries of Health",
                "Identification and selection of 10 NTDs endemic States and training of LGA ambassadors Translation and voicing of NTDs messages into Local Languages (Hausa, Igbo, Yoruba and Pidgin)",
                "Translate existing Audiopedia messages to other Nigerian languages (Hausa, Yoruba, Pidgin etc.)",
                "Scale-up linguistic student contribution to the translatathon production"
              ].map((activity, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-[#008753]/30 transition-colors">
                  <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">{activity}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Picture Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Picture Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video">
                <img 
                  src="https://www.ltrnigeria.org/images/hackathon/hackathon-ba1.jpg" 
                  alt="Hackathon Training Session 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video">
                <img 
                  src="https://www.ltrnigeria.org/images/hackathon/hackathon-ba2.jpg" 
                  alt="Hackathon Training Session 2" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video">
                <img 
                  src="https://www.ltrnigeria.org/images/hackathon/hackathon-ba3.jpg" 
                  alt="Hackathon Training Session 3" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video">
                <img 
                  src="https://www.ltrnigeria.org/images/hackathon/hackathon-ba4.jpg" 
                  alt="Hackathon Training Session 4" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProjectHackathon;
