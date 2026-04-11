'use client'

import { Code, Smartphone, Globe } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8">
          <Code className="w-4 h-4 text-[#4ecdc4]" />
          <span className="text-sm font-semibold">WEB & FLUTTER DEVELOPMENT</span>
          <Smartphone className="w-4 h-4 text-[#ff6b6b]" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="gradient-text">DPRS</span>
          <br />
          <span className="text-white">Development Solutions</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Web Development • Flutter Apps • iOS • Android • Windows • Cross-Platform Solutions
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Code className="w-4 h-4 text-[#4ecdc4]" />
            <span className="text-sm">Web Development</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Smartphone className="w-4 h-4 text-[#4ecdc4]" />
            <span className="text-sm">Flutter Apps</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Globe className="w-4 h-4 text-[#4ecdc4]" />
            <span className="text-sm">Cross-Platform</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <button
            onClick={() => scrollToSection('quote')}
            className="px-8 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full font-bold text-lg hover:scale-105 transition-transform cursor-pointer"
          >
            Get Project Quote →
          </button>
          
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 glass-card border border-[#4ecdc4] rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all cursor-pointer"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  )
}