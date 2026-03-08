import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectNSM: React.FC = () => {
  const images = [
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-1.jpg",
      alt: "Dr. Chukwuma Anyaike, The National Coordinator, NTBLCP, Abuja delivering his opening remark during the stakeholders meeting in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-2.jpg",
      alt: "L-R Dr. Chukwuma Anyaike-NC, NTBLCP, Abuja; Mr. Adebayo Peters-Leprosy FP, NTBLCP, Abuja and Mr. Pius Sunday Ogbu-Head of Program, TLMN Abuja during the READY4PEP National Stakeholders Meeting in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-3.jpg",
      alt: "L-R Dr. Aliyu Ibrahim-READY4PEP External Evaluator and Dr. Tahir Dahiru- The Executive Director of LTR during the National Stakeholders meeting in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-4.jpg",
      alt: "R-L Dr. Tahir Dahiru- The Executive Director of LTR; Dr. Aliyu Ibrahim-READY4PEP External Evaluator and Mr. Oluwole Akeredolu, Head of Finance, LTR, Jos"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-5.jpg",
      alt: "Dr. Ngozi Ekeke- Program Units, GLRA Enugu making a contribution during the National Stakeholders Meeting in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-6.jpg",
      alt: "Group photograph of participants during the READY4PEP national stakeholders meeting in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-7.jpg",
      alt: "Mr. Peter Lorkighir - President IDEA, Nigeria making contribution during the meeting in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-8.jpg",
      alt: "Dr. Yakubu Gida Abdullahi- Bauchi State PM making contribution during the meeting in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-9.jpg",
      alt: "Mr. Deji John Bodunde-Head of M&E Unit, LTR Jos making his presentation during the Meeting"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-10.jpg",
      alt: "Chinwe Eze- M & E Units, GLRA Enugu making her presentation during the meeting"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-11.jpg",
      alt: "Dr. Saminu Mshelia, Program Unit, TLMN Nigeria making his presentation during the Meeting"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-12.jpg",
      alt: "Dr. Suleiman Hudu Abdullahi-Head of Program, LTR Jos making a general presentation of the Project during the READY4PEP National Stakeholders meeting in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-13.jpg",
      alt: "Dr. Tahir Dahiru- The Executive Director of LTR delivering his welcome address during the meeting in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/nsm/PIX-14.jpg",
      alt: "Mr. Oluwole Akeredolu- Head of Finance, LTR Jos making his presentation during the meeting in Abuja"
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
            Ready4PEP National Stakeholders Meeting
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
              The Bi-annual National Stakeholders Meeting for the READY4PEP Project was held on Tuesday 1st March 2022. This National Level Meeting will provide partners and stakeholders with opportunity to present progress update of the READY4PEP Project, share lessons learned and discuss other pressing issues affecting the project implementation and other leprosy control activities in Nigeria.
            </p>
            <p>
              Part of the activity during the meeting is the deliberations on the End-of-year evaluation report as presented by the project's external evaluator, Dr. Aliyu Ibrahim.
            </p>
            <p>
              The heart-warming report was discussed by all stakeholders and it was agreed that, following the success stories of the project in the state of implementation- Bauchi, Ebonyi, Cross River, Jigawa, Kebbi and Niger states from 12 LGAs to 26 LGAs (Additional 14 LGAs) following the negative impact of the Covid-19 pandemic.
            </p>
          </motion.section>

          {/* Picture Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Picture Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, idx) => (
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

export default ProjectNSM;
