'use client'

import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import ProjectEstimator from './components/ProjectEstimator'
import ContactSection from './components/ContactSection'

export default function HomePage() {
  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.scroll-reveal')
    revealElements.forEach(el => observer.observe(el))

    return () => {
      revealElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  // Set section IDs for navigation
  useEffect(() => {
    const sections = ['home', 'services', 'portfolio', 'quote', 'contact']
    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) return
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#05050a]">
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="portfolio">
        <PortfolioSection />
      </section>
      
      <section id="quote">
        <ProjectEstimator />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}