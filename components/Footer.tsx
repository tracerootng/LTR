
import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="https://www.ltrnigeria.org/images/ltr-logo.png" 
                alt="LTR Nigeria Logo" 
                className="h-16 object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to a world free of Leprosy and Tuberculosis. An indigenous non-profit organization serving Nigeria since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/LTRNigeria/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#008753] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/ltrnigeria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#008753] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all block text-sm">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all block text-sm">Our Projects</Link></li>
              <li><Link to="/where-we-work" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all block text-sm">Where We Work</Link></li>
              <li><Link to="/#vacancies" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all block text-sm">Vacancies</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all block text-sm">Partners</Link></li>
              <li><Link to="/#privacy" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all block text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#008753] mt-1 shrink-0" size={20} />
                <span className="text-gray-400 text-sm">
                  No. 30 Da Chibi Rwang Street, Rayfield, Jos, Plateau State, Nigeria.<br/>
                  P.O. Box 759 Bukuru.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-[#008753] shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm flex flex-col">
                  <span>+234 909 497 7500</span>
                  <span>+234 805 637 7735</span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-[#008753] shrink-0" size={20} />
                <span className="text-gray-400 text-sm">info@ltrnigeria.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; 2018 Leprosy and Tuberculosis Relief Initiative Nigeria. Designed & hosted by Bethnan Hosting
          </p>
          <button 
            onClick={scrollToTop}
            className="group bg-gray-800 p-3 rounded-full hover:bg-[#008753] transition-colors"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
