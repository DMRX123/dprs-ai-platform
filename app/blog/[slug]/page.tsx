import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generateSEOMetadata, generateArticleSchema } from '../../../lib/seo'

// Blog posts data (add your posts here)
const blogPosts = {
  'why-flutter-is-best-for-cross-platform': {
    title: 'Why Flutter is Best for Cross-Platform Development in 2024',
    date: '2024-01-15',
    excerpt: 'Discover why Flutter is the top choice for building iOS, Android, and web apps.',
    content: `
      <h2>Why Choose Flutter?</h2>
      <p>Flutter has revolutionized cross-platform development. Here's why it's the best choice...</p>
      <h3>1. Single Codebase</h3>
      <p>Write once, run on iOS, Android, Web, and Desktop.</p>
      <h3>2. Hot Reload</h3>
      <p>See changes instantly without recompiling.</p>
      <h3>3. Native Performance</h3>
      <p>Flutter apps compile to native ARM code for 60+ FPS performance.</p>
      <p>Ready to build your Flutter app? <a href="/#contact">Contact us for a free consultation</a></p>
    `,
    author: 'DPRS Team',
    readTime: '5 min read',
    tags: ['Flutter', 'Mobile Development', 'Cross-Platform'],
  },
  'nextjs-vs-react-which-to-choose': {
    title: 'Next.js vs React: Which Framework Should You Choose?',
    date: '2024-01-10',
    excerpt: 'Compare Next.js and React for your next web project.',
    content: `
      <h2>Next.js vs React: Complete Comparison</h2>
      <p>Choosing between Next.js and React depends on your project requirements...</p>
      <h3>Next.js Advantages</h3>
      <ul><li>Server-side rendering (SSR)</li><li>Static site generation</li><li>Built-in routing</li><li>API routes</li><li>Image optimization</li></ul>
      <h3>React Advantages</h3>
      <ul><li>More flexible</li><li>Smaller bundle size</li><li>Easier learning curve</li><li>More third-party libraries</li></ul>
      <p>Need help deciding? <a href="/#contact">Consult with our experts</a></p>
    `,
    author: 'DPRS Team',
    readTime: '7 min read',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  'top-web-development-trends-2024': {
    title: 'Top Web Development Trends to Watch in 2024',
    date: '2024-01-05',
    excerpt: 'Stay ahead with these emerging web development trends including AI integration, edge computing, and more.',
    content: `
      <h2>Top Web Development Trends in 2024</h2>
      <p>The web development landscape is evolving rapidly. Here are the top trends to watch this year...</p>
      <h3>1. AI-Powered Development</h3>
      <p>AI tools are revolutionizing how we build and deploy web applications.</p>
      <h3>2. Edge Computing</h3>
      <p>Faster load times and better performance with edge computing.</p>
      <h3>3. WebAssembly</h3>
      <p>Run high-performance code in the browser with WebAssembly.</p>
    `,
    author: 'DPRS Team',
    readTime: '6 min read',
    tags: ['Web Development', 'Trends', 'Technology'],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  if (!post) return {}
  
  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    slug: `blog/${params.slug}`,
    type: 'article',
    publishedTime: post.date,
    author: post.author,
  })
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  if (!post) notFound()

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `https://dprs.in/blog/${params.slug}`,
    image: 'https://dprs.in/opengraph-image',
    publishedTime: post.date,
    author: post.author,
    tags: post.tags,
  })

  return (
    <div className="min-h-screen bg-[#05050a] text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-[#4ecdc4] hover:underline mb-6 inline-block">
          ← Back to Blog
        </Link>

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

        <article className="prose prose-invert prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-12 p-8 glass-card text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-6">Get a free consultation and custom quote for your development needs.</p>
          <Link href="/#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full font-semibold hover:scale-105 transition">
            Get Free Quote →
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </div>
    </div>
  )
}