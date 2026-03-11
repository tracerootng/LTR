import React from 'react';
import { motion } from 'framer-motion';
import { Image, Newspaper, BookOpen, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MEDIA_CARDS = [
  {
    id: 'gallery',
    label: 'Gallery',
    description: 'Photos from our field work, events, and community programmes across Nigeria.',
    icon: <Image size={22} />,
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    textColor: 'text-blue-600',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
  },
  {
    id: 'newsletters',
    label: 'Newsletters',
    description: 'Quarterly updates and annual reports documenting our impact and milestones.',
    icon: <Newspaper size={22} />,
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-green-50',
    textColor: 'text-[#008753]',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
  },
  {
    id: 'articles',
    label: 'Articles',
    description: 'In-depth research, stories and health insights from our team of experts.',
    icon: <BookOpen size={22} />,
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    textColor: 'text-purple-600',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
  {
    id: 'press',
    label: 'Press Releases',
    description: 'Official statements and announcements from LTR Nigeria to the public.',
    icon: <Megaphone size={22} />,
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    textColor: 'text-amber-600',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
];

const MediaHubSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#008753] text-xs font-bold uppercase tracking-widest mb-3"
            >
              <span className="w-6 h-0.5 bg-[#008753] rounded-full" />
              Media & Communications
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              Stories, Updates &{' '}
              <span className="text-[#008753]">Insights</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Link
              to="/media"
              className="group inline-flex items-center gap-2 bg-[#008753] hover:bg-[#006B42] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 text-sm shadow-lg shadow-green-900/20"
            >
              Visit Media Hub
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDIA_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={`/media#${card.id}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Icon badge */}
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg`}>
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`font-bold text-lg mb-2 ${card.textColor} group-hover:opacity-80 transition-opacity`}>
                    {card.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${card.textColor}`}>
                    Browse {card.label}
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaHubSection;
