import { supabase } from './supabaseClient';

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

// ─── File Upload Helper ──────────────────────────────────────────────────────────
export const uploadFile = async (file: File, folder: string): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
  const filePath = `${folder}/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('gallery')
    .upload(filePath, file);

  if (uploadError) {
    console.error('Upload Error:', uploadError);
    throw uploadError;
  }

  const { data } = supabase.storage.from('gallery').getPublicUrl(filePath);
  return data.publicUrl;
};

// ─── Generic DB Table helpers ──────────────────────────────────────────────────
// Maps snake_case from DB to camelCase for UI, and parses dates to numbers for sorting backward compatibility
const mapToCamelCase = (row: any) => {
  const result: any = { ...row };
  if (result.created_at) {
    result.createdAt = new Date(result.created_at).getTime();
    delete result.created_at;
  }
  if (result.file_url !== undefined) {
    result.fileUrl = result.file_url;
    delete result.file_url;
  }
  if (result.cover_image !== undefined) {
    result.coverImage = result.cover_image;
    delete result.cover_image;
  }
  if (result.image_url !== undefined) {
    result.imageUrl = result.image_url;
    delete result.image_url;
  }
  return result;
};

const mapToSnakeCase = (item: any) => {
  const result: any = { ...item };
  if (result.fileUrl !== undefined) {
    result.file_url = result.fileUrl;
    delete result.fileUrl;
  }
  if (result.coverImage !== undefined) {
    result.cover_image = result.coverImage;
    delete result.coverImage;
  }
  if (result.imageUrl !== undefined) {
    result.image_url = result.imageUrl;
    delete result.imageUrl;
  }
  return result;
};

// ─── Newsletters ─────────────────────────────────────────────────────────────
export const newsletterStore = {
  getAll: async (): Promise<Newsletter[]> => {
    const { data, error } = await supabase.from('newsletters').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return (data || []).map(mapToCamelCase);
  },
  getById: async (id: string): Promise<Newsletter | null> => {
    const { data, error } = await supabase.from('newsletters').select('*').eq('id', id).single();
    if (error) throw error;
    return data ? mapToCamelCase(data) : null;
  },
  add: async (item: Omit<Newsletter, 'id' | 'createdAt'>): Promise<Newsletter> => {
    const { data, error } = await supabase.from('newsletters').insert(mapToSnakeCase(item)).select().single();
    if (error) throw error;
    return mapToCamelCase(data);
  },
  update: async (id: string, updates: Partial<Newsletter>): Promise<void> => {
    const { error } = await supabase.from('newsletters').update(mapToSnakeCase(updates)).eq('id', id);
    if (error) throw error;
  },
  delete: async (id: string): Promise<void> => {
    const { error } = await supabase.from('newsletters').delete().eq('id', id);
    if (error) throw error;
  },
};

// ─── Gallery ─────────────────────────────────────────────────────────────────
export const galleryStore = {
  getAll: async (): Promise<GalleryItem[]> => {
    const { data, error } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return (data || []).map(mapToCamelCase);
  },
  add: async (item: Omit<GalleryItem, 'id' | 'createdAt'>): Promise<GalleryItem> => {
    const { data, error } = await supabase.from('gallery').insert(mapToSnakeCase(item)).select().single();
    if (error) throw error;
    return mapToCamelCase(data);
  },
  update: async (id: string, updates: Partial<GalleryItem>): Promise<void> => {
    const { error } = await supabase.from('gallery').update(mapToSnakeCase(updates)).eq('id', id);
    if (error) throw error;
  },
  delete: async (id: string): Promise<void> => {
    const { error } = await supabase.from('gallery').delete().eq('id', id);
    if (error) throw error;
  },
};

// ─── Articles ─────────────────────────────────────────────────────────────────
export const articleStore = {
  getAll: async (): Promise<Article[]> => {
    const { data, error } = await supabase.from('articles').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return (data || []).map(mapToCamelCase);
  },
  getById: async (id: string): Promise<Article | null> => {
    const { data, error } = await supabase.from('articles').select('*').eq('id', id).single();
    if (error) throw error;
    return data ? mapToCamelCase(data) : null;
  },
  add: async (item: Omit<Article, 'id' | 'createdAt'>): Promise<Article> => {
    const { data, error } = await supabase.from('articles').insert(mapToSnakeCase(item)).select().single();
    if (error) throw error;
    return mapToCamelCase(data);
  },
  update: async (id: string, updates: Partial<Article>): Promise<void> => {
    const { error } = await supabase.from('articles').update(mapToSnakeCase(updates)).eq('id', id);
    if (error) throw error;
  },
  delete: async (id: string): Promise<void> => {
    const { error } = await supabase.from('articles').delete().eq('id', id);
    if (error) throw error;
  },
};

// ─── Press Releases ───────────────────────────────────────────────────────────
export const pressReleaseStore = {
  getAll: async (): Promise<PressRelease[]> => {
    const { data, error } = await supabase.from('press_releases').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return (data || []).map(mapToCamelCase);
  },
  getById: async (id: string): Promise<PressRelease | null> => {
    const { data, error } = await supabase.from('press_releases').select('*').eq('id', id).single();
    if (error) throw error;
    return data ? mapToCamelCase(data) : null;
  },
  add: async (item: Omit<PressRelease, 'id' | 'createdAt'>): Promise<PressRelease> => {
    const { data, error } = await supabase.from('press_releases').insert(mapToSnakeCase(item)).select().single();
    if (error) throw error;
    return mapToCamelCase(data);
  },
  update: async (id: string, updates: Partial<PressRelease>): Promise<void> => {
    const { error } = await supabase.from('press_releases').update(mapToSnakeCase(updates)).eq('id', id);
    if (error) throw error;
  },
  delete: async (id: string): Promise<void> => {
    const { error } = await supabase.from('press_releases').delete().eq('id', id);
    if (error) throw error;
  },
};

// ─── Auth ───────────────────────────────────────────────────────────────────
export const authStore = {
  login: async (usernameOrEmail: string, password: string): Promise<boolean> => {
    // Map "admin" username to the correct email
    const email = usernameOrEmail.toLowerCase() === 'admin' 
      ? 'admin@ltrnigeria.org' 
      : usernameOrEmail;
      
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.error('Login error:', error.message);
      return false;
    }
    return true;
  },
  logout: async (): Promise<void> => {
    await supabase.auth.signOut();
  },
  // Use a synchronous check to avoid blank screen flashing before data loads
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('sb-xwfmqtjsccpmxzvqscdc-auth-token');
    return !!token;
  },
  checkSession: async (): Promise<boolean> => {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
  }
};
