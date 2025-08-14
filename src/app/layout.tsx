import type { Metadata, Viewport } from 'next'
// import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// })

// const spaceGrotesk = Space_Grotesk({ 
//   subsets: ['latin'],
//   variable: '--font-space-grotesk',
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: 'Joe - Frontend Developer Portfolio',
  description: 'Your go-to Frontend Developer specializing in modern web technologies, UI/UX design, and creating responsive, intuitive user interfaces.',
  metadataBase: new URL('https://portfolio.example.com'),
  keywords: ['Frontend Developer', 'Web Developer', 'UI/UX', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Joe' }],
  creator: 'Joe',
  openGraph: {
    title: 'Joe - Frontend Developer Portfolio',
    description: 'Your go-to Frontend Developer',
    url: 'https://portfolio.example.com',
    siteName: 'Joe Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Joe - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joe - Frontend Developer Portfolio',
    description: 'Your go-to Frontend Developer',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className="font-body bg-background text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
