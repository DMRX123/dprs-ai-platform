'use client'

import { useEffect } from 'react'

export default function SchemaScript() {
  useEffect(() => {
    // Service Schema
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Web & Flutter Development Services',
      description: 'Professional web development and Flutter app development services',
      provider: {
        '@type': 'ProfessionalService',
        name: 'DPRS Developers',
        url: 'https://dprs.in',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description: 'Custom website development with modern technologies',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Flutter App Development',
              description: 'Cross-platform mobile app development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'iOS App Development',
              description: 'Native iOS application development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Android App Development',
              description: 'Native Android application development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-commerce Development',
              description: 'Online store with payment integration',
            },
          },
        ],
      },
    }

    // FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What development services do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer Web Development (React, Next.js), Flutter App Development (iOS, Android, Web, Windows), iOS Native Apps, Android Native Apps, Windows Applications, E-commerce Solutions, Backend Development, and UI/UX Design.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a website cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Website costs start from ₹25,000 and vary based on requirements like number of pages, features, and complexity. Contact us for a custom quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does app development take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Timeline depends on complexity. Basic apps take 4-6 weeks, medium complexity apps take 8-12 weeks, and complex enterprise apps take 16-24 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide support after delivery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 30 days free bug fixing and 3 months email support. Long-term maintenance contracts are also available.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies do you use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We use Next.js, React, Flutter, Node.js, Python, MongoDB, PostgreSQL, Tailwind CSS, and modern development tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you help with app store submission?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we assist with Google Play Store and Apple App Store submission process including necessary documentation.',
          },
        },
      ],
    }

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://dprs.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://dprs.in/#services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Contact',
          item: 'https://dprs.in/#contact',
        },
      ],
    }

    // Add all schemas
    const schemas = [serviceSchema, faqSchema, breadcrumbSchema]
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      script.id = `dynamic-schema-${index}`
      document.head.appendChild(script)
    })

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`dynamic-schema-${index}`)
        if (script) script.remove()
      })
    }
  }, [])

  return null
}