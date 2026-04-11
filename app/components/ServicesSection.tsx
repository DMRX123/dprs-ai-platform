'use client'

import { 
  Globe, Smartphone, Monitor, Apple, Tablet, Layout, 
  ShoppingCart, Database, Cloud, Shield, Code, Figma 
} from 'lucide-react'

const services = [
  { icon: Globe, title: "Website Development", description: "Custom responsive websites with modern technologies", features: ["React/Next.js", "HTML/CSS/JS", "E-commerce", "Portfolio Sites"] },
  { icon: Smartphone, title: "Flutter App Development", description: "Cross-platform mobile apps for iOS & Android", features: ["Single Codebase", "Native Performance", "Fast Development", "Custom UI"] },
  { icon: Apple, title: "iOS App Development", description: "Native iOS applications with Swift/SwiftUI", features: ["App Store Ready", "Apple Design", "Push Notifications", "HealthKit"] },
  { icon: Monitor, title: "Android App Development", description: "Native Android apps with Kotlin/Java", features: ["Play Store Ready", "Material Design", "Google APIs", "Offline Support"] },
  { icon: Tablet, title: "Windows Application", description: "Desktop apps for Windows platform", features: ["WinUI/WPF", "Native Windows", "File System Access", "System Integration"] },
  { icon: Layout, title: "Responsive Web Design", description: "Mobile-first websites that work on all devices", features: ["Mobile Optimized", "Tablet Friendly", "Fast Loading", "SEO Ready"] },
  { icon: ShoppingCart, title: "E-commerce Solutions", description: "Online stores with payment integration", features: ["Payment Gateway", "Product Management", "Order Tracking", "Admin Panel"] },
  { icon: Database, title: "Backend Development", description: "APIs, databases, and server-side solutions", features: ["Node.js/Python", "MongoDB/PostgreSQL", "REST APIs", "Cloud Ready"] },
  { icon: Cloud, title: "Cloud & Hosting", description: "Deployment and hosting services", features: ["AWS/Azure/GCP", "Vercel/Netlify", "Domain Setup", "SSL Certificates"] },
  { icon: Shield, title: "Maintenance & Support", description: "Ongoing support and updates", features: ["Bug Fixes", "Security Updates", "Performance Optimization", "24/7 Support"] },
  { icon: Code, title: "API Integration", description: "Third-party API and service integration", features: ["REST APIs", "GraphQL", "Webhooks", "Custom Integrations"] },
  { icon: Figma, title: "UI/UX Design", description: "Modern and user-friendly interface design", features: ["Figma Design", "Prototyping", "User Research", "Design Systems"] }
]

export default function ServicesSection() {
  const scrollToQuote = (serviceTitle: string) => {
    localStorage.setItem('selectedService', serviceTitle)
    const quoteSection = document.getElementById('quote')
    if (quoteSection) {
      const offset = 80
      const elementPosition = quoteSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive development solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 hover:transform hover:-translate-y-2 transition-all duration-300 scroll-reveal">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full">{feature}</span>
                ))}
              </div>
              <button
                type="button"
                title={`Get quote for ${service.title}`}
                aria-label={`Get quote for ${service.title}`}
                onClick={() => scrollToQuote(service.title)}
                className="w-full mt-2 py-2 rounded-full border border-[#4ecdc4] hover:bg-[#4ecdc4] hover:text-black transition-all text-sm"
              >
                Get Quote →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}