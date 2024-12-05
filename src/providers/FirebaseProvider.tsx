'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const FirebaseContext = createContext<{
  db: ReturnType<typeof getFirestore> | null;
  storage: ReturnType<typeof getStorage> | null;
  auth: ReturnType<typeof getAuth> | null;
}>({
  db: null,
  storage: null,
  auth: null,
});

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [firebaseApp, setFirebaseApp] = useState<ReturnType<typeof initializeApp> | null>(null);
  const [services, setServices] = useState<{
    db: ReturnType<typeof getFirestore> | null;
    storage: ReturnType<typeof getStorage> | null;
    auth: ReturnType<typeof getAuth> | null;
  }>({
    db: null,
    storage: null,
    auth: null,
  });

  useEffect(() => {
    if (!firebaseApp && typeof window !== 'undefined') {
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      };

      const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
      setFirebaseApp(app);

      const db = getFirestore(app);
      const storage = getStorage(app);
      const auth = getAuth(app);

      setServices({ db, storage, auth });
    }
  }, [firebaseApp]);

  return (
    <FirebaseContext.Provider value={services}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
