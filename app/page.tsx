import type { Metadata, Viewport } from 'next'
import './globals.css'
import SchemaScript from './components/SchemaScript'

export const metadata: Metadata = {
  metadataBase: new URL('https://dprs.in'),
  title: {
    default: 'DPRS - Web & Flutter Development | #1 Development Agency',
    template: '%s | DPRS Developers'
  },
  description: 'Top-rated web development and Flutter app development agency. Get custom websites, mobile apps, and cross-platform solutions. 100% client satisfaction guaranteed.',
  keywords: [
    'web development', 'flutter developer', 'app development', 'website design', 
    'cross-platform apps', 'iOS development', 'Android development', 
    'ecommerce website', 'responsive web design', 'best web developer',
    'top app development company', 'hire flutter developer', 'custom website'
  ],
  authors: [{ name: 'DPRS Team', url: 'https://dprs.in' }],
  creator: 'DPRS',
  publisher: 'DPRS Developers',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dprs.in',
    siteName: 'DPRS Developers',
    title: 'DPRS - #1 Web & Flutter Development Agency',
    description: 'Get professional web development and Flutter app development services. Free consultation and quote.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'DPRS Developers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DPRS - Web & Flutter Development Experts',
    description: 'Top-rated development agency for web and mobile apps',
    images: ['/twitter-image.jpg'],
    creator: '@dprs',
  },
  alternates: {
    canonical: 'https://dprs.in',
  },
  category: 'technology',
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SchemaScript />
        {children}
      </body>
    </html>
  )
}