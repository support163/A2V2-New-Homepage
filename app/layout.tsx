import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ChatWidget from '@/components/ChatWidget'
import Analytics from '@/components/Analytics'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'A2V2.ai',
    template: '%s | A2V2.ai',
  },
  description: 'HIPAA-compliant AI platform for healthcare patient engagement.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Analytics />
        <TestHomepage2Navbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
