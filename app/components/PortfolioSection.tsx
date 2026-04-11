'use client'

import { ExternalLink, Github } from 'lucide-react'

const projects = [
  { title: "E-Commerce Website", category: "Web Development", description: "Full-featured online store with payment gateway integration", tech: ["React", "Node.js", "MongoDB", "Stripe"], liveLink: "#", githubLink: "#" },
  { title: "Flutter Fitness App", category: "Flutter App", description: "Cross-platform fitness tracking application for iOS & Android", tech: ["Flutter", "Firebase", "REST API", "Provider"], liveLink: "#", githubLink: "#" },
  { title: "Business Portfolio Website", category: "Web Design", description: "Responsive business portfolio website with animations", tech: ["Next.js", "Tailwind CSS", "Framer Motion"], liveLink: "#", githubLink: "#" },
  { title: "Restaurant POS System", category: "Windows App", description: "Desktop POS system for restaurants and cafes", tech: ["C#", ".NET", "SQL Server", "DevExpress"], liveLink: "#", githubLink: "#" },
  { title: "Food Delivery App", category: "Flutter App", description: "Food ordering app with real-time tracking", tech: ["Flutter", "Node.js", "MongoDB", "Google Maps"], liveLink: "#", githubLink: "#" },
  { title: "Hospital Management System", category: "Web Development", description: "Complete hospital management web application", tech: ["React", "Django", "PostgreSQL", "REST API"], liveLink: "#", githubLink: "#" }
]

export default function PortfolioSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Recent Work</span>
          </h2>
          <p className="text-gray-400">Some of our recent projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden scroll-reveal">
              <div className="relative h-48 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2">
                    <ExternalLink className="w-8 h-8 text-[#4ecdc4]" />
                  </div>
                  <p className="text-sm text-gray-400">Project Preview</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-sm text-[#4ecdc4]">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-[#4ecdc4] transition-colors" title="Live Demo" aria-label="Live Demo">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-[#4ecdc4] transition-colors" title="Source Code" aria-label="Source Code">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}