import { User as FirebaseUser } from 'firebase/auth'
import { UserRole } from '@/types/auth'

// Firestore User Data
export interface UserData {
  id: string;
  email: string;
  role?: 'user' | 'editor' | 'admin';
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string;
  backupCodes?: string[];
  lastLogin?: Date;
  createdAt: Date;
}

// Auth User with Firestore Data
export interface User extends FirebaseUser {
  role: UserRole;
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string;
  backupCodes?: string[];
}

export interface ActivityLog {
  id: string;
  type: string;
  timestamp: Date;
  userId?: string;
  details?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
  status?: 'new' | 'read' | 'replied';
}

export interface Newsletter {
  id: string;
  email: string;
  timestamp: Date;
  status: 'subscribed' | 'unsubscribed';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  category: 'web' | 'mobile' | 'design';
  featured?: boolean;
  order?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
  company?: string;
  rating?: number;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  content?: string;
  tags?: string[];
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
  // Add other fields as necessary
} 