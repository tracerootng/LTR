import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { articleStore, Article } from '../lib/mediaStore';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (id) {
          const data = await articleStore.getById(id);
          setArticle(data);
        }
      } catch (e) {
        console.error("Failed to fetch article", e);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
    window.scrollTo(0, 0);
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(article?.title || 'LTR Nigeria Article');

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-white">
        <div className="animate-spin w-12 h-12 border-4 border-[#008753]/20 border-t-[#008753] rounded-full" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Article Not Found</h2>
        <p className="text-lg text-gray-500 mb-8 max-w-md">The article you are looking for does not exist, has been moved, or may have been deleted.</p>
        <Link to="/media" className="bg-[#008753] hover:bg-[#006B42] text-white px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 shadow-lg flex items-center gap-3">
          <ArrowLeft size={20} /> Return to Media Center
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen pb-24"
    >
      {/* Massive Hero Section */}
      <div className="relative h-[65vh] min-h-[500px] w-full bg-gray-900 flex flex-col justify-end">
        <img src={article.coverImage} alt={article.title} className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900/80 to-transparent" />
        
        {/* Prominent Floating Back Button below Navbar */}
        <div className="absolute top-28 md:top-32 left-6 md:left-10 z-20">
          <Link to="/media#articles" className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1.5 transition-transform" /> Back to Media
          </Link>
        </div>

        {/* Header Content overlaid */}
        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 pb-16 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            {article.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1.5 text-xs sm:text-sm bg-[#008753] text-white font-bold px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md">
                <Tag size={14} /> {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-base md:text-lg text-gray-200 font-medium border-l-4 border-[#008753] pl-4">
            <span className="flex items-center gap-2"><User size={20} className="text-[#008753]" /> <span className="text-white">{article.author}</span></span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><Calendar size={20} className="text-[#008753]" /> <span className="text-white">{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 mt-16">
        
        {/* Intro / Excerpt section */}
        {article.excerpt && (
           <p className="text-xl sm:text-2xl text-gray-700 font-medium leading-relaxed italic border-l-4 border-[#008753] pl-6 sm:pl-8 py-4 sm:py-6 mb-14 bg-green-50/50 rounded-r-3xl">
              {article.excerpt}
           </p>
        )}

        {/* Markdown or plain text block (supporting basic newlines) */}
        {/* Font-serif looks much more journalistic and premium for longform articles */}
        <div className="prose prose-lg sm:prose-xl prose-green max-w-none text-gray-800 leading-loose whitespace-pre-wrap font-serif">
          {article.content}
        </div>

        {/* Author / End Mark */}
        <div className="mt-16 flex items-center justify-center gap-4 text-gray-300">
          <div className="h-px bg-gray-200 flex-grow" />
          <div className="w-2 h-2 rounded-full bg-[#008753]" />
          <div className="w-2 h-2 rounded-full bg-[#008753]" />
          <div className="w-2 h-2 rounded-full bg-[#008753]" />
          <div className="h-px bg-gray-200 flex-grow" />
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-10 border-t-2 border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8 bg-gray-50 p-8 rounded-3xl">
          <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
            <span className="text-gray-900 font-black text-xl flex items-center gap-2 tracking-tight">
               Share this article
            </span>
            <span className="text-gray-500 text-sm font-medium">Help us spread the word about LTR's missions.</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-[#25D366] hover:border-[#25D366] hover:text-white flex items-center justify-center text-gray-400 hover:shadow-lg transition-all hover:-translate-y-1 title='WhatsApp'">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white flex items-center justify-center text-gray-400 hover:shadow-lg transition-all hover:-translate-y-1">
              <Twitter size={20} />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white flex items-center justify-center text-gray-400 hover:shadow-lg transition-all hover:-translate-y-1">
              <Facebook size={20} />
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white flex items-center justify-center text-gray-400 hover:shadow-lg transition-all hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <button onClick={handleCopyLink} className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-800 hover:border-gray-800 hover:text-white flex items-center justify-center text-gray-400 hover:shadow-lg transition-all hover:-translate-y-1 title='Copy Link'">
              {copied ? <span className="text-xs font-bold text-[#008753]">Copied!</span> : <LinkIcon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleDetail;
