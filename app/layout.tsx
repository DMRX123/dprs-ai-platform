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
    google: 'your-google-verification-code', // IMPORTANT: Replace with your actual code from Google Search Console
  },
}

// Updated viewport for better accessibility (removed scale restrictions)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// --- Static Schema Markup (Always loaded, great for SEO) ---
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'DPRS Developers',
  url: 'https://dprs.in',
  logo: 'https://dprs.in/logo.png',
  description: 'Professional Web Development and Flutter App Development Agency',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Remote',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 8839094644', // Updated to match your site
    contactType: 'customer service',
    email: 'contact@dprs.in',   // Added for clarity
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
  image: 'https://dprs.in/og-image.jpg',
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
// --- End of Static Schema ---

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
        
        {/* Inject Static Schema directly into the head */}
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
        <SchemaScript /> {/* This handles more dynamic schemas like FAQ, BreadcrumbList */}
        {children}
      </body>
    </html>
  )
}