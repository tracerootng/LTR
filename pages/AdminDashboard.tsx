import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Newspaper, Image, BookOpen, Megaphone,
  LogOut, Plus, Pencil, Trash2, X, Save, Search, ChevronDown,
  CheckCircle, AlertTriangle, ExternalLink, Shield, BarChart2,
  Users, TrendingUp, Eye
} from 'lucide-react';
import {
  authStore,
  newsletterStore, Newsletter,
  galleryStore, GalleryItem,
  articleStore, Article,
  pressReleaseStore, PressRelease,
} from '../lib/mediaStore';

// ─── Sidebar sections ─────────────────────────────────────────────────────────
type Section = 'overview' | 'newsletters' | 'gallery' | 'articles' | 'press';

const SIDEBAR_ITEMS: { id: Section; label: string; icon: React.ReactNode }[] = [
  { id: 'overview',     label: 'Overview',        icon: <LayoutDashboard size={18} /> },
  { id: 'newsletters',  label: 'Newsletters',      icon: <Newspaper size={18} /> },
  { id: 'gallery',      label: 'Gallery',          icon: <Image size={18} /> },
  { id: 'articles',     label: 'Articles',         icon: <BookOpen size={18} /> },
  { id: 'press',        label: 'Press Releases',   icon: <Megaphone size={18} /> },
];

// ─── Reusable components ──────────────────────────────────────────────────────

interface Toast { id: string; message: string; type: 'success' | 'error' }

const ToastContainer: React.FC<{ toasts: Toast[]; dismiss: (id: string) => void }> = ({ toasts, dismiss }) => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <AnimatePresence>
      {toasts.map(t => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl text-sm font-medium ${t.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}
        >
          {t.type === 'success' ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
          {t.message}
          <button onClick={() => dismiss(t.id)} className="ml-2 opacity-70 hover:opacity-100"><X size={14} /></button>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500);
  };
  const dismiss = (id: string) => setToasts(prev => prev.filter(t => t.id !== id));
  return { toasts, toast, dismiss };
}

// Modal wrapper
const Modal: React.FC<{ title: string; onClose: () => void; children: React.ReactNode }> = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm pt-16 pb-8 px-4 overflow-y-auto">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      className="bg-white rounded-2xl shadow-2xl w-full max-w-xl"
    >
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <X size={18} />
        </button>
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  </div>
);

// Form field helpers
const Field: React.FC<{ label: string; required?: boolean; children: React.ReactNode }> = ({ label, required, children }) => (
  <div className="space-y-1.5">
    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
      {label}{required && <span className="text-red-400 ml-1">*</span>}
    </label>
    {children}
  </div>
);

const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#008753] focus:ring-1 focus:ring-[#008753]/20 transition-all";
const textareaCls = `${inputCls} min-h-[90px] resize-y`;

// Delete confirm modal
const DeleteConfirm: React.FC<{ name: string; onConfirm: () => void; onCancel: () => void }> = ({ name, onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Trash2 size={24} className="text-red-500" />
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2">Delete Item</h3>
      <p className="text-gray-500 text-sm mb-6">Are you sure you want to delete <strong>"{name}"</strong>? This cannot be undone.</p>
      <div className="flex gap-3">
        <button onClick={onCancel} className="flex-1 border border-gray-200 text-gray-700 font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm">Cancel</button>
        <button onClick={onConfirm} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 rounded-xl transition-colors text-sm">Delete</button>
      </div>
    </motion.div>
  </div>
);

// ─── Overview Section ─────────────────────────────────────────────────────────
const OverviewSection: React.FC<{ counts: Record<string, number>; setSection: (s: Section) => void }> = ({ counts, setSection }) => {
  const stats = [
    { label: 'Newsletters', value: counts.newsletters, icon: <Newspaper size={20} />, color: 'from-green-500 to-emerald-600', section: 'newsletters' as Section },
    { label: 'Gallery Items', value: counts.gallery, icon: <Image size={20} />, color: 'from-blue-500 to-blue-600', section: 'gallery' as Section },
    { label: 'Articles', value: counts.articles, icon: <BookOpen size={20} />, color: 'from-purple-500 to-purple-600', section: 'articles' as Section },
    { label: 'Press Releases', value: counts.press, icon: <Megaphone size={20} />, color: 'from-amber-500 to-orange-500', section: 'press' as Section },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-500 text-sm mt-1">Manage all LTR Nigeria media content from here.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <motion.button
            key={stat.label}
            whileHover={{ y: -3 }}
            onClick={() => setSection(stat.section)}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 text-left border border-gray-100"
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
            <div className="text-xs text-[#008753] mt-2 font-semibold flex items-center gap-1">Manage <ExternalLink size={11} /></div>
          </motion.button>
        ))}
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <BarChart2 size={20} className="text-[#008753]" />, title: 'Content Reach', desc: 'All published content is live and visible on the public Media page.', color: 'green' },
          { icon: <Users size={20} className="text-blue-500" />, title: 'Audience', desc: 'Content is accessible to all website visitors without login.', color: 'blue' },
          { icon: <TrendingUp size={20} className="text-purple-500" />, title: 'Performance', desc: 'Keep your media fresh by updating content regularly.', color: 'purple' },
        ].map(card => (
          <div key={card.title} className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4">
            <div className={`w-10 h-10 rounded-xl bg-${card.color}-50 flex items-center justify-center flex-shrink-0`}>{card.icon}</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">{card.title}</h4>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="bg-gradient-to-br from-[#008753] to-[#005C2D] rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-bold text-lg">View Public Media Page</h3>
          <p className="text-green-200 text-sm mt-1">See how your content looks to visitors on the website.</p>
        </div>
        <a href="/media" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-[#008753] font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm whitespace-nowrap">
          <Eye size={16} /> Open Media Page
        </a>
      </div>
    </div>
  );
};

// ─── Newsletters Section ──────────────────────────────────────────────────────
const NewslettersSection: React.FC<{ toast: (m: string, t?: 'success' | 'error') => void }> = ({ toast }) => {
  const [items, setItems] = useState<Newsletter[]>([]);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState<'add' | 'edit' | null>(null);
  const [editing, setEditing] = useState<Newsletter | null>(null);
  const [deleting, setDeleting] = useState<Newsletter | null>(null);
  const empty = { title: '', description: '', date: '', fileUrl: '', coverImage: '' };
  const [form, setForm] = useState(empty);

  const reload = () => setItems(newsletterStore.getAll().sort((a, b) => b.createdAt - a.createdAt));
  useEffect(() => { reload(); }, []);

  const openEdit = (item: Newsletter) => { setEditing(item); setForm({ title: item.title, description: item.description, date: item.date, fileUrl: item.fileUrl, coverImage: item.coverImage }); setModal('edit'); };
  const openAdd = () => { setEditing(null); setForm(empty); setModal('add'); };
  const save = () => {
    if (!form.title || !form.date) { toast('Title and date are required.', 'error'); return; }
    if (modal === 'add') { newsletterStore.add(form); toast('Newsletter added!'); }
    else if (editing) { newsletterStore.update(editing.id, form); toast('Newsletter updated!'); }
    setModal(null); reload();
  };
  const confirmDelete = () => { if (deleting) { newsletterStore.delete(deleting.id); toast('Newsletter deleted.'); setDeleting(null); reload(); } };

  const visible = items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Newsletters</h2>
          <p className="text-gray-500 text-sm">{items.length} newsletter{items.length !== 1 ? 's' : ''} published</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 bg-[#008753] hover:bg-[#006B42] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors">
          <Plus size={16} /> Add Newsletter
        </button>
      </div>
      <div className="relative">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search newsletters..." className={`${inputCls} pl-10`} />
      </div>
      <div className="space-y-3">
        {visible.map(item => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 items-center hover:shadow-sm transition-shadow">
            <img src={item.coverImage} alt={item.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0 bg-gray-100" />
            <div className="flex-grow min-w-0">
              <h4 className="font-semibold text-gray-900 truncate">{item.title}</h4>
              <p className="text-gray-500 text-xs mt-0.5 truncate">{item.description}</p>
              <p className="text-gray-400 text-xs mt-1">{item.date}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => openEdit(item)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-green-50 hover:text-[#008753] transition-colors"><Pencil size={14} /></button>
              <button onClick={() => setDeleting(item)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-red-50 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
        {visible.length === 0 && <div className="text-center py-16 text-gray-400"><Newspaper size={32} className="mx-auto mb-3 opacity-40" /><p className="text-sm">No newsletters found</p></div>}
      </div>

      <AnimatePresence>
        {modal && (
          <Modal title={modal === 'add' ? 'Add Newsletter' : 'Edit Newsletter'} onClose={() => setModal(null)}>
            <div className="space-y-4">
              <Field label="Title" required><input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Newsletter title" /></Field>
              <Field label="Description"><textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className={textareaCls} placeholder="Brief description..." /></Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Date" required><input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className={inputCls} /></Field>
                <Field label="File URL"><input value={form.fileUrl} onChange={e => setForm(f => ({ ...f, fileUrl: e.target.value }))} className={inputCls} placeholder="PDF link" /></Field>
              </div>
              <Field label="Cover Image URL"><input value={form.coverImage} onChange={e => setForm(f => ({ ...f, coverImage: e.target.value }))} className={inputCls} placeholder="https://..." /></Field>
              {form.coverImage && <img src={form.coverImage} alt="preview" className="w-full h-36 object-cover rounded-xl" />}
              <div className="flex gap-3 pt-2">
                <button onClick={() => setModal(null)} className="flex-1 border border-gray-200 text-gray-700 font-medium py-2.5 rounded-xl hover:bg-gray-50 text-sm">Cancel</button>
                <button onClick={save} className="flex-1 bg-[#008753] hover:bg-[#006B42] text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"><Save size={14} /> Save</button>
              </div>
            </div>
          </Modal>
        )}
        {deleting && <DeleteConfirm name={deleting.title} onConfirm={confirmDelete} onCancel={() => setDeleting(null)} />}
      </AnimatePresence>
    </div>
  );
};

// ─── Gallery Section ──────────────────────────────────────────────────────────
const GallerySection: React.FC<{ toast: (m: string, t?: 'success' | 'error') => void }> = ({ toast }) => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState<'add' | 'edit' | null>(null);
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [deleting, setDeleting] = useState<GalleryItem | null>(null);
  const empty = { title: '', description: '', imageUrl: '', category: '', date: '' };
  const [form, setForm] = useState(empty);

  const reload = () => setItems(galleryStore.getAll().sort((a, b) => b.createdAt - a.createdAt));
  useEffect(() => { reload(); }, []);

  const openEdit = (item: GalleryItem) => { setEditing(item); setForm({ title: item.title, description: item.description, imageUrl: item.imageUrl, category: item.category, date: item.date }); setModal('edit'); };
  const openAdd = () => { setEditing(null); setForm(empty); setModal('add'); };
  const save = () => {
    if (!form.title || !form.imageUrl) { toast('Title and image URL are required.', 'error'); return; }
    if (modal === 'add') { galleryStore.add(form); toast('Gallery item added!'); }
    else if (editing) { galleryStore.update(editing.id, form); toast('Gallery item updated!'); }
    setModal(null); reload();
  };
  const confirmDelete = () => { if (deleting) { galleryStore.delete(deleting.id); toast('Item deleted.'); setDeleting(null); reload(); } };

  const visible = items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Gallery</h2>
          <p className="text-gray-500 text-sm">{items.length} image{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 bg-[#008753] hover:bg-[#006B42] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors">
          <Plus size={16} /> Add Image
        </button>
      </div>
      <div className="relative">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search gallery..." className={`${inputCls} pl-10`} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map(item => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 overflow-hidden bg-gray-50">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm truncate">{item.title}</h4>
                  <span className="text-xs bg-green-50 text-[#008753] font-medium px-2 py-0.5 rounded-full mt-1 inline-block">{item.category || 'Uncategorized'}</span>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  <button onClick={() => openEdit(item)} className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-green-50 hover:text-[#008753] transition-colors"><Pencil size={13} /></button>
                  <button onClick={() => setDeleting(item)} className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-red-50 hover:text-red-500 transition-colors"><Trash2 size={13} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {visible.length === 0 && <div className="col-span-3 text-center py-16 text-gray-400"><Image size={32} className="mx-auto mb-3 opacity-40" /><p className="text-sm">No images found</p></div>}
      </div>

      <AnimatePresence>
        {modal && (
          <Modal title={modal === 'add' ? 'Add Gallery Image' : 'Edit Gallery Image'} onClose={() => setModal(null)}>
            <div className="space-y-4">
              <Field label="Title" required><input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Image title" /></Field>
              <Field label="Description"><textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className={textareaCls} placeholder="Caption or description..." /></Field>
              <Field label="Image URL" required><input value={form.imageUrl} onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))} className={inputCls} placeholder="https://..." /></Field>
              {form.imageUrl && <img src={form.imageUrl} alt="preview" className="w-full h-40 object-cover rounded-xl" />}
              <div className="grid grid-cols-2 gap-4">
                <Field label="Category"><input value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className={inputCls} placeholder="e.g. Events" /></Field>
                <Field label="Date"><input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className={inputCls} /></Field>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setModal(null)} className="flex-1 border border-gray-200 text-gray-700 font-medium py-2.5 rounded-xl hover:bg-gray-50 text-sm">Cancel</button>
                <button onClick={save} className="flex-1 bg-[#008753] hover:bg-[#006B42] text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"><Save size={14} /> Save</button>
              </div>
            </div>
          </Modal>
        )}
        {deleting && <DeleteConfirm name={deleting.title} onConfirm={confirmDelete} onCancel={() => setDeleting(null)} />}
      </AnimatePresence>
    </div>
  );
};

// ─── Articles Section ─────────────────────────────────────────────────────────
const ArticlesSection: React.FC<{ toast: (m: string, t?: 'success' | 'error') => void }> = ({ toast }) => {
  const [items, setItems] = useState<Article[]>([]);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState<'add' | 'edit' | null>(null);
  const [editing, setEditing] = useState<Article | null>(null);
  const [deleting, setDeleting] = useState<Article | null>(null);
  const empty = { title: '', excerpt: '', content: '', author: '', date: '', coverImage: '', tags: [] as string[] };
  const [form, setForm] = useState(empty);
  const [tagsInput, setTagsInput] = useState('');

  const reload = () => setItems(articleStore.getAll().sort((a, b) => b.createdAt - a.createdAt));
  useEffect(() => { reload(); }, []);

  const openEdit = (item: Article) => { setEditing(item); setForm({ ...item }); setTagsInput(item.tags.join(', ')); setModal('edit'); };
  const openAdd = () => { setEditing(null); setForm(empty); setTagsInput(''); setModal('add'); };
  const save = () => {
    if (!form.title || !form.date) { toast('Title and date are required.', 'error'); return; }
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    if (modal === 'add') { articleStore.add({ ...form, tags }); toast('Article added!'); }
    else if (editing) { articleStore.update(editing.id, { ...form, tags }); toast('Article updated!'); }
    setModal(null); reload();
  };
  const confirmDelete = () => { if (deleting) { articleStore.delete(deleting.id); toast('Article deleted.'); setDeleting(null); reload(); } };
  const visible = items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Articles</h2>
          <p className="text-gray-500 text-sm">{items.length} article{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 bg-[#008753] hover:bg-[#006B42] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors">
          <Plus size={16} /> Add Article
        </button>
      </div>
      <div className="relative">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." className={`${inputCls} pl-10`} />
      </div>
      <div className="space-y-3">
        {visible.map(item => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 items-center hover:shadow-sm transition-shadow">
            <img src={item.coverImage} alt={item.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0 bg-gray-100" />
            <div className="flex-grow min-w-0">
              <h4 className="font-semibold text-gray-900 truncate">{item.title}</h4>
              <p className="text-gray-500 text-xs mt-0.5">By {item.author} · {item.date}</p>
              <p className="text-gray-400 text-xs mt-1 truncate">{item.excerpt}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => openEdit(item)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-green-50 hover:text-[#008753] transition-colors"><Pencil size={14} /></button>
              <button onClick={() => setDeleting(item)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-red-50 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
        {visible.length === 0 && <div className="text-center py-16 text-gray-400"><BookOpen size={32} className="mx-auto mb-3 opacity-40" /><p className="text-sm">No articles found</p></div>}
      </div>

      <AnimatePresence>
        {modal && (
          <Modal title={modal === 'add' ? 'Add Article' : 'Edit Article'} onClose={() => setModal(null)}>
            <div className="space-y-4">
              <Field label="Title" required><input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Article title" /></Field>
              <Field label="Excerpt"><textarea value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} className={textareaCls} placeholder="Short summary..." /></Field>
              <Field label="Content"><textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} className={`${textareaCls} min-h-[120px]`} placeholder="Full article content..." /></Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Author"><input value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))} className={inputCls} placeholder="Author name" /></Field>
                <Field label="Date" required><input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className={inputCls} /></Field>
              </div>
              <Field label="Cover Image URL"><input value={form.coverImage} onChange={e => setForm(f => ({ ...f, coverImage: e.target.value }))} className={inputCls} placeholder="https://..." /></Field>
              {form.coverImage && <img src={form.coverImage} alt="preview" className="w-full h-36 object-cover rounded-xl" />}
              <Field label="Tags (comma-separated)"><input value={tagsInput} onChange={e => setTagsInput(e.target.value)} className={inputCls} placeholder="Leprosy, TB, Health" /></Field>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setModal(null)} className="flex-1 border border-gray-200 text-gray-700 font-medium py-2.5 rounded-xl hover:bg-gray-50 text-sm">Cancel</button>
                <button onClick={save} className="flex-1 bg-[#008753] hover:bg-[#006B42] text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"><Save size={14} /> Save</button>
              </div>
            </div>
          </Modal>
        )}
        {deleting && <DeleteConfirm name={deleting.title} onConfirm={confirmDelete} onCancel={() => setDeleting(null)} />}
      </AnimatePresence>
    </div>
  );
};

// ─── Press Releases Section ───────────────────────────────────────────────────
const PressSection: React.FC<{ toast: (m: string, t?: 'success' | 'error') => void }> = ({ toast }) => {
  const [items, setItems] = useState<PressRelease[]>([]);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState<'add' | 'edit' | null>(null);
  const [editing, setEditing] = useState<PressRelease | null>(null);
  const [deleting, setDeleting] = useState<PressRelease | null>(null);
  const empty = { title: '', summary: '', content: '', date: '', source: '', coverImage: '' };
  const [form, setForm] = useState(empty);

  const reload = () => setItems(pressReleaseStore.getAll().sort((a, b) => b.createdAt - a.createdAt));
  useEffect(() => { reload(); }, []);

  const openEdit = (item: PressRelease) => { setEditing(item); setForm({ ...item }); setModal('edit'); };
  const openAdd = () => { setEditing(null); setForm(empty); setModal('add'); };
  const save = () => {
    if (!form.title || !form.date) { toast('Title and date are required.', 'error'); return; }
    if (modal === 'add') { pressReleaseStore.add(form); toast('Press release added!'); }
    else if (editing) { pressReleaseStore.update(editing.id, form); toast('Press release updated!'); }
    setModal(null); reload();
  };
  const confirmDelete = () => { if (deleting) { pressReleaseStore.delete(deleting.id); toast('Press release deleted.'); setDeleting(null); reload(); } };
  const visible = items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Press Releases</h2>
          <p className="text-gray-500 text-sm">{items.length} press release{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 bg-[#008753] hover:bg-[#006B42] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors">
          <Plus size={16} /> Add Press Release
        </button>
      </div>
      <div className="relative">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search press releases..." className={`${inputCls} pl-10`} />
      </div>
      <div className="space-y-3">
        {visible.map(item => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 items-center hover:shadow-sm transition-shadow">
            <img src={item.coverImage} alt={item.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0 bg-gray-100" />
            <div className="flex-grow min-w-0">
              <h4 className="font-semibold text-gray-900 truncate">{item.title}</h4>
              <p className="text-gray-500 text-xs mt-0.5">{item.source} · {item.date}</p>
              <p className="text-gray-400 text-xs mt-1 truncate">{item.summary}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => openEdit(item)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-green-50 hover:text-[#008753] transition-colors"><Pencil size={14} /></button>
              <button onClick={() => setDeleting(item)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-red-50 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
        {visible.length === 0 && <div className="text-center py-16 text-gray-400"><Megaphone size={32} className="mx-auto mb-3 opacity-40" /><p className="text-sm">No press releases found</p></div>}
      </div>

      <AnimatePresence>
        {modal && (
          <Modal title={modal === 'add' ? 'Add Press Release' : 'Edit Press Release'} onClose={() => setModal(null)}>
            <div className="space-y-4">
              <Field label="Title" required><input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Press release title" /></Field>
              <Field label="Summary"><textarea value={form.summary} onChange={e => setForm(f => ({ ...f, summary: e.target.value }))} className={textareaCls} placeholder="Brief summary..." /></Field>
              <Field label="Full Content"><textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} className={`${textareaCls} min-h-[100px]`} placeholder="Full content..." /></Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Date" required><input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className={inputCls} /></Field>
                <Field label="Source"><input value={form.source} onChange={e => setForm(f => ({ ...f, source: e.target.value }))} className={inputCls} placeholder="LTR Communications" /></Field>
              </div>
              <Field label="Cover Image URL"><input value={form.coverImage} onChange={e => setForm(f => ({ ...f, coverImage: e.target.value }))} className={inputCls} placeholder="https://..." /></Field>
              {form.coverImage && <img src={form.coverImage} alt="preview" className="w-full h-36 object-cover rounded-xl" />}
              <div className="flex gap-3 pt-2">
                <button onClick={() => setModal(null)} className="flex-1 border border-gray-200 text-gray-700 font-medium py-2.5 rounded-xl hover:bg-gray-50 text-sm">Cancel</button>
                <button onClick={save} className="flex-1 bg-[#008753] hover:bg-[#006B42] text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"><Save size={14} /> Save</button>
              </div>
            </div>
          </Modal>
        )}
        {deleting && <DeleteConfirm name={deleting.title} onConfirm={confirmDelete} onCancel={() => setDeleting(null)} />}
      </AnimatePresence>
    </div>
  );
};

// ─── Main Dashboard ───────────────────────────────────────────────────────────
const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { toasts, toast, dismiss } = useToast();
  const [section, setSection] = useState<Section>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [counts, setCounts] = useState({ newsletters: 0, gallery: 0, articles: 0, press: 0 });

  useEffect(() => {
    if (!authStore.isAuthenticated()) { navigate('/admin'); return; }
    setCounts({
      newsletters: newsletterStore.getAll().length,
      gallery: galleryStore.getAll().length,
      articles: articleStore.getAll().length,
      press: pressReleaseStore.getAll().length,
    });
  }, [section]);

  const handleLogout = () => { authStore.logout(); navigate('/admin'); };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ToastContainer toasts={toasts} dismiss={dismiss} />

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#001A0B] flex flex-col transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo */}
        <div className="px-6 py-7 border-b border-white/8">
          <img src="https://www.ltrnigeria.org/images/ltr-logo.png" alt="LTR Nigeria" className="h-10 object-contain" />
          <div className="flex items-center gap-2 mt-3">
            <Shield size={12} className="text-[#4ade80]" />
            <span className="text-xs text-gray-400 font-medium">Admin Dashboard</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-grow px-3 py-6 overflow-y-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold px-3 mb-3">Content</p>
          {SIDEBAR_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => { setSection(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium mb-1 transition-all ${
                section === item.id
                  ? 'bg-[#008753] text-white shadow-lg shadow-green-900/30'
                  : 'text-gray-400 hover:bg-white/6 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
              {section === item.id && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </button>
          ))}
        </nav>

        {/* User & Logout */}
        <div className="px-4 pb-6 border-t border-white/8 pt-5">
          <div className="flex items-center gap-3 px-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-[#008753]/30 flex items-center justify-center">
              <Shield size={16} className="text-[#4ade80]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Admin</p>
              <p className="text-gray-400 text-xs">System Administrator</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors font-medium"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main content */}
      <div className="flex-grow lg:ml-64 min-h-screen flex flex-col">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </button>
            <div>
              <h1 className="text-gray-900 font-bold text-base">{SIDEBAR_ITEMS.find(s => s.id === section)?.label}</h1>
              <p className="text-gray-400 text-xs">LTR Nigeria Content Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/media" target="_blank" className="hidden sm:flex items-center gap-2 text-xs text-gray-500 hover:text-[#008753] font-medium transition-colors">
              <Eye size={14} /> View Site
            </a>
            <button onClick={handleLogout} className="flex items-center gap-2 text-xs text-red-500 hover:text-red-600 font-medium transition-colors">
              <LogOut size={14} /> Logout
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-grow p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {section === 'overview'    && <OverviewSection counts={counts} setSection={setSection} />}
              {section === 'newsletters' && <NewslettersSection toast={toast} />}
              {section === 'gallery'     && <GallerySection toast={toast} />}
              {section === 'articles'    && <ArticlesSection toast={toast} />}
              {section === 'press'       && <PressSection toast={toast} />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
