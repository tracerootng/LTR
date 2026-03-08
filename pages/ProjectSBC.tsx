import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectSBC: React.FC = () => {
  const images = [
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-1.jpg",
      alt: "Mrs. Uko Itohowo Aquaowo- Head ACSM Unit, NTBLCP Abuja making her opening remark during the workshop for the development of SBC materials in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-2.jpg",
      alt: "L-R, Mr. Adebayo Peters- Leprosy FP, NTBLC, Abuja; Dr. Tahir Dahiru, LTR Executive Director and Mr. Pius Sunday Ogbu, Head of Programs, TLMN, Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-3.jpg",
      alt: "Dr. Tahir Dahiru, LTR Executive Director giving his welcome address during the workshop for the development of leprosy SBC Materials in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-4.jpg",
      alt: "Mrs. Uko Itohowo Aquaowo-Head ACSM Unit, NTBLCP making presentation during the workshop in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-5.jpg",
      alt: "Development of Leprosy SBC Materials Workshop - A cross section of participants"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-6.jpg",
      alt: "Mr. Pius Sunday Ogbu, Head of Programs, TLMN, Abuja making contributions during the workshop in Abuja"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-7.jpg",
      alt: "Mr. Adebayo Peters- Leprosy FP, NTBLC, Abuja giving more insight to a drafted material during the workshop"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-8.jpg",
      alt: "Group Work - The team led by Dr. Suleiman Hudu Abdullahi-Head of Programs, LTR"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-9.jpg",
      alt: "Dr. Suleiman Hudu Abdullahi-Head of Programs, LTR & Mr. Pius Sunday Ogbu, Head of Programs, TLMN during the team’s group work"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-10.jpg",
      alt: "Group Work- The team led by Dr. Suleiman Hudu Abdullahi-Head of Programs, LTR"
    },
    {
      src: "https://www.ltrnigeria.org/images/sm/PIX-11.jpg",
      alt: "Group Photograph of Participants During the Workshop for the Development of SBC Materials in Abuja"
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
            Development of Leprosy SBC & IEC Materials
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
              A team of SBC professionals and program staff from LTR and the NTBLCP met to develop a well-designed leprosy material with tailored leprosy messages with the potential to impact social norms and behaviors that will lead to a healthier society.
            </p>
            <p>
              The workshop for the development of Leprosy SBC Materials was attended by the ACSM sub-committee from the National program, Abuja (NTBLCP) and other leprosy partners led by Leprosy and Tuberculosis Relief Initiative Nigeria (LTR), Jos to review the generic leprosy IEC Materials and adapt them to Social and Behavioral Change Materials (SBC).
            </p>
            <p>
              The process of its development followed a structured procedures for materials design which in return will help ensure that program outputs are audience-focused and compelling, which ultimately will increase their effectiveness following the negative impact of the Covid-19 pandemic.
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

export default ProjectSBC;
