'use client'

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectEstimator from './components/ProjectEstimator'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import NeuralNetworkBg from './components/NeuralNetworkBg'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative bg-transparent text-white overflow-x-hidden">
      <NeuralNetworkBg />
      <Navbar />
      
      {/* Section with ID "home" */}
      <div id="home">
        <HeroSection />
      </div>
      
      {/* Section with ID "services" */}
      <div id="services">
        <ServicesSection />
      </div>
      
      {/* Section with ID "quote" */}
      <div id="quote">
        <ProjectEstimator />
      </div>
      
      {/* Section with ID "portfolio" */}
      <div id="portfolio">
        <PortfolioSection />
      </div>
      
      {/* Section with ID "contact" */}
      <div id="contact">
        <ContactSection />
      </div>
      
      <Footer />
    </main>
  )
}