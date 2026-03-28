import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Megaphone, User } from 'lucide-react';
import { pressReleaseStore, PressRelease } from '../lib/mediaStore';

const LatestPressReleases: React.FC = () => {
  const [releases, setReleases] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPress = async () => {
      try {
        const data = await pressReleaseStore.getAll();
        // Just take the latest 3 press releases
        setReleases(data.slice(0, 3));
      } catch (e) {
        console.error("Failed to fetch press releases", e);
      } finally {
        setLoading(false);
      }
    };
    fetchPress();
  }, []);

  if (loading || releases.length === 0) {
    return null; // hide section if no releases or loading
  }

  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-green-50/50 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[#008753] text-xs font-bold uppercase tracking-widest mb-3"
            >
              <Megaphone size={14} className="text-[#008753]" /> LTR Nigeria Official
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              Latest Press <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008753] to-emerald-400">Releases</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Link
              to="/media#press"
              className="group inline-flex items-center gap-2 text-[#008753] border-b-2 border-[#008753]/30 hover:border-[#008753] font-bold py-1 transition-all duration-200"
            >
              View Full Feed
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((pr, i) => (
            <motion.div
              key={pr.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {pr.coverImage ? (
                <div className="h-56 w-full bg-gray-100 relative overflow-hidden">
                  <img src={pr.coverImage} alt={pr.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1.5">
                    <Calendar size={12} className="text-[#008753]" />
                    {new Date(pr.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>
              ) : (
                <div className="p-6 pb-0">
                   <div className="bg-gray-50 px-3 py-1.5 w-fit rounded-full text-xs font-bold text-gray-600 flex items-center gap-1.5 mb-4">
                    <Calendar size={12} className="text-[#008753]" />
                    {new Date(pr.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">
                   <User size={13} className="text-[#008753]" /> {pr.source}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug mb-4 group-hover:text-[#008753] transition-colors line-clamp-3">
                  {pr.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3 font-medium">
                  {pr.summary}
                </p>

                <Link
                  to={`/media/press/${pr.id}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-[#008753] text-[#008753] hover:text-white font-bold py-3.5 px-6 rounded-xl transition-colors w-full sm:w-auto self-start"
                >
                  Read Release <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPressReleases;
