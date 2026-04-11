import Link from 'next/link'
import { generateSEOMetadata } from '../../lib/seo'

export const metadata = generateSEOMetadata({
  title: 'Development Blog - Latest Web & Flutter Insights',
  description: 'Read latest articles about web development, Flutter apps, and cross-platform solutions.',
  keywords: ['blog', 'development articles', 'web dev tips', 'flutter tutorials'],
  slug: 'blog',
  type: 'website',
})

const blogPosts = [
  {
    slug: 'why-flutter-is-best-for-cross-platform',
    title: 'Why Flutter is Best for Cross-Platform Development in 2024',
    date: '2024-01-15',
    excerpt: 'Discover why Flutter is the top choice for building iOS, Android, and web apps from a single codebase.',
    author: 'DPRS Team',
    readTime: '5 min read',
    tags: ['Flutter', 'Mobile Development', 'Cross-Platform'],
  },
  {
    slug: 'nextjs-vs-react-which-to-choose',
    title: 'Next.js vs React: Which Framework Should You Choose?',
    date: '2024-01-10',
    excerpt: 'Compare Next.js and React for your next web project. Learn about SEO, performance, and development experience.',
    author: 'DPRS Team',
    readTime: '7 min read',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    slug: 'top-web-development-trends-2024',
    title: 'Top Web Development Trends to Watch in 2024',
    date: '2024-01-05',
    excerpt: 'Stay ahead with these emerging web development trends including AI integration, edge computing, and more.',
    author: 'DPRS Team',
    readTime: '6 min read',
    tags: ['Web Development', 'Trends', 'Technology'],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Development Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Latest insights, tutorials, and trends in web and mobile development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className="group">
              <article className="glass-card p-6 hover:transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-[#4ecdc4]/20 rounded-full text-[#4ecdc4]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-[#4ecdc4] transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-[#4ecdc4] group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <span>→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}