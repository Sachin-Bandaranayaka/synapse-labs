'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser,
  sendPasswordResetEmail
} from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { UserRole, UserPermissions, rolePermissions } from '@/types/auth'
import { doc, getDoc } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'
import { User } from '@/lib/types'

interface AuthContextType {
  user: User | null;
  loading: boolean;
  userRole: UserRole | null;
  permissions: UserPermissions | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userRole, setUserRole] = useState<UserRole | null>(null)
  const [permissions, setPermissions] = useState<UserPermissions | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch user data from Firestore
        const userDocRef = doc(db, 'users', firebaseUser.uid)
        const userDoc = await getDoc(userDocRef)
        const userData = userDoc.data()
        
        // Combine Firebase Auth user with Firestore data
        const fullUser = {
          ...firebaseUser,
          role: userData?.role as UserRole,
          twoFactorEnabled: userData?.twoFactorEnabled,
          twoFactorSecret: userData?.twoFactorSecret,
          backupCodes: userData?.backupCodes,
        } as User

        setUser(fullUser)
        setUserRole(userData?.role as UserRole)
        setPermissions(rolePermissions[userData?.role as UserRole])
      } else {
        setUser(null)
        setUserRole(null)
        setPermissions(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const signOut = async () => {
    await firebaseSignOut(auth)
    router.push('/admin/login')
  }

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email)
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      userRole,
      permissions,
      signIn, 
      signOut,
      resetPassword 
    }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) 