import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Image, BookOpen, Megaphone, Download, ExternalLink, Calendar, User, Tag, ArrowRight, ChevronRight } from 'lucide-react';
import { Newsletter, GalleryItem, Article, PressRelease, newsletterStore, galleryStore, articleStore, pressReleaseStore } from '../lib/mediaStore';

type Tab = 'gallery' | 'newsletters' | 'articles' | 'press';

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'gallery',      label: 'Gallery',          icon: <Image size={18} /> },
  { id: 'newsletters',  label: 'Newsletters',       icon: <Newspaper size={18} /> },
  { id: 'articles',     label: 'Articles',          icon: <BookOpen size={18} /> },
  { id: 'press',        label: 'Press Releases',    icon: <Megaphone size={18} /> },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const GallerySection: React.FC<{ items: GalleryItem[] }> = ({ items }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(items.map(i => i.category)))];
  const visible = filter === 'All' ? items : items.filter(i => i.category === filter);
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === cat
                ? 'bg-[#008753] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {visible.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-xs font-semibold text-[#4ade80] uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                <p className="text-gray-200 text-xs mt-1 flex items-center gap-1"><Calendar size={11} /> {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
              </div>
              {/* Static pill */}
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#008753] px-3 py-1 rounded-full">{item.category}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.imageUrl} alt={selected.title} className="w-full max-h-[60vh] object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold text-[#008753] uppercase tracking-wider">{selected.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{selected.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{selected.description}</p>
                <p className="text-gray-400 text-xs mt-3 flex items-center gap-1"><Calendar size={12} /> {selected.date}</p>
              </div>
              <button className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-red-50 transition-colors" onClick={() => setSelected(null)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NewsletterSection: React.FC<{ items: Newsletter[] }> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((nl, i) => (
      <motion.div
        key={nl.id}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08 }}
        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
      >
        <div className="relative h-48 overflow-hidden bg-gray-50">
          <img src={nl.coverImage} alt={nl.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute bottom-4 left-4 bg-[#008753] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Newspaper size={11} /> Newsletter
          </span>
        </div>
        <div className="p-6 flex flex-col gap-3">
          <p className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={12} /> {new Date(nl.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-[#008753] transition-colors">{nl.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-grow">{nl.description}</p>
          <a href={nl.fileUrl} className="inline-flex items-center gap-2 bg-[#008753] hover:bg-[#006B42] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors mt-2 w-fit">
            <Download size={15} /> Download PDF
          </a>
        </div>
      </motion.div>
    ))}
  </div>
);

const ArticlesSection: React.FC<{ items: Article[] }> = ({ items }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {items.map((article, i) => (
      <motion.div
        key={article.id}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08 }}
        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row"
      >
        <div className="md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden bg-gray-50">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6 flex flex-col gap-2 flex-grow">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1"><Calendar size={11} /> {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><User size={11} /> {article.author}</span>
          </div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-[#008753] transition-colors">{article.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-grow">{article.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {article.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 text-xs bg-green-50 text-[#008753] font-medium px-2.5 py-1 rounded-full">
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
          <button className="self-start flex items-center gap-1 text-[#008753] text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
            Read More <ArrowRight size={14} />
          </button>
        </div>
      </motion.div>
    ))}
  </div>
);

const PressSection: React.FC<{ items: PressRelease[] }> = ({ items }) => (
  <div className="space-y-6">
    {items.map((pr, i) => (
      <motion.div
        key={pr.id}
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.08 }}
        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex gap-0"
      >
        <div className="w-3 bg-[#008753] flex-shrink-0 group-hover:w-4 transition-all duration-300" />
        <div className="flex flex-col md:flex-row gap-0 flex-grow">
          <div className="md:w-56 h-44 md:h-auto flex-shrink-0 overflow-hidden bg-gray-50">
            <img src={pr.coverImage} alt={pr.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6 flex flex-col gap-2 flex-grow">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Megaphone size={10} /> Press Release
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={11} /> {new Date(pr.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-xl leading-tight group-hover:text-[#008753] transition-colors">{pr.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed flex-grow">{pr.summary}</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs text-gray-400">Source: <span className="font-medium text-gray-600">{pr.source}</span></span>
              <button className="flex items-center gap-1 text-[#008753] text-sm font-semibold hover:underline">
                View Full Release <ExternalLink size={13} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

const MediaPage: React.FC = () => {
  const location = useLocation();

  const hashToTab = (hash: string): Tab => {
    const map: Record<string, Tab> = {
      '#gallery': 'gallery',
      '#newsletters': 'newsletters',
      '#articles': 'articles',
      '#press': 'press',
    };
    return map[hash] ?? 'gallery';
  };

  const [activeTab, setActiveTab] = useState<Tab>(hashToTab(location.hash));
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [press, setPress] = useState<PressRelease[]>([]);

  // Switch tab when hash changes (e.g. navigating from navbar dropdown)
  useEffect(() => {
    setActiveTab(hashToTab(location.hash));
  }, [location.hash]);

  useEffect(() => {
    setNewsletters(newsletterStore.getAll().sort((a, b) => b.createdAt - a.createdAt));
    setGallery(galleryStore.getAll().sort((a, b) => b.createdAt - a.createdAt));
    setArticles(articleStore.getAll().sort((a, b) => b.createdAt - a.createdAt));
    setPress(pressReleaseStore.getAll().sort((a, b) => b.createdAt - a.createdAt));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#00200E] via-[#003D1E] to-[#005C2D] pt-36 pb-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#008753] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E67E22] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-green-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Media Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              News, Stories &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Impact Reports</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Stay informed with our latest newsletters, photo galleries, in-depth articles, and official press releases from LTR Nigeria.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center gap-8 md:gap-16 mt-14"
          >
            {[
              { label: 'Newsletters', count: newsletters.length },
              { label: 'Gallery Items', count: gallery.length },
              { label: 'Articles', count: articles.length },
              { label: 'Press Releases', count: press.length },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-white">{stat.count}+</div>
                <div className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-1">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                setActiveTab(tab.id);
                window.history.replaceState(null, '', `/media#${tab.id}`);
              }}
                className={`relative flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-[#008753]'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#008753] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {/* Section header */}
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  {TABS.find(t => t.id === activeTab)?.label}
                </h2>
                <div className="w-12 h-1 bg-[#008753] rounded-full mt-2" />
              </div>
              {activeTab === 'gallery' && (
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <ChevronRight size={14} /> Click any image to expand
                </div>
              )}
            </div>

            {activeTab === 'gallery' && <GallerySection items={gallery} />}
            {activeTab === 'newsletters' && <NewsletterSection items={newsletters} />}
            {activeTab === 'articles' && <ArticlesSection items={articles} />}
            {activeTab === 'press' && <PressSection items={press} />}

            {/* Empty state */}
            {((activeTab === 'gallery' && gallery.length === 0) ||
              (activeTab === 'newsletters' && newsletters.length === 0) ||
              (activeTab === 'articles' && articles.length === 0) ||
              (activeTab === 'press' && press.length === 0)) && (
              <div className="text-center py-24 text-gray-400">
                <div className="text-6xl mb-4">📂</div>
                <p className="text-lg font-medium">No content yet</p>
                <p className="text-sm">Check back soon or add content via the admin dashboard.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MediaPage;
