import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectSasakawa: React.FC = () => {
  const foodImages = [
    {
      src: "https://www.ltrnigeria.org/images/shf-project/bauchi/ba-3.jpg",
      alt: "Bauchi: Alh Tijani, IDEA Secretary calling out beneficiaries of food items"
    },
    {
      src: "https://www.ltrnigeria.org/images/shf-project/bauchi/ba-1.jpg",
      alt: "Bauchi: Dr. Suleiman Abdullahi distributing food items to beneficiaries"
    },
    {
      src: "https://www.ltrnigeria.org/images/shf-project/bauchi/ba-7.jpg",
      alt: "Bauchi: Dr. Suleiman Abdullahi distributing food items to IDEA members"
    },
    {
      src: "https://www.ltrnigeria.org/images/shf-project/bauchi/ba-4.jpg",
      alt: "Bauchi: Mr. Yohanna Lawan, Representative of Leprosy & TB Control Programme, presenting food items to a beneficiary"
    },
    {
      src: "https://www.ltrnigeria.org/images/shf-project/bauchi/ba-2.jpg",
      alt: "Bauchi: Dr. Suleiman Abdullahi (LTR), Mr. Yohanna Lawan (BSTBLCP) with IDEA members"
    },
    {
      src: "https://www.ltrnigeria.org/images/shf-project/kano/ka-2.jpg",
      alt: "Kano: IDEA member receiving food item"
    },
    {
      src: "https://www.ltrnigeria.org/images/shf-project/kano/ka-1.jpg",
      alt: "Kano: Isyaku Abdullahi, IDEA Financial Secretary sensitizing IDEA Members during distribution of food items"
    },
    {
      src: "https://www.ltrnigeria.org/images/shf-project/kano/ka-3.jpg",
      alt: "Kano: Group picture of beneficiaries of food items"
    }
  ];

  const covidImages = [
    {
      src: "https://www.ltrnigeria.org/images/shf-project/bauchi/ba-5.jpg",
      alt: "Dr Suleiman, LTR with Beneficiaries of COVID-19 Preventive materials in Bauchi State"
    },
    {
      src: "https://www.ltrnigeria.org/images/shf-project/bauchi/ba-6.jpg",
      alt: "L-R IDEA Sec Gen Alh Tijani, IDEA Member and LTR M&E Officer, Dr. Suleiman Abdullahi during the distribution of COVID-19 preventive materials in Bauchi state"
    }
  ];

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
            Sasakawa Project
          </h1>
          <div className="w-24 h-1 bg-[#008753] rounded-full mb-8"></div>
        </motion.div>

        <div className="space-y-16">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          >
            <img 
              src="https://www.ltrnigeria.org/images/shf.jpg" 
              alt="Sasakawa Project Banner" 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg text-gray-600 max-w-none text-justify space-y-4"
          >
            <p>
              Sasakawa Health Foundation (SHF), Japan in partnership with LTR Nigeria, engaged in the provision of relief materials, soaking materials for self-care, COVID-19 preventive materials and capacity building for organizations and persons affected by Leprosy/Hansen's disease (IDEA) during the COVID-19 pandemic in Bauchi, Kano and Plateau States of Nigeria following the negative impact of the Covid-19 pandemic.
            </p>
            <p>
              This intervention is funded by Sasakawa Health Foundation (SHF), Tokyo and implemented by Leprosy and TB Relief Initiative Nigeria (LTR) in the three aforementioned States.
            </p>
            <p>
              A total of 600 beneficiaries made up of 200 from each of the intervention States were selected for this Project. These 200 beneficiaries from each of the States of intervention were divided into four groups of 50 for each of the activities ranging from distribution of relief/food items, distribution of soaking materials for self-care, distribution of COVID-19 preventive materials and building of capacity of IDEA members in soap-making and poultry.
            </p>
            <p>
              All activities were carried out in each of the selected state in stages as outlined below.
            </p>
            <p>
              The first three activities were implemented in the following order: Bauchi, Monday 14th December, 2020. Plateau, Wednesday 16th and 17th December, 2020 (for Jos and Mangu beneficiaries respectively). And Kano, Saturday 19th December, 2020.
            </p>
            <p>
              The last activity, i.e. capacity building was implemented in the following order: Kano, Monday 28th December, 2020. Bauchi, Tuesday 29th December, 2020. And Plateau, Wednesday 30th December, 2020.
            </p>
          </motion.section>

          {/* Food Items Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Distribution of Relief/Food Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodImages.map((img, idx) => (
                <div key={idx} className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-gray-50 flex-grow flex items-center justify-center">
                    <p className="text-sm text-gray-600 text-center">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* COVID Materials Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Distribution of COVID-19 Preventive Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {covidImages.map((img, idx) => (
                <div key={idx} className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-gray-50 flex-grow flex items-center justify-center">
                    <p className="text-sm text-gray-600 text-center">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProjectSasakawa;
