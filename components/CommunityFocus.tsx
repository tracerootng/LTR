
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Leaf, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CARDS = [
  {
    title: "Support for Families",
    description: "Ensuring healthy children and grandchildren of former leprosy patients through education and medical care.",
    image: "https://www.ltrnigeria.org/images/kids_of.jpg",
    icon: <Users className="text-[#008753]" />,
    cta: "Learn More"
  },
  {
    title: "Become a Volunteer",
    description: "Your time and skills can make a massive difference in our field work and advocacy across 13 states.",
    image: "https://www.ltrnigeria.org/img/17.jpg",
    icon: <HandHeart className="text-[#008753]" />,
    cta: "Join Today"
  },
  {
    title: "Sustainable Health",
    description: "Building community-led programs that ensure long-term monitoring and prevention of TB outbreaks.",
    image: "https://picsum.photos/id/442/400/300",
    icon: <Leaf className="text-[#008753]" />,
    cta: "Our Impact"
  }
];

const CommunityFocus: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Focused on Community <span className="text-[#008753]">Empowerment</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We go beyond treatment, focusing on the social reintegration and health of former patients and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#F3F4F6] rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white p-3 rounded-2xl shadow-lg">
                  {card.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {card.description}
                </p>
                <Link to="/projects" className="text-[#008753] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  {card.cta}
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFocus;
