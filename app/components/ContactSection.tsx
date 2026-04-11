'use client'

import { useState } from 'react'
import { Mail, Phone, MessageCircle, Send, CheckCircle, Loader2, MapPin } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'contact' })
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400">Have a project in mind? Let's discuss!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6 scroll-reveal">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div><p className="text-sm text-gray-400">Email</p><p className="font-semibold">contact@dprs.in</p></div>
              </div>
            </div>
            <div className="glass-card p-6 scroll-reveal">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div><p className="text-sm text-gray-400">Phone / WhatsApp</p><p className="font-semibold">+91 XXXXXXXXXX</p></div>
              </div>
            </div>
            <div className="glass-card p-6 scroll-reveal">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div><p className="text-sm text-gray-400">Live Chat</p><p className="font-semibold">Available 24/7</p></div>
              </div>
            </div>
            <div className="glass-card p-6 scroll-reveal">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div><p className="text-sm text-gray-400">Location</p><p className="font-semibold">India (Remote)</p></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card p-8 scroll-reveal">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none" placeholder="Your Name" aria-label="Your name" />
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none" placeholder="Email Address" aria-label="Email address" />
                </div>
                <input type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none" placeholder="Subject" aria-label="Subject" />
                <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-[#4ecdc4] focus:outline-none resize-none" placeholder="Tell us about your project..." aria-label="Message" />
                <button type="submit" disabled={isLoading} className="w-full py-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50">
                  {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : submitted ? <><CheckCircle className="w-5 h-5" /> Message Sent!</> : <><Send className="w-5 h-5" /> Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}