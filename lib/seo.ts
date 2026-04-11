// lib/seo.ts
// Auto-generate SEO metadata for any page

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  slug?: string
  image?: string
  type?: 'website' | 'article' | 'service'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export function generateSEOMetadata(params: SEOProps) {
  const baseUrl = 'https://dprs.in'
  const defaultKeywords = [
    'web development', 'flutter developer', 'app development', 
    'website design', 'cross-platform apps', 'iOS development',
    'Android development', 'ecommerce website', 'responsive design',
    'best web developer', 'top app development company', 'hire flutter developer'
  ]
  
  const fullSlug = params.slug ? `/${params.slug}` : ''
  const fullUrl = `${baseUrl}${fullSlug}`
  
  return {
    title: `${params.title} | DPRS Developers`,
    description: params.description,
    keywords: [...defaultKeywords, ...(params.keywords || [])],
    authors: params.author ? [{ name: params.author }] : [{ name: 'DPRS Team' }],
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
      title: params.title,
      description: params.description,
      url: fullUrl,
      siteName: 'DPRS Developers',
      images: [{ 
        url: params.image || '/opengraph-image', 
        width: 1200, 
        height: 630,
        alt: params.title 
      }],
      type: (params.type === 'article' ? 'article' : 'website') as 'article' | 'website',
      ...(params.publishedTime && params.type === 'article' && { 
        article: {
          publishedTime: params.publishedTime,
          modifiedTime: params.modifiedTime || params.publishedTime,
          authors: [params.author || 'DPRS Team'],
        }
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: params.title,
      description: params.description,
      images: [params.image || '/twitter-image'],
      creator: '@dprs',
      site: '@dprs',
    },
    alternates: {
      canonical: fullUrl,
    },
    category: 'technology',
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  }
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Generate Article Schema
export function generateArticleSchema(params: {
  title: string
  description: string
  url: string
  image: string
  publishedTime: string
  modifiedTime?: string
  author: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    image: params.image,
    url: params.url,
    datePublished: params.publishedTime,
    dateModified: params.modifiedTime || params.publishedTime,
    author: {
      '@type': 'Person',
      name: params.author,
      url: 'https://dprs.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DPRS Developers',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dprs.in/opengraph-image',
      },
    },
    keywords: params.tags?.join(', ') || '',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
  }
}