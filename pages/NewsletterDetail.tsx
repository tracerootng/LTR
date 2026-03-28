import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Download, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Newspaper } from 'lucide-react';
import { newsletterStore, Newsletter } from '../lib/mediaStore';

const NewsletterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [newsletter, setNewsletter] = useState<Newsletter | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchNewsletter = async () => {
      try {
        if (id) {
          const data = await newsletterStore.getById(id);
          setNewsletter(data);
        }
      } catch (e) {
        console.error("Failed to fetch newsletter", e);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsletter();
    window.scrollTo(0, 0);
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(newsletter?.title || 'LTR Nigeria Newsletter');

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-[#008753]/20 border-t-[#008753] rounded-full" />
      </div>
    );
  }

  if (!newsletter) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Newsletter Not Found</h2>
        <p className="text-gray-500 mb-6">The newsletter you are looking for does not exist or has been removed.</p>
        <Link to="/media" className="bg-[#008753] hover:bg-[#006B42] text-white px-6 py-3 rounded-xl font-bold transition-colors">
          Return to Media
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-36 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 mt-4">
          <Link to="/media#newsletters" className="inline-flex items-center gap-2.5 bg-white border border-gray-200 text-gray-700 hover:text-white hover:border-[#008753] hover:bg-[#008753] px-6 py-3 rounded-full font-bold transition-all shadow-sm hover:shadow-md group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform" /> Back to Media Center
          </Link>
        </div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row"
        >
          {newsletter.coverImage && (
            <div className="h-64 sm:h-96 lg:h-auto lg:w-1/2 overflow-hidden bg-gray-100 relative">
              <img src={newsletter.coverImage} alt={newsletter.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-6 left-6 bg-[#008753] text-white text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                <Newspaper size={14} /> Official Newsletter
              </span>
            </div>
          )}
          
          <div className={`p-8 sm:p-10 flex flex-col ${newsletter.coverImage ? 'lg:w-1/2' : 'w-full'}`}>
            <div className="flex items-center gap-2 text-[#008753] mb-6 border-b border-gray-100 pb-6 w-full">
              <span className="font-bold text-sm tracking-widest text-gray-400">PUBLISHED ON</span>
              <span className="flex items-center gap-1.5 text-gray-800 font-semibold ml-2">
                <Calendar size={16} className="text-[#008753]" /> 
                {new Date(newsletter.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
              {newsletter.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-auto pb-8">
              {newsletter.description}
            </p>

            {newsletter.fileUrl && (
              <div className="bg-green-50 rounded-2xl p-6 mb-8 border border-green-100">
                <h4 className="font-bold text-gray-900 mb-2">Read the Full Edition</h4>
                <p className="text-sm text-gray-600 mb-4">Download the original PDF to read all the articles, featured stories, and updates in this issue.</p>
                <a 
                  href={newsletter.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#008753] hover:bg-[#006B42] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md shadow-green-900/10 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Download size={18} /> Download Open PDF
                </a>
              </div>
            )}

            {/* Share Section */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row xl:flex-col items-start gap-4">
              <div className="flex items-center gap-2 text-gray-400 font-semibold text-sm">
                <Share2 size={16} /> Share Edition
              </div>
              <div className="flex items-center gap-3">
                <a href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-gray-500 transition-all title='WhatsApp'">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center text-gray-500 transition-all">
                  <Twitter size={18} />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-gray-500 transition-all">
                  <Facebook size={18} />
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center text-gray-500 transition-all">
                  <Linkedin size={18} />
                </a>
                <button onClick={handleCopyLink} className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-all title='Copy Link'">
                  {copied ? <span className="text-xs font-bold text-[#008753]">Copied!</span> : <LinkIcon size={18} />}
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default NewsletterDetail;
