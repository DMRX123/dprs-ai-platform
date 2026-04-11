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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'DPRS Developers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DPRS - Web & Flutter Development Experts',
    description: 'Top-rated development agency for web and mobile apps',
    images: ['/twitter-image'],
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
}

// Static Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'DPRS Developers',
  url: 'https://dprs.in',
  logo: 'https://dprs.in/opengraph-image',
  description: 'Professional Web Development and Flutter App Development Agency',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Remote',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 8839094644',
    contactType: 'customer service',
    email: 'contact@dprs.in',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://github.com/DMRX123',
    'https://linkedin.com/company/dprs',
    'https://twitter.com/dprs',
  ],
  priceRange: '₹₹',
  openingHours: 'Mo-Fr 09:00-18:00',
  areaServed: 'Worldwide',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DPRS Developers',
  image: 'https://dprs.in/opengraph-image',
  priceRange: '₹₹',
  telephone: '+91 8839094644',
  email: 'contact@dprs.in',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DPRS Developers',
  url: 'https://dprs.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://dprs.in/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
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
        
        {/* Favicon - Data URI SVG */}
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='url(%23gradient)'/%3E%3Cdefs%3E%3ClinearGradient id='gradient' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b6b'/%3E%3Cstop offset='100%25' style='stop-color:%234ecdc4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ctext x='50' y='68' font-size='50' text-anchor='middle' fill='white' font-family='Arial'%3ED%3C/text%3E%3C/svg%3E"
          type="image/svg+xml"
        />
        
        {/* Static Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <SchemaScript />
        {children}
      </body>
    </html>
  )
}