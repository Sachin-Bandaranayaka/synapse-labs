import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Toaster } from 'react-hot-toast'
import { DynamicBackground } from '@/components/DynamicBackground'
import { ScrollProgress } from '@/components/ScrollProgress'
import { PageTransition } from '@/components/PageTransition'
import { PageLoader } from '@/components/PageLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Synapse Labs',
  description: 'We craft cutting-edge web and mobile experiences',
  metadataBase: new URL('http://localhost:3000'),
  icons: {
    icon: '/favicon.ico',
    apple: '/logo-icon.png',
  },
  openGraph: {
    images: [{
      url: '/logo.png',
      width: 1200,
      height: 630,
      alt: 'Synapse Labs'
    }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PageLoader />
        <DynamicBackground />
        <ScrollProgress />
        <PageTransition>
          <Providers>
            {children}
          </Providers>
        </PageTransition>
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
} 