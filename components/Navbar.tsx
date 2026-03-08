
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';
import { Link } from 'react-router-dom';

const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Where we work', href: '/where-we-work' },
  { label: 'Partners', href: '/partners' },
  { 
    label: 'Projects', 
    href: '/projects',
    children: [
      { label: 'Global Fund Grant Cycle 7', href: '/projects/gc7' },
      { label: 'Training of Trainers (ToT)', href: '/projects/tot' },
      { label: 'Hackathon Audiopedia', href: '/projects/hackathon' },
      { label: 'Leprosy SBC & IEC Materials', href: '/projects/sbc' },
      { label: 'Ready4PEP Stakeholders', href: '/projects/nsm' },
      { label: 'Ready4PEP Project', href: '/projects/ready4pep' },
      { label: 'Sasakawa Project', href: '/projects/shf' }
    ]
  },
  { 
    label: 'Vacancies', 
    href: '#',
    children: [
      { label: 'Internships', href: '#' }
    ]
  },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://www.ltrnigeria.org/images/ltr-logo.png" 
                alt="LTR Nigeria Logo" 
                className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-14 md:h-16'}`}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                <Link 
                  to={link.href} 
                  className={`font-medium flex items-center transition-colors hover:text-[#008753] ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={16} className="ml-1" />}
                </Link>
                {link.children && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.children.map((child) => (
                      <Link key={child.label} to={child.href} className="block px-4 py-2 text-sm text-gray-600 hover:bg-[#F3F4F6] hover:text-[#008753]">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="bg-[#E67E22] hover:bg-[#D35400] text-white px-6 py-2.5 rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform active:scale-95">
              <Heart size={18} />
              Donate
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link 
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-6 space-y-2">
                      {link.children.map((child) => (
                        <Link key={child.label} to={child.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-500 hover:text-[#008753]">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-[#E67E22] text-white py-4 rounded-xl font-bold text-lg shadow-md">
                  Donate Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
