import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Megaphone } from 'lucide-react';
import { pressReleaseStore, PressRelease } from '../lib/mediaStore';

const PressDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [press, setPress] = useState<PressRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPress = async () => {
      try {
        if (id) {
          const data = await pressReleaseStore.getById(id);
          setPress(data);
        }
      } catch (e) {
        console.error("Failed to fetch press release", e);
      } finally {
        setLoading(false);
      }
    };
    fetchPress();
    window.scrollTo(0, 0);
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(press?.title || 'LTR Nigeria Press Release');

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-white">
        <div className="animate-spin w-12 h-12 border-4 border-[#008753]/20 border-t-[#008753] rounded-full" />
      </div>
    );
  }

  if (!press) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Press Release Not Found</h2>
        <p className="text-lg text-gray-500 mb-8 max-w-md">The document you are looking for does not exist, has been moved, or may have been deleted.</p>
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
      className="bg-zinc-50 min-h-screen pb-24"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 pt-36">
        
        {/* Prominent Back Button */}
        <div className="mb-14">
          <Link to="/media#press" className="inline-flex items-center gap-2.5 bg-white border border-gray-200 text-gray-700 hover:text-white hover:border-[#008753] hover:bg-[#008753] px-6 py-3 rounded-full font-bold transition-all shadow-sm hover:shadow-md group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform" /> Back to Media Center
          </Link>
        </div>

        {/* PR Official Header */}
        <div className="border-b-4 border-gray-900 pb-10 mb-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5 text-[#008753] bg-green-100 px-4 py-1.5 rounded-full w-fit">
              <Megaphone size={16} /> <span className="font-extrabold text-sm uppercase tracking-widest">Official Press Release</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            {press.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm sm:text-base text-gray-500 uppercase font-semibold tracking-wider">
            <span className="flex items-center gap-2"><Calendar size={18} /> {new Date(press.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-2"><User size={18} /> SOURCE: <span className="text-gray-900">{press.source}</span></span>
          </div>
        </div>

        {/* PR Main Content */}
        <article className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          {press.coverImage && (
            <div className="h-[400px] w-full bg-gray-100 relative overflow-hidden">
              <img src={press.coverImage} alt={press.title} className="w-full h-full object-cover" />
            </div>
          )}
          
          <div className="p-8 sm:p-12 md:p-16">
            <p className="text-xl sm:text-3xl text-gray-800 font-serif leading-relaxed font-medium mb-12">
              <span className="font-sans text-[#008753] font-black text-2xl mr-2">—</span>
              {press.summary}
            </p>

            {/* Markdown or plain text block (supporting basic newlines) */}
            <div className="prose prose-lg sm:prose-xl prose-stone max-w-none text-gray-700 leading-loose whitespace-pre-wrap font-serif">
              {press.content}
            </div>
            
            <div className="mt-14 pt-8 text-center text-gray-400 font-serif text-2xl italic">
              ###
            </div>
          </div>
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-10 border-t-2 border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-8 bg-transparent">
          <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
            <span className="text-gray-900 font-black text-xl flex items-center gap-2 tracking-tight">
               Share this release
            </span>
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

export default PressDetail;
