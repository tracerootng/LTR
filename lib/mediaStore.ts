// Local storage-based data store for media content

export interface Newsletter {
  id: string;
  title: string;
  description: string;
  date: string;
  fileUrl: string;
  coverImage: string;
  createdAt: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  createdAt: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  coverImage: string;
  tags: string[];
  createdAt: number;
}

export interface PressRelease {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  source: string;
  coverImage: string;
  createdAt: number;
}

const genId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

// ─── Generic CRUD helpers ────────────────────────────────────────────────────

function getAll<T>(key: string): T[] {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]') as T[];
  } catch {
    return [];
  }
}

function saveAll<T>(key: string, items: T[]): void {
  localStorage.setItem(key, JSON.stringify(items));
}

// ─── Newsletters ─────────────────────────────────────────────────────────────
const NL_KEY = 'ltr_newsletters';
export const newsletterStore = {
  getAll: (): Newsletter[] => getAll<Newsletter>(NL_KEY),
  add: (item: Omit<Newsletter, 'id' | 'createdAt'>): Newsletter => {
    const newItem: Newsletter = { ...item, id: genId(), createdAt: Date.now() };
    saveAll(NL_KEY, [...newsletterStore.getAll(), newItem]);
    return newItem;
  },
  update: (id: string, data: Partial<Newsletter>): void => {
    saveAll(NL_KEY, newsletterStore.getAll().map(i => i.id === id ? { ...i, ...data } : i));
  },
  delete: (id: string): void => {
    saveAll(NL_KEY, newsletterStore.getAll().filter(i => i.id !== id));
  },
};

// ─── Gallery ─────────────────────────────────────────────────────────────────
const GL_KEY = 'ltr_gallery';
export const galleryStore = {
  getAll: (): GalleryItem[] => getAll<GalleryItem>(GL_KEY),
  add: (item: Omit<GalleryItem, 'id' | 'createdAt'>): GalleryItem => {
    const newItem: GalleryItem = { ...item, id: genId(), createdAt: Date.now() };
    saveAll(GL_KEY, [...galleryStore.getAll(), newItem]);
    return newItem;
  },
  update: (id: string, data: Partial<GalleryItem>): void => {
    saveAll(GL_KEY, galleryStore.getAll().map(i => i.id === id ? { ...i, ...data } : i));
  },
  delete: (id: string): void => {
    saveAll(GL_KEY, galleryStore.getAll().filter(i => i.id !== id));
  },
};

// ─── Articles ─────────────────────────────────────────────────────────────────
const AR_KEY = 'ltr_articles';
export const articleStore = {
  getAll: (): Article[] => getAll<Article>(AR_KEY),
  add: (item: Omit<Article, 'id' | 'createdAt'>): Article => {
    const newItem: Article = { ...item, id: genId(), createdAt: Date.now() };
    saveAll(AR_KEY, [...articleStore.getAll(), newItem]);
    return newItem;
  },
  update: (id: string, data: Partial<Article>): void => {
    saveAll(AR_KEY, articleStore.getAll().map(i => i.id === id ? { ...i, ...data } : i));
  },
  delete: (id: string): void => {
    saveAll(AR_KEY, articleStore.getAll().filter(i => i.id !== id));
  },
};

// ─── Press Releases ───────────────────────────────────────────────────────────
const PR_KEY = 'ltr_press_releases';
export const pressReleaseStore = {
  getAll: (): PressRelease[] => getAll<PressRelease>(PR_KEY),
  add: (item: Omit<PressRelease, 'id' | 'createdAt'>): PressRelease => {
    const newItem: PressRelease = { ...item, id: genId(), createdAt: Date.now() };
    saveAll(PR_KEY, [...pressReleaseStore.getAll(), newItem]);
    return newItem;
  },
  update: (id: string, data: Partial<PressRelease>): void => {
    saveAll(PR_KEY, pressReleaseStore.getAll().map(i => i.id === id ? { ...i, ...data } : i));
  },
  delete: (id: string): void => {
    saveAll(PR_KEY, pressReleaseStore.getAll().filter(i => i.id !== id));
  },
};

// Auth helpers
const AUTH_KEY = 'ltr_admin_auth';
export const authStore = {
  CREDENTIALS: { username: 'admin', password: 'LTR@Admin2025' },
  login: (username: string, password: string): boolean => {
    if (username === authStore.CREDENTIALS.username && password === authStore.CREDENTIALS.password) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  },
  logout: (): void => sessionStorage.removeItem(AUTH_KEY),
  isAuthenticated: (): boolean => sessionStorage.getItem(AUTH_KEY) === 'true',
};
