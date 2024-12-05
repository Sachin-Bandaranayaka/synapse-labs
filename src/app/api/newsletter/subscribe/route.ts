import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, query, where, getDocs, serverTimestamp, doc, setDoc } from 'firebase/firestore'

export async function POST(request: Request) {
  console.log('Newsletter subscription request received')
  
  try {
    // Parse and validate the request
    const { email } = await request.json()
    console.log('Email received:', email)

    if (!email) {
      console.log('No email provided')
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log Firebase config
    console.log('Using Firebase Project:', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)
    
    // Check if email already exists
    console.log('Checking for existing subscription')
    const subscribersRef = collection(db, 'newsletter_subscribers')
    
    try {
      const q = query(subscribersRef, where('email', '==', email))
      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        console.log('Email already subscribed')
        return NextResponse.json(
          { message: 'Email already subscribed' },
          { status: 400 }
        )
      }

      // Add new subscriber
      console.log('Adding new subscriber')
      const newSubscriber = {
        email,
        subscribedAt: serverTimestamp(),
        status: 'active',
        source: 'website'
      }
      console.log('Subscriber data:', newSubscriber)
      
      // Create a document ID from the email (hashed)
      const documentId = Buffer.from(email).toString('base64').replace(/[+/=]/g, '')
      const subscriberDoc = doc(subscribersRef, documentId)
      
      await setDoc(subscriberDoc, newSubscriber)
      console.log('Subscriber added with ID:', documentId)

      return NextResponse.json(
        { message: 'Successfully subscribed to newsletter', id: documentId },
        { status: 200 }
      )
    } catch (dbError) {
      console.error('Detailed Firebase error:', {
        error: dbError,
        code: dbError instanceof Error ? (dbError as any).code : 'unknown',
        message: dbError instanceof Error ? dbError.message : 'unknown',
      })
      
      // Check for specific Firebase errors
      if (dbError instanceof Error) {
        const code = (dbError as any).code
        if (code === 'permission-denied') {
          return NextResponse.json(
            { message: 'Permission denied. Please try again later.' },
            { status: 403 }
          )
        }
      }
      
      throw dbError
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    // Log more details about the error
    if (error instanceof Error) {
      console.error({
        name: error.name,
        message: error.message,
        stack: error.stack,
        code: (error as any).code,
      })
    }
    
    const errorMessage = error instanceof Error 
      ? `Subscription failed: ${error.message}`
      : 'Failed to subscribe to newsletter'
    
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    )
  }
}
