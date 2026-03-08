import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectReady4PEP: React.FC = () => {
  const clwImages = [
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/clw1.jpg",
      alt: "Dr. Suleiman Abdullahi making presentation to CLWs in Bauchi State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/clw2.jpg",
      alt: "Mr. Adamu Hadejia PM JSTBLCP making presentation to CLWs in Jigawa State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/clw3.jpg",
      alt: "Dr. Suleiman Hudu Abdullahi guiding CLWs on the filling of Leprosy Reporting Tools"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/clw6.jpg",
      alt: "Dr. Tahir Dahiru putting participants through the process of filling the reporting tools in Jigawa State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/clw7.jpg",
      alt: "A cross-section of participants during the training in Bauchi State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/clw4.jpg",
      alt: "Dr. Tahir Dahiru, Executive Director LTR giving his remark during the Training of CLWs in Jigawa State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/clw5.jpg",
      alt: "Group photograph of participants from Buji & Ringim LGAs of Jigawa State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/clw9.jpg",
      alt: "Group Photograph with Participants from Misau LGA of Bauchi State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/clw10.jpg",
      alt: "Group Photograph with Participants from Shira LGA of Bauchi State"
    }
  ];

  const mdtImages = [
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt4.jpg",
      alt: "Haruna Manyau of Bauchi State TB & Leprosy Control Program training MDT Officers on nerve palpation"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt8.jpg",
      alt: "Dr. Yakubu Gida PM BSTBLCP supervising a participant during the training of MDT Officers in the State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt9.jpg",
      alt: "Dr. Tahir Dahiru supervising participants on diagnosis of a suspecting leprosy patient during the training of MDT Officers in Jigawa State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt10.jpg",
      alt: "Dr. Tahir Dahiru having a demonstration on nerve palpation during the training of MDT Officers in Jigawa State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt11.jpg",
      alt: "Dr. Tahir Dahiru having a demonstration on nerve palpation during the training of MDT Officers in Jigawa State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt12.jpg",
      alt: "Dr. Suleiman Abdullahi taking the contact screening session in the training of MDT Officers in Bauchi State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt13.jpg",
      alt: "Dr, Tahir Dahiru taking participants through the Voluntary Muscle Test (VMT) during the training of MDT Officers in Jigawa State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt14.jpg",
      alt: "Dr. Tahir Dahiru supervising short demonstrating by participant during the training of MDT Officers in Jigawa State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt15.jpg",
      alt: "Dr. Tahir Dahiru supervising of sensory test by participants during the training of MDT Officers"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt16.jpg",
      alt: "Dr. Tahir Dahiru showing participants the little finger out test of a suspecting leprosy patients during the MDT Training"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt5.jpg",
      alt: "Group photograph of participants from Shira LGA during the training of MDT Officers in Bauchi State"
    },
    {
      src: "https://www.ltrnigeria.org/images/r4p-project/mdt6.jpg",
      alt: "Group photograph of participants from Misau LGA during the training of MDT Officers in Bauchi State"
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
            Ready4PEP Nigeria Project
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
            className="prose prose-lg text-gray-600 max-w-none text-justify space-y-4"
          >
            <p>
              Leprosy continues to be a devastating disease if not detected and treated in time.
            </p>
            <p>
              In 2018, the World Health Organization (WHO) endorsed the implementation of SDR-PEP as one of the strategies towards zero leprosy.
            </p>
            <p>
              The Ready4PEP Nigeria project is an initiative between the NLR international and LTR Nigeria. It is a multi-stakeholder (NLR, NTBLCP, ILEPS, STBLCP, IDEA and others) project that aims at implementing active case finding, contact screening, administration of SDR-PEP and disability prevention in Nigeria. These strategies are in line with general objectives of the National TB and Leprosy Control Programme and WHO triple zero global leprosy strategy.
            </p>
            <p>
              The training of the MDT officers is organized by LTR in collaboration with Bauchi State TBLCP & Jigawa State TBLCP which are among the six States where the READY4PEP Project Nigeria is being implemented. The main objective of the training is to build the capacity of health care professionals at intervention States' levels and provide them with necessary knowledge and skills on leprosy including SDR-PEP and POD using combined self-care group (CSCG).
            </p>
          </motion.section>

          {/* CLW Training Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Training of Community Leprosy Workers (CLWs) in Bauchi and Jigawa States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clwImages.map((img, idx) => (
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

          {/* MDT Training Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Training of MDT Officers in Bauchi and Jigawa States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mdtImages.map((img, idx) => (
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

export default ProjectReady4PEP;
