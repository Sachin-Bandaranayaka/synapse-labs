import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, orderBy, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { BlogPost } from './types';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const getProjects = async (): Promise<Project[]> => {
  try {
    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Project[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return false;
  }
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const postRef = doc(db, 'blogPosts', slug);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      return { id: postSnap.id, ...postSnap.data() } as BlogPost;
    } else {
      return null; // Return null if no post is found
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export const getAllPublishedPosts = async (): Promise<BlogPost[]> => {
  try {
    const postsRef = collection(db, 'blogPosts');
    const snapshot = await getDocs(postsRef);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching published posts:', error);
    return [];
  }
}; 