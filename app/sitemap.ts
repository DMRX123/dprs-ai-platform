import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dprs.in'
  
  // Static pages with proper changeFrequency types
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/#services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/#portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/#contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
  ]
  
  // Generate blog posts dynamically
  const blogPosts = getBlogPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  // Generate service pages
  const services = getServices().map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [...staticPages, ...blogPosts, ...services] as MetadataRoute.Sitemap
}

// Sample blog data
function getBlogPosts() {
  return [
    {
      slug: 'why-flutter-is-best-for-cross-platform',
      title: 'Why Flutter is Best for Cross-Platform Development',
      date: new Date().toISOString(),
      excerpt: 'Learn why Flutter is the top choice for mobile app development'
    },
    {
      slug: 'nextjs-vs-react-which-to-choose',
      title: 'Next.js vs React: Which Framework to Choose in 2024',
      date: new Date().toISOString(),
      excerpt: 'Compare Next.js and React for your next web project'
    }
  ]
}

function getServices() {
  return [
    { slug: 'web-development', title: 'Web Development' },
    { slug: 'flutter-apps', title: 'Flutter App Development' },
    { slug: 'ecommerce', title: 'E-commerce Solutions' }
  ]
}