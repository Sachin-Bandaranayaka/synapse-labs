import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()

export const cleanupSessions = functions.pubsub
  .schedule('every 1 hours')
  .onRun(async (context) => {
    const now = admin.firestore.Timestamp.now()
    const db = admin.firestore()

    try {
      const snapshot = await db
        .collection('sessions')
        .where('expiresAt', '<', now)
        .get()

      const batch = db.batch()
      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref)
      })

      await batch.commit()
      console.log(`Cleaned up ${snapshot.size} expired sessions`)
    } catch (error) {
      console.error('Session cleanup error:', error)
    }
  }) 