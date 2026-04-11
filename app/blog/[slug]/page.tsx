import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generateSEOMetadata } from '../../lib/seo'

// Generate metadata dynamically for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  if (!post) return {}
  
  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    slug: `blog/${params.slug}`,
    type: 'article',
  })
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// Get all blog posts
async function getAllBlogPosts() {
  return [
    {
      slug: 'why-flutter-is-best-for-cross-platform',
      title: 'Why Flutter is Best for Cross-Platform Development in 2024',
      date: new Date().toISOString(),
      excerpt: 'Discover why Flutter is the top choice for building iOS, Android, and web apps from a single codebase.',
      content: `
        <p>Flutter has revolutionized cross-platform development since its release. Here's why it's the best choice for your next project.</p>
        <h2>1. Single Codebase for Multiple Platforms</h2>
        <p>Write once, run anywhere. Flutter allows you to build iOS, Android, Web, and Desktop apps from a single codebase.</p>
        <h2>2. Hot Reload for Faster Development</h2>
        <p>See changes instantly without recompiling. This speeds up development and debugging significantly.</p>
        <h2>3. Beautiful Native Performance</h2>
        <p>Flutter apps compile to native ARM code, providing 60+ FPS performance comparable to native apps.</p>
        <h2>4. Rich Widget Library</h2>
        <p>Material Design and Cupertino widgets make it easy to create beautiful, platform-consistent UIs.</p>
        <h2>5. Strong Community Support</h2>
        <p>Backed by Google with thousands of packages and active community support.</p>
        <p>Ready to build your Flutter app? <a href="/#contact">Contact us for a free consultation</a></p>
      `,
      author: 'DPRS Team',
      readTime: '5 min read',
      tags: ['Flutter', 'Mobile Development', 'Cross-Platform'],
    },
    {
      slug: 'nextjs-vs-react-which-to-choose',
      title: 'Next.js vs React: Which Framework Should You Choose?',
      date: new Date().toISOString(),
      excerpt: 'Compare Next.js and React for your next web project. Learn about SEO, performance, and development experience.',
      content: `
        <p>Choosing between Next.js and React depends on your project requirements. Here's a comprehensive comparison.</p>
        <h2>Next.js Advantages</h2>
        <ul><li>Server-side rendering (SSR) for better SEO</li><li>Static site generation (SSG) for speed</li><li>Built-in routing</li><li>API routes</li><li>Image optimization</li></ul>
        <h2>React Advantages</h2>
        <ul><li>More flexible</li><li>Lighter bundle size</li><li>Easier learning curve</li><li>More third-party libraries</li></ul>
        <h2>When to Choose Next.js</h2>
        <p>Choose Next.js for SEO-critical sites, e-commerce, blogs, and large-scale applications.</p>
        <h2>When to Choose React</h2>
        <p>Choose React for SPAs, internal tools, and when you need maximum flexibility.</p>
        <p>Need help deciding? <a href="/#contact">Consult with our experts</a></p>
      `,
      author: 'DPRS Team',
      readTime: '7 min read',
      tags: ['Next.js', 'React', 'Web Development'],
    },
  ]
}

async function getBlogPost(slug: string) {
  const posts = await getAllBlogPosts()
  return posts.find(post => post.slug === slug)
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  if (!post) notFound()

  // Generate article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'DPRS Developers',
      logo: { '@type': 'ImageObject', url: 'https://dprs.in/logo.png' },
    },
    mainEntityOfPage: `https://dprs.in/blog/${params.slug}`,
  }

  return (
    <div className="min-h-screen bg-[#05050a] text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link href="/blog" className="text-[#4ecdc4] hover:underline mb-6 inline-block">
          ← Back to Blog
        </Link>

        {/* Article header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-[#4ecdc4]/20 rounded-full text-[#4ecdc4]">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-400">
            <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>{post.readTime}</span>
            <span>By {post.author}</span>
          </div>
        </div>

        {/* Article content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Call to action */}
        <div className="mt-12 p-8 glass-card text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-6">Get a free consultation and custom quote for your development needs.</p>
          <Link href="/#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full font-semibold hover:scale-105 transition">
            Get Free Quote →
          </Link>
        </div>

        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </div>
    </div>
  )
}