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
import { toast } from 'react-hot-toast'
import Cookies from 'js-cookie'

interface AuthContextType {
  user: User | null;
  loading: boolean;
  userRole: UserRole | null;
  permissions: UserPermissions | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  userRole: null,
  permissions: null,
  signIn: async () => {},
  signOut: async () => {},
  resetPassword: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userRole, setUserRole] = useState<UserRole | null>(null)
  const [permissions, setPermissions] = useState<UserPermissions | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Initialize auth state from cookie
  useEffect(() => {
    const userFromCookie = Cookies.get('user')
    if (userFromCookie) {
      try {
        const userData = JSON.parse(userFromCookie)
        setUser(userData as User)
        setUserRole(userData.role as UserRole)
        setPermissions(rolePermissions[userData.role as UserRole])
      } catch (error) {
        console.error('Error parsing user cookie:', error)
        Cookies.remove('user')
      }
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    console.log('Setting up auth listener')
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          console.log('User found:', firebaseUser.email)
          setLoading(true)
          
          const userDocRef = doc(db, 'users', firebaseUser.uid)
          const userDoc = await getDoc(userDocRef)
          const userData = userDoc.data()
          
          if (!userData) {
            console.error('No user data found in Firestore')
            await firebaseSignOut(auth)
            toast.error('User data not found')
            setUser(null)
            setUserRole(null)
            setPermissions(null)
            Cookies.remove('user')
            return
          }

          const role = userData.role as UserRole
          const fullUser = {
            ...firebaseUser,
            role,
            twoFactorEnabled: userData.twoFactorEnabled,
            twoFactorSecret: userData.twoFactorSecret,
            backupCodes: userData.backupCodes,
          } as User

          console.log('Setting user data:', { email: fullUser.email, role })
          setUser(fullUser)
          setUserRole(role)
          setPermissions(rolePermissions[role])
          
          // Set user cookie
          Cookies.set('user', JSON.stringify({
            uid: fullUser.uid,
            email: fullUser.email,
            role: role
          }), { expires: 7 }) // 7 days expiry
        } else {
          console.log('No user found')
          setUser(null)
          setUserRole(null)
          setPermissions(null)
          Cookies.remove('user')
        }
      } catch (error) {
        console.error('Error in auth state change:', error)
        toast.error('Error loading user data')
        Cookies.remove('user')
      } finally {
        setLoading(false)
      }
    })

    return () => {
      console.log('Cleaning up auth listener')
      unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      console.log('Attempting sign in:', email)
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const userDocRef = doc(db, 'users', userCredential.user.uid)
      const userDoc = await getDoc(userDocRef)
      const userData = userDoc.data()

      if (!userData || userData.role !== 'admin') {
        console.log('User is not an admin:', userData?.role)
        await firebaseSignOut(auth)
        throw new Error('Unauthorized access')
      }

      console.log('Sign in successful')
      router.replace('/admin/dashboard')
    } catch (error) {
      console.error('Sign in error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      await firebaseSignOut(auth)
      Cookies.remove('user')
      router.replace('/admin/login')
    } catch (error) {
      console.error('Sign out error:', error)
      toast.error('Error signing out')
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
      toast.success('Password reset email sent')
    } catch (error) {
      console.error('Reset password error:', error)
      throw error
    }
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
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)