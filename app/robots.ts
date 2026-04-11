import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/privacy/', '/terms/'],
    },
    sitemap: 'https://dprs.in/sitemap.xml',
  }
}