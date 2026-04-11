// Auto-generate SEO metadata for any page
export function generateSEOMetadata(params: {
  title: string
  description: string
  keywords?: string[]
  slug?: string
  image?: string
  type?: 'website' | 'article' | 'service'
}) {
  const baseUrl = 'https://dprs.in'
  const defaultKeywords = [
    'web development', 'flutter developer', 'app development', 
    'website design', 'cross-platform apps', 'iOS development',
    'Android development', 'ecommerce website', 'responsive design'
  ]
  
  return {
    title: `${params.title} | DPRS Developers`,
    description: params.description,
    keywords: [...defaultKeywords, ...(params.keywords || [])],
    openGraph: {
      title: params.title,
      description: params.description,
      url: `${baseUrl}/${params.slug || ''}`,
      siteName: 'DPRS Developers',
      images: [{ url: params.image || '/og-image.jpg', width: 1200, height: 630 }],
      type: params.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: params.title,
      description: params.description,
      images: [params.image || '/twitter-image.jpg'],
    },
    alternates: {
      canonical: `${baseUrl}/${params.slug || ''}`,
    },
  }
}