import Link from 'next/link'
import { generateSEOMetadata } from '../../lib/seo'

export const metadata = generateSEOMetadata({
  title: 'Our Development Services - Web, Flutter, Mobile Apps',
  description: 'Professional web development, Flutter app development, iOS, Android, and Windows application services. Get custom solutions.',
  keywords: ['web development services', 'flutter development', 'mobile app development'],
  slug: 'services',
  type: 'website',
})

const servicesList = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Custom websites with modern technologies like Next.js, React, and Node.js',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'E-commerce Ready'],
    price: 'From ₹25,000',
  },
  {
    slug: 'flutter-apps',
    title: 'Flutter App Development',
    description: 'Cross-platform mobile apps for iOS and Android from single codebase',
    features: ['iOS & Android', 'Native Performance', 'Beautiful UI', 'Fast Development'],
    price: 'From ₹35,000',
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Complete online stores with payment gateway and inventory management',
    features: ['Payment Integration', 'Product Management', 'Order Tracking', 'Admin Panel'],
    price: 'From ₹40,000',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="glass-card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-3 gradient-text">{service.title}</h2>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="mb-4">
                <span className="text-[#4ecdc4] font-bold">{service.price}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <span className="text-[#4ecdc4]">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/#quote`} className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full font-semibold hover:scale-105 transition">
                Get Quote →
              </Link>
            </div>
          ))}
        </div>

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: servicesList.map((service, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.description,
                },
              })),
            })
          }}
        />
      </div>
    </div>
  )
}