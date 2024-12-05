import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const subscribersRef = collection(db, 'newsletter-subscribers')
    const q = query(subscribersRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 400 }
      )
    }

    // Add new subscriber
    await addDoc(subscribersRef, {
      email,
      subscribedAt: new Date(),
    })

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { message: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}
