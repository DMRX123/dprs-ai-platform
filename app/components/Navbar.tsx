'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Quote', id: 'quote' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <Code className="w-6 h-6 text-[#4ecdc4]" />
            <h1 className="text-xl font-bold">
              <span className="gradient-text">DPRS</span>
              <span className="text-white ml-1">Developers</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('quote')}
              className="px-5 py-2 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full text-sm font-semibold hover:scale-105 transition-transform cursor-pointer"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            title="Menu"
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block text-gray-300 hover:text-white py-2 transition-colors w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('quote')}
              className="w-full text-center px-5 py-2 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full font-semibold"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}