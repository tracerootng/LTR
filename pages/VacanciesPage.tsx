import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, MapPin, Calendar, Clock, ChevronDown, ChevronUp,
  Mail, FileText, AlertCircle, CheckCircle2, Users, Building2
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

interface Vacancy {
  id: string;
  title: string;
  ref: string;
  location: string;
  type: string;
  deadline: string;
  status: 'open' | 'closed';
  description: string;
  qualifications?: string;
  category: string;
}

const VACANCIES: Vacancy[] = [
  {
    id: '1',
    title: 'PDX Data Assistant',
    ref: 'LTR (PMU)/_2025/PDX/001',
    location: 'Adamawa, Borno, Gombe, Plateau, and Yobe States',
    type: 'Contract (12 months)',
    deadline: '23 February 2025',
    status: 'closed',
    category: 'Program',
    qualifications: 'BA/BSc/HND/OND in any related field with 1 year experience.',
    description:
      'Responsible for data entry, documentation, and screening records for the PDX Unit during ACF outreach activities. The Data Assistant will support the program team in maintaining accurate and timely data across all outreach sites.',
  },
  {
    id: '2',
    title: 'State Adhoc Officer',
    ref: 'LTR (PMU)/_2025/SAO/001',
    location: 'Yobe State',
    type: 'Full-time',
    deadline: '21 February 2025',
    status: 'closed',
    category: 'Program',
    qualifications: 'BA/BSc/HND in Public Health, Social Sciences, or related fields with 3 years experience.',
    description:
      'Overhauls programmatic activities, including monitoring and evaluation of TB/HIV services in the state. The officer will work closely with the state team to ensure quality and timely implementation of all program deliverables.',
  },
  {
    id: '3',
    title: 'Community-Based Organizations (CBOs) – Expression of Interest',
    ref: 'LTR (PMU)/GC7/CBO/2024',
    location: 'Adamawa, Borno, Gombe, Plateau, and Yobe States',
    type: 'Contract',
    deadline: 'February 2024',
    status: 'closed',
    category: 'Partnership',
    description:
      'Solicitation for organizations to provide community-level TB and PMTCT services under the Global Fund Grant Cycle 7 (GC7). Interested CBOs must demonstrate capacity in community mobilization and health service delivery.',
  },
  {
    id: '4',
    title: 'Head of Administration (HOA)',
    ref: 'LTR (FAU)/_2023/HOA/001',
    location: 'Jos, Plateau State',
    type: 'Full-time',
    deadline: 'December 2023',
    status: 'closed',
    category: 'Administration',
    qualifications: '7+ years in Administration/HR with at least 5 years in senior management.',
    description:
      'Provides strategic leadership for Human Resources, Logistics, and Administrative functions across the organization. The HOA will ensure efficient administrative systems and lead the HR team in talent management and staff development.',
  },
  {
    id: '5',
    title: 'Assistant Finance Officer',
    ref: 'LTR (PMU)/_2023/AFO/001',
    location: 'Gombe, Adamawa, Yobe, Borno, and Plateau States',
    type: 'Full-time',
    deadline: '13 December 2023',
    status: 'closed',
    category: 'Finance',
    description:
      'Supports the Finance Officer in financial management, reporting, and documentation at the state level. Responsibilities include reviewing expense reports, supporting financial audits, and ensuring compliance with donor requirements.',
  },
  {
    id: '6',
    title: 'State Technical Officer',
    ref: 'LTR (PMU)/_2023/STO/001',
    location: 'Multiple States (North East / North Central)',
    type: 'Full-time',
    deadline: '13 December 2023',
    status: 'closed',
    category: 'Program',
    description:
      'Provides technical guidance for the integration of TB/HIV services and ensures quality service delivery at the state level. The Officer will mentor healthcare workers and coordinate with government partners to strengthen TB case-finding.',
  },
  {
    id: '7',
    title: 'CPPM Cluster Coordinator',
    ref: 'LTR (PMU)/_2023/CPPMCC/001',
    location: 'Multiple States',
    type: 'Contract',
    deadline: '13 December 2023',
    status: 'closed',
    category: 'Program',
    description:
      'Coordinates Community Public-Private Mix (CPPM) activities to enhance TB case finding at the community level. The Coordinator will manage a cluster of community volunteers and private providers, ensuring regular data reporting and quality activities.',
  },
  {
    id: '8',
    title: 'State Community TB/HIV Cascade Monitors',
    ref: 'LTR (PMU)/_2023/SCTBHCM/001',
    location: 'Multiple States',
    type: 'Contract',
    deadline: '13 December 2023',
    status: 'closed',
    category: 'Monitoring & Evaluation',
    description:
      'Monitors the TB/HIV cascade at the community level to improve treatment outcomes. The Monitor will track each patient from identification through treatment completion and report cascade data to the state program officer.',
  },
  {
    id: '9',
    title: 'State Sample Movement Consultant (SSMC)',
    ref: 'LTR (PMU)/_2023/SSMC/001',
    location: 'Multiple States',
    type: 'Consultancy',
    deadline: '13 December 2023',
    status: 'closed',
    category: 'Logistics',
    description:
      'Manages the transportation of TB samples from collection points to laboratories. The Consultant will establish and maintain a reliable sample referral network and ensure cold-chain standards are upheld throughout.',
  },
  {
    id: '10',
    title: 'Medical Advisor',
    ref: 'LTR (PMU)/_2023/MA/001',
    location: 'Jos, Plateau State',
    type: 'Full-time',
    deadline: '8 December 2023',
    status: 'closed',
    category: 'Medical',
    qualifications: 'MBBS with 5 years experience in public health or clinical practice.',
    description:
      'Provides medical oversight and clinical guidance across the organization\'s TB and Leprosy programs. The Medical Advisor will review clinical protocols, support training of healthcare workers, and liaise with national health authorities.',
  },
  {
    id: '11',
    title: 'State Driver',
    ref: 'LTR (FAU)/_2023/SD/001',
    location: 'Jos, Plateau State',
    type: 'Full-time',
    deadline: '21 February 2023',
    status: 'closed',
    category: 'Operations',
    qualifications: 'SSCE with 5 years of professional driving experience and a valid driver\'s license.',
    description:
      'Responsible for safe transportation of staff and materials across project sites. The Driver will maintain the assigned vehicle, keep accurate mileage logs, and comply with all LTR Nigeria vehicle policy requirements.',
  },
  {
    id: '12',
    title: 'State Adhoc Officer (General)',
    ref: 'LTR (PMU)/_2023/SAO/001',
    location: 'Plateau, Gombe, Adamawa, Borno, and Yobe States',
    type: 'Full-time',
    deadline: '13 December 2023',
    status: 'closed',
    category: 'Program',
    description:
      'Supports the implementation and monitoring of programmatic activities in assigned states including TB screenings, patient tracking, and community outreach. Reports directly to the State Program Coordinator.',
  },
];

const CATEGORIES = ['All', 'Program', 'Administration', 'Finance', 'Medical', 'Operations', 'Logistics', 'Monitoring & Evaluation', 'Partnership'];

const StatusBadge: React.FC<{ status: 'open' | 'closed' }> = ({ status }) =>
  status === 'open' ? (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
      <CheckCircle2 size={11} /> Open
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
      <AlertCircle size={11} /> Closed
    </span>
  );

const VacancyCard: React.FC<{ vacancy: Vacancy; index: number }> = ({ vacancy, index }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        vacancy.status === 'open'
          ? 'border-[#008753]/30 shadow-sm hover:shadow-lg hover:border-[#008753]/60'
          : 'border-gray-100 shadow-sm hover:shadow-md opacity-80'
      }`}
    >
      {/* Card header */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="flex-grow min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <StatusBadge status={vacancy.status} />
              <span className="text-xs font-semibold text-[#008753] bg-green-50 px-2.5 py-1 rounded-full">
                {vacancy.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-snug">{vacancy.title}</h3>
            <p className="text-xs text-gray-400 mt-1 font-mono">Ref: {vacancy.ref}</p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#008753]" /> {vacancy.location}</span>
          <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#008753]" /> {vacancy.type}</span>
          <span className="flex items-center gap-1.5"><Calendar size={13} className={vacancy.status === 'open' ? 'text-[#008753]' : 'text-gray-400'} /> Deadline: {vacancy.deadline}</span>
        </div>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-6 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-600 border-t border-gray-100"
      >
        {expanded ? 'Show less' : 'View details'}
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 border-t border-gray-100 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Description</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{vacancy.description}</p>
              </div>
              {vacancy.qualifications && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Qualifications</h4>
                  <p className="text-sm text-gray-600">{vacancy.qualifications}</p>
                </div>
              )}
              {vacancy.status === 'open' && (
                <div className="bg-green-50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-sm text-gray-700">Ready to apply? Send your CV and cover letter to:</p>
                  <a
                    href="mailto:info@ltrnigeria.org?subject=Application - [Job Title] - [Ref No]"
                    className="inline-flex items-center gap-2 bg-[#008753] hover:bg-[#006B42] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0"
                  >
                    <Mail size={14} /> Apply Now
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const VacanciesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') ?? 'All';

  const [filter, setFilter] = useState(
    CATEGORIES.includes(urlCategory) ? urlCategory : 'All'
  );
  const [statusFilter, setStatusFilter] = useState<'all' | 'open' | 'closed'>('all');

  // Sync filter when URL param changes (navbar dropdown navigation)
  useEffect(() => {
    setFilter(CATEGORIES.includes(urlCategory) ? urlCategory : 'All');
  }, [urlCategory]);

  const filtered = VACANCIES.filter(v =>
    (filter === 'All' || v.category === filter) &&
    (statusFilter === 'all' || v.status === statusFilter)
  );

  const openCount = VACANCIES.filter(v => v.status === 'open').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#00200E] via-[#003D1E] to-[#005C2D] pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#008753] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E67E22] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-green-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Careers at LTR Nigeria
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
              Join Our Mission to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">
                Eliminate Leprosy & TB
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              We are always looking for passionate individuals to join our team of healthcare professionals,
              program officers, and administrators working across Nigeria.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-10 md:gap-20 mt-14"
          >
            {[
              { label: 'Total Listings', value: VACANCIES.length, icon: <FileText size={18} /> },
              { label: 'Open Positions', value: openCount, icon: <CheckCircle2 size={18} /> },
              { label: 'States Covered', value: '13+', icon: <MapPin size={18} /> },
              { label: 'Departments', value: '7', icon: <Building2 size={18} /> },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Application info banner */}
      <div className="bg-[#008753] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3 text-sm">
            <Mail size={16} className="flex-shrink-0 text-green-200" />
            <span>
              <strong>How to apply:</strong> Send a single Word file (CV + cover letter) named{' '}
              <em>[Your Name] – [Job Title]</em> to{' '}
              <a href="mailto:info@ltrnigeria.org" className="underline font-bold hover:text-green-100">
                info@ltrnigeria.org
              </a>{' '}
              with the job reference number and state in the subject line.
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Status filter */}
          <div className="flex gap-2">
            {(['all', 'open', 'closed'] as const).map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                  statusFilter === s
                    ? 'bg-gray-900 text-white shadow'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400'
                }`}
              >
                {s === 'all' ? 'All Status' : s === 'open' ? '🟢 Open' : '⚫ Closed'}
              </button>
            ))}
          </div>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-[#008753] text-white shadow-md'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-[#008753] hover:text-[#008753]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <strong className="text-gray-800">{filtered.length}</strong> position{filtered.length !== 1 ? 's' : ''}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Users size={14} /> LTR Nigeria · Jos, Plateau State (HQ)
          </div>
        </div>

        {/* Vacancy list */}
        <div className="space-y-4">
          {filtered.map((v, i) => (
            <VacancyCard key={v.id} vacancy={v} index={i} />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <Briefcase size={40} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No vacancies found</p>
              <p className="text-sm mt-1">Try adjusting your filters.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-gradient-to-br from-[#008753] to-[#005C2D] rounded-2xl p-8 text-center">
          <h3 className="text-white text-xl font-bold mb-2">Don't see a suitable role?</h3>
          <p className="text-green-200 text-sm mb-5 max-w-lg mx-auto">
            We welcome speculative applications from qualified health professionals and development workers.
            Send your CV to us and we'll be in touch when a suitable opportunity arises.
          </p>
          <a
            href="mailto:info@ltrnigeria.org?subject=Speculative Application"
            className="inline-flex items-center gap-2 bg-white text-[#008753] font-bold px-7 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm"
          >
            <Mail size={16} /> Send Speculative Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default VacanciesPage;
