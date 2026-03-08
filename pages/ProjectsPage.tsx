import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            What we do
          </h1>
          <div className="w-24 h-1 bg-[#008753] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed text-justify md:text-center">
            We work with partners by supporting the detection and treatment of leprosy and tuberculosis; prevention of disability and reduction of stigma in people affected by leprosy in Nigeria.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">The Problem</h2>
            <div className="prose prose-lg text-gray-600 max-w-none text-justify space-y-4">
              <p>
                Five years (2014 - 2018) trend of leprosy case detection has been above 2,000 cases but less than 3,000. On average, grade 2 disability is 15% revealing late detection.
              </p>
              <p>
                The estimated incidence of TB burden was 418,000 cases and incidence rate of 219 per 100,000 population (WHO). In 2017, the total TB cases notified was 104,905, revealing that about 300,000 TB cases are missed and not placed on treatment (WHO).
              </p>
            </div>
          </motion.section>

          {/* Leprosy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Leprosy Control</h2>
            <div className="prose prose-lg text-gray-600 max-w-none text-justify space-y-4">
              <p>
                Leprosy is a chronic infectious disease caused by a bacterium Mycobacterium leprae. The disease mainly affects the skin, mucosal surfaces of the upper respiratory tracts, eyes and peripheral nerves. Leprosy is also known as Hansen's Disease.
              </p>
              <p>
                Leprosy Relief in Nigeria is wholly supported by NLR International office. Over the years, LTR (formerly NLR Nigeria) through funds from NLR initiated leprosy control in north-east Nigeria.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Stationed Dutch medical doctors to coordinate leprosy control activities in hospitals. This has been discontinued.",
                  "Capacity building of State and LGA level personnel on leprosy control.",
                  "Financial assistance to State Tuberculosis and Leprosy Control Program and referral hospitals in States.",
                  "Provision of motorcycles and vehicles for program supervision and monitoring.",
                  "Supported passive case detection by capacitating traditional healers and patent medicine vendors.",
                  "Active case detection through mini-leprosy elimination campaigns and household contact examinations."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Tuberculosis */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Tuberculosis Control</h2>
            <div className="prose prose-lg text-gray-600 max-w-none text-justify space-y-4">
              <p>
                Tuberculosis is a chronic infectious disease that affects mainly the lungs and is caused by Mycobacterium tuberculosis complex.
              </p>
              <p>
                Netherlands Leprosy Relief Nigeria on behalf of the NTBLCP commenced TB control in Plateau, Bauchi and Gombe in 1993. By 2000, the Adamawa STBLCP was included and technical assistance provided following the release of funds by the Government of Adamawa State.
              </p>
              <p>
                The Global Fund to Fight AIDS, TB and Malaria (GFATM) started funding of TB control in 2007. From 2007 to 2019, NLR Nigeria/ LTR has been a sub-recipient to the principal recipients of the TB (DS-TB & DR-TB) grant.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Capacity building of peripheral health workers through DOTS expansion and enhancement.",
                  "Strengthened State TBLCP by supporting trainings of program managers, state and local government supervisors at the NTBLTC in Saye, Zaria."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Grants Managed */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Grants Managed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "ICCO grant (1993) - TB control in the Plateau",
                "NLR grant (1993) - TB control in Kaduna, Bauchi and Gombe",
                "Adamawa State Government (2000) - TB control in Adamawa",
                "GFATM Round 5 Phase 1 (2007 - 2009) - TB control in 13 states",
                "USAID-KNCV TBCAP/TBCARE (2008 - 2014)",
                "GFATM Consolidated Round 5 phase 2 (2010 - 2012) - 13 states",
                "GFATM Round 9 Phase 2 (2013 - 2015) - 13 states",
                "GFATM New Funding Model (2015 - 2017) - 9 states",
                "NLR Legacy Project (2016 - 2018)",
                "GFATM New Funding Model Extension (2018)",
                "GFATM PPM (2019 - 2020)"
              ].map((grant, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0"></div>
                  <span className="text-gray-700 text-sm font-medium">{grant}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
