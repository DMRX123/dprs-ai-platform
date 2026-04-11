'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

export default function ProjectEstimator() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    platform: [] as string[],
    features: [] as string[],
    timeline: '',
    budget: '',
    description: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const projectTypes = [
    { id: 'website', label: 'Website Development' },
    { id: 'flutter', label: 'Flutter App' },
    { id: 'ios', label: 'iOS App' },
    { id: 'android', label: 'Android App' },
    { id: 'windows', label: 'Windows App' },
    { id: 'ecommerce', label: 'E-commerce Website' },
    { id: 'backend', label: 'Backend/API' },
    { id: 'redesign', label: 'Website Redesign' },
  ]

  const platforms = [
    { id: 'web', label: 'Web' },
    { id: 'ios', label: 'iOS' },
    { id: 'android', label: 'Android' },
    { id: 'windows', label: 'Windows' },
    { id: 'mac', label: 'Mac' },
    { id: 'linux', label: 'Linux' },
  ]

  const featuresList = [
    { id: 'auth', label: 'User Authentication' },
    { id: 'payment', label: 'Payment Gateway' },
    { id: 'admin', label: 'Admin Panel' },
    { id: 'api', label: 'Custom API' },
    { id: 'chat', label: 'Live Chat' },
    { id: 'push', label: 'Push Notifications' },
    { id: 'offline', label: 'Offline Support' },
    { id: 'social', label: 'Social Login' },
  ]

  const handlePlatformToggle = (platformId: string) => {
    setFormData(prev => ({
      ...prev,
      platform: prev.platform.includes(platformId)
        ? prev.platform.filter(p => p !== platformId)
        : [...prev.platform, platformId]
    }))
  }

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'project_estimate'
        })
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({
          name: '', email: '', phone: '', projectType: '', platform: [], features: [],
          timeline: '', budget: '', description: ''
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Failed to send. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-400 mb-4">
              Your project requirements have been received. We'll get back to you within 24 hours with a custom quote.
            </p>
            <button
              type="button"
              title="Submit another request"
              aria-label="Submit another request"
              onClick={() => setSubmitted(false)}
              className="px-6 py-2 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get Custom Quote</span>
          </h2>
          <p className="text-gray-400">
            Tell us about your project and we'll send you a personalized quote
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none"
                placeholder="Your name"
                aria-label="Full name"
                title="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none"
                placeholder="your@email.com"
                aria-label="Email address"
                title="Enter your email address"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none"
                placeholder="+91 XXXXX XXXXX"
                aria-label="Phone number"
                title="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Project Type *</label>
              <select
                required
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none"
                aria-label="Select project type"
                title="Select the type of project you need"
              >
                <option value="">Select project type</option>
                {projectTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Target Platforms</label>
            <div className="flex flex-wrap gap-3">
              {platforms.map(platform => (
                <button
                  key={platform.id}
                  type="button"
                  title={`Select ${platform.label} platform`}
                  aria-label={`Select ${platform.label} platform`}
                  onClick={() => handlePlatformToggle(platform.id)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    formData.platform.includes(platform.id)
                      ? 'border-[#4ecdc4] bg-[#4ecdc4]/20'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  {platform.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Required Features</label>
            <div className="flex flex-wrap gap-3">
              {featuresList.map(feature => (
                <button
                  key={feature.id}
                  type="button"
                  title={`Add ${feature.label} feature`}
                  aria-label={`Add ${feature.label} feature`}
                  onClick={() => handleFeatureToggle(feature.id)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    formData.features.includes(feature.id)
                      ? 'border-[#4ecdc4] bg-[#4ecdc4]/20'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  {feature.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Expected Timeline</label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none"
                aria-label="Select expected timeline"
                title="Select your expected project timeline"
              >
                <option value="">Select timeline</option>
                <option value="urgent">Urgent (1-2 weeks)</option>
                <option value="normal">Normal (1-2 months)</option>
                <option value="relaxed">Relaxed (2-3 months)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Budget Range (Optional)</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none"
                aria-label="Select budget range"
                title="Select your budget range"
              >
                <option value="">Select budget range</option>
                <option value="10k-25k">₹10,000 - ₹25,000</option>
                <option value="25k-50k">₹25,000 - ₹50,000</option>
                <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                <option value="1L-2L">₹1,00,000 - ₹2,00,000</option>
                <option value="2L+">₹2,00,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Project Description *</label>
            <textarea
              required
              rows={5}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none resize-none"
              placeholder="Describe your project requirements in detail..."
              aria-label="Project description"
              title="Describe your project requirements in detail"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            title="Submit quote request"
            aria-label="Submit your quote request"
            className="w-full py-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
          >
            {isLoading ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
            ) : (
              <><Send className="w-5 h-5" /> Submit Quote Request</>
            )}
          </button>

          <p className="text-center text-xs text-gray-500">
            We'll respond within 24 hours with a detailed quote
          </p>
        </form>
      </div>
    </div>
  )
}